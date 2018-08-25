
import { Component, OnInit } from '@angular/core';
import { Buffer } from 'buffer';
import { IpfsService } from './ipfs.service';
import { Web3hookService } from './web3hook.service';
const ImageStore_artifacts = require('../../build/contracts/ImageStore.json');
declare let window: any;
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'ipfs.infura.io';
declare let require: any;
const Web3 = require('web3');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'viewdapp';
  imageUrl: string;
  ipfsApi: any;
  ipfsId: string;
  ipfshash: string;
  loading: boolean;
  ImageStore: any;
  dAddress: any;
  address: string;
  caption = '';
  uploaddate: string;
  accounts: string[];
  images: any[] = Array();
  image: {"Hash":string , "address":string, "uploadDate": string};

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: ''
  };



  constructor(private web3Service: Web3hookService) {
    //console.log('Constructor: ' + web3Service);

  }

  ngOnInit(): void {
    this.ipfsApi = window.IpfsApi({ host: url, port: 5001, protocol: 'https' });
    this.watchAccount();
    this.web3Service.artifactsToContract(ImageStore_artifacts)
      .then((MetaCoinAbstraction) => {
        this.ImageStore = MetaCoinAbstraction;
      });
    this.fetchimages();
  }



  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.address = accounts[0];
      this.model.account = accounts[0];
      //   Web3.eth.defaultAccount=accounts[0];
      // console.log('Web3.eth.defaultAccount:'+Web3.eth.defaultAccount);
      //this.refreshBalance();
      console.log('address from watch account:' + this.address)
    });

  }


  captureFile(event) {
    const files = event.target.files;
    const filename = files[0].name;
    if (filename.lastIndexOf('.') <= 0) {
      alert('Error');
    }

    const reader = new FileReader();
    reader.onloadend = () => this.saveToIpfs(reader);
    reader.readAsArrayBuffer(files[0]);
  }

  saveToIpfs(reader) {
    
    console.log(reader);
    const buffer = Buffer.from(reader.result);

    this.ipfsApi.add(buffer, { progress: (prog) => console.log(`received: ${prog}`) })
      .then((response) => {
        console.log(response);
        this.ipfshash = response[0].hash;
        this.ipfsId = "https://ipfs.io/ipfs/" + response[0].hash;
        this.hashUpdate(this.ipfshash);
        this.fetchimages();
      }).catch((err) => {
        console.error(err);
      });

    this.loading = false;
  }

  triggerFileUpload() {
    this.loading = true;
    document.getElementById('file').click();

  }



  async hashUpdate(ipfshash) {

    if (this.images[ipfshash]) {
      console.log('Hash is already stored')
    }

    if (!this.ImageStore) {
      console.log('Metacoin is not loaded, unable to send transaction');
      return;
    }

    try {
      const deployedImageStore = await this.ImageStore.deployed();
      //console.log(deployedImageStore);
      console.log("IPFS Hash:" + this.ipfshash);
      this.uploaddate= new Date().toUTCString();
      console.log(this.uploaddate);
      console.log('this.model.account:' + this.model.account);
      const transaction = await deployedImageStore.uploadImage.sendTransaction(this.ipfshash, this.uploaddate, { from: this.model.account });

      if (!transaction) {
        console.log('Transaction failed!');
      } else {
        console.log('Transaction complete!:' + transaction);
      }
    } catch (e) {
      console.log(e);
      console.log('Error sending coin; see log.');
    }
  }

  async fetchimages() {
    if (!this.ImageStore) {
      console.log('ImageStore is not loaded, unable to do transaction');
      await this.web3Service.artifactsToContract(ImageStore_artifacts)
        .then((MetaCoinAbstraction) => {
          this.ImageStore = MetaCoinAbstraction;
        });
    }

    try {
      const deployedImageStore = await this.ImageStore.deployed();
      const imageLength = await deployedImageStore.imageLength();
      console.log('imageLength:' + imageLength);
      this.images=[];
      for (var i = 0; i < imageLength; i++) {
        const imagefromSC = await deployedImageStore.images(i);
        console.log('imagefromSC',imagefromSC);
        console.log('imagefromSC.imageHash',imagefromSC[0]+imagefromSC[1]);
          this.images.push({imagehash: "https://ipfs.io/ipfs/"+imagefromSC[0],address: imagefromSC[1], uploadDate:imagefromSC[2]});
          console.log('Hash pushed in images array');
        
      }

      console.log('images:' + this.images[0].imagehash);

    } catch (e) {
      console.log(e);
      //this.setStatus('Error sending coin; see log.');
    }
  }



}

