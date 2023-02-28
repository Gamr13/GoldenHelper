const { SlashCommandBuilder, ActivityType, PermissionsBitField } = require("discord.js");
const { client } = require("../../index.js");
const fs = require("fs");

module.exports = {
    permissions: [PermissionsBitField.Flags.Administrator],
    data: new SlashCommandBuilder()
    .setName("status")
    .setDescription("Sets the Bot's Status!")
    .addStringOption(status => status
        .setName("status")
        .setDescription("The Status's Type! e.g. \"IDLE\"")
        .addChoices(
            { name: "Online", value: "online"},
            { name: "Do Not Disturb", value: "dnd"},
            { name: "Away/Idle", value: "idle"},
            { name: "Offline", value: "invisible"}
        )
        .setRequired(true)
    )
    .addStringOption(type => type
        .setName("type")
        .setDescription("The Status's Type! e.g. \"PLAYING\"")
        .addChoices(
            { name: "Playing", value: "0" } ,
            { name: "Listening", value: "1" },
            { name: "Watching", value: "2" },
            { name: "Competing in", value: "3" },
            { name: "Custom", value: "4" },
            { name: "Streaming", value: "5" }
        )
        .setRequired(true)
    )
    .addStringOption(content => content
        .setName("content")
        .setDescription("The Content of the Status!")
        .setRequired(true)
    ),

    async execute(interaction) {
        // Getting the interaction options and saving them within variables
        const status = interaction.options.getString("status");
        const type = interaction.options.getString("type");
        const content = interaction.options.getString("content");

        const typeNum = Number(type);

        const typeArray = [
            ActivityType.Playing,
            ActivityType.Listening,
            ActivityType.Watching,
            ActivityType.Competing,
            ActivityType.Custom,
            ActivityType.Streaming
        ];

        // Setting the Bot's Status
        client.user.setPresence({
            activities: [{ name: content, type: typeArray[typeNum] }],
            status: status,
        });

        const dataFile = fs.readFileSync("./data/client.json", "utf8");
        const data = JSON.parse(dataFile);

        data[0].content = content;
        data[0].type = typeArray[typeNum],
        data[0].status = status;

        // Savings the Bot's Status' data into a file to be ran on startup
        const sendData = JSON.stringify(data, null, 2);
        fs.writeFileSync("./data/client.json", sendData, "utf8");

        await interaction.reply("The Bot's Status Has Been Updated!");
    }
}