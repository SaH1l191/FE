import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";


const url = `https://api.giphy.com/v1/gifs/random?api_key=hJtR4qQ39XLsgnDcdI5EVr2L2X9O8O41`;

// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key={hJtR4qQ39XLsgnDcdI5EVr2L2X9O8O41}&tag=${tag}`;


const useGif =()=>{

  const [gif, setGif] = useState('');
  const [loading,setLoading] = useState(false);

  async function fetchData(tag) {
      setLoading(true);
      const{data} = await axios.get(tag? `${url}&tag=${tag}`:url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
  }

  useEffect(() => {
    fetchData('mouse');
  }, []);
 
  return{gif,loading,fetchData};
      
  
}

export default useGif;