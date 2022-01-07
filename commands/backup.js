const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('backup')
        .setDescription('List of files and folders to backup'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('Backup section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the Backup section. Follow /ftp to find out how to connect to your Xbox in retail or dev mode.')
	.addFields(
		{ name: 'Backing up RetroArch:', value: '- config\n- playlists\n- saves\n- states\n- system\n- content_history.lpl\n It is recommended to not backup retroarch.cfg', inline: true },
		{ name: 'Backing up PPSSPP:', value: '- PSP\n- Test\n- Test', inline: true },
	)
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

