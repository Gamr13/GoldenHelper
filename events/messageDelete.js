const { EmbedBuilder } = require("discord.js");
const { client } = require("../index.js");

module.exports = {
    name: "messageDelete",
    once: false,

    execute (message) {
        let embed = new EmbedBuilder()
        .setColor('#920dff')
        .setTitle(`Message Deleted`)
        .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
        .setDescription(`<@${message.member.id}> has deleted a message!`)
        .addFields(
            { name: 'Deleted Message', value: `${message}`, inline: false }
        );

        client.channels.cache.get("1007583776949403720")
        .send({ embeds: [embed] });
    }
}