
import styles from '../styles/countrylist.module.css';
import React,{useEffect, useState } from 'react';
import Link from 'next/link';

const Countrylist=()=>{
const [card,setCard] = useState([]);
// const [timezone,settimezone]=useState('');
// const [country,setcountry]=useState('');
// const [currentdate,setcurrentdate]=useState('');

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
  
  
  // function calcTime(Country, offset) {
  
  //   let len=timezone.length;
  // let newstring=timezone.substring(3,len+1);
  //  offset=newstring.replace(":",".")
  
  //     let  d = new Date();
  //     let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  //     let  nd = new Date(utc + (3600000*offset));
  //     let mytime=" "+ nd.toLocaleString();
  //     setcurrentdate(mytime);
  //     console.log(currentdate)
  //     return mytime;
  //     }
  
  
  


  return (
<>

{
  card.map((val)=>{

    return (
<div className={styles.card} >
<img className={styles.imgfluid}  src={val.flags.png} alt=""/>
  <div className={styles.cardBody}>
      <h4 className={styles.cardTitle} key={val.id}> {val.name.common}</h4>
                 <p className={styles.cardText}>Currency:</p>
                  <p> Timezones: {val.timezones}</p>
                 <a href={val.maps.googleMaps}>
                  <button className={styles.showmap}>Show Map</button>
                 </a>
                 <Link href={`/Detailpage?country=${val.cca3}`}>
                 <button className={styles.detail}>Details</button>
                 </Link>
                 
          </div>
        
          {/* { settimezone(val.timezones[0])}
{setcountry(val.name.common)}
{calcTime(timezone,country)} */}

</div>


    );
  })
}
</>
  );
}

export default Countrylist;
