const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ppsspp')
        .setDescription('Get help for PPSSPP'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new EmbedBuilder()
	.setColor('#717ad4')
	.setTitle('PPSSPP Guide')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('Welcome to the PPSSPP support section.\n\n**Step 1)**\nOpen PPSSPP at least once to create the LocalState folder.\n\n**Step 2)**\nFollow /ftp to connect to your Xbox and go to the APPS folder and PPSSPP.\n\n**Step 3)**\nPlace your games in the PSP > GAME folder.\n\n**To use USB:**\n- Create a PSP Games folder on your USB named whatever you want and place your games inside.\n- Inside PPSSPP simply press the up arrow until you see a bunch of letters.\n- In Retail Mode, your USB will be the D:\ folder then select your games folder.\n- In Dev Mode your USB will be the E:\ folder, then select your games folder.')
	.setTimestamp()
