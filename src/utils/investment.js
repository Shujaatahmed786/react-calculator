export function calculateInvestResults(userInput) {


    const annualData = [];
    let investmentValue = userInput?.initialInvestmnet;
    for(let i=0; i < userInput?.duration; i++){
        const interestEarnedInYear = investmentValue * userInput?.expectedReturn;
        investmentValue += interestEarnedInYear + userInput?.annualInvestment;
        annualData.push({
            year: i + 1,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: interestEarnedInYear,
        });
        
    }
    
    console.log("Annual Data", annualData)
    return annualData;
}
