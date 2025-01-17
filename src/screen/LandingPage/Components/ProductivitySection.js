import React from "react";
import productivityImage from "../../../images/break.svg"; // Replace with your image path

function ProductivitySection() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "3rem",
                backgroundColor: "#F9FAFB",
            }}
        >
            {/* Left Column */}
            <div style={{ flex: "1", paddingRight: "2rem" }}>
                {/* Subtitle */}
                <p
                    style={{
                        fontSize: "13.9px",
                        fontWeight: "400",
                        color: "#3B3C4E",
                        marginBottom: "10px",
                    }}
                >
                    Productivity Focused
                </p>

                {/* Title */}
                <h1
                    style={{
                        fontSize: "42.19px",
                        fontWeight: "700",
                        color: "#3B3C4E",
                        lineHeight: "1.2",
                        marginBottom: "20px",
                    }}
                >
                    Achieve more Productivity <br /> with{" "}
                    <span
                        style={{
                            color: "#7ACB59",
                            fontSize: "44px",
                            fontWeight: "700",
                        }}
                    >
                        SS Track.io
                    </span>
                </h1>

                {/* Description */}
                <p
                    style={{
                        fontSize: "12.9px",
                        fontWeight: "400",
                        color: "#555555",
                        marginBottom: "30px",
                    }}
                >
                    sapien quaerat ipsum undo congue laoreet auctor turpis vitae.
                </p>

                {/* Features List */}
                <ul
                    style={{
                        listStyleType: "disc",
                        paddingLeft: "20px",
                        marginBottom: "30px",
                        width:'80%',
                        color: "#555555",
                    }}
                >
                    <li
                        style={{
                            marginBottom: "25px",
                            fontSize: "16px",
                            fontWeight: "400",
                            
                        }}
                    >
                        <strong style={{ fontSize: '16px', fontWeight: '700', color: 'black' }}>Timesheet Reports:</strong> quaerat an ipsum laoreet purus
                        and sapien ultrices ipsum aliquam undo.
                    </li>
                    <li
                        style={{
                            marginBottom: "25px",
                            fontSize: "16px",
                            fontWeight: "400",
                        }}
                    >
                        <strong style={{ fontSize: '16px', fontWeight: '700', color: 'black' }}>Real-Time Reports:</strong> vitae cubilia magnis volute
                        egestas turpis ultrices auctor congue.
                    </li>
                    <li
                        style={{
                            fontSize: "16px",
                            fontWeight: "400",
                        }}
                    >
                        <strong style={{ fontSize: '16px', fontWeight: '700', color: 'black' }}>Productivity Reports:</strong> vitae cubilia magnis volute
                        egestas turpis ultrices auctor congue placerat placerat.
                    </li>
                </ul>

                {/* CTA Button */}
                <button
                    style={{
                        backgroundColor: "#7ACB59",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: "600",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Get Started →
                </button>
            </div>

            {/* Right Column */}
            <div style={{ flex: "1", textAlign: "center" }}>
                <img
                    src={productivityImage}
                    alt="Productivity Illustration"
                    style={{
                        width: "100%",
                        marginLeft:'-20%',
                        borderRadius: "10px",
                    }}
                />
            </div>
        </div>
    );
}

export default ProductivitySection;
