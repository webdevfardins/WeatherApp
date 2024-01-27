
import './App.css';
import Search from './Components/Search';
import Result from './Components/Result';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [search, setSearch] = useState("")
  const [weather, setWethar] = useState([])
  const [history, setHistory] = useState([])

  const changeSearch = (value) => {
    setSearch(value)
  }
  // const getWetherData = () => {
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q={search},{state code},{country code}&appid={API key}`)
  //   .then((response)=>{
  //     console.log(response)
  //   }
  // ).catch((error)=>{
  //   console.log(error)
  // })}
  const searchWeatherHandler = () => {
    if(history.indexOf(search)=== -1){
      setHistory(
        [
          ...history,
          search
        ]
      )
    }
    if (search !== "") {
      axios.get  (`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
        .then((response) => {
          setWethar(response.data)
          console.log(response.data)
        }
        ).catch((error) => {
          console.log(error)
        })
    }
  }
  // useEffect(
  //   () => {
  //     if (search !== "") {
  //       getWetherData();
  //     }

  //   }, [search]
  // )
  return (
    <div className="max-w-[1240px] mx-auto mt-2 p-3 ">

      <Search searchData={search} eventHendler={changeSearch} searchWeather={searchWeatherHandler} />
      <Result weatherData={weather} historyData={history}/>

    </div>
  );
}

export default App;
