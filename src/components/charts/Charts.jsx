import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/Local";
import { Line, Bar } from "react-chartjs-2";

const Charts = ({dataRegion, region}) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    
    }
    fetchAPI();
  }, [])

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ recovered }) => recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0,255,0,0.5)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null

  const regionRecords = dataRegion.length ? (
    <Line
      data={{
        labels: dataRegion.map(({ date }) => date),
        datasets: [
          {
            data: dataRegion.map(({ confirmed }) => confirmed),
            label: "Infected" ,
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dataRegion.map(({ recovered }) => recovered),
            label: "Recovered",
            borderColor: "green",
            backgroundColor: "rgba(0,255,0,0.5)",
            fill: true,
          },
          {
            data: dataRegion.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null

  console.log(dataRegion)

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
      <div className="chart-container">
         {!region ? lineChart : regionRecords }
      </div>
    </div>
  )
}

export default Charts