const { content, type, status } = require("../data/client.json")[0];

module.exports = {
    // Providing the event name as well as making sure it runs only once.
    name: "ready",
    once: true,

    // Code to be executed when the bot has started up successfully.
    execute(client) {
        // Prints out: Logged in as DiscordUser#1234.
        console.log(`Logged in as: ${client.user.tag}`);

        // Setting the bot's status using the data from data/client.json.
        client.user.setPresence({
            activities: [{ name: content, type: type }],
            status: status,
        });
    }
}