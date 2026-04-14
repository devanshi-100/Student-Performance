// Convert user inputs to numeric features for KNN
export const preprocessInput = (formData) => {
  const studyHours = parseInt(formData.studyHours) || 0;
  const consistency = { low: 0, medium: 1, high: 2 }[formData.consistency] || 0;
  const skillLevel = { 
    none: 0, 
    basic: 1, 
    strong: 2 
  }[formData.skillLevel] || 0;
  
  return [studyHours, consistency, skillLevel];
};

// Convert performance number to label
export const getPerformanceLabel = (performance) => {
  const labels = ['Poor ', 'Average ', 'Excellent '];
  return labels[performance] || 'Unknown';
};