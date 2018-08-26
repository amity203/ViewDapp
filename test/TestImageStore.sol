pragma solidity ^0.4.23;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/ImageStore.sol";

contract TestImageStore {
    ImageStore imageStore = ImageStore(DeployedAddresses.ImageStore());

    //address account0 = 0xfd050D4f0bEAF9739310bE2D455C4A3Cfec3F096;
   // address account1 = accounts[1];

    /**
    * @dev Checks Owner address vs expected.   Makes sure that the contract was deployed properly.
    */
    function testCheckContractOwner() public {

        address contractOwner = imageStore.getOwner();
        address expected = msg.sender;

        Assert.equal(contractOwner, expected, "Check Owner");
    }

    /**
    * @dev Checks to see if image data can be inserted.
    */
    function testuploadImage() public {
        //address contractOwner = applicantFactory.getOwner();
        uint256 insertCount = imageStore.uploadImage("QmPVpoK4GDdBqCzFMqt8WgSoujoJRSbwR1NKtdKH9peMA7", "222222222");

        Assert.equal(insertCount,2, "Test uploadImage Successful");
    }

    /**
    * @dev Checks to see if legth of image data returned of not.
    */

    function testimageLength() public {
        //address contractOwner = applicantFactory.getOwner();
        uint256 insertCount = imageStore.imageLength();

        Assert.equal(insertCount,2, "Test imageLength Successful");
    }

    /**
    * @dev Checks to see if image date get function works or not.
    */

    function testgetimageshash() public {
        //address contractOwner = applicantFactory.getOwner();
        string memory imagehash;
        imagehash = imageStore.getimageshash(1);
        string memory expected = "QmPVpoK4GDdBqCzFMqt8WgSoujoJRSbwR1NKtdKH9peMA7";

        Assert.equal(imagehash,expected, "getimageshash Tested Successful");
    }

    /**
    * @dev Checks to see if image date get function works or not.
    */

    function testimages() public {
        //address contractOwner = applicantFactory.getOwner();
        string memory imagehash;
        const images = imageStore.images(1);
        imagehash = images[0];
        string memory expected = "QmPVpoK4GDdBqCzFMqt8WgSoujoJRSbwR1NKtdKH9peMA7";

        Assert.equal(imagehash,expected, "getimageshash Tested Successful");
    }

}