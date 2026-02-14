function calculateGrade(percentage) {
  // Convert to number and round
  percentage = Math.round(Number(percentage));

  // Handle non-numeric or negative values
  if (isNaN(percentage) || percentage < 0) {
    return "F";
  }

  if (percentage >= 90) return "A";
  if (percentage >= 80) return "B";
  if (percentage >= 70) return "C";
  if (percentage >= 60) return "D";
  return "F";
}

const percentage = prompt("Enter Percentage:");
alert(calculateGrade(percentage));
