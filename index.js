import inquirer from "inquirer"

const questions= [
  {
    type: "input",
    name: "string",
    message: "What would you like to encode?"
  },
  {
    type: "input",
    name: "amount",
    message: "How many times do you want to re-encode?(1-99)",
    validate: value => !isNaN(value) && value > 0 && value < 100 ? true : "Invalid value"
  }
]

const result = answers => {
  const repetitions = answers["amount"]
  let i= 0
  let res = answers["string"]
  while(i < repetitions){
    res= btoa(res)
    i++
  }
}

const main = () => {
  inquirer.prompt(questions, result)
}
main()
