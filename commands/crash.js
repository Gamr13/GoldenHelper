const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('crash')
        .setDescription('Find out a list of known RetroArch crashes and fixes!'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('RetroArch Crashes.')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("- Crash at Import Content\n Solution: Settings > User Interface > Menu Item Visibility, disable the Expore tab.\n\n- Scan Directory and Scan File don't work\nSolution: Use Manual Scan.'")
    //.addField("")
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');

