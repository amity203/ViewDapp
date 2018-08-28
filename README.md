# Consensys Academy Final Project -ViewDapp for immortal Images

This project is part of final submission for consensys academy training. 
This app allows a user to store an image on IPFS and store its hash to Ethereum blockchain test network via deployed smart contract. This 
<img src="/img/SelectImageView.png" alt="Initial UI View"/>

Above screen will show Ethereum address of user and select button to select an image.
Once image is selected, application will upload image to IPFS nodes through Infura.
Below screen will show status of progress:

Then it will store hash returned by IPFS to Ethereum via smart contract.

<img src="/img/IPFSStatus.png" alt="IPFS progress status"/>

UI application can retrieve all historic submissions along with current submission to show on UI. Just refresh if latest image is not showing and you image should show up as on below screen:

<img src="/img/Homepage.png" alt="Initial UI View"/>

This is just a POC for a DApp with IPFS, it can be further extended to evoleve as decentralized Instagram.

## Steps Required to run and test this project

### 1. Prerequisites

Truffle install - https://github.com/trufflesuite/truffle
Truffle should be installed properly on your machine. See the above link for how to do this.

ganache-cli install - https://github.com/trufflesuite/ganache-cli
Ganache-cli should be installed properly on your machine. See the above link for how to do this. The GUI Ganache can also be used.  Make sure its running on port: 8545

Install angular as this project use angular: `npm install -g @angular/cli`

### 2. Clone the repo, cd into the directory, and install node modules.

clone this repo- https://github.com/amity203/ViewDapp.git

`cd ViewDapp`

### 3. Node Module install

Run `$ npm install` to install npm packages required for the project. The npm packages will be stored in the `node-modules/` directory.

### 4. Open another terminal and run the Ganache blockchain (remember to set up your seed phase in Metamask).

`ganache-cli`

#### Note: Make sure your ganache amd metamask use same address and same network. If localhost have any issue, use custom RPC option like `HTTP://0.0.0.0:8545`

### 5. Run the contract deployment command, as shown below:

Run `truffle migrate — compile-all — reset — network ganache`
This step will deploy contracts and create ABI.

### 6. Truffle Test

Run `truffle test` to execute tests designed for smart contract.
This step will run all test cases designed for smart contract.

### 7. Build for Frondend

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### 8. Run and launch UI application to interact with deployed smart contract

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### 9. Steps to Interact with UI

As per project requirement, it should show you your address on top righ corner as shown in above screenshots as well. Also, follow instructions written along with above screenshots in case of any doubt. Rest, application have simple functionality and should not be complex to use.


## Further help

Contact me for any help required.
