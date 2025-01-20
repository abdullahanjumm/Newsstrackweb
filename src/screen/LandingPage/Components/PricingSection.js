import React from "react";

function PricingSection({ onContactButtonClick }) {
    return (
        <div
            style={{
                width: "100%",
                padding: "4rem 2rem",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
            }}
        >
            {/* Title */}
            <h2
                style={{
                    fontSize: "44px",
                    fontWeight: "700",
                    color: "#3B3C4E",
                    marginBottom: "10px",
                }}
            >
                Pricing
            </h2>
            <p
                style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#555555",
                    marginBottom: "40px",
                }}
            >
                When you choose ssTrack.io, you’re not just buying software—you’re
                investing in precision, control, and growth.
            </p>

            {/* Pricing Card */}
            <div
                style={{
                    display: "flex",
                    width: "100%",

                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "1391px",
                        padding: "2rem",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "10px",
                        boxShadow: "0px 5px 24px -2px rgba(0, 0, 0, 0.1)", 
                    }}
                >
                    {/* Left Section */}
                    <div
                        style={{
                            flex: "1",
                            textAlign: "left",
                            paddingRight: "2rem",
                            display: 'flex',
                            flexDirection: 'column',
                            //   justifyContent:'space-between',
                            alignItems: 'flex-start',
                            // backgroundColor: 'red',
                            // height: '400px',
                            //   borderRight: "1px solid #E0E0E0",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "24px", // Updated size
                                fontWeight: "700", // Match the weight
                                fontFamily: "'Sinkin Sans', sans-serif", // Use the specified font family
                                color: "#3B3C4E",
                                marginBottom: "10px",
                                // backgroundColor:'orange',
                                width: '100%',
                                borderBottom: "2px solid #E0E0E0",
                                paddingBottom: '10px'

                            }}
                        >
                            Enterprise
                        </h3>
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "300",
                                color: "#555555",
                                marginBottom: "30px",
                                // marginTop: '20px'
                            }}
                        >
                            Management & Security
                        </p>
                        <p
                            style={{
                                fontSize: "28px",
                                fontWeight: "700",
                                color: "#7ACB59",
                                marginBottom: "10px",
                                marginTop: '10px',
                                alignItems: 'center',
                            }}
                        >
                            <span style={{
                                fontSize: "28px",
                                fontWeight: "700",
                                color: 'black'
                            }}>$ </span>Custom Pricing
                        </p>
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "300",
                                color: "#555555",
                                marginBottom: "30px",
                            }}
                        >
                            Custom Pricing
                        </p>
                        <p
                            style={{
                                fontSize: "15px",
                                fontWeight: "300",
                                color: "#555555",
                            }}
                        >
                            Built for enterprises with complex needs—let us customize a plan
                            for you.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div
                        style={{
                            flex: "2",
                            paddingLeft: "2rem",
                            textAlign: "left",
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2rem",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "400",
                                color: "#555555",
                                width: "100%",
                                // backgroundColor: 'yellow',
                                marginBottom: '-20px'
                            }}
                        >
                            Includes all Pro Plan features, plus:
                        </p>
                        <ul
                            style={{
                                listStyleType: "none",
                                padding: "0",
                                margin: "0",
                                flex: "1",
                                display: "flex",
                                flexDirection: 'column',
                                // backgroundColor: 'yellowgreen',
                                justifyContent: 'space-evenly'
                            }}
                        >
                            {[
                                "Unlimited users and team roles (Admin, Manager, Member)",
                                "Custom API integrations",
                                "Dedicated support team",
                                "Onboarding assistance for all team members",
                                "Priority access to new features",
                            ].map((feature, index) => (
                                <li
                                    key={index}
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        color: "#555555",
                                        marginBottom: "10px",
                                        display: "flex",
                                        alignItems: "center", // Vertically centers content                    
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#7ACB59",
                                            fontSize: "18px",
                                            marginRight: "10px",
                                            display: "flex", // Ensures the checkmark is centered
                                            alignItems: "center",
                                        }}
                                    >
                                        ✓
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <ul
                            style={{
                                listStyleType: "none",
                                padding: "0",
                                margin: "0",
                                flex: "1",
                                display: "flex",
                                flexDirection: 'column',
                                // alignItems: "center",
                                justifyContent: 'space-evenly'
                            }}
                        >
                            {[

                                "White-labeling options (custom branding)",
                                "Advanced security features (GDPR compliance, role-based permissions)",
                                "Tailored workflows and feature adjustments",
                            ].map((feature, index) => (
                                <li
                                    key={index}
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        color: "#555555",
                                        marginBottom: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            color: "#7ACB59",
                                            fontSize: "18px",
                                            marginRight: "10px",
                                            display: "flex", // Ensures the checkmark is centered
                                            alignItems: "center",
                                        }}
                                    >
                                        ✓
                                    </span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* CTA Button */}
                    <div
                        style={{
                            flex: "1",
                            textAlign: "center",
                        }}
                    >
                        <button
                            style={{
                                backgroundColor: "#7ACB59",
                                color: "#FFFFFF",
                                fontSize: "16px",
                                fontWeight: "600",
                                padding: "15px 50px",
                                borderRadius: "8px",
                                border: "none",
                                cursor: "pointer",
                                marginTop: "30px",
                            }}
                            onClick={onContactButtonClick}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingSection;
