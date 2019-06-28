const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passingGrade = 70;

const passingGrades = (grades, passingGrade) => grades.filter(grade => (grade >= passingGrade));

console.log(passingGrades(grades, passingGrade));