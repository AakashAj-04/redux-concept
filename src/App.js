import "./App.css";
import { compose, pipe } from "lodash/fp";
import Counter from "./feature/counter/Counter";

//Function Composition
let input = "    Welcome    ";
const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const transform = pipe(trim, wrap("span"));
console.log(transform(input));
// const result = wrapInDiv(trim(input));

//Immutable and Deep Object Copy ;
const person = {
  name: "Aakash Aj",
  address: {
    city: "Chennai",
    country: "India",
  },
};

const updated = {
  ...person,
  address: {
    ...person.address,
    city: "coimbatore",
  },
  name: "AJ",
};
console.log("Person", person);
console.log("updated", updated);

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
