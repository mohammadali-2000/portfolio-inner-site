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
                            <h4>www.accenture.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Part of the Healthcare and Life Sciences engineering
                    practice. Delivering mission-critical backend systems,
                    resilient microservices, and automated workflows using
                    Java, Spring Boot, and enterprise cloud tooling.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Architected and deployed production-grade Spring Boot
                            microservices and RESTful APIs handling high-throughput
                            healthcare data workflows with strict uptime requirements.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented scalable backend architectures with
                            PostgreSQL persistence, distributed caching with
                            Redis/Valkey, and containerized Docker environments.
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrated comprehensive automated testing suites and
                            CI/CD pipelines, accelerating release velocity and
                            preventing production regressions.
                        </p>
                    </li>
                    <li>
                        <p>
                            Pioneered internal AI agent workflows and Model
                            Context Protocol (MCP) integrations to streamline
                            developer operations and reduce repetitive manual tasks.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>MPSeDC</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://mpsedc.mp.gov.in/'}
                        >
                            <h4>mpsedc.mp.gov.in</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>2022 - 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Madhya Pradesh State Electronics Development Corporation
                    (MPSeDC) is the nodal agency driving digital governance and
                    state IT infrastructure for the Government of Madhya Pradesh.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Engineered citizen-facing web applications and public
                            portal services accessed by millions of state residents.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built secure authenticated API endpoints and database
                            schemas adhering to state compliance and data
                            protection standards.
                        </p>
                    </li>
                    <li>
                        <p>
                            Refactored legacy application modules into streamlined
                            services, cutting query latency and enhancing system
                            stability during high-concurrency public drives.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with cross-functional technical teams and
                            government officials to convert regulatory policies
                            into reliable software deliverables.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>AI & Cryptography Research</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://github.com/mohammadali-2000'}
                        >
                            <h4>github.com/mohammadali-2000</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Independent Engineer & Researcher</h3>
                        <b>
                            <p>2024 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Building at the frontier of autonomous AI agents, hardware
                    enclave security, and privacy-preserving cryptographic machine
                    learning.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            <b>Aegis MCP Registry:</b> Architected a dynamic
                            smart contract tool gateway and TEE hardware enclave
                            key vault for autonomous AI agents across 100+ chains.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>ZeroTrust-Health:</b> Engineered an end-to-end
                            medical ML pipeline running inference on encrypted
                            patient data using CKKS Fully Homomorphic Encryption
                            (TenSEAL).
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>31 Professional Certifications:</b> Verified
                            credentials including Anthropic Claude Certified
                            Architect, Google Cloud, Oracle Java, Microsoft
                            Azure, and GitHub Copilot.
                        </p>
                    </li>
                </ul>
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
