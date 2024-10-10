import React, { useState } from 'react';

function App() {
  const [textoIngresado, setTextoIngresado] = useState('');
  const [esCapicua, setEsCapicua] = useState(null); 

  const manejarCambioTexto = (evento) => {
    const nuevoTexto = evento.target.value; 
    setTextoIngresado(nuevoTexto); 

    const textoLimpio = nuevoTexto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoInvertido = textoLimpio.split('').reverse().join('');
    setEsCapicua(textoLimpio === textoInvertido); 
  };

  return (
    <div>
      <h1>¿Es un capicúa?</h1>
      <textarea 
        value={textoIngresado} 
        onChange={manejarCambioTexto} 
        placeholder="Escribe algo aquí" 
      />
      {esCapicua !== null && ( 
        <h2>{esCapicua ? '¡Es un capicúa!' : 'No es un capicúa'}</h2>
      )}
    </div>
  );
}

export default App;
