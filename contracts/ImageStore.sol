pragma solidity ^0.4.23;

contract ImageStore {

    
    struct Image{
        string imageHash;
        address userAddress;
        string uploadDate;
    }
    Image[] public images;
    event ImageUploaded( string _IPFSHash, address _add, string _date);

    function uploadImage(string _hash, string _date) public returns(uint) {
        images.length++;
        images[images.length-1].imageHash = _hash;
        images[images.length-1].userAddress = msg.sender;
        images[images.length-1].uploadDate = _date;
        emit ImageUploaded(_hash, msg.sender, _date);
        return images.length;
    }

    function getimages(uint index) public view returns( string) {
        return (images[index].imageHash);
    }
    
    function imageLength() public view returns (uint){
        return images.length;
    }
}