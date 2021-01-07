import React,{useState} from "react"
import Data from "../lists/Data"
import DispalyData from './DispalyData'





function Display() {
  const [data,setData]=useState(Data)
      console.log(data)
      const removeMemory=(id)=>{
      setData((oldData)=>{
          let newData = oldData.filter((newData) => newData.id !== id);
          return newData
      })
  }
    return (
      <div>
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              padding: "40px",
              fontSize: "60px",
              color: "#003b36",
              textShadow: "2px 2px 5px #ece5f0",
            }}
          >
            DIARY
          </h1>
          {data.map((datas) => {
            return (
              <DispalyData
                key={datas.id}
                img={datas.img}
                memory={datas.memory}
                id={datas.id}
                removeMemory={() => removeMemory(datas.id)}
              />
            );
          })}
        </div>
      </div>
    );
}

export default Display
