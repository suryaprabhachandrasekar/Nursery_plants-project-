import  { useEffect, useState } from 'react'

export default function Usefetchh(url) {
   
    
        const [datas,setDatas] = useState([]) 
        async function fun1(){
          let geturl=await fetch(url)
          // .then((response)=>response.json())
          // .then((data)=>setDatas(data))
          let pass=await geturl.json()
          setDatas(pass)
        }
        useEffect(()=>{
          fun1()
        }
        ,[url])
  
  return datas;
    
}

