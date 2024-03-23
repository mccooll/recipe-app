function Ingredient({ name, amount }) {
  return (
    <li key={name}>
      {amount} {name}
    </li>
  )
}

export default Ingredient;

