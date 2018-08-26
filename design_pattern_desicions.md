

# Design Pattern Decisions

1. This app only stored user specific data and does not allow any value transfer. Only ether useage is in term of gas, when a new update is requested by user. So no potentail attack can cause financial loss.

2. SafeMath256 library - SafeMath is a solidity math library especially designed to support safe math operations: safe means that it prevents overflow when working with uint.

3. Unit Testing was chosen for the required new functions in smart contract.

4. Smart contract have some tested code for ownership and its tranfer. Also it has tested code for pausing and unpausing a contract. Not much specific unit tests written for those functions as they are already well tested.

5. Pause and Unpause functionality included for any unexpected event and planned downtime. This will serve purpose of an emergency switch.

6. Ownership transfer feature given to safely move ownership to other address if required.

7. Mortal - Not Used. No Ether was involved so a mortal contract wasn't necessary.

8. Admin - No sesitive data stored, so access restriction was not required.

