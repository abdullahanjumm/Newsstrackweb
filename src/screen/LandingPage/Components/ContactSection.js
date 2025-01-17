import React from "react";
import picture from '../../../images/contactImage-cropped.svg'

function ContactSection() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh",
                backgroundColor: "#ffffff", // Background of the entire section
                padding: "2rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "1200px",
                    //   padding: "2rem",
                    backgroundColor: "#FFFFFF", // White background for the container
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Left Section - Contact Info */}
                <div
                    style={{
                        flex: 1,

                    }}
                >
                    {/* Picture */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            //   marginBottom: "2rem", // Adds space between the picture and text
                        }}
                    >
                        <img
                            src={picture} // Replace with your image URL
                            alt="Contact"
                            style={{
                                width: "450px",
                                // height: "100%",
                                // borderRadius: "50%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div
                    style={{
                        flex: 1.5,
                        paddingLeft: "2rem",
                        display: "flex",
                        padding: "2rem",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <label
                                style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 'normal',
                                    color: "#333",
                                    transition: "0.2s ease all",
                                    pointerEvents: "none",
                                }}
                            >
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Full Name"
                                style={{
                                    flex: 1,
                                    fontSize: "0.875rem",
                                    padding: "1rem",
                                    border: "0px  solid #E0E0E0",
                                    borderRadius: "5px",
                                    boxShadow: "0px 4px 4px rgba(171, 171, 171, 0.2)", // Shadow based on your screenshot
                                    borderLeft: "1px solid #4CAF50", // Green border on the right
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <label
                                style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 'normal',
                                    color: "#333",
                                    transition: "0.2s ease all",
                                    pointerEvents: "none",
                                }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                style={{
                                    flex: 1,
                                    padding: "1rem",
                                    fontSize: "0.875rem",
                                    border: "0px  solid #E0E0E0",
                                    borderRadius: "5px",
                                    boxShadow: "0px 4px 4px rgba(171, 171, 171, 0.2)", // Shadow based on your screenshot
                                    borderLeft: "1px solid #4CAF50", // Green border on the right
                                }}
                            />
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <label
                                style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 'normal',
                                    color: "#333",
                                    transition: "0.2s ease all",
                                    pointerEvents: "none",
                                }}
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                style={{
                                    flex: 1,
                                    padding: "1rem",
                                    fontSize: "0.875rem",
                                    border: "0px  solid #E0E0E0",
                                    borderRadius: "5px",
                                    boxShadow: "0px 4px 4px rgba(171, 171, 171, 0.2)", // Shadow based on your screenshot
                                    borderLeft: "1px solid #4CAF50", // Green border on the right
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <label
                                style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 'normal',
                                    color: "#333",
                                    transition: "0.2s ease all",
                                    pointerEvents: "none",
                                }}
                            >
                                Company name
                            </label>
                            <input
                                type="text"
                                placeholder="Company Name"
                                style={{
                                    flex: 1,
                                    padding: "1rem",
                                    fontSize: "0.875rem",
                                    border: "0px  solid #E0E0E0",
                                    borderRadius: "5px",
                                    boxShadow: "0px 4px 4px rgba(171, 171, 171, 0.2)", // Shadow based on your screenshot
                                    borderLeft: "1px solid #4CAF50", // Green border on the right
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <label
                            style={{
                                fontSize: "0.875rem",
                                fontWeight: 'normal',
                                color: "#333",
                                transition: "0.2s ease all",
                                pointerEvents: "none",
                            }}
                        >
                            Message
                        </label>
                        <textarea
                            placeholder="Message"
                            style={{
                                flex: 1,
                                padding: "1rem",
                                fontSize: "0.875rem",
                                border: "0px  solid #E0E0E0",
                                borderRadius: "5px",
                                boxShadow: "0px 4px 4px rgba(171, 171, 171, 0.2)", // Shadow based on your screenshot
                                borderBottom: "1px solid #4CAF50", 
                                minHeight:'200px'
                            }}
                        />
                    </div>
                    <button
                        style={{
                            alignSelf: "flex-start",
                            padding: "0.5rem 2rem",
                            backgroundColor: "#7ACB59",
                            color: "#FFFFFF",
                            border: "none",
                            width: '100%',
                            borderRadius: "5px",
                            cursor: "pointer",
                            fontSize: '13px'
                        }}
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
