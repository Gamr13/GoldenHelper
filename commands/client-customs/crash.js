const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('crash')
        .setDescription('Find out a list of known RetroArch crashes and fixes!'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new EmbedBuilder()
	.setColor('#FFD700')
	.setTitle('RetroArch Crashes.')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription("**- Crash when trying to navigate to the playlists**:\n Solution: Settings > User Interface > Menu Item Visibility, disable the Expore tab.\n\n**- Scan Directory and Scan File don't add some ROMs to the playlist**:\nSolution: Use Manual Scan.\n\n**- Online Updater freezes / crashes RetroArch**:\nSolution: Keep restarting RetroArch and retrying, there's no fix for this currently.")
    //.addField("") 	//Just to remind me this exists and can be used.
	.setTimestamp()
