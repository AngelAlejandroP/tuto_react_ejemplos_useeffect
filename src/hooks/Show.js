import React, {useState, useEffect} from "react";

function Show(){
    const [mostrar, setMostrar] = useState(true);

    return(
        <div>
            <button onClick={ () => { setMostrar(false) } }>Dejar de mostrar</button>
            {mostrar ? <MouseColor/> : null}
        </div>
    )
}

function MouseColor(){
    const [color, setColor] = useState('orange');    
      
    useEffect( () => {
        function onMouseMove(evento) {
            if(evento.clientX < window.innerWidth / 2){
                setColor('grey');
            } else{
                setColor('pink');
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        //para que no sigamos utilizando el useffect cuando ya no este en uso, siempre colocaremos...
        //es lo primero que ejecuta
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };

    /* cuando colocamos [] decimos que useEffect solamente ejecute una vez lo que esta dentro de el
       o sea que cuando cambie el estado 'color'
       podriamos colocarlo tambien como [color] */
    }, []);

    console.log('Ocurrio el render');
    return (
        <div style={{height: '100vh', background: color}}>

        </div>
    )
}

export default Show;