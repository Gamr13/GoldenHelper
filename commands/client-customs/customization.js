const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('customization')
        .setDescription('Learn how to customise RetroArch!'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new EmbedBuilder()
	.setColor('#920dff')
	.setTitle('RetroArch Customization Guide')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('Welcome to the RetroArch Customization Guide.')
		.addFields(
			{ name: 'Customizing RetroArch', value: 'After changing customization settings in RetroArch, make sure you go to Main Menu > Configuration File > Save Current Configuration and **restart RetroArch** for your changes to take effect.\n\n**Menu Driver:**\n- To change the Menu Driver, go to Settings > Drivers > Menu and select an option. \n\n- Changing the colour scheme of RetroArch can be done in Settings > User Interface > Appearance > Menu Color Theme', inline: false },
			{ name: 'Menu Driver:', value: '- To change the Menu Driver, go to Settings > Drivers > Menu and select an option.', inline: false },
			{ name: 'Changing Colour Scheme:', value: '- Changing the colour scheme of RetroArch can be done in Settings > User Interface > Appearance > Menu Color Theme', inline: false },
		)
	.setTimestamp()
