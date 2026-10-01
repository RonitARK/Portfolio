import Image from "next/image";
import InteractiveAvatar from "../../components/ui/InteractiveAvatar";
import { BlurredStagger } from "../../components/ui/blurred-stagger-text";
import { client } from "../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).width(800).fit('max').auto('format').url()}
                    style={{ width: '100%', borderRadius: '12px', marginTop: '16px', marginBottom: '16px' }}
                />
            );
        },
    },
};

export const dynamic = 'force-dynamic';

export default async function About() {
    const data = await client.fetch(`*[_type == "aboutPage"][0]{
        aboutDescription
    }`);
    return (
        <div className="about-page">
            <div className="hero-section">
                <div className="hero-name-curve who-am-i-curve">
                    <svg width="280" height="150" viewBox="0 0 280 150" className="curve-svg">
                        <path id="curve-about" d="M 60,140 A 80,80 0 0,1 220,140" fill="transparent" />
                        <text fill="var(--text-primary)" className="instrument-serif" fontSize="46" textAnchor="middle" letterSpacing="-0.07em">
                            <textPath href="#curve-about" startOffset="50%">
                                Who am i?
                            </textPath>
                        </text>
                    </svg>
                </div>

                <div className="hero-avatar about-avatar">
                    <InteractiveAvatar priority={true} />
                </div>

                <h1 className="about-title"><BlurredStagger text="about me" /></h1>

                <div className="about-content" style={{ width: "100%", maxWidth: "600px", marginInline: "auto", textAlign: "left" }}>
                    {data?.aboutDescription ? (
                        <PortableText value={data.aboutDescription} components={ptComponents} />
                    ) : (
                        <>
                            <p style={{ fontStyle: "italic" , fontWeight: 'bold' }}>
                                Who am I, if you take away my name, background & every label I've been given?
                            </p>
                            <p>
                               I'm a curious human being who's never quite fit in a single box.
                            </p>
                            <p>
                                I love creating things, breaking them, discovering their inner workings, and finding myself miles deep in rabbit holes that, in retrospect, were maybe not worth the time. I crave technology, science, design, poetry, philosophy, mythology, and all the things that make me question the limits of my own understanding.
                            </p>
                            <p>
                                It's all about learning by doing. Building. Breaking. Discovering. And rebuildinging. 
                            </p>
                            <p>
                                I'm fascinated by the space between a well-considered system and a messy, intuitive process. It's easy for me to spend hours staring at something as simple as a paragraph of text or a user interface, trying to understand its fundamental flaws.
                            </p>
                            <p>
                                I want to be more than my degrees, my job, the skills I thought I needed to learn. I want to be capable. I want to be able to see something I've never seen before and realize: 
                            </p>
                            <p style={{ fontStyle: "italic", fontWeight: 'bold' }}>
                               "I don't necessarily know how to do this yet. But I'm going to learn how to do it."
                            </p>
                            <p>
                                That's what I want to be.
                            </p>
                            <p>
                                That's what I intend to do.
                            </p>
                            <p>
                                Learning. Building. Writing. Training. Experimenting.
                            </p>
                            <p>
                                I'm occasionally failure. Starting over. Becoming capable of new things. And discovering, time and time again, how very far I can get.
                            </p>
        
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
