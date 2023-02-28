/*

Original Bot has been written by: Gamr13/GoldenSky - https://github.com/Gamr13
Template Created by: Adrian Kuśmierek - https://github.com/AdrianKusmierek
Bot Upgraded and Updated at 28/02/2023 by: Adrian Kuśmierek - https://github.com/AdrianKusmierek

Any further changes to this project will be made by the Bot Holders.
In any other case, additions to this comment should
be made by any other contributors.

*/

//////////////////////////////////////////////////////////
///                   Main Variables                   ///
//////////////////////////////////////////////////////////

// Creating the bot client.
const { Client, GatewayIntentBits, Collection } = require("discord.js");
const { Guilds, GuildMessages, GuildMembers, MessageContent } = GatewayIntentBits;
const client = new Client({ intents: [Guilds, GuildMessages, GuildMembers, MessageContent] });
// Importing the fs module.
const fs = require("fs");

// Getting the bot token from the config file.
const { token } = require("./data/config.json");
// Getting the deploy function from the deploy file.
const { deploy } = require("./functions/deploy.js");

client.commands = new Collection();
module.exports.commands = client.commands;
module.exports.client = client;

//////////////////////////////////////////////////////////
///                  Main Functions                    ///
//////////////////////////////////////////////////////////

// Deploying the commands.
deploy();

// Reading the "commands" folder.
const cmdFolders = fs.readdirSync("./commands");
// Looping through the folder, looking for subfolders.
cmdFolders.forEach(folder => {
    // Reading all the subfolders.
    const cmdFile = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));

    // Looping through the subfolders, looking for command files.
    cmdFile.forEach(file => {
        // Reading all the command files.
        const cmd = require(`./commands/${folder}/${file}`);

        // Pushing the commands to the client.
        client.commands.set(cmd.data.name, cmd);
    });
});

// Reading the "events" folder.
const eFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));

// Looping through all the raw files in that folder.
eFiles.forEach(file => {
    // Getting the data from all the files within the folder.
    const event = require(`./events/${file}`);

    /*
    If the event file has a "once" property set to true,
    it will execute it only once.
    */
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
});

//////////////////////////////////////////////////////////
///                      Main Code                     ///
//////////////////////////////////////////////////////////

// Logging into the bot.
client.login(token);