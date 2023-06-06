import { React, useState } from "react";
import "./Calculator.css";
import { Btns } from "./Const";
export default function Calculator() {
  const [number, setNumber] = useState("0");
  const [input, setInput] = useState([]);

  function calculate(arr, n) {
    if (n === 0) return 0;
    let s = arr[0];
    let value = parseInt(s);
    let sum = value;
    for (let i = 2; i < n; i = i + 2) {
      s = arr[i];
      value = parseInt(s);
      let operation = arr[i - 1][0];
      if (operation === "+") sum += value;
      else if (operation === "/") sum /= value;
      else if (operation === "*") sum *= value;
      else sum -= value;
    }

    return sum;
  }
  function setOperation(operator) {
    input.push(number);
    input.push(operator);
    setNumber("0");
  }
  function manageNumbers(inputnumber) {
    if (number !== "0") {
      setNumber(number + inputnumber);
    } else {
      setNumber(inputnumber);
    }
  }
  function clickHandler(symbol) {
    if (symbol === "=") {
      input.push(number);
      input.push("=");
      var answer = calculate(input, input.length);
      setNumber(answer);
    } else {
      switch (symbol) {
        case "C":
          setInput([]);
          setNumber("0");
          break;
        case "CE":
          if (input) {
            input.pop();
          }
          setNumber("0");
          break;
        case "<-":
          let num = number.substring(0, number.length - 1);
          setNumber(num);
          break;
        case "/":
          setOperation("/");
          break;
        case "+":
          setOperation("+");
          break;
        case "*":
          setOperation("*");
          break;
        case "-":
          setOperation("-");
          break;
        case "0":
          manageNumbers("0");
          break;
        case "1":
          manageNumbers("1");
          break;
        case "2":
          manageNumbers("2");
          break;
        case "3":
          manageNumbers("3");
          break;
        case "4":
          manageNumbers("4");
          break;
        case "5":
          manageNumbers("5");
          break;
        case "6":
          manageNumbers("6");
          break;
        case "7":
          manageNumbers("7");
          break;
        case "8":
          manageNumbers("8");
          break;
        case "9":
          manageNumbers("9");
          break;

        default:
          break;
      }
    }
  }
  return (
    <div className="container">
      <h4>{input}</h4>
      <h1>{number}</h1>

      {Btns.map((btn, i) => (
        <button
          type="Button"
          key={i}
          onClick={() => clickHandler(btn.symbol)}
          className="Btn"
          style={{ backgroundColor: btn.color }}
        >
          {btn.symbol}
        </button>
      ))}
    </div>
  );
}
