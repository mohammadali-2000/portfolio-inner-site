import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import me from '../../assets/pictures/workingAtComputer.jpg';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Syed Mohammad Ali</h3>
            <br />
            <div className="text-block">
                <p>
                    I build software that works. I spent years figuring out why
                    most of it doesn't. Right now, I am a Software Engineer at{' '}
                    <b>Accenture</b> in the Healthcare and Life Sciences team,
                    building robust backend architectures with Java, Spring
                    Boot, and scalable microservices.
                </p>
                <br />
                <p>
                    Thank you for taking the time to explore my interactive 3D
                    portfolio. If you have any questions or are building at the
                    intersection of AI, Spring Boot, or Healthcare IT, feel free
                    to reach out via <Link to="/contact">this contact form</Link>{' '}
                    or email me directly at{' '}
                    <a href="mailto:sm9009995710@gmail.com">
                        sm9009995710@gmail.com
                    </a>
                    .
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My journey in technology is non-traditional and hands-on.
                    I started out tinkering with IoT hardware and embedded
                    devices, understanding computers from the silicon level up.
                    I then spent three years immersed in technical content
                    creation and search engine optimization, learning how users
                    actually navigate information on the internet.
                </p>
                <br />
                <p>
                    From there, I transitioned into government software
                    engineering at <b>MPSeDC</b> (Madhya Pradesh State
                    Electronics Development Corporation), building secure,
                    high-volume public portals and digital governance
                    infrastructure serving millions of citizens. Today at
                    Accenture, I bring that end-to-end discipline to enterprise
                    healthcare systems.
                </p>
                <br />
                <p>
                    Outside my day-to-day engineering work, I actively build
                    autonomous AI agents and applied cryptographic systems. I
                    hold <b>31 industry certifications</b>, highlighted by the{' '}
                    <b>Claude Certified Architect</b> from Anthropic, Google
                    Cloud Professional credentials, Oracle Java, Microsoft
                    Azure, and GitHub Copilot. I believe in learning by shipping
                    real, open-source code every single day.
                </p>
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>Current Focus & Passion Projects</h3>
                        <br />
                        <p>
                            Right now, my research and development efforts are
                            dedicated to:
                        </p>
                        <br />
                        <ul>
                            <li>
                                <b>Autonomous AI Agents & MCP:</b> Architecting
                                Model Context Protocol tools and secure TEE
                                hardware enclaves (Aegis MCP Registry).
                            </li>
                            <li>
                                <b>Privacy-Preserving AI:</b> Running ML inference
                                over encrypted medical records using Fully
                                Homomorphic Encryption (FHE CKKS) via TenSEAL
                                (ZeroTrust-Health).
                            </li>
                            <li>
                                <b>Enterprise Microservices:</b> High-resilience,
                                reactive Spring Boot systems in regulated
                                healthcare domains.
                            </li>
                            <li>
                                <b>Predictive Healthcare:</b> Personal research
                                into early cardiac event detection algorithms.
                            </li>
                        </ul>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for stopping by! Connect with me on Twitter / X{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://x.com/mohammadali0820"
                    >
                        @mohammadali0820
                    </a>
                    , on{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/mohammadali0820/"
                    >
                        LinkedIn
                    </a>
                    , or on{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/mohammadali0820/"
                    >
                        Instagram
                    </a>
                    .
                </p>
                <br />
                <p>
                    Have an idea or want to collaborate? Shoot me a message
                    through the <Link to="/contact">contact page</Link> or drop a
                    line at{' '}
                    <a href="mailto:sm9009995710@gmail.com">
                        sm9009995710@gmail.com
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
