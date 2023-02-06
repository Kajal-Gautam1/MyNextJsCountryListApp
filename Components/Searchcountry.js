import styles from "../styles/searchcountry.module.css";
import React, { useEffect, useState } from "react";
import index from "@/pages";

const SearchCountry = () => {
  const [currCountry, setCountry] = useState("");
  const [newcurrCountry, newsetCountry] = useState();
  const [data, setData] = useState([]);


  const searchCountry = (event) => {
    setCountry(event.target.value);
  };


  const onSubmit = () => {
    newsetCountry(currCountry);
    console.log(newcurrCountry);


    let url = `https://restcountries.com/v3.1/name/${currCountry}?fullText=true`;

    fetch(url)
      .then((Response) => Response.json())
      .then((res) => {
        console.log(res[0]);
        setData(res[0]);
        console.log(data);
console.log(Response.status);
        }    )    
        
      
         
      }


  
      function calcTime(Country, offset) {
  
        let len=offset.length;
      let newstring=offset.substring(3,len+1);
       let offset1=newstring.replace(":",".")
      
          let  d = new Date();
          let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
          let  nd = new Date(utc + (3600000*offset1));
          let mytime=" "+ nd.toLocaleString();
          // setcurrentdate(mytime);
          return mytime;
          }
      
  

  return (
    <>
      <h1>Countries</h1>
      <div className={styles.searchBox}>
        <input
          placeholder="search countries"
          className={styles.searchtext}
          onChange={searchCountry}
          value={currCountry}
        />
        <button className={styles.serchbtn} onClick={onSubmit}>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <br />

         { 
         
         data.name && <div className={styles.card} > 
<img className={styles.imgfluid}   src={data?.flags?.png} alt=""/>
  <div className={styles.cardBody}>
      <h4 className={styles.cardTitle}> {data?.name?.common}</h4>
                 <p className={styles.cardText}>Currency:{data.currencies!=undefined?Object.values(data.currencies)[0].name:""}</p>
                  <p className={styles.timezones}> Current date and time: {calcTime(data?.name?.common,data?.timezones[0])}</p>
                 <a href={data?.maps?.googleMaps}>
                  <button className={styles.showmap}>Show Map</button>
                 </a>
                 <a href={`/Detailpage?country=${data?.cca3}`}  >
                 <button className={styles.detail}>Details</button>
                 </a>
          </div>
</div>}

            </>
  );
};
export default SearchCountry;
