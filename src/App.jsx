import React, { useState } from 'react';


function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador-container">
      <h2 className="contador-title">Contador</h2>
      <p className="contador-value">Valor: {contador}</p>
      <button className="contador-button incrementar" onClick={incrementar}>Incrementar</button>
      <button className="contador-button decrementar" onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;
