import inquirer,{Answers,QuestionCollection} from 'inquirer';
async function calculater() {
    var cal=await inquirer.prompt([{
        type:"number",
        name:"num1",
        message:"enter your num1"
    },
    {
        type:"number",
        name:"num2",
        message:"enter your num2"
    },
    {
        type:"list",
        name:"operation",
        message:"enter your operator",
        choices:["+","-","*","/"]
    }])
    switch (cal.operation) {
        case "+":
            console.log(cal.num1+cal.num2)
            break;
            case "-":
            console.log(cal.num1-cal.num2)
            break;
            case "*":
            console.log(cal.num1*cal.num2)
            break;
            case "/":
            console.log(cal.num1/cal.num2)
            break;
    
        default:
            console.log("something went wrong")
            break;
    }
    }
    calculater()