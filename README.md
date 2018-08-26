# Consensys Academy Final Project -ViewDapp for immortal Images

This project is part of final submission for consensys academy training. 
This app allows a user to store an image on IPFS and store its hash to Ethereum blockchain test network via deployed smart contract. This 
<img src="/img/SelectImageView.png" alt="Initial UI View"/>

Above screen will show Ethereum address of user and select button to select an image.
Once image is selected, application will upload image to IPFS nodes through Infura.
Then it will store hash returned by IPFS to Ethereum via smart contract.

UI application can retrieve all historic submissions along with current submission to show on UI.

This is just a POC for a DApp with IPFS, it can be further extended to evoleve as decentralized Instagram.

## Steps Required to run and test this project

### 1 Prerequisites

Truffle install - https://github.com/trufflesuite/truffle
Truffle should be installed properly on your machine. See the above link for how to do this.

ganache-cli install - https://github.com/trufflesuite/ganache-cli
Ganache-cli should be installed properly on your machine. See the above link for how to do this. The GUI Ganache can also be used.  Make sure its running on port: 8545

### 2 Clone the repo, cd into the directory, and install node modules.

clone this repo
$ cd Consensys-Academy-Final-Project/

### 3 Node Module install

Run `npm install` to install npm packages required for the project. The npm packages will be stored in the `node-modules/` directory.

### 4 Open another terminal and run the Ganache blockchain (remember to set up your seed phase in Metamask).

$ ganache-cli

### 5 Run the contract deployment command, as shown below:

`$ truffle migrate — compile-all — reset — network ganache`

### 6 Truffle Test

Run ` truffle test` to execute tests designed for smart contract.

### 7 Build for Frondend

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### 8 Run and launch UI application to interact with deployed smart contract

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Further help

Contact me for any help required.
