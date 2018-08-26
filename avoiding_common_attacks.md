
## Logic Bugs

Test cases covers untested functionality of contract which makes sure no logic bugs are there. Also, contract included emebergency stop functionality to pause whenever needed.

## Tx.Origin Problem 

Tx.origin was not used in smart contract and in app.

## Miner Vulnerabilities
Timestamp used is calculated using JavaScript code before storing in Smart Contract storage. This mitigates any dependency of miner's reporting of incorrect time.

## Exposed Secrets
ontract and app do not handle any secret information

## Solidity Function Signatures and Fallback Data Collisions 
contract does not receive ether, so no fallback is required.

## Incorrect use of Cryptography
cryptography is not used in contracts.

## Failed Sends 
No ether or token transfers in this app. All send transaction are function calls and only gas is used.

## Re-entry
 No value transfer in contract, also user can post data for themselves. They cant change data.

##Integer Arithmetic Overflow
Contract uses uint256 as a base type, and uses SafeMath256 library to cover overflows.

## Off Chain Safety 
Contract do not rely on any external service.

## Exposed functions
Only required functions are exposed, whever restriction required is added to safegaurd.

## Denial of Service / Dust Spam
App Uses IPFS which can be used to host app as well to avoid any DDOS attach on web app side.
No looping given in smart contract to avoide this type of attack.

## Malicious Creator
This smart contract dont store Ether funds and also no behaviour can be changed by any owner. User data stored can not be deleted by anyone.

## Stack Depth Exhaustion
 No use of Send function in app. Also no ether are transfered, 