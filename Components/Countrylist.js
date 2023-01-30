
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
  

  


  return (
<>

{
  card.map((val)=>{

    return (
   
<div className={styles.card} >
<img className="img-fluid "  src={val.flags.png} alt=""/>
  <div className={styles.cardBody}>
      <h4 className={styles.cardTitle} key={val.id}> {val.name.common}</h4>
                 <p className={styles.cardText}>Currency:</p>
                  <p> Current date and time:</p>
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