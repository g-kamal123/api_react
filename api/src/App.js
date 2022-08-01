// import './App.css';
import classes from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [data1, setData1] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setData1(res));
  }, []);

  console.log(data1);
  return (
    <table className={classes.app}>
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>Address</th>
        <th>username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Company</th>
      </tr>
      {data1.length > 0 &&
        data1.map((item) => (
          <>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                {Object.keys(item.address).map((item1) =>
                  item1 !== "geo" ? (
                    <p>
                      {item1}:{item.address[item1]}
                    </p>
                  ) : (
                    <p>
                      {item1}:
                      {Object.keys(item.address.geo).map((it) => (
                        <span>
                          {" "}
                          {it}:{item.address.geo[it]}{" "}
                        </span>
                      ))}
                    </p>
                  )
                )}
              </td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.company.name}</td>
            </tr>
          </>
        ))}
    </table>
  );
}

export default App;
