require("dotenv").config();

const configVars = {
	port: process.env.PORT,
	mogoURL:
		"mongodb+srv://showrovislam29:29082001@cluster0.rmz4hws.mongodb.net/",
};

module.exports = { configVars };
