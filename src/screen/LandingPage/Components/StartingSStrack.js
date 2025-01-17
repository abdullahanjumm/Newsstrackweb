import React from "react";
import { Button } from "@mui/material";

function StartingSStrack() {
    return (
        <div style={{ paddingBottom: "9rem", paddingTop:'5rem', backgroundColor: "#FFFFFF", textAlign: "center" }}>

            <div
                style={{
                    padding: "8rem",
                    background: "linear-gradient(90deg, #0D4873, #0A304B, #071F2D, #0C364F, #0D4873)",
                    textAlign: "center",
                    borderRadius: "1rem",
                    color: "#FFFFFF",
                    maxWidth: "70%",
                    margin: "auto",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
                }}
            >
                <h4 style={{ fontSize: "2rem",fontWeight: "600",  marginBottom: "2rem" }}>
                    Starting with SS Track.io is easy, fast and free
                </h4>
                <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
                    It only takes a few clicks to get started
                </p>
                <button
                    style={{
                        padding: "0.8rem 1.5rem",
                        backgroundColor: "white",
                        color: "#7ACB59",
                        fontSize: "1rem",
                        fontWeight: "500",
                        border: "none",
                        borderRadius: "0.5rem",
                        cursor: "pointer",
                        marginBottom: "1rem",
                    }}
                >
                    Get started - it’s free
                </button>
                <p style={{ fontSize: "0.9rem" }}>Free for 14 days, no credit card required.</p>
            </div>
        </div>
    );
}

export default StartingSStrack;
