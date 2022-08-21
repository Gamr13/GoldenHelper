const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('duckstation')
        .setDescription('Get help for DuckStation'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}
	
const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('DuckStation help section')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription('Welcome to the DuckStation standalone support section.\n\n**Step 1)**\nOpen DuckStation at least once to create the LocalState folder.\n\n**Step 2)**\nFollow /ftp to connect to your Xbox and go to the APPS folder and DuckStation.\n\n**Step 3)**\nPlace your scph####.bin BIOS file(s) in the bios folder.\n\n**To use USB:**\n- Create a DuckStation folder on your USB and a `bios` folder inside, then place your BIOS file(s) in there.\n- Inside DuckStation, go to settings > BIOS Settings > BIOS Directory and press `<Parent Directory>` until you see a list of drive letters. \n- Press on D: (retail mode) or E: (dev mode) and select your DuckStation > bios folder.')
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');

