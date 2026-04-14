import { sampleData } from './dataset.js';

// Simple KNN Classifier (k=3)
export const predictPerformance = (inputFeatures) => {
  const k = 3;
  const distances = sampleData.map((sample, index) => {
    // Euclidean distance
    const distance = Math.sqrt(
      sample.slice(0, 3).reduce((sum, val, i) => sum + Math.pow(val - inputFeatures[i], 2), 0)
    );
    return { distance, performance: sample[3], index };
  });

  // Sort by distance and get k nearest
  distances.sort((a, b) => a.distance - b.distance);
  const nearest = distances.slice(0, k);

  // Majority vote
  const voteCount = { 0: 0, 1: 0, 2: 0 };
  nearest.forEach(item => voteCount[item.performance]++);
  
  return Object.keys(voteCount).reduce((a, b) => 
    voteCount[a] > voteCount[b] ? a : b
  );
};

// Generate 3 future predictions (slightly modified inputs)
export const generateFuturePredictions = (inputFeatures) => {
  const predictions = [];
  
  // Prediction 1: Maintain current +10% study
  const pred1 = [...inputFeatures];
  pred1[0] = Math.min(12, pred1[0] * 1.1);
  predictions.push(predictPerformance(pred1));
  
  // Prediction 2: Improve consistency to High
  const pred2 = [...inputFeatures];
  pred2[1] = 2;
  predictions.push(predictPerformance(pred2));
  
  // Prediction 3: Improve skills to Strong
  const pred3 = [...inputFeatures];
  pred3[2] = 2;
  predictions.push(predictPerformance(pred3));
  
  return predictions;
};

// Get peer percentile (simple comparison)
export const getPeerPercentile = (inputFeatures) => {
  const scores = sampleData.map(sample => 
    sample.slice(0, 3).reduce((sum, val, i) => sum + val * (i + 1), 0)
  );
  const userScore = inputFeatures.reduce((sum, val, i) => sum + val * (i + 1), 0);
  return Math.floor((scores.filter(s => s <= userScore).length / scores.length) * 100);
};