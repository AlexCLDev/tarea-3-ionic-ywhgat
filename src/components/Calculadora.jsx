import React, { useState } from "react";
import "./style.css";

export const Calculadora = () => {
  const [suma, Setsuma] = useState();

  const sumar = (e) => {
    e.preventDefault();
    let target = e.target;

    let num1 = Number(target.numero1.value);
    let num2 = Number(target.numero2.value);

    let suma = num1 + num2;

    Setsuma(suma);
  };

  return (
    <>
      <h2>Escribe dos numeros para sumar</h2>
      <form onSubmit={sumar} className="form">
        <input type="number" name="numero1" />
        <input type="number" name="numero2" />
        <input type="submit" value="Sumar" />
      </form>

      {suma ? <h2>Su valor es: {suma}</h2> : <h2></h2>}
    </>
  );
};
