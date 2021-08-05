const jokes = document.querySelector("jokes");
const button = document.querySelector('button');
// button.addEventListener('click',)

const addNewJoke = () => {
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke);
    jokes.append(newLI)

}
const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  return res.data.joke;
};

// fetch("https://api.cryptonator.com/api/ticker/btc-usd").then((res) => {
//   console.log("RESPONSE, waiting to parse", res)
//    return res.json()
// })
// .then(data=>{
//     console.log("Data parsed...", data)
//     console.log(data.ticker.price)
// })
// .catch (e => {
//     console.log ("oh, no!!! ERROR!!!", e)
// })
// ----------------------------------------

// const fetchBitcoinPrice = async () => {
//     const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//     const data = await res.json()
//     console.log(data.ticker.price)

// }

// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
// .then(res=>{
//     console.log(res.data.ticker.price)
// })
// .catch(err=>{
//     console.log('Error', err)
// })

// const fetchBitcoinPrice=async()=>{
//     try{
//         const res=await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//         console.log(res.data.ticker.price)
//     } catch(e){
//         console.log("ERROR!", e)
//     }
// }
