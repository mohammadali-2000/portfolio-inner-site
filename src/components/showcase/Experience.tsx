import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Accenture</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://www.accenture.com/'}
                        >
                            <h4>Hyderabad, India</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineering Associate</h3>
                        <b>
                            <p>Nov 2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Enterprise Healthcare & Life Sciences Digital Transformation.
                    Modernizing enterprise core systems in Healthcare & Life Sciences
                    using Spring Boot, Java 21, and RESTful APIs.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designing & implementing modular backend services with emphasis
                            on maintainability, unit testing, and microservice architecture.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrating AI toolchains (Anthropic Claude, GitHub Copilot)
                            into daily developer workflows to accelerate feature delivery
                            and automated testing.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborating across cross-functional engineering teams in an
                            Agile/Scrum environment to deliver production-grade features.
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>MPSeDC - State IT Center</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://mpsedc.mp.gov.in/'}
                        >
                            <h4>Bhopal, India</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>Apr 2024 - Oct 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Java Development and Event Planning for citizen-facing web applications
                    and digital public infrastructure.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>A2Infotech Pvt. Ltd.</h1>
                        <span>
                            <h4>Bhopal, India</h4>
                        </span>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Social Media Content Creator (Internship)</h3>
                        <b>
                            <p>Jun 2021 - Jun 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Focused on Search Engine Optimization (SEO) and YouTube Video Creation.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>mini metro e rickshaw</h1>
                        <span>
                            <h4>Bhopal, India</h4>
                        </span>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Sales Manager (Part-time)</h3>
                        <b>
                            <p>Jan 2023 - Oct 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Managed Marketing Strategy and Sales operations.
                </p>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Drmz System Innovations Pvt Ltd</h1>
                        <span>
                            <h4>Bhopal, India</h4>
                        </span>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>IoT Intern</h3>
                        <b>
                            <p>Aug 2021 - Dec 2021</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Gained hands-on experience with Embedded Devices and Internet of Things (IoT) technologies.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
