// Sample student data (from typical student performance datasets)
export const sampleData = [
  // Format: [studyHours, consistency(0-2), skillLevel(0-3), performance(0-2: poor,avg,excellent)]
  [2, 0, 0, 0],  // Low study, low consistency, no skills = Poor
  [4, 1, 1, 0],  // Medium study, medium consistency, basic skills = Poor
  [6, 1, 1, 1],  // Good study, medium consistency, basic skills = Average
  [8, 2, 2, 1],  // High study, high consistency, strong skills = Average
  [3, 0, 0, 0],  // Low everything = Poor
  [10, 2, 3, 2], // Max everything = Excellent
  [5, 1, 2, 1],  // Good balance = Average
  [7, 2, 1, 1],  // High consistency helps = Average
  [1, 0, 1, 0],  // Very low = Poor
  [9, 2, 3, 2],  // High performance = Excellent
  [4, 0, 2, 0],  // Low consistency hurts = Poor
  [6, 2, 2, 2],  // Good all around = Excellent
];