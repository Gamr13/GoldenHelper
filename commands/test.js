const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('test'),
		async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('Update Test')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("This command was created to test an update script on the server.")
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

