import React, { useEffect, useState } from 'react'
import Card from './Card'

const Navbar = () => {
    const [search,setSearch]=useState("india")
    const [newsData,setNewsData]=useState("india")
    const API_KEY="367389a723244e52bbcc0a283f663b64";
    const getData=async()=>{
        const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const jsonData=await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }
    useEffect(()=>{
      getData()
    },[])
    const handleInput=(e)=>{
        console.log(e.target.value)
        setSearch(e.target.value);
    }
    const userInput=(event)=>{
      setSearch(event.target.value)
    }
  return (
    <div>
      <nav className='flex items-center justify-between bg-green-500 px-6 py-4'>
        <div>
            <h1 className='font-bold text-white text-2xl'>Global News</h1>
        </div>
        <ul className='flex space-x-6'>
            <a className='text-white text-lg cursor-pointer hover:underline'>All News</a>
            <a className='text-white text-lg cursor-pointer hover:underline '>Trending</a>
        </ul>
        <div className='flex items-center space-x-2'>
            <input className='px-3 py-2 border border-gray-300 rounded-md' type='text' placeholder='search new' value={search} onChange={handleInput}/>
            <button onClick={getData} className='bg-white text-red-500 px-4 py-2 rounded-md hover:bg-gray-100'>Search</button>
        </div>
      </nav>
      <div className='categorybtn flex justify-center space-x-4 mt-4'>
        <button onClick={userInput} value="Sports" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Sports</button>
        <button onClick={userInput} value="Politics" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Politics</button>
        <button onClick={userInput} value="Entertainment" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Entertainment</button>
        <button onClick={userInput} value="Health" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Health</button>
        <button onClick={userInput} value="Fitness" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Fitness</button>
      </div>
      <div>
        {newsData? <Card data={newsData}/>:null}
        
      </div>
    </div>
  )
}

export default Navbar
