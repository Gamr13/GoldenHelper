const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField, PermissionFlagsBits } = require("discord.js");
const { punish } = require("../../functions/punish.js");
const { client } = require("../../index.js");
const fs = require("fs");

module.exports = {
    permissions: [PermissionsBitField.Flags.Administrator],
    data: new SlashCommandBuilder()
    .setName("strike")
    .setDescription("Command to strike a user")
    .addUserOption(user => user
        .setName("user")
        .setDescription("Target member.")
        .setRequired(true)
    )
    .addStringOption(reason => reason
        .setName("reason")
        .setDescription("Reason for the strike.")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),


    async execute(interaction) {
        const user = interaction.options.getMember("user");
        const reason = interaction.options.getString("reason");

        const strikesFile = fs.readFileSync("./data/strikes.json", "utf8");
        const strikes = JSON.parse(strikesFile);

        if (!strikes[user.id]) {
            strikes[user.id] = {
                strikes: 1
            };
        } else {
            strikes[user.id].strikes += 1;
        }
        fs.writeFileSync("./data/strikes.json", JSON.stringify(strikes, null, 2), "utf8");

        punish(user);

        let embed = new EmbedBuilder()
        .setColor('#920dff')
        .setTitle(`Strike`)
        .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
        .setDescription(`A Strike has been added to ${user.user.tag}`)
        .addFields(
            { name: 'Total Amount of Strikes', value: `${strikes[user.id].strikes}`, inline: false }
        );

        interaction.reply({ embeds: [embed] });

        let logEmbed = new EmbedBuilder()
        .setColor('#9e2352')
        .setTitle('Strike Given')
        .setAuthor({name: `${user.user.tag} (ID: ${user.id})`, iconURL:`${user.displayAvatarURL()}`})
        .setDescription(`Strike applied to ${user.user.tag}.`)
        .addFields(
            { name: ':triangular_flag_on_post: Strikes: ', value: `${strikes}`, inline: true },
        )

        client.channels.cache.get("1007583776949403720")
        .send({ embeds: [logEmbed] });
    }
}
