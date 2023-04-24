const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, AttachmentBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('devstore')
        .setDescription('Get links to a ton of Dev Mode apps!'),
    async execute(interaction) {
		var rawData = fs.readFileSync(`data/devstore.json`, "utf8");
        var data = JSON.parse(rawData);

        var _embeds = [];
		var _currentPage = 1;
		var _lastPage = data.length;
		var _images = [];
		
		var _btn1 = new ButtonBuilder()
		.setCustomId("prev")
		.setLabel("Prev")
		.setStyle(ButtonStyle.Primary)
		.setDisabled(true);

		var _btn2 = new ButtonBuilder()
		.setCustomId("next")
		.setLabel("Next")
		.setStyle(ButtonStyle.Primary)
		.setDisabled(false);

		var _btn3 = new ButtonBuilder()
		.setURL("https://drive.google.com/drive/folders/1vkiYvIObU6T1DvYbIE3uEFsHb39jkBio?usp=sharing")
		.setLabel("Download")
		.setStyle(ButtonStyle.Link);

		var _btn4 = new ButtonBuilder()
		.setCustomId("dm")
		.setLabel("DM List")
		.setStyle(ButtonStyle.Primary);

		data.forEach((obj, i) => {
			_images.push(new AttachmentBuilder().setFile(`images/${obj.imagePath}`).setName(obj.imagePath));

			const embed = new EmbedBuilder()
			.setColor("#920dff")
			.setTitle(`${obj.title}`)
			.setDescription(`${obj.description}`)
			.setImage(`attachment://${obj.imagePath}`)
			.setFooter({ text: `Page ${i + 1}/${_lastPage}` })
			.setTimestamp();
	
			_embeds.push(embed);
		})

		const _row = new ActionRowBuilder()
		.addComponents(
			_btn1,
			_btn3,
			_btn2,
			_btn4
		)

		if (_lastPage == 1) {
			_btn1.setDisabled(true);
			_btn2.setDisabled(true);
		}

		interaction.reply({ embeds: [_embeds[_currentPage - 1]], components: [_row], files: [_images[_currentPage - 1]] });

		const filter = event => event.user.id == interaction.user.id;
		const collector = interaction.channel.createMessageComponentCollector({
			time: 1000 * 90,
			filter
		});
	
		collector.on("collect", async buttonInteraction => {
			if (buttonInteraction.customId == "prev") {
				_currentPage -= 1;
				_embeds[_currentPage - 1].data.footer.text = `Page ${_currentPage}/${_lastPage}`;
				buttonInteraction.deferUpdate();
			} else if (buttonInteraction.customId == "next") {
				_currentPage += 1;
				_embeds[_currentPage - 1].data.footer.text = `Page ${_currentPage}/${_lastPage}`;
				buttonInteraction.deferUpdate();
			} else if (buttonInteraction.customId == "dm") {
				interaction.user.send({ embeds: [new EmbedBuilder()
					.setColor('#FFD700')
					.setTitle('Dev Mode Store')
					.setAuthor({name: 'GoldenHelper', iconURL:"https://i.imgur.com/o7MkhhK.png"})
					.setDescription('Welcome to the Dev Mode Store! Here you can get links to a ton of .appx files for dev mode!')
					.addFields(
						{ name: '\u200B', value: '\u200B' },
						{ name: 'RetroArch', value: '[Download](https://drive.google.com/drive/folders/1vkiYvIObU6T1DvYbIE3uEFsHb39jkBio?usp=sharing)', inline: true },
						{ name: 'DurangoFTP', value: '[Download](https://github.com/Dantes-Dungeon/DURANGO-FTP/releases)', inline: true },
						{ name: 'ADV File Explorer Ex', value: '[Download](https://www.mediafire.com/file/2kuk79p111f9mm1/Adv_File_Explorer_Ex_%2528v1.6.6.0%2529.7z/file)', inline: true },
						{ name: 'PPSSPP', value: '[Download](https://drive.google.com/drive/folders/1LCXnJcauEhKgX5Klvwm8ErEo2qu0EJWL?usp=sharing)', inline: true },
						{ name: 'Flycast', value: '[Download](https://github.com/flyinghead/flycast/releases)', inline: true },
						{ name: 'XBSX2', value: '[Download](https://github.com/TheRhysWyrill/PCSX2/releases)', inline: true },
						{ name: 'Retrix Gold', value: '[Download](https://github.com/basharast/RetrixGold/releases)', inline: true },
						{ name: 'Kodi', value: '[Download](http://mirrors.kodi.tv/nightlies/windows/uwp64/)', inline: true },
						{ name: 'DevilutionX', value: '[Download](https://github.com/diasurgical/devilutionX/releases)', inline: true },
						{ name: 'Heart of Darkness', value: '[Download](https://github.com/tuxuser/hode/releases)', inline: true },
						{ name: 'OpenLara', value: '[Download](https://github.com/XProger/OpenLara/releases)', inline: true },
						{ name: 'Relic Hunters Zero', value: '[Download](https://github.com/MDashK/Relic-Hunters-Zero-Xbox/releases)', inline: true },
						{ name: 'Prince of Persia', value: '[Download](https://github.com/Xbox-Homebrew/SDLPoP/releases)', inline: true },
						{ name: 'VVVVVV', value: '[Download](https://github.com/Xbox-Homebrew/DURANGO-V6/releases)', inline: true },
						{ name: 'Sonic 1 SMS Remake', value: '[Download](https://github.com/MDashK/sonic-1-sms-remake-xbox/releases)', inline: true },
						{ name: 'Sonic 2 SMS Remake', value: '[Download](https://github.com/MDashK/sonic-2-sms-remake-xbox/releases)', inline: true },
						{ name: 'Sonic Time Twisted', value: '[Download](https://www.mediafire.com/file/74shtqbyzr4q2dg/Sonic_Time_Twisted_%255BUnofficial%255D_%2528v1.1.2.0%2529.appx/file)', inline: true },
					)] });
				buttonInteraction.deferUpdate();
			}

			_btn3.data.url = data[_currentPage - 1].downloadURL;

			if (_lastPage == 1) {
				_btn1.setDisabled(true);
				_btn2.setDisabled(true);
			} else if (_currentPage == 1) {
				_btn1.setDisabled(true);
				_btn2.setDisabled(false);
			} else if (_currentPage == _lastPage && _lastPage != 1) {
				_btn1.setDisabled(false);
				_btn2.setDisabled(true);
			} else {
				_btn1.setDisabled(false);
				_btn2.setDisabled(false);
			}

			await interaction.editReply({ embeds: [_embeds[_currentPage - 1]], components: [_row], files: [_images[_currentPage - 1]] });
		});
	
		collector.on("end", () => {
			interaction.followUp({
				ephemeral: true,
				content: "Interaction Timed Out"
			});
		});
    }
}
