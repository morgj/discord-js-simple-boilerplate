const {Client, Intents, MessageEmbed} = require('discord.js');
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const file = require(__dirname + "/data.json")

client.on('ready', async() => {
    console.log("Client successfully loaded.")
});

client.on('messageCreate', async msg => {
    /**
     * user types: #add 5 cows
     * command = "#add"
     * args = ["5", "cows"]
     */

    const [command, ...args] = msg.content.split(" ");
    const send = (content) => msg.channel.send({ embeds: [embed(content)] });

    if(command === "#REQUEST") {
        send("RESPONSE")
    }
});

const embed = (text) => new MessageEmbed().setFooter({text: text});

//Add bot token here
client.login("TOKEN");