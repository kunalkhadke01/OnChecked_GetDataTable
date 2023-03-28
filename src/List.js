function Listofemploye({ list }) {
  console.log(list);
  return (
    <div className="wrapper">
      <ul className="mat_list card scrollable">
        <div className="mat_list_title">
          <h1>Selected Employes</h1>
        </div>
        {list &&
          list.map((val, i) => {
            return <li key={i}>{val.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default Listofemploye;
