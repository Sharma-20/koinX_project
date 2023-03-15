//Node.js library for communicating with the Etherscan API
const Etherscan = require('node-etherscan-api');
const etherscan = new Etherscan("D5UT2VWNDIJV98A3SCK91KR9G2BTQQBS9W");
console.log(etherscan)
const axios = require("axios");
const { successResponse, errorResponse, errorHandler } = require('../utils/response');
const {
    ERROR_MESSAGE,
    SUCCESS_MESSAGE,
    HTTP_STATUS_CODE

} = require("../utils/constant");
var CronJob = require("cron").CronJob;
const { registerTran } = require("../services/transactions")

//Get Ether balance for a single address
const getBalance = async (request, response) => {
    try {
        const address = request.body.address
        const tag = "latest"
        const price = await etherscan.getEtherLastPrice()
        const balance = await etherscan.getAccountBalance(address, tag)
        if (balance.status = "success") {
            console.log(balance)
            console.log(price)
            return response.status(HTTP_STATUS_CODE.OK).json("Balance is " + balance);
        }
    } catch (err) {
        console.log("Error", err)
        errorHandler(err, response);
    }
}


// //Get a list of normal transactions by address
const getTransactions = async (request, response) => {
    console.log("1")
    try {
        const address = request.body.address
        const startblock = 0 // Optional
        const endblock = 999999 // Optional
        const page = 1
        const offset = 10
        const sort = 'desc'
        const transactions = await etherscan.getTransactions(
            address,
            startblock,
            endblock,
            page,
            offset,
            sort
        )
        console.log("trasactions", transactions)
    
        // for (let i = 0; i < transactions.length; i++) {
        //     let trans = new trans({
        //         blockNumber: transactions[i]['blockNumber'],
        //         timeStamp: transactions[i]['timeStamp'],
        //         hash: transactions[i]['hash'],
        //         nonce: transactions[i]['nonce'],
        //         blockHash: transactions[i]['blockHash'],
        //     })
        // }

        const result1 = await registerTran(transactions);
        console.log("result1", result1)
        if (!result1.isSuccess) {
            return response.json(errorResponse(result1.data.message));
        } else {
            return response.status(HTTP_STATUS_CODE.OK).json(successResponse(transactions));
        }
    } catch (err) {
        console.log("Error", err)
        errorHandler(err, response);
    }
}


//Build a system within the same server to fetch the price of Ethereum every 10 minutes using cron

const price = async()=> {
    try{
    axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
    )
    .then(function (response) {
        console.log(response.data);
    });
}catch (err) {
    console.log("Error", err)
    errorHandler(err, response);
}
}
price()

//Using Cron
const Blocktime = 1800;
const CronStart = new CronJob(`*/${Blocktime} * * * * *`, () => {
    price();
   });

   CronStart.start()

module.exports = {
    getBalance,
    getTransactions,
    price
};