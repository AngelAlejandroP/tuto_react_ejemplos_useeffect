import React, { useState, useEffect } from "react";

function Contador() {
    const inicio = 0;
    const [cont, setCont] = useState(inicio);

    //useEffect se ejecuta cada vez que se renderisa
    //y se renderiza cada vez que useState cambia
    useEffect(() => {
        console.log('la cuanta es ', { cont })
    })

    return (
        <div >
            <h1>La cuenta es de: {cont}</h1>
            <button onClick={() => { setCont(cont + 1) }}>  Aumento     </button> <br />
            <button onClick={() => { setCont(cont - 1) }}>  Restar      </button> <br />
            <button onClick={() => { setCont(cont === 0) }}> Reiniciar  </button> <br />
        </div>
    )
}

export default Contador;