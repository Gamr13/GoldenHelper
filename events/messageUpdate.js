const { EmbedBuilder } = require("discord.js");
const { client } = require("../index.js");

module.exports = {
    name: "messageUpdate",
    once: false,

    execute(oldMessage, newMessage) {
        let embed = new EmbedBuilder()
        .setColor('#920dff')
        .setTitle(`Message Updated`)
        .setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
        .setDescription(`<@${oldMessage.member.id}> has edited a message!`)
        .addFields(
            { name: 'Old', value: `${oldMessage}`, inline: false },
            { name: 'New', value: `${newMessage}`, inline: false }
        );

        client.channels.cache.get("1007583776949403720")
        .send({ embeds: [embed] });
    }
}