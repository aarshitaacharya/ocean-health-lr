import React from 'react';

function InputForm({ onResult, formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      onResult(data);
    } catch (err) {
      alert("Prediction failed. Make sure the backend is running.", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {["Salinity", "Temp", "Oxygen", "Depth"].map((key) => (
        <div key={key} className="nes-field">
          <label htmlFor={key}>{key}</label>
          <input
            id={key}
            type="number"
            step="any"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="nes-input"
            required
          />
        </div>
      ))}
      <button type="submit" className="nes-btn is-primary">
        Check Ocean Health
      </button>
    </form>
  );
}

export default InputForm;
