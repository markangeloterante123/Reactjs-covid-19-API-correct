
import React, { useState, useEffect } from "react"

import { fetchRegions } from "../api/Local"

import CountUp from 'react-countup'


const Region = ({ onClick }) => {
  const [region, setRegion] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setRegion(await fetchRegions());
    };
    fetchAPI();
  }, [setRegion])
  console.log(region)

  return (
      <>
        {region.map((regions, key) => (
            <div key={key} onClick={() => onClick(regions.regions)}>
              <h3>
                <span>
                  <CountUp
                      start={0}
                      end={regions.deaths}
                      duration={3.5}
                      separator="," 
                  />
                </span> 
                {regions.regions}
              </h3>
            </div>
        ))}
      </>
  )
}

export default Region
