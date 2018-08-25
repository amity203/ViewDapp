'use strict'
import { Injectable } from '@angular/core';
declare let require: any;
const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

//run with local daemon
// const ipfsApi = require('ipfs-api');
// const ipfs = new ipfsApi('localhost', '5001', {protocol: 'http'});

@Injectable({
  providedIn: 'root'
})
export class IpfsService {
ipfs =ipfs;
  constructor() { }
}
