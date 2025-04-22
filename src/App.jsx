import { useState } from "react";
import "./index.css";

//Rus
//1 - Создайте состояние input, которое будет отображать результат вычислений в калькуляторе.
//2 - Создайте 2 функции для увеличения или уменьшения значения input на +1 или -1 и назначьте их на кнопки +1 / -1.
//3 - Создайте функцию, которая будет выполнять определенную операцию на калькуляторе в зависимости от нажатой кнопки. В результате работы этой функции должен получиться полностью рабочий калькулятор. Используйте эту функцию в обработчиках событий для всех кнопок.

//P.S. Если сложно продумать одну универсальную функцию, можете создать столько функций, сколько нужно. Не переживайте о чистоте кода.

//P.P.S. В JavaScript есть метод eval(), который преобразует любую строку в JavaScript-выражение.
//Пример: eval("console.log('Hello')") — выполнит этот код.
// Используйте этот метод для всех операций в калькуляторе.

function Calculator() {
  const [input, setInput] = useState("0");

  function increment() {
    const currentInput = eval(input);
    setInput(currentInput + 1).toString();
  }

  function decrement() {
    const currentInput = eval(input);
    setInput(currentInput - 1).toString();
  }

  function calc(arg) {
    if (arg === "c") {
      setInput("0");
    } else if (arg === "=") {
      setInput(eval(input).toString());
    } else setInput((prev) => (prev === "0" ? arg : prev + arg));
  }

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button onClick={() => increment()} className="increment">
            +1
          </button>
          <button onClick={() => decrement()} className="decrement">
            -1
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => calc("1")}>1</button>
          <button onClick={() => calc("2")}>2</button>
          <button onClick={() => calc("3")}>3</button>
          <button onClick={() => calc("+")} className="operator">
            +
          </button>
          <button onClick={() => calc("4")}>4</button>
          <button onClick={() => calc("5")}>5</button>
          <button onClick={() => calc("6")}>6</button>
          <button onClick={() => calc("-")} className="operator">
            -
          </button>
          <button onClick={() => calc("7")}>7</button>
          <button onClick={() => calc("8")}>8</button>
          <button onClick={() => calc("9")}>9</button>
          <button onClick={() => calc("*")} className="operator">
            ×
          </button>
          <button onClick={() => calc("0")}>0</button>
          <button onClick={() => calc(".")}>,</button>
          <button onClick={() => calc("=")} className="equals">
            =
          </button>
          <button onClick={() => calc("/")} className="operator">
            ÷
          </button>
          <button onClick={() => calc("c")} className="clear">
            C
          </button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules,
          JavaScript (useState, events handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
