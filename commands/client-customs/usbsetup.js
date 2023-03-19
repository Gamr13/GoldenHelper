const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('usbsetup')
        .setDescription('Setting up the USB folders for RetroArch.'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}

const exampleEmbed = new EmbedBuilder()
	.setColor('#920dff')
	.setTitle('USB Setup Guide!')
	.setImage('https://i.imgur.com/avZHCJO.png')
	.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
	.setDescription('Welcome to the USB Setup Guide.')
		.addFields(
			{ name: 'Step 1)', value: 'We recommend setting up two folder named "Games" and "RetroArch", this is where we will store necessary RetroArch files and games.', inline: false },
			{ name: 'NOTE:', value: 'If you do not want to store any RetroArch / BIOS fles on your USB, you can skip this and follow the internal guide instead. (see /bios for more information)', inline: false },
			{ name: 'Step 2)', value: 'Create the following folders in the RetroArch folder on your USB: \n- assets\n- cheats\n- config\n- databases\n- info\n- logs\n- playlists\n- remaps\n- saves\n- states\n- system', inline: false },
			{ name: 'Step 3)', value: 'Place your BIOS files in the system folder as you would normally do. (follow /bios for more information)', inline: false },
			{ name: 'Step 4)', value: 'Inside the Games folder on your USB, create folders like "GBA", "NES", "PS1", "PS2" you can name them whatever you want to, but this is best for Manual Scan in RetroArch. [see here](https://discord.com/channels/1007582798598647889/1009637763575975998/1009914554127487177)', inline: false },
			{ name: 'Step 5)', value: 'Open RetroArch and go to Settings > Directory, you can now begin setting each directory to your USB by pressing Parent Directory and D: (retail mode) or E: (dev mode).', inline: false },
			{ name: 'DONE!', value: 'Your USB is now set up in the best way possible!', inline: false },
		)
	.setTimestamp()


