#! /usr/bin/env node
import inquirer from "inquirer";
let myAge = 18;
let answer = await inquirer.prompt([{ message: "please give your age", type: "number", name: "value" }]);
if (answer.value > myAge) {
    console.log("you are eligibale for driving");
}
else {
    console.log("you are not eligiable");
}
