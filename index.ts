import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        name: "firstNumber",
        type: "number"
    },
    {
        message: "Enter second number",
        name: "secondNumber",
        type: "number"
    },
    {
        message: "Select one of the operators to perform action",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
// conditional Statement
if(answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber)
} else if(answer.operator === "Subtraction")
    {
        console.log(answer.firstNumber - answer.secondNumber)
    } else if(answer.operator === "Multiplication") {
        console.log(answer.firstNumber * answer.secondNumber)
    } else if(answer.operator === "Division") {
        console.log(answer.firstNumber / answer.secondNumber)
    } else {
        console.log("Pleae select a valid operator")
    }
    console.log(answer);