const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('cores')
        .setDescription('Download Core Info Files for additional cores'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}

const exampleEmbed = new MessageEmbed()
	.setColor('#57f514')
	.setTitle('Core Info Files')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("Before reading this guide, please make sure you read /ftp first, it will help you connect to your Xbox.\nAdding these core info files to the info folder will enable you to easily use additional cores we have added for stability, performance or compatibility.\n\n**Internal info folder location:**\nApps > RetroArch > info\n**USB info folder location:\n**Wherever you created the info folder on your USB.\n\n\**Core Info Files**\n[Click Here](https://github.com/Gamr13/HelperBot/raw/main/files/Core_Info_Files.zip) to download the core info files.")
	.setTimestamp()
	.setFooter('GoldenSky#4649 | 2022', 'https://i.imgur.com/I2LsE5o.png');