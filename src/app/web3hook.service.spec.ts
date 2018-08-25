import {TestBed, inject} from '@angular/core/testing';
import Web3 from 'web3';

import {Web3hookService} from './web3hook.service';

import imageStore_artifacts from '../../build/contracts/ImageStore.json';

declare let window: any;

describe('Web3hookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Web3hookService]
    });
  });

  it('should be created', inject([Web3hookService], (service: Web3hookService) => {
    expect(service).toBeTruthy();
  }));

  it('should inject a default web3 on a contract', inject([Web3hookService], (service: Web3hookService) => {
    service.bootstrapWeb3();

    return service.artifactsToContract(imageStore_artifacts).then((abstraction) => {
      expect(abstraction.currentProvider.host).toBe('http://localhost:8545');
    });
  }));

  it('should inject a the window web3 on a contract', inject([Web3hookService], (service: Web3hookService) => {
    window.web3 = {
      currentProvider: new Web3.providers.HttpProvider('http://localhost:1337')
    };

    service.bootstrapWeb3();

    return service.artifactsToContract(imageStore_artifacts).then((abstraction) => {
      expect(abstraction.currentProvider.host).toBe('http://localhost:1337');
    });
  }));
});