// import React, { useContext, useEffect, useState } from 'react'
// import "./Coin.css"
// import { useParams } from 'react-router-dom'
// import { CoinContext } from '../../context/CoinContext';
// import LineChart from '../../components/LineChart/LineChart';
// function Coin() {
//   const {coinId} = useParams()
//   const [coinData,setCoinData] = useState();
//   const [historicalData,setHistoricalData] = useState();
//   const {currency} = useContext(CoinContext)

//   const fetchCoinData = async () => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         'x-cg-demo-api-key': '	CG-74Z4m6247gVqPbxVQbhHAV14'
//       }
//     };
    
//     fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
//       .then(response => response.json())
//       .then(response => setCoinData(response))
//       .catch(err => console.error(err));
//   }

//   const fetchHistoricalData = async () => {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         'x-cg-demo-api-key': '	CG-74Z4m6247gVqPbxVQbhHAV14'
//       }
//     };
    
//     fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
//       .then(response => response.json())
//       .then(response => setHistoricalData(response))
//       .catch(err => console.error(err));
//   }

//   useEffect(()=>{
//     fetchCoinData();
//     fetchHistoricalData();

//   },[currency])

//   if(coinData && historicalData){
//   return (
//     <div className="coin">
//       <div className="coin-name">
//         <img src={coinData.image.large}></img>
//         <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
//       </div>
//       <div className="coin-chart">
//         <LineChart historicalData={historicalData}></LineChart>
//       </div>
//       <div className='coin-info'>
//       <ul>
//         <li>Crypto Market Rank</li>
//         <li>{coinData.market_cap_rank}</li>
//       </ul>
//       <ul>
//         <li>Current Price</li>
//         <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
//       </ul>
//       <ul>
//         <li>Market Cap</li>
//         <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
//       </ul>
//       <ul>
//         <li>24 Hour High</li>
//         <li>{currency.symbol} {coinData.market_data.high_24[currency.name].toLocaleString()}</li>
//       </ul>
//       <ul>
//         <li>24 Hour Low</li>
//         <li>{currency.symbol} {coinData.market_data.low_24[currency.name].toLocaleString()}</li>
//       </ul>


//       </div>

//     </div>
//   )
// }else{
//   return(
//     <div className="spinner">
//       <div className="spin"></div>
//     </div>
//   )
// }
// }

// export default Coin

import React, { useContext, useEffect, useState } from 'react';
import "./Coin.css";
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import LineChart from '../../components/LineChart/LineChart';

function Coin() {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  // Fetch coin data
  const fetchCoinData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key':import.meta.env.VITE_APP_API_KEY
        }
      };
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options);
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      console.error("Error fetching coin data:", err);
    }
  };

  // Fetch historical data
  const fetchHistoricalData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key':import.meta.env.VITE_APP_API_KEY
        }
      };
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options);
      const data = await response.json();
      setHistoricalData(data);
    } catch (err) {
      console.error("Error fetching historical data:", err);
    }
  };

  // Fetch data when currency or coinId changes
  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency, coinId]);

  if (!coinData || !historicalData) {
    return (
      <div className="spinner">
        <marquee>Data is getting fetched.Thanks For Waiting</marquee>
        <div className="spin"></div>
      </div>
    );
  }

  return (
    <div className="coin">
      <div className="coin-name">
        <img src={coinData.image.large} alt={coinData.name} />
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData={historicalData} />
      </div>
      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price</li>
          <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>Market Cap</li>
          <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24 Hour High</li>
          <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24 Hour Low</li>
          <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
        </ul>
      </div>
    </div>
  );
}

export default Coin;
