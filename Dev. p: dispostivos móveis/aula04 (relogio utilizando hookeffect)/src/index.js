import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));


function Clock2(props){

  const [data, setData] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setData(new Date()), 1000)

    //useEffect pode retornar uma function para quando o componente
    //for desmontado

    return () => {
      clearInterval(id)
    } //toda vez que for desmontar, irá limpar
  }, [])

  return (
    <div>
      <h1>Olá!</h1>
      <h2>Hora: {data.toLocaleTimeString()}.</h2>
    </div>
  );
}

function App(){
  return (
    <div>
      <Clock2 />
    </div>
  )
}

root.render(
  <App />
);
