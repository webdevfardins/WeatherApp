import React from 'react'

export default function Result({ weatherData, historyData }) {
  const historyItem = historyData.map(
    (item, index) => {
      return <li className='text-xl cursor-pointer' key={index}>{item}</li>
    }
  )
return (
  <div className=' grid grid-cols-4 shadow-xl mt-5 p-3'>
    <div className='col-span-1  border-r-2'>
      <h1 className='text-center block font-bold'>History</h1>
      {historyItem}
    </div>
    <div className='col-span-3'>

      {
        weatherData.length !== 0 ?
          <>
            <h2 className='text-4xl text-center'>{weatherData.name}</h2>
            <div className='flex justify-around my-2'>
              <div>Max temp :{weatherData.main.temp_max} deg</div>
              <div>Min temp: {weatherData.main.temp_min} deg</div>
            </div>
            <div className='flex justify-around my-2'>
              <div>
                 <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt=""/>
              </div>
              <div>{weatherData.weather[0].main}</div>
            </div>
          </> :
          <>
            <h3 className='text-center p-3 text-5xl'>please enter the city name</h3>
          </>
      }
    </div>
  </div>
)
}
