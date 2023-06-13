const fruitBasket = ["apple", "mango", "orange", "pineapple"];
const fruitsList = fruitBasket.map((elem, index) => {
  return <li key={index}>{elem}</li>;
});

const Fruits = () => {
  return (
    <ul>
        {fruitsList}
    </ul>
  );
};


export default Fruits;

