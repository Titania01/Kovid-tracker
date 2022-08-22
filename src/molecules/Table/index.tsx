import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBox from "../SearchBox";
import "./Table.scss";

const Table = () => {
  const stat = useSelector((state: any) => state.stat);
  const [form, setForm] = useState("");

  const header = [
    "SN",
    "State",
    "Confirmed Cases",
    "Cases on Admission",
    "Discharged",
    "Death",
  ];

  const tableData = stat?.states?.map((n: any) => n);
  const filteredData = stat?.states?.filter((data: any) =>
    data.state.toLowerCase().includes(form.toLowerCase())
  );

  const dataToShow = filteredData || tableData;

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3>Cases per state</h3>
        <div className="w-[25rem]">
          <SearchBox value={form} onChange={(e) => setForm(e.target.value)} />
        </div>
      </div>
      <table>
        <tr>
          {header.map((h) => (
            <th>{h}</th>
          ))}
        </tr>
        {dataToShow?.map((val: any, key: number) => {
          return (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{val.state}</td>
              <td>{val.confirmedCases}</td>
              <td>{val.casesOnAdmission}</td>
              <td>{val.discharged}</td>
              <td>{val.death}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
