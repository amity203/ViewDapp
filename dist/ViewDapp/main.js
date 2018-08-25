(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./build/contracts/ImageStore.json":
/*!*****************************************!*\
  !*** ./build/contracts/ImageStore.json ***!
  \*****************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, default */
/***/ (function(module) {

module.exports = {"contractName":"ImageStore","abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"images","outputs":[{"name":"imageHash","type":"string"},{"name":"caption","type":"string"},{"name":"userAddress","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_uploadedBy","type":"address"},{"indexed":false,"name":"_caption","type":"string"},{"indexed":false,"name":"_IPFSHash","type":"string"}],"name":"ImageUploaded","type":"event"},{"constant":false,"inputs":[{"name":"_hash","type":"string"},{"name":"_cap","type":"string"},{"name":"_add","type":"address"}],"name":"uploadImage","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"getimages","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"imageLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x608060405234801561001057600080fd5b50610b57806100206000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806342d2d751146100675780636f867e7d1461009257806384856482146101755780638fb49a0a146102ba575b600080fd5b34801561007357600080fd5b5061007c6103ff565b6040518082815260200191505060405180910390f35b34801561009e57600080fd5b5061015f600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040f565b6040518082815260200191505060405180910390f35b34801561018157600080fd5b506101a060048036038101908080359060200190929190505050610652565b6040518080602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835286818151815260200191508051906020019080838360005b838110156102165780820151818401526020810190506101fb565b50505050905090810190601f1680156102435780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b3480156102c657600080fd5b506102e5600480360381019080803590602001909291905050506107db565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561035b578082015181840152602081019050610340565b50505050905090810190601f1680156103885780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156103c15780820151818401526020810190506103a6565b50505050905090810190601f1680156103ee5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b6000600160008054905003905090565b600080805480919060010161042491906109a6565b5083600060016000805490500381548110151561043d57fe5b906000526020600020906003020160000190805190602001906104619291906109d8565b5082600060016000805490500381548110151561047a57fe5b9060005260206000209060030201600101908051906020019061049e9291906109d8565b508160006001600080549050038154811015156104b757fe5b906000526020600020906003020160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff48008ab8d5a7aa763a8a05027c00d73245d35ac414ba594cef01ad0b6b2c2e1828486604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156105a0578082015181840152602081019050610585565b50505050905090810190601f1680156105cd5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156106065780820151818401526020810190506105eb565b50505050905090810190601f1680156106335780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a160008054905090509392505050565b60008181548110151561066157fe5b9060005260206000209060030201600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561070d5780601f106106e25761010080835404028352916020019161070d565b820191906000526020600020905b8154815290600101906020018083116106f057829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ab5780601f10610780576101008083540402835291602001916107ab565b820191906000526020600020905b81548152906001019060200180831161078e57829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b60006060806000848154811015156107ef57fe5b906000526020600020906003020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008581548110151561083057fe5b906000526020600020906003020160000160008681548110151561085057fe5b9060005260206000209060030201600101818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108f65780601f106108cb576101008083540402835291602001916108f6565b820191906000526020600020905b8154815290600101906020018083116108d957829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109925780601f1061096757610100808354040283529160200191610992565b820191906000526020600020905b81548152906001019060200180831161097557829003601f168201915b505050505090509250925092509193909250565b8154818355818111156109d3576003028160030283600052602060002091820191016109d29190610a58565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a1957805160ff1916838001178555610a47565b82800160010185558215610a47579182015b82811115610a46578251825591602001919060010190610a2b565b5b509050610a549190610abe565b5090565b610abb91905b80821115610ab75760008082016000610a779190610ae3565b600182016000610a879190610ae3565b6002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600301610a5e565b5090565b90565b610ae091905b80821115610adc576000816000905550600101610ac4565b5090565b90565b50805460018160011615610100020316600290046000825580601f10610b095750610b28565b601f016020900490600052602060002090810190610b279190610abe565b5b505600a165627a7a723058202c401eee3a5445073b2711755520fdcc67c80ddd556a2a8485d570bbdd7836b30029","deployedBytecode":"0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806342d2d751146100675780636f867e7d1461009257806384856482146101755780638fb49a0a146102ba575b600080fd5b34801561007357600080fd5b5061007c6103ff565b6040518082815260200191505060405180910390f35b34801561009e57600080fd5b5061015f600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061040f565b6040518082815260200191505060405180910390f35b34801561018157600080fd5b506101a060048036038101908080359060200190929190505050610652565b6040518080602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838103835286818151815260200191508051906020019080838360005b838110156102165780820151818401526020810190506101fb565b50505050905090810190601f1680156102435780820380516001836020036101000a031916815260200191505b50838103825285818151815260200191508051906020019080838360005b8381101561027c578082015181840152602081019050610261565b50505050905090810190601f1680156102a95780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b3480156102c657600080fd5b506102e5600480360381019080803590602001909291905050506107db565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561035b578082015181840152602081019050610340565b50505050905090810190601f1680156103885780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156103c15780820151818401526020810190506103a6565b50505050905090810190601f1680156103ee5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b6000600160008054905003905090565b600080805480919060010161042491906109a6565b5083600060016000805490500381548110151561043d57fe5b906000526020600020906003020160000190805190602001906104619291906109d8565b5082600060016000805490500381548110151561047a57fe5b9060005260206000209060030201600101908051906020019061049e9291906109d8565b508160006001600080549050038154811015156104b757fe5b906000526020600020906003020160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507ff48008ab8d5a7aa763a8a05027c00d73245d35ac414ba594cef01ad0b6b2c2e1828486604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156105a0578082015181840152602081019050610585565b50505050905090810190601f1680156105cd5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156106065780820151818401526020810190506105eb565b50505050905090810190601f1680156106335780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a160008054905090509392505050565b60008181548110151561066157fe5b9060005260206000209060030201600091509050806000018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561070d5780601f106106e25761010080835404028352916020019161070d565b820191906000526020600020905b8154815290600101906020018083116106f057829003601f168201915b505050505090806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107ab5780601f10610780576101008083540402835291602001916107ab565b820191906000526020600020905b81548152906001019060200180831161078e57829003601f168201915b5050505050908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b60006060806000848154811015156107ef57fe5b906000526020600020906003020160020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008581548110151561083057fe5b906000526020600020906003020160000160008681548110151561085057fe5b9060005260206000209060030201600101818054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108f65780601f106108cb576101008083540402835291602001916108f6565b820191906000526020600020905b8154815290600101906020018083116108d957829003601f168201915b50505050509150808054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109925780601f1061096757610100808354040283529160200191610992565b820191906000526020600020905b81548152906001019060200180831161097557829003601f168201915b505050505090509250925092509193909250565b8154818355818111156109d3576003028160030283600052602060002091820191016109d29190610a58565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610a1957805160ff1916838001178555610a47565b82800160010185558215610a47579182015b82811115610a46578251825591602001919060010190610a2b565b5b509050610a549190610abe565b5090565b610abb91905b80821115610ab75760008082016000610a779190610ae3565b600182016000610a879190610ae3565b6002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600301610a5e565b5090565b90565b610ae091905b80821115610adc576000816000905550600101610ac4565b5090565b90565b50805460018160011615610100020316600290046000825580601f10610b095750610b28565b601f016020900490600052602060002090810190610b279190610abe565b5b505600a165627a7a723058202c401eee3a5445073b2711755520fdcc67c80ddd556a2a8485d570bbdd7836b30029","sourceMap":"26:864:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:864:0;;;;;;;","deployedSourceMap":"26:864:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;800:88;;8:9:-1;5:2;;;30:1;27;20:12;5:2;800:88:0;;;;;;;;;;;;;;;;;;;;;;;270:341;;8:9:-1;5:2;;;30:1;27;20:12;5:2;270:341:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;161:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;161:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;161:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;161:21:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;617:173;;8:9:-1;5:2;;;30:1;27;20:12;5:2;617:173:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;617:173:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;617:173:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;800:88;844:4;880:1;866:6;:13;;;;:15;859:22;;800:88;:::o;270:341::-;347:4;363:6;:15;;;;;;;;;;;:::i;:::-;;424:5;388:6;409:1;395:6;:13;;;;:15;388:23;;;;;;;;;;;;;;;;;;;;:33;;:41;;;;;;;;;;;;:::i;:::-;;473:4;439:6;460:1;446:6;:13;;;;:15;439:23;;;;;;;;;;;;;;;;;;;;:31;;:38;;;;;;;;;;;;:::i;:::-;;525:4;487:6;508:1;494:6;:13;;;;:15;487:23;;;;;;;;;;;;;;;;;;;;:35;;;:42;;;;;;;;;;;;;;;;;;544:30;558:4;563;568:5;544:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;544:30:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;544:30:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;591:6;:13;;;;584:20;;270:341;;;;;:::o;161:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;617:173::-;668:7;677:6;685;711;718:5;711:13;;;;;;;;;;;;;;;;;;;;:25;;;;;;;;;;;;737:6;744:5;737:13;;;;;;;;;;;;;;;;;;;;:23;;761:6;768:5;761:13;;;;;;;;;;;;;;;;;;;;:21;;703:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;617:173;;;;;:::o;26:864::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o","source":"pragma solidity ^0.4.23;\n\ncontract ImageStore {\n\n    \n    struct Image{\n        string imageHash;\n        string caption;\n        address userAddress;\n    }\n    Image[] public images;\n    event ImageUploaded(address _uploadedBy, string _caption, string _IPFSHash);\n\n    function uploadImage(string _hash, string _cap, address _add) public returns(uint) {\n        images.length++;\n        images[images.length-1].imageHash = _hash;\n        images[images.length-1].caption = _cap;\n        images[images.length-1].userAddress = _add;\n        emit ImageUploaded(_add,_cap,_hash);\n        return images.length;\n    }\n\n    function getimages(uint index) public view returns(address, string, string) {\n        return (images[index].userAddress,images[index].imageHash,images[index].caption);\n    }\n    \n    function imageLength() public view returns (uint){\n        return images.length-1;\n    }\n}","sourcePath":"/Users/amityadav/Documents/ETH Training/ViewDapp/contracts/ImageStore.sol","ast":{"absolutePath":"/Users/amityadav/Documents/ETH Training/ViewDapp/contracts/ImageStore.sol","exportedSymbols":{"ImageStore":[113]},"id":114,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".23"],"nodeType":"PragmaDirective","src":"0:24:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":113,"linearizedBaseContracts":[113],"name":"ImageStore","nodeType":"ContractDefinition","nodes":[{"canonicalName":"ImageStore.Image","id":8,"members":[{"constant":false,"id":3,"name":"imageHash","nodeType":"VariableDeclaration","scope":8,"src":"80:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":2,"name":"string","nodeType":"ElementaryTypeName","src":"80:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":5,"name":"caption","nodeType":"VariableDeclaration","scope":8,"src":"106:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":4,"name":"string","nodeType":"ElementaryTypeName","src":"106:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":7,"name":"userAddress","nodeType":"VariableDeclaration","scope":8,"src":"130:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6,"name":"address","nodeType":"ElementaryTypeName","src":"130:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"name":"Image","nodeType":"StructDefinition","scope":113,"src":"58:98:0","visibility":"public"},{"constant":false,"id":11,"name":"images","nodeType":"VariableDeclaration","scope":113,"src":"161:21:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image[]"},"typeName":{"baseType":{"contractScope":null,"id":9,"name":"Image","nodeType":"UserDefinedTypeName","referencedDeclaration":8,"src":"161:5:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage_ptr","typeString":"struct ImageStore.Image"}},"id":10,"length":null,"nodeType":"ArrayTypeName","src":"161:7:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage_ptr","typeString":"struct ImageStore.Image[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":19,"name":"ImageUploaded","nodeType":"EventDefinition","parameters":{"id":18,"nodeType":"ParameterList","parameters":[{"constant":false,"id":13,"indexed":false,"name":"_uploadedBy","nodeType":"VariableDeclaration","scope":19,"src":"208:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":12,"name":"address","nodeType":"ElementaryTypeName","src":"208:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":15,"indexed":false,"name":"_caption","nodeType":"VariableDeclaration","scope":19,"src":"229:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":14,"name":"string","nodeType":"ElementaryTypeName","src":"229:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":17,"indexed":false,"name":"_IPFSHash","nodeType":"VariableDeclaration","scope":19,"src":"246:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":16,"name":"string","nodeType":"ElementaryTypeName","src":"246:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"207:56:0"},"src":"188:76:0"},{"body":{"id":74,"nodeType":"Block","src":"353:258:0","statements":[{"expression":{"argumentTypes":null,"id":33,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"363:15:0","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":30,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"363:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":32,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"363:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":34,"nodeType":"ExpressionStatement","src":"363:15:0"},{"expression":{"argumentTypes":null,"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":35,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"388:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":40,"indexExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":36,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"395:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":37,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"395:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"409:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"395:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"388:23:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":41,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"imageHash","nodeType":"MemberAccess","referencedDeclaration":3,"src":"388:33:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":42,"name":"_hash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"424:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"388:41:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":44,"nodeType":"ExpressionStatement","src":"388:41:0"},{"expression":{"argumentTypes":null,"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":45,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"439:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":50,"indexExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":49,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":46,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"446:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":47,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"446:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":48,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"460:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"446:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"439:23:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":51,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"caption","nodeType":"MemberAccess","referencedDeclaration":5,"src":"439:31:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":52,"name":"_cap","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"473:4:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"439:38:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":54,"nodeType":"ExpressionStatement","src":"439:38:0"},{"expression":{"argumentTypes":null,"id":63,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":55,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"487:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":60,"indexExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":59,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":56,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"494:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":57,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"494:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":58,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"508:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"494:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"487:23:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":61,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"userAddress","nodeType":"MemberAccess","referencedDeclaration":7,"src":"487:35:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":62,"name":"_add","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":25,"src":"525:4:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"487:42:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":64,"nodeType":"ExpressionStatement","src":"487:42:0"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":66,"name":"_add","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":25,"src":"558:4:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":67,"name":"_cap","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"563:4:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":68,"name":"_hash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"568:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":65,"name":"ImageUploaded","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"544:13:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$","typeString":"function (address,string memory,string memory)"}},"id":69,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"544:30:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":70,"nodeType":"EmitStatement","src":"539:35:0"},{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":71,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"591:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":72,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"591:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":29,"id":73,"nodeType":"Return","src":"584:20:0"}]},"documentation":null,"id":75,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"uploadImage","nodeType":"FunctionDefinition","parameters":{"id":26,"nodeType":"ParameterList","parameters":[{"constant":false,"id":21,"name":"_hash","nodeType":"VariableDeclaration","scope":75,"src":"291:12:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":20,"name":"string","nodeType":"ElementaryTypeName","src":"291:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":23,"name":"_cap","nodeType":"VariableDeclaration","scope":75,"src":"305:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":22,"name":"string","nodeType":"ElementaryTypeName","src":"305:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":25,"name":"_add","nodeType":"VariableDeclaration","scope":75,"src":"318:12:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"318:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"290:41:0"},"payable":false,"returnParameters":{"id":29,"nodeType":"ParameterList","parameters":[{"constant":false,"id":28,"name":"","nodeType":"VariableDeclaration","scope":75,"src":"347:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":27,"name":"uint","nodeType":"ElementaryTypeName","src":"347:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"346:6:0"},"scope":113,"src":"270:341:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":100,"nodeType":"Block","src":"693:97:0","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":86,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"711:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":88,"indexExpression":{"argumentTypes":null,"id":87,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"718:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"711:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":89,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"userAddress","nodeType":"MemberAccess","referencedDeclaration":7,"src":"711:25:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":90,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"737:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":92,"indexExpression":{"argumentTypes":null,"id":91,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"744:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"737:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":93,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"imageHash","nodeType":"MemberAccess","referencedDeclaration":3,"src":"737:23:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":94,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"761:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":96,"indexExpression":{"argumentTypes":null,"id":95,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"768:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"761:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":97,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"caption","nodeType":"MemberAccess","referencedDeclaration":5,"src":"761:21:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}}],"id":98,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"710:73:0","typeDescriptions":{"typeIdentifier":"t_tuple$_t_address_$_t_string_storage_$_t_string_storage_$","typeString":"tuple(address,string storage ref,string storage ref)"}},"functionReturnParameters":85,"id":99,"nodeType":"Return","src":"703:80:0"}]},"documentation":null,"id":101,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getimages","nodeType":"FunctionDefinition","parameters":{"id":78,"nodeType":"ParameterList","parameters":[{"constant":false,"id":77,"name":"index","nodeType":"VariableDeclaration","scope":101,"src":"636:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":76,"name":"uint","nodeType":"ElementaryTypeName","src":"636:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"635:12:0"},"payable":false,"returnParameters":{"id":85,"nodeType":"ParameterList","parameters":[{"constant":false,"id":80,"name":"","nodeType":"VariableDeclaration","scope":101,"src":"668:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":79,"name":"address","nodeType":"ElementaryTypeName","src":"668:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":82,"name":"","nodeType":"VariableDeclaration","scope":101,"src":"677:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":81,"name":"string","nodeType":"ElementaryTypeName","src":"677:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":84,"name":"","nodeType":"VariableDeclaration","scope":101,"src":"685:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":83,"name":"string","nodeType":"ElementaryTypeName","src":"685:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"667:25:0"},"scope":113,"src":"617:173:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":111,"nodeType":"Block","src":"849:39:0","statements":[{"expression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":109,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":106,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"866:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":107,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"866:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":108,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"880:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"866:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":110,"nodeType":"Return","src":"859:22:0"}]},"documentation":null,"id":112,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"imageLength","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[],"src":"820:2:0"},"payable":false,"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":112,"src":"844:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"844:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"843:6:0"},"scope":113,"src":"800:88:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":114,"src":"26:864:0"}],"src":"0:890:0"},"legacyAST":{"absolutePath":"/Users/amityadav/Documents/ETH Training/ViewDapp/contracts/ImageStore.sol","exportedSymbols":{"ImageStore":[113]},"id":114,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".23"],"nodeType":"PragmaDirective","src":"0:24:0"},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":113,"linearizedBaseContracts":[113],"name":"ImageStore","nodeType":"ContractDefinition","nodes":[{"canonicalName":"ImageStore.Image","id":8,"members":[{"constant":false,"id":3,"name":"imageHash","nodeType":"VariableDeclaration","scope":8,"src":"80:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":2,"name":"string","nodeType":"ElementaryTypeName","src":"80:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":5,"name":"caption","nodeType":"VariableDeclaration","scope":8,"src":"106:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"},"typeName":{"id":4,"name":"string","nodeType":"ElementaryTypeName","src":"106:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":7,"name":"userAddress","nodeType":"VariableDeclaration","scope":8,"src":"130:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6,"name":"address","nodeType":"ElementaryTypeName","src":"130:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"name":"Image","nodeType":"StructDefinition","scope":113,"src":"58:98:0","visibility":"public"},{"constant":false,"id":11,"name":"images","nodeType":"VariableDeclaration","scope":113,"src":"161:21:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image[]"},"typeName":{"baseType":{"contractScope":null,"id":9,"name":"Image","nodeType":"UserDefinedTypeName","referencedDeclaration":8,"src":"161:5:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage_ptr","typeString":"struct ImageStore.Image"}},"id":10,"length":null,"nodeType":"ArrayTypeName","src":"161:7:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage_ptr","typeString":"struct ImageStore.Image[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":19,"name":"ImageUploaded","nodeType":"EventDefinition","parameters":{"id":18,"nodeType":"ParameterList","parameters":[{"constant":false,"id":13,"indexed":false,"name":"_uploadedBy","nodeType":"VariableDeclaration","scope":19,"src":"208:19:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":12,"name":"address","nodeType":"ElementaryTypeName","src":"208:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":15,"indexed":false,"name":"_caption","nodeType":"VariableDeclaration","scope":19,"src":"229:15:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":14,"name":"string","nodeType":"ElementaryTypeName","src":"229:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":17,"indexed":false,"name":"_IPFSHash","nodeType":"VariableDeclaration","scope":19,"src":"246:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":16,"name":"string","nodeType":"ElementaryTypeName","src":"246:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"207:56:0"},"src":"188:76:0"},{"body":{"id":74,"nodeType":"Block","src":"353:258:0","statements":[{"expression":{"argumentTypes":null,"id":33,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"++","prefix":false,"src":"363:15:0","subExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":30,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"363:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":32,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"363:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":34,"nodeType":"ExpressionStatement","src":"363:15:0"},{"expression":{"argumentTypes":null,"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":35,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"388:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":40,"indexExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":36,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"395:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":37,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"395:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"409:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"395:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"388:23:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":41,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"imageHash","nodeType":"MemberAccess","referencedDeclaration":3,"src":"388:33:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":42,"name":"_hash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"424:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"388:41:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":44,"nodeType":"ExpressionStatement","src":"388:41:0"},{"expression":{"argumentTypes":null,"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":45,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"439:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":50,"indexExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":49,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":46,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"446:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":47,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"446:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":48,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"460:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"446:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"439:23:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":51,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"caption","nodeType":"MemberAccess","referencedDeclaration":5,"src":"439:31:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":52,"name":"_cap","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"473:4:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},"src":"439:38:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},"id":54,"nodeType":"ExpressionStatement","src":"439:38:0"},{"expression":{"argumentTypes":null,"id":63,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":55,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"487:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":60,"indexExpression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":59,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":56,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"494:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":57,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"494:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":58,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"508:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"494:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"487:23:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":61,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"memberName":"userAddress","nodeType":"MemberAccess","referencedDeclaration":7,"src":"487:35:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"id":62,"name":"_add","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":25,"src":"525:4:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"src":"487:42:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":64,"nodeType":"ExpressionStatement","src":"487:42:0"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":66,"name":"_add","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":25,"src":"558:4:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":67,"name":"_cap","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"563:4:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}},{"argumentTypes":null,"id":68,"name":"_hash","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"568:5:0","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"},{"typeIdentifier":"t_string_memory_ptr","typeString":"string memory"}],"id":65,"name":"ImageUploaded","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"544:13:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$","typeString":"function (address,string memory,string memory)"}},"id":69,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"544:30:0","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":70,"nodeType":"EmitStatement","src":"539:35:0"},{"expression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":71,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"591:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":72,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"591:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":29,"id":73,"nodeType":"Return","src":"584:20:0"}]},"documentation":null,"id":75,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"uploadImage","nodeType":"FunctionDefinition","parameters":{"id":26,"nodeType":"ParameterList","parameters":[{"constant":false,"id":21,"name":"_hash","nodeType":"VariableDeclaration","scope":75,"src":"291:12:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":20,"name":"string","nodeType":"ElementaryTypeName","src":"291:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":23,"name":"_cap","nodeType":"VariableDeclaration","scope":75,"src":"305:11:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":22,"name":"string","nodeType":"ElementaryTypeName","src":"305:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":25,"name":"_add","nodeType":"VariableDeclaration","scope":75,"src":"318:12:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"318:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"290:41:0"},"payable":false,"returnParameters":{"id":29,"nodeType":"ParameterList","parameters":[{"constant":false,"id":28,"name":"","nodeType":"VariableDeclaration","scope":75,"src":"347:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":27,"name":"uint","nodeType":"ElementaryTypeName","src":"347:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"346:6:0"},"scope":113,"src":"270:341:0","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":100,"nodeType":"Block","src":"693:97:0","statements":[{"expression":{"argumentTypes":null,"components":[{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":86,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"711:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":88,"indexExpression":{"argumentTypes":null,"id":87,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"718:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"711:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":89,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"userAddress","nodeType":"MemberAccess","referencedDeclaration":7,"src":"711:25:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":90,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"737:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":92,"indexExpression":{"argumentTypes":null,"id":91,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"744:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"737:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":93,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"imageHash","nodeType":"MemberAccess","referencedDeclaration":3,"src":"737:23:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}},{"argumentTypes":null,"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":94,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"761:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":96,"indexExpression":{"argumentTypes":null,"id":95,"name":"index","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":77,"src":"768:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"761:13:0","typeDescriptions":{"typeIdentifier":"t_struct$_Image_$8_storage","typeString":"struct ImageStore.Image storage ref"}},"id":97,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"caption","nodeType":"MemberAccess","referencedDeclaration":5,"src":"761:21:0","typeDescriptions":{"typeIdentifier":"t_string_storage","typeString":"string storage ref"}}],"id":98,"isConstant":false,"isInlineArray":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"TupleExpression","src":"710:73:0","typeDescriptions":{"typeIdentifier":"t_tuple$_t_address_$_t_string_storage_$_t_string_storage_$","typeString":"tuple(address,string storage ref,string storage ref)"}},"functionReturnParameters":85,"id":99,"nodeType":"Return","src":"703:80:0"}]},"documentation":null,"id":101,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getimages","nodeType":"FunctionDefinition","parameters":{"id":78,"nodeType":"ParameterList","parameters":[{"constant":false,"id":77,"name":"index","nodeType":"VariableDeclaration","scope":101,"src":"636:10:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":76,"name":"uint","nodeType":"ElementaryTypeName","src":"636:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"635:12:0"},"payable":false,"returnParameters":{"id":85,"nodeType":"ParameterList","parameters":[{"constant":false,"id":80,"name":"","nodeType":"VariableDeclaration","scope":101,"src":"668:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":79,"name":"address","nodeType":"ElementaryTypeName","src":"668:7:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":82,"name":"","nodeType":"VariableDeclaration","scope":101,"src":"677:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":81,"name":"string","nodeType":"ElementaryTypeName","src":"677:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"},{"constant":false,"id":84,"name":"","nodeType":"VariableDeclaration","scope":101,"src":"685:6:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory_ptr","typeString":"string"},"typeName":{"id":83,"name":"string","nodeType":"ElementaryTypeName","src":"685:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":null,"visibility":"internal"}],"src":"667:25:0"},"scope":113,"src":"617:173:0","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":111,"nodeType":"Block","src":"849:39:0","statements":[{"expression":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":109,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":106,"name":"images","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":11,"src":"866:6:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Image_$8_storage_$dyn_storage","typeString":"struct ImageStore.Image storage ref[] storage ref"}},"id":107,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"length","nodeType":"MemberAccess","referencedDeclaration":null,"src":"866:13:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":108,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"880:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"866:15:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":110,"nodeType":"Return","src":"859:22:0"}]},"documentation":null,"id":112,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"imageLength","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[],"src":"820:2:0"},"payable":false,"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":112,"src":"844:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"844:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"843:6:0"},"scope":113,"src":"800:88:0","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":114,"src":"26:864:0"}],"src":"0:890:0"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{"5777":{"events":{},"links":{},"address":"0x42f431d9b7352b8bab6b652f7e9ed37f8e757f08","transactionHash":"0x46f8470089b81811bf027c2e6fbf188da9df20e57e71358e15fe9962af7a39e6"}},"schemaVersion":"2.0.0","updatedAt":"2018-08-22T03:18:35.623Z"};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n    padding: 0 14px;\n  }\n  \n  .example-spacer {\n    flex: 1 1 auto;\n  }\n  \n  .example-card {\n    max-width: 400px;\n  }\n  \n  .example-header-image {\n    background-image: url('https://material.angular.io/{{ipfsId}}/img/examples/shiba1.jpg');\n    background-size: cover;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n<mat-toolbar-row>\n    <a routerLink=\"/\"><h1>{{title}}</h1></a><span class=\"example-spacer\"></span><span>Immortal Images</span>\n    <span class=\"example-spacer\"></span>\n    <a routerLink=\"/dashboard\">Dashboard</a>\n  </mat-toolbar-row>\n  <!-- <mat-card>\n    <input type=\"file\" name=\"file\" accept=\"image/*\"  id=\"file\" style=\"display: none\" (change)=\"captureFile($event)\">\n    <button mat-raised-button color=\"accent\" (click)=\"triggerFileUpload()\">Select File</button>\n    <hr>\n    <div  *ngIf=\"loading\"><mat-spinner></mat-spinner></div>\n    \n    {{ipfsId}}\n  </mat-card> -->\n</mat-toolbar>\n\n  <!-- <img [src]= \"'https://ipfs.io/ipfs/' + {{ipfsId}}\" width=\"42\" height=\"42\" /> -->\n  \n  <p>IPFS Hash Generated= {{ipfsId}}\"</p>\n\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"{{ipfsId}}\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'viewdapp';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.ipfsApi = window.IpfsApi({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    };
    AppComponent.prototype.captureFile = function (event) {
        var _this = this;
        var files = event.target.files;
        var filename = files[0].name;
        if (filename.lastIndexOf('.') <= 0) {
            alert('Error');
        }
        var reader = new FileReader();
        reader.onloadend = function () { return _this.saveToIpfs(reader); };
        reader.readAsArrayBuffer(files[0]);
    };
    AppComponent.prototype.saveToIpfs = function (reader) {
        var _this = this;
        this.loading = true;
        console.log(reader);
        var buffer = buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(reader.result);
        this.ipfsApi.add(buffer, { progress: function (prog) { return console.log("received: " + prog); } })
            .then(function (response) {
            console.log(response);
            _this.ipfsId = "https://ipfs.io/ipfs/" + response[0].hash;
        }).catch(function (err) {
            console.error(err);
        });
        this.loading = false;
    };
    AppComponent.prototype.triggerFileUpload = function () {
        document.getElementById('file').click();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
            ],
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n    max-width: 400px;\n  }\n  \n  .example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n  }"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n\n  <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Shiba Inu</mat-card-title>\n        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n      <mat-card-content>\n        <p>\n          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n          bred for hunting.\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>LIKE</button>\n        <button mat-button>SHARE</button>\n      </mat-card-actions>\n    </mat-card>\n\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shiba Inu</mat-card-title>\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n\n      <mat-card class=\"example-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>Shiba Inu</mat-card-title>\n            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n          <mat-card-content>\n            <p>\n              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n              bred for hunting.\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button>LIKE</button>\n            <button mat-button>SHARE</button>\n          </mat-card-actions>\n        </mat-card>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web3hook_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web3hook.service */ "./src/app/web3hook.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ImageStore_artifacts = __webpack_require__(/*! ../../../build/contracts/ImageStore.json */ "./build/contracts/ImageStore.json");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(web3Service, matSnackBar) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        console.log('Constructor: ' + web3Service);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        //this.watchAccount();
        this.web3Service.artifactsToContract(ImageStore_artifacts)
            .then(function (MetaCoinAbstraction) {
            _this.ImageStore = MetaCoinAbstraction;
        });
    };
    DashboardComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    DashboardComponent.prototype.fetchimages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployedImageStore, transaction, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.ImageStore) {
                            this.setStatus('ImageStore is not loaded, unable to do transaction');
                            return [2 /*return*/];
                        }
                        // const amount = this.model.amount;
                        // const receiver = this.model.receiver;
                        //console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.ImageStore.deployed()];
                    case 2:
                        deployedImageStore = _a.sent();
                        return [4 /*yield*/, deployedImageStore.getimages(0)];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                            console.log(transaction);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_web3hook_service__WEBPACK_IMPORTED_MODULE_1__["Web3hookService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/web3hook.service.ts":
/*!*************************************!*\
  !*** ./src/app/web3hook.service.ts ***!
  \*************************************/
/*! exports provided: Web3hookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3hookService", function() { return Web3hookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
var Web3hookService = /** @class */ (function () {
    function Web3hookService() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3hookService.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 100);
    };
    Web3hookService.prototype.artifactsToContract = function (artifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var delay, contractAbstraction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.artifactsToContract(artifacts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contractAbstraction = truffle_contract__WEBPACK_IMPORTED_MODULE_1__(artifacts);
                        contractAbstraction.setProvider(this.web3.currentProvider);
                        return [2 /*return*/, contractAbstraction];
                }
            });
        });
    };
    Web3hookService.prototype.refreshAccounts = function () {
        var _this = this;
        this.web3.eth.getAccounts(function (err, accs) {
            console.log('Refreshing accounts');
            if (err != null) {
                console.warn('There was an error fetching your accounts.');
                return;
            }
            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
                console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            if (!_this.accounts || _this.accounts.length !== accs.length || _this.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');
                _this.accountsObservable.next(accs);
                _this.accounts = accs;
            }
            _this.ready = true;
        });
    };
    Web3hookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Web3hookService);
    return Web3hookService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/amityadav/Documents/ETH Training/ViewDapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map