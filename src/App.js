import { useCallback, useState } from "react";
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

  const onRowclick = (e) => {
    // console.log(e.target.value);
    const valueofinput = e.target.name.split(",");
    // console.log(e.target.value, valueofinput);
    if (e.target.value === "false") {
      var trapval = tableval.concat({
        name: valueofinput[0],
        id: valueofinput[1],
        select: e.target.value
      });
      setTbleval(trapval);
    }
  };

  // const Listitem = useCallback(() => {
  //   // console.log(tableval)
  //   return listofemploye(tableval);
  // }, [tableval]);
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
                      value={val.select}
                      name={[val.name, val.id, val.position]}
                      onChange={(e) => onRowclick(e)}
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
