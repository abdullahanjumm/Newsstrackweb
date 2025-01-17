import React from 'react'
import step1 from '../../../images/step1.png'
import step2 from '../../../images/step2.png'
import step3 from '../../../images/step3.png'
import step4 from '../../../images/step4.png'

function NewHIW() {
    return (
        <div style={{
            width: '100%',
            // marginTop: '50px',
            padding: '2rem 0',
            backgroundColor: '#F9F9F9',
            textAlign: 'center'
        }}>
            {/* Heading */}
            <h2 style={{
                fontFamily: "'Sinkin Sans', sans-serif",
                fontSize: '44px',
                fontWeight: '700',
                color: '#3B3C4E',
                marginBottom: '10px'
            }}>
                How It <span style={{
                    fontFamily: "'Sinkin Sans', sans-serif",
                    color: '#7ACB59',
                    fontSize: '44px',
                    fontWeight: '700',
                }}>Works</span>
            </h2>
            <p style={{
                fontFamily: "'Sinkin Sans', sans-serif",
                fontSize: '16px',
                fontWeight: '400',
                color: '#212529',
                marginBottom: '30px'
            }}>
                A Smarter Way to Track and Manage.
            </p>

            {/* Steps */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '30px',
                width: '70%', // Adjust width as needed
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
                {/* Column 1 */}
                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    marginTop: '20%',
                    // backgroundColor: 'red',
                    display: 'flex',
                    flexDirection: 'column',

                    alignItems: 'flex-end',
                }}>
                    {/* Step 1 */}
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        boxShadow: `
                        0px 30px 45px -30px rgba(50, 50, 93, 0.2), /* First shadow */
                        0px 18px 36px -18px rgba(0, 0, 0, 0.1) /* Second shadow */
                      `,
                        width: '500px',
                        textAlign: 'left',
                        marginBottom: '50px',
                    }}>
                        {/* Image Container */}
                        <div style={{
                            paddingLeft: '6px', // Padding specifically for the image
                            paddingRight: '6px',
                            paddingTop: '6px' // Padding specifically for the image
                        }}>
                            <img
                                src={step1}
                                alt="Step 3"
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                }}
                            />
                        </div>

                        {/* Text Content Container */}
                        <div style={{
                            padding: '20px',
                            paddingLeft: '30px', // Padding specifically for the image
                            paddingRight: '30px',// Padding specifically for the image

                        }}>
                            <p style={{
                                fontSize: '44px',
                                fontWeight: '700',
                                color: '#7ACB59',

                            }}>
                                01
                            </p>
                            <p style={{
                                fontSize: '23px',
                                fontWeight: '600',
                                color: '#0D4873',

                            }}>
                                Sign Up
                            </p>
                            <p style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                color: '#555555',
                            }}>
                                Get started in minutes—email verification is all it takes.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        boxShadow: `
                        0px 30px 45px -30px rgba(50, 50, 93, 0.2), /* First shadow */
                        0px 18px 36px -18px rgba(0, 0, 0, 0.1) /* Second shadow */
                      `,
                        width: '500px',
                        textAlign: 'left',
                        marginBottom: '50px',
                    }}>
                        {/* Image Container */}
                        <div style={{
                            paddingLeft: '6px', // Padding specifically for the image
                            paddingRight: '6px',
                            paddingTop: '6px' // Padding specifically for the image
                        }}>
                            <img
                                src={step3}
                                alt="Step 3"
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                }}
                            />
                        </div>

                        {/* Text Content Container */}
                        <div style={{
                            padding: '20px',
                            paddingLeft: '30px', // Padding specifically for the image
                            paddingRight: '30px',// Padding specifically for the image

                        }}>
                            <p style={{
                                fontSize: '44px',
                                fontWeight: '700',
                                color: '#7ACB59',

                            }}>
                                03
                            </p>
                            <p style={{
                                fontSize: '23px',
                                fontWeight: '600',
                                color: '#0D4873',

                            }}>
                                Analyze & Optimize
                            </p>
                            <p style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                color: '#555555',
                            }}>
                                Use advanced analytics and insights to improve productivity across remote, in-office, and on-site teams.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div style={{ flex: '1', minWidth: '300px', }}>
                    {/* Step 2 */}
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        boxShadow: `
                        0px 30px 45px -30px rgba(50, 50, 93, 0.2), /* First shadow */
                        0px 18px 36px -18px rgba(0, 0, 0, 0.1) /* Second shadow */
                      `,
                        width: '500px',
                        textAlign: 'left',
                        marginBottom: '50px',
                    }}>
                        {/* Image Container */}
                        <div style={{
                            paddingLeft: '6px', // Padding specifically for the image
                            paddingRight: '6px',
                            paddingTop: '6px' // Padding specifically for the image
                        }}>
                            <img
                                src={step2}
                                alt="Step 3"
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                }}
                            />
                        </div>

                        {/* Text Content Container */}
                        <div style={{
                            padding: '20px',
                            paddingLeft: '30px', // Padding specifically for the image
                            paddingRight: '30px',// Padding specifically for the image

                        }}>
                            <p style={{
                                fontSize: '44px',
                                fontWeight: '700',
                                color: '#7ACB59',

                            }}>
                                02
                            </p>
                            <p style={{
                                fontSize: '23px',
                                fontWeight: '600',
                                color: '#0D4873',

                            }}>
                                Precision Tools
                            </p>
                            <p style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                color: '#555555',
                            }}>
                                Real-time tracking, flawless logins, and screenshot control deliver unmatched oversight.
                            </p>
                        </div>
                    </div>


                    {/* Step 4 */}
                    <div style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: '10px',
                        boxShadow: `
                        0px 30px 45px -30px rgba(50, 50, 93, 0.2), /* First shadow */
                        0px 18px 36px -18px rgba(0, 0, 0, 0.1) /* Second shadow */
                      `,
                        width: '500px',
                        textAlign: 'left',
                        marginBottom: '50px',
                    }}>
                        {/* Image Container */}
                        <div style={{
                            paddingLeft: '6px', // Padding specifically for the image
                            paddingRight: '6px',
                            paddingTop: '6px' // Padding specifically for the image
                        }}>
                            <img
                                src={step4}
                                alt="Step 3"
                                style={{
                                    width: '100%',
                                    borderRadius: '10px',
                                }}
                            />
                        </div>

                        {/* Text Content Container */}
                        <div style={{
                            padding: '20px',
                            paddingLeft: '30px', // Padding specifically for the image
                            paddingRight: '30px',// Padding specifically for the image

                        }}>
                            <p style={{
                                fontSize: '44px',
                                fontWeight: '700',
                                color: '#7ACB59',

                            }}>
                                04
                            </p>
                            <p style={{
                                fontSize: '23px',
                                fontWeight: '600',
                                color: '#0D4873',

                            }}>
                                Get the Tools
                            </p>
                            <p style={{
                                fontSize: '16px',
                                fontWeight: '400',
                                color: '#555555',
                            }}>
                                Download the app or extension to track work hours and manage activities effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewHIW
