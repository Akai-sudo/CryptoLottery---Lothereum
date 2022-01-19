 ```
.-=~=-.                                                                 .-=~=-.
(__  _)-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-(__  _)

```
!!! ATTENTION g. Stankovski && g. Kochovski !!!  
First of all, me and my collaborator Ana Maurič would like to thank you both for presenting us with such an interesting project idea seminar and willingness 
to help during our development. Unfortunately, considering the fact these technologies are pretty novel in general and to us, we ran into a lot of problems during
Solidity programming and initialising a React dApps application. Even project guides older < 2 months had deprecated dependencies, incompatiblity issues (webpack versions, node module failures, react rerouting, ...), 
gas estimation failures, compilation failures, unresolved modules...the list goes on, as a lot of stuff had to be reimplemented, since it is a fast, everchanging environment.
We tried our best and managed to overcome these problems with configuration .js/.json tinkering, various service handling (Ganache, Truffle, Etherscan, Infura,...) among others. 
We succefully deployed our first React dApps using Web3, which goes hand in hand with our .sol smart contract, connected to the Ethereum blockchain and MetaMask. But due to the
mentioned reasons some of the Solidity function implementations came unforeseen and would need to be changed to execute the conceptualised cryptolottery properly with a 
fully functioning interface. Nevertheless, we think we did a pretty good job, and are willing to continue developing the application to meet the requirements we set for it, 
since we have a fully functioning dApps connected to our contract.

Thank you for taking the time to read this message,
kind regards from both of us.
```
.-=~=-.                                                                 .-=~=-.
(__  _)-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-=-._.-(__  _)

```
# CryptoLottery - Lothereum
A dApps cryptolottery based on Solidity smart contract on Ethereum blockchain migrated with React JavaScript frontend app.

BEFORE WE START YOU NEED:
- MetaMask extension with test Ether in it
- Remix IDE (Safari is not supported)
- npm/yarn
- Truffle framework
- React framework

HOW TO TEST IN REMIX IDE:
1. Import the ```blockchain/contracts/contracts/NewLottery.sol``` into your Remix IDE workspace
2. Compile the contract using v0.5.16
3. Set Injected Web3, make sure you are in correct MetaMask account
4. Set the gas limit: 3000000 and the value 10000000 gwei to fund the contract with Ether from your wallet
5. Click deploy
6. Under deployed contracts first under ```userInput```, input your desired betting number from [1-100] interval and click ```userInput```
7. Now click these in the following order: ```_stava``` (may need to click multiple times for it to update with your bet), ```bet``` (red button), ```lotteryOutcome```, ```state```.
8. State will show either value from set {0 (still in betting phase, bet function did not execute), 1 (you won), 2 (you lost).
9. If you are curious to see what was the winning number, click ```rand``` or ```winningNumber```.


HOW TO RUN AS dApps REACT APP:
1. ```git clone https://github.com/Akai-sudo/CryptoLottery---Lothereum```
2. in Remix IDE, under Deployed Contracts, you can click on the copy button to copy the deployed contracts' address.
3. Open ```blockchain/lottery/src/config.js``` and paste the address into ```LOTTERY_ADDRESS``` variable
4. cd to ```blockchain/contracts/migrations``` and in terminal ```truffle migrate``` to compile and execute the contract
5. cd to ```blockchain/lottery``` and run ```yarn install``` followed by ```yarn start```
6. open ```localhost:3000```

If you encounter any problems with installation and running the code, please contact me at mohorluka@gmail.com
```

           *     ,MMM8&&&.            *
                MMMM88&&&&&    .
               MMMM88&&&&&&&
   *           MMM88&&&&&&&&
               MMM88&&&&&&&&
               'MMM88&&&&&&'
                 'MMM8&&&'      *
        |\___/|
        )     (             .              '
       =\     /=
         )===(       *
        /     \
        |     |         > We love dApps
       /       \
       \       /
_/\_/\_/\__  _/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
|  |  |  |( (  |  |  |  |  |  |  |  |  |  |
|  |  |  | ) ) |  |  |  |  |  |  |  |  |  |
|  |  |  |(_(  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |
```
