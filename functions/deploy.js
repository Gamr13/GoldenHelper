// Creating the deploy function for export to ~/events/ready.js.
const deploy = () => {
    /*
    Importing some mandatory stuff for deploying commands
    from the discord.js package.

    Then we're importing some data from the config file (~/data/config.json).
    */
    const { REST, Routes } = require("discord.js");
    const { token, clientId } = require("../data/config.json");
    const fs = require("fs");
    
    /*
    Converting all the commands that we're going
    to have here later to a JSON format.
    */
    const commands = [].map(commands => commands.toJSON());

    // Same as stated in ~/index.js.
    const cmdFolders = fs.readdirSync("./commands");
    cmdFolders.forEach(folder => {
        const cmdFile = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
        cmdFile.forEach(file => {
            const cmd = require(`../commands/${folder}/${file}`);

            /*
            Pushing the data from the command
            (SlashCommandBuilder Data) to the commands array.
            */
            commands.push(cmd.data);
        });
    });
    
    /*
    Creating a new REST object, and assigning the token to it.

    Then we're assigning the commands to the bot.
    */
    const rest = new REST({ version: "10" }).setToken(token);
    rest.put(Routes.applicationCommands(clientId), { body: commands })
    .then(data => {
        // If everything was successful, it will print how many commands were deployed to the bot.
        console.log(`Deployed ${(data.length > 1) ? `${data.length} commands!` : `${data.length} command!`}`);
    });
}

// Export the function (-> ~/index.js).
exports.deploy = deploy;
