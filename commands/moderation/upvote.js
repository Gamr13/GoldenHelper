const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { client } = require("../../index.js");
const fs = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("upvote")
    .setDescription("Upvote a user")
    .addUserOption(option => option
        .setName("user")
        .setDescription("User to upovote")
        .setRequired(true)
    ),

    async execute(interaction) {
        const user = interaction.options.getMember("user");

        if (interaction.user == user.user) return interaction.reply({ content: "You can't upvote yourself", ephemeral: true});

        const repFile = fs.readFileSync("./data/rep.json", "utf8");
        const rep = JSON.parse(repFile);

        if (!rep[1][interaction.guild.id]) {
            rep[1][interaction.guild.id] = {};

            if (!rep[1][interaction.guild.id][user.id]) {
                rep[1][interaction.guild.id][user.id] = {
                    rep: 1
                };
            }
        } else if (!rep[1][interaction.guild.id][user.id]) {
            rep[1][interaction.guild.id][user.id] = {
                rep: 1
            };
        } else {
            rep[1][interaction.guild.id][user.id].rep += 1;
        }
        fs.writeFileSync("./data/rep.json", JSON.stringify(rep, null, 2), "utf8");

        let embed = new EmbedBuilder()
        .setColor('#920dff')
        .setTitle(`Upvote`)
        .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
        .setDescription(`An Upvote has been added to <@${user.user.id}>`)
        .addFields(
            { name: 'Reputation', value: `${rep[1][interaction.guild.id][user.id].rep}`, inline: false }
        );

        await interaction.reply({ embeds: [embed] });

        for (const k in rep[0]) {
            if (rep[1][interaction.guild.id][user.id].rep == k) {
                let role = interaction.guild.roles.fetch(rep[0][k])
                .then(role => {
                    user.roles.add(role)
                    .then(() => {
                         let followupEmbed = new EmbedBuilder()
                        .setColor('#920dff')
                        .setTitle(`Rankup!`)
                        .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
                        .setDescription(`<@${user.user.id}> has ranked up to <@&${rep[0][k]}>`);
                        
                        return interaction.followUp({ embeds: [followupEmbed] });
                    })
                    .catch(err => {
                        console.error(err);
                    });
                });
            }
        }
    }
}
