
import React, { createContext, useEffect, useState } from "react";
export const Apicontext = createContext();
export function Usercontext({ children }) {
const [plants, setPlants] = useState([]);
const[data,setData]=useState([])
useEffect(()=>{
fetch(process.env.PUBLIC_URL + "/plantapis.json")
  .then((res) => res.json())
  .then((data) => setPlants(data))
  .catch((error) => console.error("Fetch failed:", error));
},[])
console.log(plants);
 const fun = (val) => {
    const exist = data.findIndex((x) => x.id === val.id);
    if (exist >= 0) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === val.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setData([...data, { ...val, quantity: 1 }]);
    }
  };
  return (
    <Apicontext.Provider value={{ plants,fun,data,setData}}>
      {children}
    </Apicontext.Provider>
  );
}
