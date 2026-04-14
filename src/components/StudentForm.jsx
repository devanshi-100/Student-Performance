import { useState } from 'react';
import { preprocessInput } from '../utils/preprocess.js';

const StudentForm = ({ onAnalyze, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    studyHours: '',
    consistency: 'medium',
    skillLevel: 'basic'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const features = preprocessInput(formData);
    onAnalyze(formData, features);
  };

  return (
    <div className="card">
      <h2 style={{marginBottom: '20px', color: '#555'}}>📊 Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name (Optional)</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label className="label">Daily Study Hours</label>
          <input
            type="number"
            name="studyHours"
            value={formData.studyHours}
            onChange={handleChange}
            className="input"
            min="0"
            max="12"
            placeholder="0-12 hours"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Consistency Level</label>
          <select
            name="consistency"
            value={formData.consistency}
            onChange={handleChange}
            className="select"
            required
          >
            <option value="low">Low 😴</option>
            <option value="medium">Medium ⚡</option>
            <option value="high">High 🔥</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">Current Skill Level</label>
          <select
            name="skillLevel"
            value={formData.skillLevel}
            onChange={handleChange}
            className="select"
            required
          >
            <option value="none">None</option>
            <option value="basic">Basic (Some DSA/Web basics)</option>
            <option value="strong">Strong (DSA+, Projects+, CS)</option>
          </select>
        </div>

        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Analyzing...' : '🔮 Generate Prediction'}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;