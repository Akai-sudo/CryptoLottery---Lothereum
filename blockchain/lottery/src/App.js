//import Dashboard from 'app-b-dashboard/container'
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { LOTTERY_ABI, LOTTERY_ADDRESS } from './config';

function App() {
  const [account, setAccount] = useState(); // state variable to set account.
  const [randomNum, setRandomNumber] = useState();
  const [bet, setBet] = useState();
  //const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function load() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();   
      setAccount(accounts[0]);

      const contract = new web3.eth.Contract(LOTTERY_ABI, LOTTERY_ADDRESS);
      
      console.log(LOTTERY_ABI);
      console.log(LOTTERY_ADDRESS);
      console.log(contract.methods);  

      /*contract.methods.rand().send().then((res) => {
        alert(res);
      }).catch((err) => {
        alert(err);
      })*/
      setRandomNumber(await contract.methods.rand().call());
      setBet(await contract.methods.getterBet().send({from: LOTTERY_ADDRESS}));
    }
    
    load();
   }, []);
  
   return (
     <>
     <div>
       V primeru uspešne stave ti nakažemo na vaš naslov: {account}

     <title>Lothereum</title>
       <link rel="stylesheet" href="index.css"/>
        <div>Zmagovalna cifra je: {randomNum}</div>
        <div>Stavil si: {bet}</div>
       <div className="gap-20"></div> 
       <h1>LOTHEREUM</h1>
       <h2>Choose your ticket</h2>
       <div className="gap-20"></div> 
     <ul>
       <li>
         <a href="#">
           <h2>Ticket #1</h2>
           <div className="gap-20"></div> 
           <p>108 20 507</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #2</h2>
           <div className="gap-20"></div> 
           <p>302 551 08</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #3</h2>
           <div className="gap-20"></div> 
           <p>74 901 628</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #4</h2>
           <div className="gap-20"></div> 
           <p>101 99 341</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #5</h2>
           <div className="gap-20"></div> 
           <p>48 990 224</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #6</h2>
           <div className="gap-20"></div> 
           <p>90 35 778</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #7</h2>
           <div className="gap-20"></div> 
           <p>128 456 789</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #8</h2>
           <div className="gap-20"></div> 
           <p>27 667 259</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #9</h2>
           <div className="gap-20"></div> 
           <p>999 126 345</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #10</h2>
           <div className="gap-20"></div> 
           <p>09 677 111</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #11</h2>
           <div className="gap-20"></div> 
           <p>34 702 729</p>
         </a>
       </li>
       <li>
         <a href="#">
           <h2>Ticket #12</h2>
           <div className="gap-20"></div> 
           <p>390 472 91</p>
         </a>
       </li>
     </ul>

     </div> 
     </>   
   );
}

export default App;