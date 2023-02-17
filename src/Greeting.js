export function Greeting(props) {
  return (
    <h1>
      <p>{props.title}</p>
    </h1>
  );
}

export function User({ name, amound, married, points, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{amound}</p>
      <p>{married ? "en caso de si(TRUE)" : "en caso de no(FALSE)"}</p>
      <ul>
        <li>City:{address.departamento}</li>
        <li>City:{address.pais}</li>
      </ul>
      <h1>{points}</h1>
      <h1>{greet}</h1>
    </div>
  );
}
