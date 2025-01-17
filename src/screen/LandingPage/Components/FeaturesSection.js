import React from "react";
import tabletMockup from "../../../images/tablet.png"; // Replace with your image path

function FeaturesSection() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: '90vh',
                backgroundColor: "#FFFFFF",
                width: '100%'
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "3rem",
                }}

            >

                {/* Left Column */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        flex: "1",
                        position: "relative",
                    }}
                >
                    {/* Vertical Line */}
                    <div
                        style={{
                            position: "absolute",
                            left: "91px", // Align with the center of the circles
                            top: "40px", // Start below the first circle
                            height: "calc(100% - 80px)", // Adjust based on the container height
                            width: "2px",
                            backgroundColor: "#E4E4E4",
                            zIndex: "0", // Ensure it appears behind the content
                        }}
                    ></div>
                    {/* Feature 1 */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "1rem",
                            justifyContent: "center",

                        }}
                    >
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#7ACB59",
                                color: "#FFFFFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                fontSize: "18px",
                                fontWeight: "700",
                                marginRight: "1rem",
                                zIndex: "1",
                            }}
                        >
                            1
                        </div>
                        <div style={{ width: '70%' }}>
                            <h3
                                style={{
                                    fontSize: "30px",
                                    fontWeight: "700",
                                    color: "#3B3C4E",
                                    marginBottom: "5px",
                                }}
                            >
                                Simple, Secure & Intuitive
                            </h3>
                            <p
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    padding: '10px',
                                    color: "#3B3C4E",
                                    lineHeight: "1.5",
                                }}
                            >
                                Ligula risus auctor tempus feugiat dolor lacinia nemo pur ipsum
                                purus sapien quaerat a primis viverra tellus vitae.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div
                        style={{
                            // backgroundColor: 'yellow',
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "1rem",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#7ACB59",
                                color: "#FFFFFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                fontSize: "18px",
                                fontWeight: "700",
                                marginRight: "1rem",
                                zIndex: "1",
                            }}
                        >
                            2
                        </div>
                        <div style={{ width: '70%' }}>
                            <h3
                                style={{
                                    fontSize: "30px",
                                    fontWeight: "700",
                                    color: "#3B3C4E",
                                    marginBottom: "5px",
                                }}
                            >
                                Web & App Tracking
                            </h3>
                            <p
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    padding: '10px',
                                    color: "#3B3C4E",
                                    lineHeight: "1.5",
                                }}
                            >
                                Ligula risus auctor tempus feugiat dolor lacinia nemo pur ipsum
                                purus sapien quaerat a primis viverra tellus vitae.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div
                        style={{
                            // backgroundColor: 'yellow',
                            display: "flex",
                            alignItems: "flex-start",
                            marginBottom: "1rem",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "#7ACB59",
                                color: "#FFFFFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "50%",
                                fontSize: "18px",
                                fontWeight: "700",
                                marginRight: "1rem",
                                zIndex: "1",
                            }}
                        >
                            3
                        </div>
                        <div style={{ width: '70%' }}>
                            <h3
                                style={{
                                    fontSize: "30px",
                                    fontWeight: "700",
                                    color: "#3B3C4E",
                                    marginBottom: "5px",
                                }}
                            >
                                Work Reports
                            </h3>
                            <p
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "400",
                                    padding: '10px',
                                    color: "#3B3C4E",
                                    lineHeight: "1.5",
                                }}
                            >
                                Ligula risus auctor tempus feugiat dolor lacinia nemo pur ipsum
                                purus sapien quaerat a primis viverra tellus vitae.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div style={{ flex: "1", display: 'flex', }}>
                    <img
                        src={tabletMockup}
                        alt="Tablet Mockup"
                        style={{ width: "100%", borderRadius: "10px", marginLeft: '-10%' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;
