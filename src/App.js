import "./App.css";
import React, { useEffect, useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import { getTemples } from "./actions/temples";
import Select, { components } from "react-select";

const header = [{ lebel: "temple name", key: "name" }];

function App() {
  const [data, setData] = useState({
    ROY: [],
    RAN: [],
    RAY: [],
    YAL: [],
  });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getTemples("ROY,RAN,RAY,YAL", setData);
  }, []);

  return (
    <div>
      {/* {data?.ROY?.map(val => (
        <div>{val}</div>
      ))} */}
      {/* <button onClick={e => exportToCSV(e, data?.ROY, "roy-ed.csv")}>Download Roy Ed</button> */}
      <CSVLink filename="roy-ed.csv" data={data.ROY} target="_blank">
        Download
      </CSVLink>
    </div>
  );
}

export default App;
