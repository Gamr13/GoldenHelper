const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('bios')
        .setDescription('Where to place BIOS files'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}

const exampleEmbed = new EmbedBuilder()
	.setColor('#57f514')
	.setTitle('BIOS file locations')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription("Before reading this guide, please make sure you read /ftp first, it will help you connect to your Xbox.\n\n**Internal system folder location:**\nApps > RetroArch > system\n**USB system folder location:\n**Wherever you created the system / BIOS folder on your USB.")
	.addFields(
		{ name: 'LRPS2', value: 'LocalState / USB > system > pcsx2 > bios\n**It is recommended to create the `cheats` and `cheats_ws` folders inside the pcsx2 folder, beside the `bios` folder.**', inline: false },
		{ name: 'Dolphin', value: 'LocalState / USB > system > Dolphin-emu', inline: false },
		{ name: 'Other cores (PS1, GBA, etc)', value: 'LocalState / USB > system', inline: false },
	)
	.setTimestamp()
