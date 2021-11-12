const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('bios')
        .setDescription('Where to place BIOS files'),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}

const exampleEmbed = new MessageEmbed()
	.setColor('#FFD700')
	.setTitle('BIOS file locations')
	.setAuthor('GoldenHelper', 'https://i.imgur.com/o7MkhhK.png')
	.setDescription("Before reading this, make sure you know how to connect to your Xbox by following /ftp or /mfe first!\n\n1) Connect to your Xbox and open LOCALFOLDER > The RetroArch folder\n2) Open the System folder\n3) Place all of your BIOS files **EXCEPT** your PS2 and Wii/GC BIOS files in here.\n4) Create a pcsx2 folder and a bios folder inside that, now place your PS2 BIOS in here.\n**NOTE:** You may also need to create a [cheats and cheats_ws folder](https://i.imgur.com/V5KiBok.png) in the pcsx2 folder, or else your games will just black screen. It is advised you do create these folders regardless.\n5) Go back to system and open / create the Dolphin-emu folder, place the Sys folder in here.\n\n And that's it, you're done!")
	.setTimestamp()
	.setFooter('© GoldenSky#6969 | 2021', 'https://i.imgur.com/I2LsE5o.png');
