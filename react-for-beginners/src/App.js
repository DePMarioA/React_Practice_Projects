import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [time, setTime] = useState("Welcome");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((res) =>
      res.json().then((json) => {
        const lst = ["Tezos", "Bitcoin", "Ethereum", "Cardano", "XRP"];
        setCoins(json.filter((val) => lst.some((item) => val.name === item)));
        setLoading(false);
      })
    );
  }, []);
  useEffect(() => {
    setInterval(getClock, 1000);
  }, []);

  function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    let hour = date.getHours();
    if (hour > 12) {
      hour = hour - 12;
    }

    const hours = String(hour).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    setTime((sec) => `${hours}:${minutes}:${seconds}`);
  }

  return (
    <div>
      <h1>
        {loading ? "" : time} <br />
        CryptoCoins
      </h1>
      {loading ? <strong>Loading...</strong> : null}
      <ol>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price.toFixed(3)}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
