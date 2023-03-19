const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField, PermissionFlagsBits } = require("discord.js");
const fs = require("fs");

module.exports = {
    permissions: [PermissionsBitField.Flags.Administrator],
    data: new SlashCommandBuilder()
    .setName("pardon")
    .setDescription("Command to strike a user")
    .addUserOption(user => user
        .setName("user")
        .setDescription("Target member.")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

	
    async execute(interaction) {
        const user = interaction.options.getMember("user");

        const strikesFile = fs.readFileSync("./data/strikes.json", "utf8");
        const strikes = JSON.parse(strikesFile);

        if (!strikes[user.id] || strikes[user.id].strikes == 0) {
            strikes[user.id] = {
                strikes: 0
            };
        } else {
            strikes[user.id].strikes -= 1;
        }
        fs.writeFileSync("./data/strikes.json", JSON.stringify(strikes, null, 2), "utf8");

        let embed = new EmbedBuilder()
        .setColor('#920dff')
        .setTitle(`Strike`)
        .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
        .setDescription(`A Strike has been removed from ${user.user.tag}`)
        .addFields(
            { name: 'Total Amount of Strikes', value: `${strikes[user.id].strikes}`, inline: false }
        );

        interaction.reply({ embeds: [embed] });
    }
}
