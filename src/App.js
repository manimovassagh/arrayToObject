import { objectToArray } from "helprjs";

function App() {
  const result = objectToArray({
    firstName: "Mike",
    lastName: "Jones"
  });

  console.log("result", result);
  let obj = {};
  obj[result[0]] = result[1];
  console.log(obj);

  return (
    <div className="App">
      <h1>objectToArray</h1>
      <p>check console.log</p>
    </div>
  );
}

export default App;
