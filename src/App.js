import { objectToArray } from "helprjs";
import _ from "lodash";

function App() {
  const result = objectToArray({
    firstName: "Mike",
    lastName: "Jones"
  });

  console.log("result", result);
  let obj = {};
  obj[result[0]] = result[1];
  console.log(obj);
  const objTEst = {
    firstName: "Mike",
    lastName: "Jones"
  };
  const lodashResult = _.values(objTEst);
  console.log(lodashResult);
  let obj1 = {};
  obj1[lodashResult[0]] = lodashResult[1];
  console.log("Lodash", obj1);

  return (
    <div className="App">
      <h1>objectToArray</h1>
      <p>check console.log</p>
    </div>
  );
}

export default App;
