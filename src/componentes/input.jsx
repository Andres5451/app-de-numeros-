import { useState } from "react";

export default function Input() {
    const [mensaje, setMensaje] = useState("");

    const esCapicua = (texto) => {
        const limpio = texto.toLowerCase().replace(/[^a-z0-9]/g, ''); 
        return limpio === limpio.split('').reverse().join(''); 
    };

    return (
        <div>
            <input
                type="text"
                value={mensaje}
                placeholder="Ingrese texto o número"
                onChange={e => setMensaje(e.target.value)} 
            />
            <h1>{mensaje}</h1>
            {mensaje && ( 
                <h2>{esCapicua(mensaje) ? '¡Es un capicúa!' : 'No es un capicúa'}</h2>
            )}
        </div>
    );
}

