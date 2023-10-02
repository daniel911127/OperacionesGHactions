import {useState} from 'react'
import '../styles/components/Counter.css'

function Counter() {
  const[counter,setCounter]=useState(0)
  const [valorInput1, setValorInput1] = useState('');
  const [valorInput2, setValorInput2] = useState('');

  const handleInput1Change = (event) => {
    setValorInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setValorInput2(event.target.value);
  };

  const Suma= () => {
    
    const suma = parseInt(valorInput1) + parseInt(valorInput2);
  setCounter(suma);
  
  };

  const Resta = () => {
    const resta = parseInt(valorInput1) - parseInt(valorInput2);
  setCounter(resta);
  
  };

  const Multiplicacion= () => {
    const multi = parseInt(valorInput1) * parseInt(valorInput2);
  setCounter(multi);
  };

  const Division = () => {
    const div = parseInt(valorInput1) / parseInt(valorInput2);
  setCounter(div);
  };
  const Limpiar = () => {
  setCounter(0);
  };
  return (
    <div className='containerCounter'>
        <h1 className='resultado'>{counter}</h1>
        <label>
          Numero 1:
          <input type="number" value={valorInput1} onChange={handleInput1Change} />
        </label>
        <br />
        <label>
          Numero 2:
          <input type="number" value={valorInput2} onChange={handleInput2Change} />
        </label>
        <br />
        <div className='operaciones'>
        <button onClick={Suma}>suma</button>
        <button onClick={Resta}>resta</button>
        <button onClick={Multiplicacion}>multiplicacion</button>
        <button onClick={Division}>division</button>
        </div>
        <button onClick={Limpiar}>CE</button>
    </div>
  )
}

export default Counter
