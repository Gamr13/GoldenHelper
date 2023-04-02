const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('backup')
        .setDescription('List of files and folders to backup'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new EmbedBuilder()
	.setColor('#4287f5')
	.setTitle('Backup Guide')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('Welcome to the Backup section. Follow /ftp to find out how to connect to your Xbox in retail or dev mode.')
	.addFields(
		{ 
		name: 'Backing up RetroArch:', 
		value: '- config\n- playlists\n- saves\n- states\n- system\n- content_history.lpl\n\n**It is not recommended backup retroarch.cfg**\nWe also strongly recommend using a USB flash drive / External HDD to prevent any potential data loss.', 
		inline: true 
		},
		
		//Unused
		//{ name: 'Backing up PPSSPP:', 
		//value: '- PSP\n- Test\n- Test', 
		//inline: true },
	)
	.setTimestamp()
