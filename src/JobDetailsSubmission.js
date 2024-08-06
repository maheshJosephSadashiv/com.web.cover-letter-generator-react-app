import React, { useState } from "react";

function JobDetailsSubmission() {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        linkedin_link: "",
        name: "",
        address: "",
        job_description: "",
        job_role: ""
    });

    // Handle change for each form input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can process the form data as needed
        console.log("Form submitted with data:", formData);
        // You could send the data to an API or handle it as required
    };

    return (
        <div style={{ fontFamily: "Monospace, serif", display: "flex", justifyContent: "center" }}>
            <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
                <h2>Submit Details</h2>
n
                <div>
                    <p>
                        Paste LinkedIn Link:
                        <input
                            type="text"
                            name="linkedin_link"
                            value={formData.linkedin_link}
                            onChange={handleChange}
                            style={{ width: "100%" }}
                        />
                    </p>
                </div>

                <h2>OR</h2>

                <div>
                    <p>
                        Company Name:
                        <label>
                            <textarea
                                name="name"
                                rows="5"
                                cols="50"
                                value={formData.name}
                                onChange={handleChange}
                                style={{ width: "100%" }}
                            />
                        </label>
                    </p>
                </div>

                <div>
                    <p>
                        Address:
                        <label>
                            <textarea
                                name="address"
                                rows="5"
                                cols="50"
                                value={formData.address}
                                onChange={handleChange}
                                style={{ width: "100%" }}
                            />
                        </label>
                    </p>
                </div>

                <div>
                    <p>
                        Job Description:
                        <label>
                            <textarea
                                name="job_description"
                                rows="5"
                                cols="50"
                                value={formData.job_description}
                                onChange={handleChange}
                                style={{ width: "100%" }}
                            />
                        </label>
                    </p>
                </div>

                <div>
                    <p>
                        Job Role:
                        <label>
                            <textarea
                                name="job_role"
                                rows="5"
                                cols="50"
                                value={formData.job_role}
                                onChange={handleChange}
                                style={{ width: "100%" }}
                            />
                        </label>
                    </p>
                </div>
                <br/>
                <div>
                    <p>
                        <input type="submit" value="Submit" />
                    </p>
                </div>
            </form>
        </div>
    );
}

export default JobDetailsSubmission;
