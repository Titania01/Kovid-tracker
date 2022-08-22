import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "./services/fetchStat";
import { fetchStat } from "./store/action";

import { Dispatch } from "redux";
import { initializeFetchStat } from "./store/actionAsync";
import PageLayout from "./templates/PageLayout";
import Navbar from "./molecules/Navbar";
import Card from "./molecules/Card";
import LineChart from "./molecules/Chart";
import BarChart from "./molecules/Chart";
import Table from "./molecules/Table";

// interface cardArrayType {
//   title: string;
//   value: string | number;
// }

// const labels = stat?.map((n: any) => moment(n.day).format("MMM DD"));
// const data = stat?.map((n: any) => parseInt(n.total_deposit));

function App() {
  const dispatch = useDispatch<Dispatch<any>>();
  const stat = useSelector((state: any) => state.stat);

  console.log(stat);

  const cardArray = [
    {
      title: "Total Sample Tested",
      value: stat?.totalSamplesTested,
      color: "text-indigoe",
    },
    {
      title: "Total Confirmed Cases",
      value: stat?.totalConfirmedCases,
      color: "text-coral",
    },
    {
      title: "Total Active Cases",
      value: stat?.totalActiveCases,
      color: "text-orange",
    },
    {
      title: "Discharged",
      value: stat?.discharged,
      color: "text-lemonGreen",
    },
    {
      title: "Death",
      value: stat?.death,
      color: "text-lemonBlue",
    },
  ];

  useEffect(() => {
    dispatch(initializeFetchStat());
  }, []);
  const labels = stat?.states?.map((n: any) => n.state);
  const data = stat?.states?.map((n: any) => parseInt(n.confirmedCases));
  return (
    <div className="bg-primary  h-screen overflow-hidden flex flex-col text-white">
      <div>
        <Navbar />
      </div>
      <section className="flex-grow overflow-auto">
        <div className="px-[3.5rem] pt-[2.5rem]">
          <div className="card-wrapper">
            {cardArray.map(({ color, title, value }, key) => (
              <Card color={color} title={title} value={value} key={key} />
            ))}
          </div>
        </div>
        <div className="w-11/12 mx-auto bg-white mt-12 rounded-md">
          <h2 className="text-black">Confirmed cases across the 37 states</h2>
          <BarChart data={data} label={labels} />
        </div>
        <div className="my-6" style={{ minHeight: "100vh" }}>
          <Table />
        </div>
      </section>
    </div>
  );
}

export default App;
