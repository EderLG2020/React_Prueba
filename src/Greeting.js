export function Greeting() {
  const miNombre = "Mi nombre";
  const miObjeto = {
    primerNombre: "Eder",
    segundoNombre: "Nexón",
  };

  function sumar(x, y) {
    return x + y;
  }

  return (
    <h1>
      <p>Hola mundo soy {miNombre}</p>
      <p>{JSON.stringify(miObjeto)}</p>
      <p>{miObjeto.primerNombre}</p>
      <p>{sumar(20, 30)}</p>
    </h1>
  );
}

export function User() {
  return <h3>HOLA COMPONENTE USER</h3>;
}
