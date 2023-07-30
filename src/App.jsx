import { useState } from "react";

export default function App() {
  const [bill, setbill] = useState(0);

  function totalbill(amount) {
    setbill(amount);
  }

  console.log(bill);

  return (
    <section className="head-container">
      <Bill totalbill={totalbill} />
      <Service bill={bill} totalbill={totalbill}>
        How did you like the service?
      </Service>
      <Service bill={bill} totalbill={totalbill}>
        How did your friend like the service?
      </Service>
      <Result bill={bill} />
    </section>
  );
}

function Bill({ totalbill }) {
  return (
    <div>
      <p>How much was the bill?</p>
      <input
        className="input-field"
        type="number"
        id="num"
        onChange={(el) => totalbill(Number(el.target.value))}
      />
    </div>
  );
}

function Service({ children, bill, totalbill }) {
  return (
    <div>
      <p>{children}</p>
      <select
        className="input-field"
        onChange={(el) => {
          const tip = el.target.value / 2;
          const amount = tip + bill;
          return totalbill(Number(amount));
        }}
      >
        <option value="0">--choose options--</option>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Result({ bill }) {
  return (
    <div>
      {bill ? <h1>{bill}</h1> : null}
      <button>Reset</button>
    </div>
  );
}
