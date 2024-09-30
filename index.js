//Student Grade Generator
function createStudentGrade(marks) {
    if (marks > 100 || marks < 0) {
        return "Invalid marks. Please enter marks between 0 and 100.";
    } else if (marks > 79) {
        return "Grade: A";
    } else if (marks >= 60) {
        return "Grade: B";
    } else if (marks >= 49) {
        return "Grade: C";
    } else if (marks >= 40) {
        return "Grade: D";
    } else {
        return "Grade: E";
    }
}

console.log(createStudentGrade(85));  
console.log(createStudentGrade(65));  
console.log(createStudentGrade(50));  
console.log(createStudentGrade(45));  
console.log(createStudentGrade(30));  
console.log(createStudentGrade(110));  


//Speed Detector
function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;

    if (speed < speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}
console.log(speedDetector(50)); 
console.log(speedDetector(80));  
console.log(speedDetector(130)); 


function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // PAYE calculation based on 2024 rates
    let payee;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1; 
    } else if (grossSalary <= 32333) {
        payee = grossSalary * 0.25; 
    } else if (grossSalary <= 500000) {
        payee = grossSalary * 0.3; 
    } else if (grossSalary <= 800000) {
        payee = grossSalary * 0.325; 
    } else {
        payee = grossSalary * 0.35; 
    }

    // NHIF deduction based on 2024 rates
    let nhifDeductions;
    if (grossSalary <= 5999) {
        nhifDeductions = 150;
    } else if (grossSalary <= 7999) {
        nhifDeductions = 300;
    } else if (grossSalary <= 11999) {
        nhifDeductions = 400;
    } else if (grossSalary <= 14999) {
        nhifDeductions = 500;
    } else if (grossSalary <= 19999) {
        nhifDeductions = 600;
    } else if (grossSalary <= 24999) {
        nhifDeductions = 750;
    } else if (grossSalary <= 29999) {
        nhifDeductions = 850;
    } else if (grossSalary <= 34999) {
        nhifDeductions = 900;
    } else if (grossSalary <= 39999) {
        nhifDeductions = 950;
    } else if (grossSalary <= 44999) {
        nhifDeductions = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeductions = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeductions = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeductions = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeductions = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeductions = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeductions = 1600;
    } else {
        nhifDeductions = 1700;
    }

    // Affordable Housing Levy - 1.5% of gross salary for both employee and employer
    const housingLevy = grossSalary * 0.015;

    // NSSF contribution - 6% of pensionable pay for both employee and employer
    let nssfDeductions;
    if (grossSalary <= 7000) {
        nssfDeductions = grossSalary * 0.06; 
    } else if (grossSalary <= 36000) {
        nssfDeductions = 7000 * 0.06 + (grossSalary - 7000) * 0.06;
    } else {
        nssfDeductions = 7000 * 0.06 + 29000 * 0.06; 
    }

    // Net Salary calculation
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    }
}

const salaryInfo = calculateNetSalary(50000, 5000);
console.log(`Gross Salary: ${salaryInfo.grossSalary}`);
console.log(`PAYE: ${salaryInfo.payee}`);
console.log(`NHIF Deductions: ${salaryInfo.nhifDeductions}`);
console.log(`NSSF Deductions: ${salaryInfo.nssfDeductions}`);
console.log(`Net Salary: ${salaryInfo.netSalary}`);
