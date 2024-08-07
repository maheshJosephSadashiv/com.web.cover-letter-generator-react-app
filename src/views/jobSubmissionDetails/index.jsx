import React from 'react';
import './jobSubmissionDetails.css'

const JobSubmissionDetails = () => {
    return (
        <div className="job-submission-details">
            <div className="job-submission-details-form">
                <div className="linkedin-secton">
                    <div class="mb-3">
                        <label for="linkedInLinkControl" class="form-label">Paste LinkedIn Link:</label>
                        <textarea class="form-control" id="linkedInLinkControl" rows="3"></textarea>
                    </div>
                </div>
                <h4 className='or-text'>OR</h4>
                <div className="manual-section">
                    <div class="mb-3">
                        <label for="companyNameControl" class="form-label">Company Name:</label>
                        <textarea class="form-control" id="companyNameControl" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="addressControl" class="form-label">Address:</label>
                        <textarea class="form-control" id="addressControl" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="jdControl" class="form-label">Job Description:</label>
                        <textarea class="form-control" id="jdControl" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="jobRoleControl" class="form-label">Job Role:</label>
                        <textarea class="form-control" id="jobRoleControl" rows="3"></textarea>
                    </div>
                    <button type="button" class="btn btn-success">Submit</button>
                </div>
            </div>
            <div className="seperator" />
            <div className="result">
                Result
            </div>
        </div>
    );
}

export default JobSubmissionDetails;