import React, { useRef } from 'react'

export default function Search(props) {
    const searchInput =useRef();
    return (
        <div className='flex shadow-xl'>
            <input type='search' value={props.searchData} onChange={() => props.eventHendler(searchInput.current.value)} ref={searchInput} className='border border-black w-full text-2xl p-3' />
            <button  onClick={props.searchWeather} className='p-3 bg-slate-700 text-white'>search</button>
        </div>
    )
}
