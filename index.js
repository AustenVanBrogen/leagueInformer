const {Client} = require("discord.js");
const {token}  = require("./config.json");

let client = new Client({intents: []});

client.login(token);