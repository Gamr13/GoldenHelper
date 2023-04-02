const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { client } = require("../../index.js");
const fs = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("Display the top 10 users with the most reputation!"),

    async execute(interaction) {
        const repFile = fs.readFileSync("./data/rep.json", "utf8");
        const rep = JSON.parse(repFile)[1][interaction.guild.id];
        
        let embed = new EmbedBuilder()
        .setColor('#920dff')
        .setTitle(`Leaderboard`)
        .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
        .setDescription(`Reputation Leaderboard`);

        // First we flatten the snowflake
        let y = [];
        for (const user in rep) {
            y.push([ user, rep[user].rep ]);
        }
        y.sort((a, b) => a[1] - b[1]);

        // Now we loop from 0 to 9 through the flattened snowflake and output the date onto the embed
        for (let i = 0; i < 10; i++) {
            if (typeof y[i] !== "undefined") {
                let name = `<@${y[i][0]}>`;
                let reputation = y[i][1];

                embed.addFields({ name: `${i + 1}`, value: `User: ${name}\nRep: ${reputation}`, inline: true });
            } else {
                embed.addFields({ name: `${i + 1}`, value: `User: -\nRep: -`, inline: true });
            }
        }

        interaction.reply({ embeds: [embed] });
    }
}
