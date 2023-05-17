import React from "react";
import data from "../data.json";
import "./CSS/statistics.css";
import Charts from "./Charts";

function Statistics() {
  let totalStudents = data.length;
  let finalGrade,
    totalFailed,
    totalPassed,
    avgOfAll,
    max,
    min,
    fGrade0_2,
    fGrade2_4,
    fGrade4_6,
    fGrade6_8,
    fGrade8_10;
  // Total Passed
  let p = data.filter((student) => {
    finalGrade = (0.6 * student.examGrade + 0.4 * student.ratingGrade).toFixed(
      2
    );
    return finalGrade > 4;
  });
  totalPassed = p.length;
  // Total Failed
  let f = data.filter((student) => {
    finalGrade = (0.6 * student.examGrade + 0.4 * student.ratingGrade).toFixed(
      2
    );
    return finalGrade <= 4;
  });
  totalFailed = f.length;

  // Array of final Grades of all
  let fGrade = data.map((student) => {
    return (0.6 * student.examGrade + 0.4 * student.ratingGrade).toFixed(2);
  });

  // Total of Final Grades
  let totalOfFinalGrade = fGrade.reduce((accumulator, currentValue) => {
    return Number(accumulator) + Number(currentValue);
  });
  // Average of all
  avgOfAll = (totalOfFinalGrade / totalStudents).toFixed(2);

  // Max of Final Grades
  max = Math.max(...fGrade);

  // Min of Final Grades
  min = fGrade.reduce((a, b) => Math.min(a, b));

  // Final Grade 0-2
  let fg02 = fGrade.filter((grade) => {
    return grade <= 2;
  });
  fGrade0_2 = fg02.length;

  // Final Grade 2-4
  let fg24 = fGrade.filter((grade) => {
    return grade > 2 && grade <= 4;
  });
  fGrade2_4 = fg24.length;

  // Final Grade 4-6
  let fg46 = fGrade.filter((grade) => {
    return grade > 4 && grade <= 6;
  });
  fGrade4_6 = fg46.length;

  // Final Grade 6-8
  let fg68 = fGrade.filter((grade) => {
    return grade > 6 && grade <= 8;
  });
  fGrade6_8 = fg68.length;

  // Final Grade 8-10
  let fg810 = fGrade.filter((grade) => {
    return grade > 6 && grade <= 8;
  });
  fGrade8_10 = fg810.length;


  let grades = [fGrade0_2, fGrade2_4, fGrade4_6, fGrade6_8, fGrade8_10];
  let tpfData = [totalStudents, totalPassed, totalFailed];
  let mam = [min, avgOfAll, max];

  return (
    <>
      <table className="statisticsTable">
        <thead>
          <tr>
            <th>Status</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Students</td>
            <td>{totalStudents}</td>
          </tr>
          <tr>
            <td>Total Passed</td>
            <td>{totalPassed}</td>
          </tr>
          <tr>
            <td>Total Failed</td>
            <td>{totalFailed}</td>
          </tr>
          <tr>
            <td>Average of All</td>
            <td>{avgOfAll}</td>
          </tr>
          <tr>
            <td>Max of All</td>
            <td>{max}</td>
          </tr>
          <tr>
            <td>Min of All</td>
            <td>{min}</td>
          </tr>
          <tr>
            <td>Final Grade 0-2</td>
            <td>{fGrade0_2}</td>
          </tr>
          <tr>
            <td>Final Grade 2-4</td>
            <td>{fGrade2_4}</td>
          </tr>
          <tr>
            <td>Final Grade 4-6</td>
            <td>{fGrade4_6}</td>
          </tr>
          <tr>
            <td>Final Grade 6-8</td>
            <td>{fGrade6_8}</td>
          </tr>
          <tr>
            <td>Final Grade 8-10</td>
            <td>{fGrade8_10}</td>
          </tr>
        </tbody>
      </table>
      <Charts tpfData={tpfData} grades={grades} mam={mam} />
    </>
  );
}

export default Statistics;
