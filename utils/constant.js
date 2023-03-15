// HTTP STATUS CODES
const HTTP_STATUS_CODE = {
	OK: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOW: 405,
	CONFLICT: 409,
	INTERNAL_SERVER: 500,
};

// ERROR MESSAGE CONSTANTS
const ERROR_MESSAGE = {
	REQUIRED_PARAMETERS_MISSING: 'REQUIRED API REQUEST PARAMETERS ARE MISSING',
	INTERNAL_SERVER: 'Internal server error',
	DB_CONNECTION: 'Failed to connect to DB on startup: ',
	PG_DB_CONNECTION_ERROR: 'PG DB Connection Error!',
	NO_PERMISSION_TO_ACCESS:"YOU HAVE NOT PERMISSION TO ACCESS",
    GET_BALANCE_NOT_EXIST: "Fetch Balance not possible"
};

const SUCCESS_MESSAGE = {
	PAYMENT_CAPTURED: 'Payment captured',
	PAYMENT_FETCHED: 'Payment fetched',
	PAYMENT_INITIATED: 'Payment initiated',
	PAYMENT_VERIFIED: 'Payment verified',
	CARD_VERIFIED: 'Card Verified',
	PROCEED_WITH_VIRTUAL_ACCOUNT: 'Proceed with virtual account ',
	MONGO_CONNECTION_SUCCESS: 'Mongo Connection Succeeded.',
	LOGIN: "User logged in successfully",
	OPERATOR_LOGIN: "Operator logged in successfully",
	PASSWORD_UPDATE: "Password has been updated successfully",
	RECORD_CHECKED: "User record checked successfully.",
	RECORD_FETCHED: "User record fetched successfully.",
	RECORD_UPDATED: "User record updated successfully.",
	RECORD_SAVED: "User record saved successfully.",
	DB_CONNECTION_SUCCESS: "MongoDB connection established successfully.",
	RANDOM_KEY_GENERATION: "Random key generated successfully.",
	JWE_CREATED: "JWE created successfully.",
	SUCCESS: "success",
	RECOVERY_KEY_GENERATED: "Recovery key generated successfully.",
	ACCOUNT_RECOVERED: "Account recovered successfully.",
	NEW_PASSWORD_SET: "New password has been set!",
	ORG_RECORD_SAVED: "Organization record saved successfully.",
	ORG_RECORD_CHECKED: "Organization record checked successfully.",
	CARD_DETAILS_ADDED: "Card Details added successfully",
	ADMIN_RECORD_CHECKED: "Admin record checked successfully",
	ADMIN: "Admin logged in successfully",
	OPERATOR: "Operator logged in successfully",
	NOTICE_RECORD_CHECKED: "Admin notice record checked successfully",
	FAQ_RECORD_CHECKED: "Admin FAQ record checked successfully",
	DELETE_FAQ_RECORD: "Delete FAQ record successfully",
	DELETE_OPERATOR_RECORD: "Delete Operator record successfully",
	DELETE_NOTICE_RECORD: "Delete notice record successfully",
	DELETE_PRESS_RECORD: "Delete press-release record successfully",
	DELETE_POPUP_RECORD: "Delete popup record successfully",
	PRESS_RECORD_CHECKED: "Admin press release record checked successfully",
};


// EXPORT MODULE
module.exports = {
	ERROR_MESSAGE,
	SUCCESS_MESSAGE,
	HTTP_STATUS_CODE
};