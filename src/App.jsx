import { useState } from "react";

export default function App() {
  return <Tipcalculator />;
}

function Tipcalculator() {
  const [bill, setbill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const finalAmount = bill * ((percentage1 + percentage2) / 2 / 100);

  function totalbill(amount) {
    setbill(amount);
  }

  function reset() {
    setbill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <section className="head-container">
      <Bill bill={bill} totalbill={totalbill} />
      <Service val={percentage1} per={setPercentage1}>
        How did you like the service?
      </Service>
      <Service val={percentage2} per={setPercentage2}>
        How did your friend like the service?
      </Service>
      <Result reset={reset} bill={bill} finalAmount={finalAmount} />
    </section>
  );
}

function Bill({ bill, totalbill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        className="input-field"
        type="number"
        id="num"
        value={bill}
        onChange={(el) => {
          return totalbill(Number(el.target.value));
        }}
      />
    </div>
  );
}

function Service({ children, per, val }) {
  return (
    <div>
      <p>{children}</p>
      <select
        className="input-field"
        value={val}
        onChange={(el) => {
          return per(Number(el.target.value));
        }}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Result({ reset, bill, finalAmount }) {
  return (
    <div>
      {bill > 0 ? (
        <div>
          <h1>
            You Pay RS {(bill + finalAmount).toFixed(2)} <br /> (RS {bill} + RS{" "}
            {finalAmount.toFixed(2)} Tip)
          </h1>
        </div>
      ) : null}

      <button onClick={reset}>Reset</button>
    </div>
  );
}
