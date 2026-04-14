import { useState } from 'react';
import StudentForm from '../components/StudentForm';
import { 
  predictPerformance, 
  generateFuturePredictions, 
  getPeerPercentile 
} from '../utils/knn.js';
import { getPerformanceLabel } from '../utils/preprocess.js';

const AnalyzerPage = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = (formData, features) => {
    setLoading(true);
    setTimeout(() => {
      const currentPrediction = predictPerformance(features);
      const futurePredictions = generateFuturePredictions(features);
      const peerPercentile = getPeerPercentile(features);
      
      setResults({
        ...formData,
        currentPrediction,
        futurePredictions,
        peerPercentile,
        features
      });
      setLoading(false);
    }, 1500);
  };

  const getConsistencyHeatmap = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const levels = ['low', 'medium', 'high'];
    return days.map((day, i) => ({
      day,
      level: levels[Math.floor(Math.random() * 3)]
    }));
  };

  const getPersonalizedPlan = (features, currentPrediction) => {
    const plans = {
      0: ' Start with 30min daily DSA practice. Focus on consistency first!',
      1: ' Great progress! Add 1hr daily study + 1 small project monthly.',
      2: ' Excellent! Mentor others + contribute to open source projects.'
    };
    return plans[currentPrediction];
  };

  if (!results) {
    return <StudentForm onAnalyze={handleAnalyze} loading={loading} />;
  }

  const heatmapData = getConsistencyHeatmap();

  return (
    <div className="container">
      {/* <div className="header">
        <h1>Performance Analyzer</h1>
        <p>AI-powered predictions using KNN Classification</p>
      </div> */}

      <StudentForm onAnalyze={handleAnalyze} loading={loading} />

      {results && (
        <div className="card">
          <h3 style={{marginBottom: '20px', color: '#667eea'}}>
            👋 Hello {results.name || 'Student'}, here's your analysis:
          </h3>
          
          {/* Results Grid */}
          <div className="results">
            <div className="result-card">
              <div className="result-title">Current Performance</div>
              <div className="result-value">
                {getPerformanceLabel(results.currentPrediction)}
              </div>
            </div>
            
            <div className="result-card">
              <div className="result-title">Peer Percentile</div>
              <div className="result-value">
                {results.peerPercentile}th percentile
              </div>
            </div>
          </div>

          {/* Personalized Plan */}
          <div style={{marginTop: '25px'}}>
            <div className="prediction-item">
              <div className="prediction-title"> Personalized Study Plan</div>
              <div>{getPersonalizedPlan(results.features, results.currentPrediction)}</div>
            </div>

            {/* 3 Future Predictions */}
            <div className="prediction-item">
            <div className="prediction-title"> 3 Future Scenarios</div>
            <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                {[
                { title: '+10% Study Hours' },
                { title: 'HIGH Consistency' },
                { title: 'Strong Skills' }
                ].map((scenario, i) => (
                <div key={i} className="result-card" style={{flex: '1', minWidth: '140px'}}>
                    <div style={{fontSize: '0.9em', color: '#666'}}>
                    {scenario.icon} {scenario.title}
                    </div>
                    <div style={{fontSize: '1.3em', color: '#28a745'}}>
                    {getPerformanceLabel(results.futurePredictions[i])}
                    </div>
                </div>
                ))}
            </div>
            </div>

            {/* Peer Comparison */}
            <div className="prediction-item">
              <div className="prediction-title"> Peer Comparison</div>
              <div className="peer-comparison">
                <div className="peer-item">
                  <div className="peer-label">You</div>
                  <div className="peer-value">{results.peerPercentile}%</div>
                </div>
                <div className="peer-item">
                  <div className="peer-label">Average</div>
                  <div className="peer-value">50%</div>
                </div>
                <div className="peer-item">
                  <div className="peer-label">Top 10%</div>
                  <div className="peer-value">90%</div>
                </div>
              </div>
            </div>

            {/* Consistency Heatmap */}
            {/* <div className="prediction-item">
              <div className="prediction-title"> Consistency Heatmap (Past Week)</div>
              <div className="heatmap">
                {heatmapData.map((item, i) => (
                  <div 
                    key={i}
                    className={`heatmap-day heatmap-${item.level}`}
                  >
                    {item.day}
                  </div>
                ))}
              </div>
            </div> */}
        </div>

          {/* Reset Button */}
          <button 
            className="btn" 
            style={{marginTop: '20px', background: '#6c757d'}}
            onClick={() => setResults(null)}
          >
             New Analysis
          </button>
        </div>
      )}
    </div>
  );
};

export default AnalyzerPage;