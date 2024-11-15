import React, { useState } from 'react';
import './FIRStatus.css';

const AdminStatus = () => {
  const [cid, setCid] = useState('');
  const [submittedCids, setSubmittedCids] = useState([]);

  const handleChange = (event) => {
    setCid(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cid) {
      setSubmittedCids([...submittedCids, cid]);
      setCid('');
    }
  };

  return (
    <div className="admin-status-container">
      <h2 className="status-title">FIR Status</h2>
      <form onSubmit={handleSubmit} className="cid-form">
        <label htmlFor="cid" className="cid-label">Enter CID:</label>
        <input
          type="text"
          id="cid"
          value={cid}
          onChange={handleChange}
          placeholder="Enter CID"
          className="cid-input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Display the submitted CIDs in a table */}
      {submittedCids.length > 0 && (
        <div className="submitted-cids-table">
          <h3>Submitted CIDs:</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>CID</th>
              </tr>
            </thead>
            <tbody>
              {submittedCids.map((cid, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{cid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminStatus;
