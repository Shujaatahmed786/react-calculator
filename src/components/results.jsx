import { calculateInvestResults, formatter } from "../utils/investment";

import React from "react";

const Results = ({ userInput }) => {
  const resultData = calculateInvestResults(userInput);
  console.log(resultData);

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr class="table-heading">
          <td >Year</td>
          <td>Investment Value</td>
          <td>Interest (Year)</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>

      <tbody>
        {resultData?.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            (yearData.annualInvestment * yearData.year || 0) -
            initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year} className="table-values">
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData?.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
