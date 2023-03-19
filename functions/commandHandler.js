// Importing the commands from the index.js file.
const { commands } = require("../index.js");
// Importing some mandatory stuff from the discord.js package.
const { InteractionType } = require("discord.js");
// Importing data from the config file.
const { ownerId } = require("../data/config.json");
const { AppCmd, MdlSbmt } = require("./interactionHandlers/HandlerCollection.js");

// Creating a function to handle the interaction.
const commandHandler = i => {
    /*
    If the type of the interaction is an ApplicationCommand,
    it will continue.
    */
    if (i.type == InteractionType.ApplicationCommand) {
        AppCmd(i, InteractionType, commands, ownerId);
    } else if (i.type == InteractionType.ModalSubmit) {
        MdlSbmt(i);
    }
}

// Export the function (-> ~/events/interactionCreate.js).
exports.commandHandler = commandHandler;