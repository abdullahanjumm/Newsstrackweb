import React from 'react';
import projectManagment from '../../../images/Pm.png'
import monitoring from '../../../images/Monitoring.png'
import TrainingAndAssesment from '../../../images/TandA.png'

function ETIOP() {
    return (
        <div
            style={{
                width: '100%',
                padding: '4rem 0',
                backgroundColor: '#FFFFFF',
                textAlign: 'center',
            }}
        >
            {/* Heading */}
            <h2
                style={{
                    fontFamily: "'Sinkin Sans', sans-serif",
                    fontSize: '44px',
                    fontWeight: '700',
                    color: '#3B3C4E',
                    marginBottom: '10px',
                }}
            >
                Everything in{' '}
                <span
                    style={{
                        fontFamily: "'Sinkin Sans', sans-serif",
                        color: '#7ACB59',
                        fontSize: '44px',
                        fontWeight: '700',
                    }}
                >
                    One Place
                </span>
            </h2>
            <p
                style={{
                    fontFamily: "'Sinkin Sans', sans-serif",
                    fontSize: '16px',
                    fontWeight: '400',
                    color: '#212529',
                    marginBottom: '20px',
                }}
            >
                Experience the power of all-in-one management and monitoring with a free trial. Get started today and transform the way you work.
            </p>

            {/* Cards Section */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    padding: '1rem',
                }}
            >
                {/* Card 1 */}
                <div
                    style={{
                        width: '30%',
                        textAlign: 'center',
                        borderRadius: '10px',
                        padding: '2rem',

                    }}
                >
                    {/* Image Container */}
                    <div
                        style={{
                            marginBottom: '15%',
                            height: '55%'
                        }}
                    >
                        <img
                            src={projectManagment}
                            alt="Project Management"
                            style={{
                                width: '90%',
                                borderRadius: '10px',
                                // marginBottom: '55px',
                            }}
                        />
                    </div>

                    {/* Text Container */}
                    <div>
                        <h3
                            style={{
                                fontFamily: "'Sinkin Sans', sans-serif",
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                color: '#3B3C4E',
                                marginBottom: '10px',
                            }}
                        >
                            Project Management
                        </h3>
                        <p
                            style={{
                                fontFamily: "'Sinkin Sans', sans-serif",
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#555555',
                            }}
                        >
                            Streamline your workflow with cutting-edge tools that bring teams, tasks, and deadlines together seamlessly. Collaborate effortlessly and achieve your project goals efficiently.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    style={{
                        width: '30%',
                        textAlign: 'center',
                        borderRadius: '10px',
                        padding: '2rem',
                    }}
                >
                    {/* Image Container */}
                    <div
                        style={{
                            marginBottom: '15%',
                            height: '55%'
                        }}
                    >
                        <img
                            src={monitoring}
                            alt="Monitoring"
                            style={{
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        />
                    </div>

                    {/* Text Container */}
                    <div>
                        <h3
                            style={{
                                fontFamily: "'Sinkin Sans', sans-serif",
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                color: '#3B3C4E',
                                marginBottom: '10px',
                            }}
                        >
                            Monitoring
                        </h3>
                        <p
                            style={{
                                fontFamily: "'Sinkin Sans', sans-serif",
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#555555',
                            }}
                        >
                            Stay on top of your team's productivity and progress with real-time insights. From activity tracking to performance metrics, we provide the data you need to make informed decisions.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    style={{
                        width: '30%',
                        textAlign: 'center',
                        borderRadius: '10px',
                        padding: '2rem',
                    }}
                >
                    {/* Image Container */}
                    <div
                        style={{
                            marginBottom: '15%',
                            height: '55%'
                        }}
                    >
                        <img
                            src={TrainingAndAssesment}
                            alt="Training and Assessment"
                            style={{
                                width: '100%',
                                borderRadius: '10px',
                            }}
                        />
                    </div>

                    {/* Text Container */}
                    <div>
                        <h3
                            style={{
                                fontFamily: "'Sinkin Sans', sans-serif",
                                fontSize: '1.4rem',
                                fontWeight: '700',
                                color: '#3B3C4E',
                                marginBottom: '10px',
                            }}
                        >
                            Training and Assessment
                        </h3>
                        <p
                            style={{
                                fontFamily: "'Sinkin Sans', sans-serif",
                                fontSize: '12px',
                                fontWeight: '400',
                                color: '#555555',
                            }}
                        >
                            Empower your team with tailored training solutions and detailed performance assessments. Drive growth and innovation by identifying and addressing skill gaps effectively.
                        </p>
                    </div>
                </div>

            </div>

            {/* Call-to-Action Button */}
            <div style={{ marginTop: '0px' }}>
                <button
                    style={{
                        padding: '0.75rem 1.5rem',
                        fontSize: '16px',
                        fontWeight: '400',
                        color: '#FFFFFF',
                        backgroundColor: '#7ACB59',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Start Free Trial →
                </button>
            </div>
        </div>
    );
}

export default ETIOP;
