//Node.js library for communicating with the Etherscan API
// Practice
// For learning only
const Etherscan = require('node-etherscan-api');
const etherscan = new Etherscan("D5UT2VWNDIJV98A3SCK91KR9G2BTQQBS9W");
console.log(etherscan)
const axios = require("axios");


//Get Ether balance for a single address
const getBalance = async () => {
    try {
        const address = "0xce94e5621a5f7068253c42558c147480f38b5e0d"
        const tag = "latest"
        const balance = await etherscan.getAccountBalance(address, tag)
        const price = await etherscan.getEtherLastPrice()
        console.log(balance)
        console.log(price)
    } catch (err) {
        console.log("Error", err)
    }
}
getBalance()

// //Get a list of normal transactions by address
const getTransactions = async () => {
    console.log("1")
    try {
        const address = "0xce94e5621a5f7068253c42558c147480f38b5e0d"
        const startblock = 0 // Optional
        const endblock = 999999 // Optional
        const page = 1
        const offset = 10
        const sort = 'desc'
        const trasactions = await etherscan.getTransactions(
            address,
            startblock,
            endblock,
            page,
            offset,
            sort
        )
        console.log("trasactions", trasactions)
    } catch (err) {
        console.log("Error", err)
    }
}
getTransactions()


// const CONTRACT_ADDRESS = "0xA9D1e08C7793af67e9d92fe308d5697FB81d3E43";
// const etherescan_url = `http://api.etherscan.io/api?module=contract&action=getabi&address=${CONTRACT_ADDRESS}&apikey=${ETHERSCAN_API_KEY}`


// axios
//     .get(
//         "https://api.etherscan.io/api?module=account&action=txlistinternal&txhash=0x6ae021bc2867c4efaf7152359dccd10299860b473f13be5625152606a93944cb&apikey=7Q1F98K34QWXNUT1XCJ137VXVZXTEA6GWU"
//     )
//     .then(function (response) {
//         console.log(response.data);
//     });


module.exports = {
    getBalance,
    getTransactions
};