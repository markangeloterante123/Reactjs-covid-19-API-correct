
import axios from "axios"


const url = "https://covid19-api-philippines.herokuapp.com/api"

export const fetchData = async () => {
  
  try {
    const {
      data:{data, last_update},
    } = await axios.get(`${url}/summary`)

    return {
      data,
      last_update,
    }
  } 
  
  catch (error) {
    console.log(error);
  }
}

export const fetchDailyData = async (region) => {
  
  let changeableUrl = `${url}/timeline`;
  if (region) {
    changeableUrl = `${url}/timeline?region=${region}`;
  }

  try {
    const { data:{ data } } = await axios.get(changeableUrl)
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.cases,
      deaths: dailyData.died,
      recovered: dailyData.recovered,
      date: dailyData.date,
    }))
    return modifiedData
  } catch (error) {}
}

export const fetchRegions = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(`${url}/top-regions`);
    const modifiedData = data.map((regions) => ({
      regions:regions.region,
      confirmed:regions.cases,
      deaths: regions.deaths,
      recovered: regions.recovered,
    }))
    return modifiedData
  } catch (error) {
    console.log(error);
  }
}