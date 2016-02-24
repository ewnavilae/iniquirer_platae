"use strict";

var _inquirer = require("inquirer");

var _inquirer2 = _interopRequireDefault(_inquirer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questions = [{
  type: "input",
  name: "string",
  message: "What would you like to encode?"
}, {
  type: "input",
  name: "amount",
  message: "How many times do you want to re-encode?(1-99)",
  validate: function validate(value) {
    return !isNaN(value) && value > 0 && value < 100 ? true : "Invalid value";
  }
}];

var result = function result(answers) {
  var repetitions = answers["amount"];
  var i = 0;
  var res = answers["string"];
  while (i < repetitions) {
    res = btoa(res);
    i++;
  }
};

var main = function main() {
  _inquirer2.default.prompt(questions, result);
};
main();
