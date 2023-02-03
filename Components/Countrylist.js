
import styles from '../styles/countrylist.module.css';
import React,{useEffect, useState } from 'react';
import Link from 'next/link';

const Countrylist=()=>{
const [card,setCard] = useState([]);
 const fetchData =()=>{
  fetch("https://restcountries.com/v3.1/all").then((Response)=>{
    return Response.json();
  }).then((data)=>{
    setCard(data);
  
  })
  }

  useEffect(()=>{
    fetchData();//use to render the data after loading
  },[]);
  
  
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

{
  card.map((val)=>{

    return (
<div className={styles.card} >
<img className={styles.imgfluid}  src={val.flags.png} alt=""/>
  <div className={styles.cardBody}>
      <h4 className={styles.cardTitle} key={val.id}> {val.name.common}</h4>
                 <p className={styles.cardText}>Currency: {val.currencies!=undefined?Object.values(val.currencies)[0].name:""}</p>
                  <p className={styles.timezones}> Current date and time: {calcTime(val.name.common,val.timezones[0])}</p>
                 <a href={val.maps.googleMaps}>
                  <button className={styles.showmap}>Show Map</button>
                 </a>
                 <Link href={`/Detailpage?country=${val.cca3}`}>
                 <button className={styles.detail}>Details</button>
                 </Link>
                 
          </div>
    
      
</div>
  

    );
  })
}
</>
  );
}

export default Countrylist;
