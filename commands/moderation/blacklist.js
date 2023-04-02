const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require("discord.js");
const fs = require("fs");

module.exports = {
    permissions: [PermissionsBitField.Flags.Administrator],
    data: new SlashCommandBuilder()
    .setName("blacklist")
    .setDescription("A command to add, view or remove blacklisted words or sentences")
    .addSubcommand(subcommand => subcommand
        .setName("add")
        .setDescription("Add a blacklisted word or sentence")
        .addStringOption(option => option
            .setName("content")
            .setDescription("The content of the blacklisted word or sentence")
            .setRequired(true)    
        )
        .addBooleanOption(option => option
            .setName("message_remove")
            .setDescription("Whether or not to remove the blacklisted message")
            .setRequired(true)    
        )
        .addIntegerOption(option => option
            .setName("strikes_given")
            .setDescription("The number of strikes to give")
            .setRequired(true)    
        )
        .addStringOption(option => option
            .setName("response")
            .setDescription("The reply message to send, if left blank, none will be sent")
        )
    )
    .addSubcommand(subcommand => subcommand
        .setName("remove")
        .setDescription("Removes a blacklisted word or sentence")
        .addStringOption(option => option
            .setName("content")
            .setDescription("The content of the blacklisted word or sentence")
            .setRequired(true)    
        )
    )
    .addSubcommand(subcommand => subcommand
        .setName("view")
        .setDescription("View all blacklisted words or sentences")
    ),

    async execute(interaction) {
        let add = () => {
            let content = interaction.options.getString("content").toLowerCase();
            let message_remove = interaction.options.getBoolean("message_remove");
            let strikes_given = interaction.options.getInteger("strikes_given");
            let response = interaction.options.getString("response");
            
            const blacklistFile = fs.readFileSync("./data/blacklist.json", "utf8");
            const blacklist = JSON.parse(blacklistFile);

            // Adding the content into the .json file as a JSON Snowflake
            blacklist[content] = {
                message_remove: message_remove,
                strikes_given: strikes_given,
                response: response
            };
            
            // Writing the data into the .json file
            fs.writeFileSync("./data/blacklist.json", JSON.stringify(blacklist, null, 2), "utf8");

            let embed = new EmbedBuilder()
            .setColor('#920dff')
            .setTitle(`Blacklist`)
            .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
            .setDescription("Added a new Blacklisted word or sentence")
            .addFields({ name: "Content", value: `${content}` });

            interaction.reply({ embeds: [embed], ephemeral: true });
        }

        let remove = () => {
            let content = interaction.options.getString("content").toLowerCase();

            const blacklistFile = fs.readFileSync("./data/blacklist.json", "utf8");
            const blacklist = JSON.parse(blacklistFile);

            // Removing the data from the snowflake array
            delete blacklist[content];
            
            // Writing the changed data into the.json file
            fs.writeFileSync("./data/blacklist.json", JSON.stringify(blacklist, null, 2), "utf8");

            let embed = new EmbedBuilder()
            .setColor('#920dff')
            .setTitle(`Blacklist`)
            .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
            .setDescription("Removed a new Blacklisted word or sentence")
            .addFields({ name: "Content", value: `${content}` });

            interaction.reply({ embeds: [embed], ephemeral: true });
        }

        let view = () => {
            const blacklistFile = fs.readFileSync("./data/blacklist.json", "utf8");
            const blacklist = JSON.parse(blacklistFile);

            let embed = new EmbedBuilder()
            .setColor('#920dff')
            .setTitle(`Blacklist`)
            .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
            .setDescription("Blacklisted words or sentences")

            // Viewing the data
            for (const index in blacklist) {
                let obj = blacklist[index];

                embed.addFields({ name: index, value: `message_remove: ${obj.message_remove}\nstrikes_given: ${obj.strikes_given}\nresponse: ${obj.response}`, inline: false });
            }

            interaction.reply({ embeds: [embed] })
        }

        if (interaction.options.getSubcommand() == "add") {
            add();
        } else if (interaction.options.getSubcommand() == "remove") {
            remove();
        } else if (interaction.options.getSubcommand() == "view") {
            view();
        }
    }
}
