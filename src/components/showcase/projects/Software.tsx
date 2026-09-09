import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my featured software engineering and research
                projects across AI Agents, Cryptography, and Enterprise Backend
                Systems.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>🛡️ Aegis MCP Registry</h2>
                <br />
                <p>
                    <b>AI Agent Infrastructure & Hardware Enclave Signing:</b>{' '}
                    AegisMCP is a dynamic Model Context Protocol (MCP) Smart
                    Contract Tool Registry and TEE Hardware Enclave Key Gateway
                    built for autonomous AI agents. It automatically generates
                    strongly typed MCP tools for Sourcify-verified smart
                    contracts across 100+ EVM networks while ensuring private
                    signing keys never leave the hardware enclave.
                </p>
                <br />
                <p>
                    Built with <b>Rust</b>, <b>Next.js</b>, <b>TypeScript</b>,{' '}
                    <b>PostgreSQL</b>, and <b>Docker</b>.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://aegis-mcp-registry.vercel.app"
                        >
                            <p>
                                <b>[Live Demo]</b> - aegis-mcp-registry.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mohammadali-2000/aegis-mcp-registry"
                        >
                            <p>
                                <b>[GitHub]</b> - Aegis MCP Registry Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>🔬 ZeroTrust-Health</h2>
                <br />
                <p>
                    <b>Privacy-Preserving Medical AI with Fully Homomorphic Encryption:</b>{' '}
                    ZeroTrust-Health enables machine learning inference directly
                    on encrypted patient diagnostic records without ever
                    decrypting them. Utilizing the CKKS homomorphic encryption
                    scheme via TenSEAL, hospitals and clinics can send encrypted
                    biomarkers to cloud AI models and receive encrypted
                    predictions, ensuring complete HIPAA/GDPR cryptographic
                    confidentiality.
                </p>
                <br />
                <p>
                    Built with <b>Python</b>, <b>TenSEAL (CKKS FHE)</b>,{' '}
                    <b>Scikit-Learn</b>, and <b>Streamlit</b>.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mohammadali-2000/ZeroTrust-Health"
                        >
                            <p>
                                <b>[GitHub]</b> - ZeroTrust-Health Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>⚡ Enterprise AI Knowledge Hub</h2>
                <br />
                <p>
                    <b>Enterprise Knowledge Management with Java & Spring Boot:</b>{' '}
                    A production-grade enterprise AI document intelligence and
                    semantic search hub designed for high-concurrency enterprise
                    environments. Features asynchronous pipeline processing,
                    vector index integration, and automated document lifecycle
                    management.
                </p>
                <br />
                <p>
                    Built with <b>Java</b>, <b>Spring Boot 3</b>,{' '}
                    <b>Microservices</b>, <b>Docker</b>, and <b>PostgreSQL</b>.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mohammadali-2000/Enterprise-AI-Knowledge-Hub"
                        >
                            <p>
                                <b>[GitHub]</b> - Enterprise AI Knowledge Hub
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>🤖 Multi-Agent Medical Assistant</h2>
                <br />
                <p>
                    <b>Collaborative Clinical AI on the Masumi Network:</b> A
                    distributed multi-agent system where autonomous clinical
                    agents collaborate to analyze patient symptom streams,
                    cross-reference clinical literature, and generate structured
                    differential diagnostic reports for medical professionals.
                </p>
                <br />
                <p>
                    Built with <b>Python</b>, <b>AI Agent Networks</b>, and{' '}
                    <b>Healthcare IT Protocols</b>.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mohammadali-2000/multi-agent-medical-assistant-masumi"
                        >
                            <p>
                                <b>[GitHub]</b> - Multi-Agent Medical Assistant
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>🔄 sql2valkey</h2>
                <br />
                <p>
                    <b>Interactive Relational-to-Key/Value Query Translator:</b>{' '}
                    An interactive developer tooling platform created for Build
                    Beyond Limits 2.0 (hosted by React Hyderabad). It parses
                    standard PostgreSQL queries and translates them into optimal
                    Valkey / Redis in-memory data structures (Hashes, Sorted Sets,
                    Bitmaps) with real-time complexity analysis.
                </p>
                <br />
                <p>
                    Built with <b>React</b>, <b>TypeScript</b>, <b>Valkey</b>,
                    and <b>Tailwind CSS</b>.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mohammadali-2000/sql2valkey"
                        >
                            <p>
                                <b>[GitHub]</b> - sql2valkey Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>🗺️ PathFHE</h2>
                <br />
                <p>
                    <b>Next-Gen Encrypted Routing with Homomorphic Encryption:</b>{' '}
                    Privacy-preserving spatial routing computation using Fully
                    Homomorphic Encryption, demonstrating how graph traversal and
                    distance computations can occur over ciphertext without
                    revealing traveler origins or destinations.
                </p>
                <br />
                <p>
                    Built with <b>TypeScript</b>, <b>Cryptographic Algorithms</b>,
                    and <b>Node.js</b>.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/mohammadali-2000/pathfhe"
                        >
                            <p>
                                <b>[GitHub]</b> - PathFHE Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
