import {useState, useEffect} from 'react'
import EjemploProps from './EjemploProps';

export default function EjemploHooks() {
  const[cuenta,setCuenta] = useState(0);
  const handleClick = () => {
    setCuenta(cuenta + 1);
    console.log(cuenta);
  }
  useEffect(()=>{
    console.log("Ejecuto useEffect luego de cargar el DOM");
  }, [])
  return (
    <div>
      {cuenta === 0 ? (
        <h2>Contamos clicks?</h2>
      ) : (
      <EjemploProps cuenta={cuenta}></EjemploProps>
      )}
        <button type="button" class="btn btn-primary" onClick={handleClick}>click</button>
    </div>
  )
}
