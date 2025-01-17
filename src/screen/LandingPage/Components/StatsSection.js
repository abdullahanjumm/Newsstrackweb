import React from 'react';

const StatsSection = () => {
    return (
        <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '4rem' }}>
            <p
                style={{
                    fontFamily: "'Sinkin Sans', sans-serif",
                    fontSize: '15px',
                    fontWeight: '400',
                    color: '#253053',
                    //   textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '10px',
                }}
            >
                Each month
            </p>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // gap: '30px',
                }}
            >
                {[
                    { value: '5K+', label: 'Active users' },
                    { value: '1M+', label: 'Total hours tracked' },
                    { value: '4M+', label: 'Tasks completed' },
                    { value: '300K+', label: 'Payments' },
                ].map((stat, index) => (
                    <div
                        key={index}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            justifyContent: 'center',
                            paddingLeft: '50px',
                            paddingRight: '50px',
                            borderRight: index < 3 ? '1px solid #E0E0E0' : 'none',
                            // borderLeft: index < 3 ? '1px solid #E0E0E0' : 'none',
                        }}
                    >
                        <p
                            style={{
                                fontSize: '2rem',
                                fontWeight: '500',
                                marginBottom: '5px',
                                color: '#7ACB59'
                            }}
                        >
                            {stat.value}
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                fontWeight: '400',
                                color: '#707070',
                            }}
                        >
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsSection;
