import { Component, OnInit } from '@angular/core';
import {Web3hookService} from '../web3hook.service';
//import { MatSnackBar } from '@angular/material';
declare let require: any;
const ImageStore_artifacts = require('../../../build/contracts/ImageStore.json');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accounts: string[];
  ImageStore: any;
  ipfsId: string;
  images:string[] = new Array;

  constructor(private web3Service: Web3hookService) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    //this.watchAccount();
    this.fetchimages();
    this.web3Service.artifactsToContract(ImageStore_artifacts)
      .then((MetaCoinAbstraction) => {
        this.ImageStore = MetaCoinAbstraction;
      });
  }


  // setStatus(status) {
  //   this.matSnackBar.open(status, null, {duration: 3000});
  // }

  async fetchimages() {
    if (!this.ImageStore) {
      //this.setStatus('ImageStore is not loaded, unable to do transaction');
      return;
    }


    try {
      const deployedImageStore = await this.ImageStore.deployed();
      const imageLength = await deployedImageStore.imageLength();
      const imagestruc = await deployedImageStore.images(0);
      console.log('imagestruc: ' +imagestruc);
      console.log('imageLength:'+imageLength);
      for(var i = 0;i<imageLength;i++) { 
        const imagefromSC = "https://ipfs.io/ipfs/"+ (await deployedImageStore.images(i));
        if(this.images[imagefromSC]){

          console.log('Hash Already exist in images array');
        } else {
          this.images.push(imagefromSC);
          console.log('Hash pushed in images array');
        }
        
     }
      
       console.log('images:'+this.images);
       
        
      // }
    } catch (e) {
      console.log(e);
      //this.setStatus('Error sending coin; see log.');
    }
  }

}
