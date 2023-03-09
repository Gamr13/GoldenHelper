// Importing the commandHandler function.
const { commandHandler } = require("../functions/commandHandler.js");

module.exports = {
    // Providing the event name as well as making sure that it can be run more than once.
    name: "interactionCreate",
    once: false,

    // Code to be run when any interaction is created.
    execute(interaction) {
        // Calling the commandHandler function.
        commandHandler(interaction);
    }
}