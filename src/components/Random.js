import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false');
    
    // // API call and fetch the data 
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url); 
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // },[]);


    //call the our custom hook "useGif"
    const {gif, loading, fetchData} = useGif();


  return (
    <div className='ml-5 mr-5 md:w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center
        gap-y-5 mt-[15px]'>

        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

        {
            loading ? (<Spinner/>) : (<img src={gif} className='w-[450px]'/>)
        }

        
        <button onClick={() => fetchData()}
            className='w-10/12 bg-slate-200 text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>

    </div>
  )
}

export default Random;