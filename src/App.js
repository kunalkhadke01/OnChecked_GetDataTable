import { useState } from "react";
import "./styles.css";
import Listofemploye from "./List";
const tabledata = [
  {
    name: "Tiger Nixon",
    position: "System Architect",
    id: 1,
    select: false
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    id: 2,
    select: false
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    id: 3,
    select: false
  }
];
export default function App() {
  const [tableval, setTbleval] = useState([]);
  // const [list, seList] = useState([]);

  const onRowclick = (e, idd) => {
    console.log(e.target.checked);
    console.log(e.target.value, e.target.id, idd);
    const valueofinput = e.target.name.split(",");
    if (e.target.id == idd && e.target.checked === true) {
      // if (e.target.value === "false") {
      var trapval = tableval.concat({
        name: valueofinput[0],
        id: valueofinput[1],
        select: e.target.checked
      });
      setTbleval(trapval);
    }
    if (e.target.id == idd && e.target.checked === false) {
      var trapfilter = tableval.filter((val, i) => {
        return tableval.indexOf(val) !== idd;
      });
      setTbleval(trapfilter);
    }
  };

  console.log(tableval);
  return (
    <div className="App">
      <table id="myTable">
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>

        {tabledata &&
          tabledata.map((val, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td>
                    <input
                      key={i}
                      id={i}
                      type="checkbox"
                      name={[val.name, val.id, val.position]}
                      // onClick={() => {
                      //   setChecked(!checked);
                      // }}
                      onChange={(e) => onRowclick(e, i)}
                    />
                  </td>
                  <td>{val.name}</td>
                  <td>{val.position}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <div>
        <Listofemploye list={tableval} />
      </div>
    </div>
  );
}
