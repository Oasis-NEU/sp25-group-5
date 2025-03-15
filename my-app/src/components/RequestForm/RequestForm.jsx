import React from 'react';
import './RequestForm.css';

const RequestForm = () => {
    return (
        <form id="requests" className="request-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="What topic/category would you like to request?" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RequestForm;