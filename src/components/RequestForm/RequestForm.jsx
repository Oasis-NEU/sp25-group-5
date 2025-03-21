import React from 'react';
import './RequestForm.css';

const RequestForm = () => {
    return (
        <div className="request-form-container">
            <h2>Request Form</h2>
            <div className="form-card">
                <form id="requests" className="request-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" />
                    </div>
                    
                    <div className="form-group">
                        <label>Phone Number (Optional)</label>
                        <input type="text" />
                    </div>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" />
                    </div>
                    
                    <div className="form-group">
                        <label>What topic/category you like to request?</label>
                        <textarea />
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default RequestForm;