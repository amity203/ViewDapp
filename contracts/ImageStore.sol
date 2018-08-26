pragma solidity ^0.4.23;
import "./SafeMath256.sol";

/** @title Image Hash store contract. */

contract ImageStore {

 /** @dev This contract code has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

 /** @dev The constructor sets the original `owner` of the contract to the address 
    *which created contract
    */
    constructor () public {
        owner = msg.sender;
        images.length++;
        images[images.length-1].imageHash = "QmbLFKp6mPLcmepuwwERzZSYBMU31gbBCXKkouEMrkSL7M";
        images[images.length-1].userAddress = msg.sender;
        images[images.length-1].uploadDate = "Sat, 25 Aug 2018 23:03:40 GMT";
    }

    /**@dev Modifier to throw other then owner
    */
    modifier onlyOwner() {
        require(msg.sender == owner,"Please use owner account.");
        _;
    }

    // functions
    /**
    * @dev get the owner of the contract
    * @return returns owner address
    */
    function getOwner()
    public view
    returns (address returnedOwner)
    {
        returnedOwner = owner;
    }

     /**@dev This allows onwership transfer to a different address
       * @param newOwner The address to transfer ownership to.
       */
    
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0),"NewOwner address is not correct.");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    /**@dev contract code to store hash from IPFS, with user address and upload date.
      */
    // SafeMath32 library.
    using SafeMath256 for uint256;
    struct Image{
        string imageHash;
        address userAddress;
        string uploadDate;
    }
    Image[] public images;
    event ImageUploaded( string _IPFSHash, address _add, string _date);

    /**@dev This allows to store image hash, upload address and upload date
      * @param _hash IPFS hash to be stored.
      * @param _date Upload date to be stored.
      * @return Uint256 of image length
      */

    function uploadImage(string _hash, string _date) public returns(uint256) {
        images.length++;
        images[images.length-1].imageHash = _hash;
        images[images.length-1].userAddress = msg.sender;
        images[images.length-1].uploadDate = _date;
        emit ImageUploaded(_hash, msg.sender, _date);
        return images.length;
    }

    /** @dev Returns image hash for an index
      * @param index Uint value for index of image hash
      * @return String value of image hash
      */

    function getimageshash(uint index) public view returns( string) {
        return (images[index].imageHash);
    }

    /** @dev Returns image hash for an index
      * @return String value of image hash
      */
    
    function imageLength() public view returns (uint256){
        return images.length;
    }
    /**@dev contract code to allow an emergency stop mechanism.
      */
    event Pause();
    event Unpause();

    bool public paused = false;


    /**@dev Modifier to make a function callable only when the contract is not paused.
      */
    modifier whenNotPaused() {
        require(!paused);
        _;
    }

    /**@dev Modifier to make a function callable only when the contract is paused.
      */
    modifier whenPaused() {
        require(paused);
        _;
    }

    /**@dev can be called by only owner to pause, This is to trigger stopped state
      */
    function pause() public onlyOwner whenNotPaused {
        paused = true;
        emit Pause();
    }

    /**@dev can be called by only owner to unpause,This is to return to normal state
      */
    function unpause() public onlyOwner whenPaused {
        paused = false;
        emit Unpause();
    }

}