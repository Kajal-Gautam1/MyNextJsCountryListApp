import Image from "next/image";
import styles from "../styles/Detailcard.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Detailcard = () => {
  const [card, setCard] = useState([]);
  const [neighbourCountries0, setneighbourCountries0] = useState([]);
  const [neighbourCountries1, setneighbourCountries1] = useState([]);
  const [neighbourCountries2, setneighbourCountries2] = useState([]);
  const [neighbourCountries3, setneighbourCountries3] = useState([]);
  const [neighbourCountries4, setneighbourCountries4] = useState([]);
  const [neighbourCountries5, setneighbourCountries5] = useState([]);

  let router = useRouter();
  let querystring = router.asPath;
  console.log(querystring);

  let paramString = querystring.split("?")[1];
  let queryString = new URLSearchParams(paramString);
  let countrycode = "";
  for (let pair of queryString.entries()) {
    console.log("Key is:" + pair[0]);
    countrycode = pair[1];
    console.log("Value is:" + countrycode);
  }

  console.log(countrycode);

  const fetchDataa = () => {
    fetch(`https://restcountries.com/v3.1/alpha/${countrycode}`)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data[0]);
        setCard(data[0]);

        if (data[0].borders) {
          //fetchingn the flag of neighbourcountry1
          if (data[0].borders[0]) {
            let neighbr0 = data[0].borders[0];
            console.log(neighbr0);
            fetch(`https://restcountries.com/v3.1/alpha/${neighbr0}`)
              .then((Response) => {
                return Response.json();
              })
              .then((nbrdata0) => {
                console.log(nbrdata0[0]);
                setneighbourCountries0(nbrdata0[0]);
              });
          }
          //fetchingn the flag of neighbourcountry2

          if (data[0].borders[1]) {
            let neighbr1 = data[0].borders[1];
            console.log(neighbr1);
            fetch(`https://restcountries.com/v3.1/alpha/${neighbr1}`)
              .then((Response) => {
                return Response.json();
              })
              .then((nbrdata1) => {
                console.log(nbrdata1[0]);
                setneighbourCountries1(nbrdata1[0]);
              });
          }
          //fetchingn the flag of neighbourcountry3
          let neighbr2 = data[0].borders[2];
          console.log(neighbr2);
          fetch(`https://restcountries.com/v3.1/alpha/${neighbr2}`)
            .then((Response) => {
              return Response.json();
            })
            .then((nbrdata2) => {
              console.log(nbrdata2[0]);
              setneighbourCountries2(nbrdata2[0]);
            });

          //fetchingn the flag of neighbourcountry4
          let neighbr3 = data[0].borders[3];
          console.log(neighbr3);
          fetch(`https://restcountries.com/v3.1/alpha/${neighbr3}`)
            .then((Response) => {
              return Response.json();
            })
            .then((nbrdata3) => {
              console.log(nbrdata3[0]);
              setneighbourCountries3(nbrdata3[0]);
            });

          //fetchingn the flag of neighbourcountry5
          let neighbr4 = data[0].borders[4];
          console.log(neighbr4);
          fetch(`https://restcountries.com/v3.1/alpha/${neighbr4}`)
            .then((Response) => {
              return Response.json();
            })
            .then((nbrdata4) => {
              console.log(nbrdata4[0]);
              setneighbourCountries4(nbrdata4[0]);
            });

          //fetchingn the flag of neighbourcountry6
          let neighbr5 = data[0].borders[5];
          console.log(neighbr5);
          fetch(`https://restcountries.com/v3.1/alpha/${neighbr5}`)
            .then((Response) => {
              return Response.json();
            })
            .then((nbrdata5) => {
              console.log(nbrdata5[0]);
              setneighbourCountries5(nbrdata5[0]);
            });
        }
      });
  };

  useEffect(() => {
    fetchDataa(); //use to render the data after loading
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.countryname}>{card?.name?.common}</h2>
        <div className={styles.card}>
          <img className="img-fluid " src={card?.flags?.png} alt="" />
          <div className={styles.cardBody}>
            <p className="NativeName"> </p>
            <p className={styles.p}>Capital: {card?.capital}</p>
            <p className={styles.p}>Population: {card?.population} </p>
            <p className={styles.p}>Region: {card?.region} </p>
            <div className={styles.pp}>
              <div>
                <span className={styles.p}>SubRegion: </span>
              </div>
              <div>
                <span className={styles.p}>
                {card?.subregion}
                </span>
              </div>
            </div>

            <p className={styles.p}>Area: {card?.area}</p>
            <p className={styles.p}>
              Languages:{card.languages != undefined
                ? Object.values(card.languages) + " "
                : ""}
            </p>
            <div className={styles.pp}>
              <div>
                <span className={styles.p}>Currencies:</span>
              </div>
              <div>
                <span className={styles.p}>
                  {card.currencies != undefined
                    ? Object.values(card.currencies)[0].name
                    : ""}
                </span>
              </div>
            </div>
             <p className={styles.p}>Timezones: {card?.timezones}</p>
          </div>
        </div>
        <br />
        <br />
        <div className={styles.neighbourCountries}>
          <h2 className={styles.heading}>Neighbour Countries</h2>
          <br />
          <div className={styles.row}>
            {neighbourCountries0?.flags?.png != undefined ? (
              <div className={styles.column}>
                <img
                  className={styles.imgfluid}
                  src={neighbourCountries0?.flags?.png}
                />
              </div>
            ) : null}
            {neighbourCountries1?.flags?.png != undefined ? (
              <div className={styles.column}>
                <img
                  className={styles.imgfluid}
                  src={neighbourCountries1?.flags?.png}
                />
              </div>
            ) : null}
           {neighbourCountries2?.flags?.png != undefined ? (
              <div className={styles.column}>
                <img
                  className={styles.imgfluid}
                  src={neighbourCountries2?.flags?.png}
                />
              </div>
            ) : null}
            
          </div>
          <br />

          <div className={styles.row}>
          {neighbourCountries3?.flags?.png != undefined ? (
              <div className={styles.column}>
                <img
                  className={styles.imgfluid}
                  src={neighbourCountries3?.flags?.png}
                />
              </div>
            ) : null}
           {neighbourCountries4?.flags?.png != undefined ? (
              <div className={styles.column}>
                <img
                  className={styles.imgfluid}
                  src={neighbourCountries4?.flags?.png}
                />
              </div>
            ) : null}
            {neighbourCountries5?.flags?.png != undefined ? (
              <div className={styles.column}>
                <img
                  className={styles.imgfluid}
                  src={neighbourCountries5?.flags?.png}
                />
              </div>
            ) : null}
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Detailcard;
