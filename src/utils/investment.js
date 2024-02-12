export function calculateInvestResults(userInput) {
    console.log("userInput", userInput)


    const annualData = [];
    let investmentValue = +userInput?.initialInvestment?.toFixed(2);
    for(let i=0; i < +userInput?.duration; i++){

        const interestEarnedInYear = investmentValue * +userInput?.expectedReturn;
        console.log("interestEarnedInYear", investmentValue)
        investmentValue += interestEarnedInYear + +userInput?.annualInvestment;
        annualData.push({
            year: i + 1,
            interest: interestEarnedInYear?.toFixed(2),
            valueEndOfYear: investmentValue || 0,
            annualInvestment: +interestEarnedInYear?.toFixed(2),
        });
        
    }
    
    console.log("Annual Data", annualData)
    return annualData;
}

export const formatter = new Intl.NumberFormat ({
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits:0,
    maximumFractionDigits: 0,

})