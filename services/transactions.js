const tranModel = require("../model/transactions");
const { logger } = require("../utils/logger.js");

const registerTran = async (data) => {
	try {
		console.log("data",data)
		// Save admin in the database
		const transactions = new tranModel(data);
		console.log("transactions",transactions)
		const result = await transactions.save(transactions);
		console.log("result",result)
		return { isSuccess: true, data: result };
	} catch (err) {
		return { isSuccess: false, data: err };
	}
};

module.exports= {registerTran}
