import React, { useState } from 'react';
import './jobSubmissionDetails.css'
import { Endpoints } from '../../api/endpoints';
import axios from 'axios';

const JobSubmissionDetails = () => {

    // Variables
    const [formData, setFormData] = useState({});
    const [resultData, setResultData] = useState(null);
    const [loading, setLoading] = useState(false);

    // API Helpers
    const sendRequest = () => {
        console.log("Sending Request...");
        const payload = {
            linkedin_link: formData.linkedInLinkControlData || "",
            name: formData.companyNameControlData,
            address: formData.addressControlData,
            job_description: formData.jdControlData,
            job_role: formData.jobRoleControlData
        };
        setLoading(true);
        axios.post(Endpoints.serverEndpoint, payload).then(response => {
            console.log("Response Recieved.");
            setResultData(response.data);
            setLoading(false);
        }).catch(() => {
            console.log("Something Went Wrong!!!")
        })
    }

    const handleDataChange = (event, key)=> {
        setFormData({...formData, [key]: event.target.value});
    }

    // View Section
    return (
        <div className="job-submission-details">
            {
                loading &&
                <div className='loader-backdrop'>
                    <div class="loader spinner-grow text-primary" role="status" />
                    <span className='loader-text'>Brewing Magic, Please Wait...</span>
                </div>
            }
            <div className="job-submission-details-form">
                <div className="linkedin-secton">
                    <div className="mb-3">
                        <label htmlFor="linkedInLinkControl" className="form-label">Paste LinkedIn Link:</label>
                        <textarea className="form-control" id="linkedInLinkControl" rows="3" onChange={(event) => handleDataChange(event, 'linkedInLinkControlData')}></textarea>
                    </div>
                </div>
                <h4 className='or-text'>OR</h4>
                <div className="manual-section">
                    <div className="mb-3">
                        <label htmlFor="companyNameControl" className="form-label">Company Name:</label>
                        <textarea className="form-control" id="companyNameControl" rows="3" onChange={(event) => handleDataChange(event, 'companyNameControlData')}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="addressControl" className="form-label">Address:</label>
                        <textarea className="form-control" id="addressControl" rows="3" onChange={(event) => handleDataChange(event, 'addressControlData')}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="jdControl" className="form-label">Job Description:</label>
                        <textarea className="form-control" id="jdControl" rows="3" onChange={(event) => handleDataChange(event, 'jdControlData')}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="jobRoleControl" className="form-label">Job Role:</label>
                        <textarea className="form-control" id="jobRoleControl" rows="3" onChange={(event) => handleDataChange(event, 'jobRoleControlData')}></textarea>
                    </div>
                    <button type="button" className="btn btn-success" onClick={sendRequest}>Submit</button>
                </div>
            </div>
            <div className="seperator" />
            {
                loading || !resultData ? <></> :
                (
                    <div className="result">
                        <p className='lead'>From Address : </p>
                        {resultData?.from_address}
                        <p className='lead'>Address :</p>
                        {resultData?.to_address}
                        <p className='lead'>Introduction :</p>
                        {resultData?.introduction}
                        <p className='lead'>Paragraph 1 :</p>
                        {resultData?.main_paragraph_1_prompt}
                        <p className='lead'>Paragraph 2 :</p>
                        {resultData?.main_paragraph_2_prompt}
                        <p className='lead'>Conclusion :</p>
                        {resultData?.conclusion}
                    </div>
                )
            }
            {
                !resultData && !loading && <div className='result'><p>Search for results.</p></div>
            }
        </div>
    );
}

export default JobSubmissionDetails;