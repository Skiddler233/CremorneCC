import React, { useState } from 'react';
import './Join.css';

export default function JoinForm() {
  const [joinFormData, setJoinFormData] = useState({
    name: '',
    address: '',
    email: '',
    suburb: ''
  });

  const [askFormData, setAskFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleJoinChange = (e) => {
    const { name, value } = e.target;
    setJoinFormData({
      ...joinFormData,
      [name]: value
    });
  };

  const handleAskChange = (e) => {
    const { name, value } = e.target;
    setAskFormData({
      ...askFormData,
      [name]: value
    });
  };

  const joinFormSubmit = () => {
    const { name, address, email, suburb } = joinFormData;
    if (name && address && email && suburb) {
      alert(`Thank you for joining ${name}!\nYou will receive an email with more details.`);
    } else {
      alert("Please fill out all fields in the form.\nSome items are missing!");
    }
  };

  const askFormSubmit = () => {
    const { name, email, question } = askFormData;
    if (name && email && question) {
      alert(`Thank you for your question ${name}!\nWe will get back to you at ${email}.`);
    } else {
      alert("Please fill out all fields in the form.\nSome items are missing!");
    }
  };

  return (
    <section id="join-us" className="JoinUs">
      <div>
        <img className="heading" src="img/join-us.png" alt="Join Us text" />
      </div>
      <div className="form-container">
        <div className="left-form">
          <div className="join-form">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={joinFormData.name}
              onChange={handleJoinChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={joinFormData.email}
              onChange={handleJoinChange}
              required
            />
          </div>
          <div className="join-form">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={joinFormData.address}
              onChange={handleJoinChange}
              required
            />
            <label htmlFor="suburb">Suburb:</label>
            <input
              type="text"
              id="suburb"
              name="suburb"
              value={joinFormData.suburb}
              onChange={handleJoinChange}
              required
            />
          </div>
          <div>
            <button onClick={joinFormSubmit} className="submit-btn">Join Us</button>
          </div>
        </div>
        <div className="right-form">
          <div className="join-form">
            <label htmlFor="ask-name">Full Name:</label>
            <input
              type="text"
              id="ask-name"
              name="name"
              value={askFormData.name}
              onChange={handleAskChange}
              required
            />
            <label htmlFor="ask-email">Email:</label>
            <input
              type="text"
              id="ask-email"
              name="email"
              value={askFormData.email}
              onChange={handleAskChange}
              required
            />
          </div>
          <div className="join-form">
            <label htmlFor="question">Your Question:</label>
            <textarea
              id="question"
              name="question"
              value={askFormData.question}
              onChange={handleAskChange}
              required
              rows="6"
            />
          </div>
          <div>
            <button onClick={askFormSubmit} className="submit-btn">Ask Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
