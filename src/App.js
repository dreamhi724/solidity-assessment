import logo from './logo.svg';
import './App.css';
import Web3 from "web3";
import ganache from "ganache";
import {useEffect} from "react";

import configuration from '../build/contracts/CrowdFund.json';

function App() {
  useEffect(() => {
    (async() => {
      const web3 = new Web3(ganache.provider());
      const CrowdFund = new web3.eth.Contract(configuration.abi, '0x8E03c7F6d0577AE9a2b22D8705cdd6D63249aDD8');
  
      CrowdFund.events.Launch(() => {
      }).on("connected", function(subscriptionId){
          console.log('SubID: ',subscriptionId);
      })
      .on('data', function(event){
          console.log('Event:', event);
          console.log('Owner Wallet Address: ', event.returnValues.owner);
          //Write send email process here!
      })
      .on('changed', function(event){
          //Do something when it is removed from the database.
      })
      .on('error', function(error, receipt) {
          console.log('Error:', error, receipt);
      });
    })();
  }, [])
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
