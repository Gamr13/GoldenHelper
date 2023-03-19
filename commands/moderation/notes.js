const { ButtonBuilder, ActionRowBuilder, SlashCommandBuilder, ButtonStyle, EmbedBuilder, PermissionsBitField, PermissionFlagsBits } = require("discord.js");
const fs = require("fs");

module.exports = {
    permissions: [PermissionsBitField.Flags.Administrator],
    data: new SlashCommandBuilder()
    .setName("note")
    .setDescription("Note Command for Easier Moderation.")
    .addSubcommand(x => x
        .setName("add")
        .setDescription("Add a Note to the Desired User.")
        .addUserOption(x => x
            .setName("user_add")
            .setDescription("Target User.")
            .setRequired(true)    
        )
        .addStringOption(x => x
            .setName("content")
            .setDescription("Content of the Note.")
            .setRequired(true)
        )
    )
    .addSubcommand(x => x
        .setName("read")
        .setDescription("Read a Note of the Desired User.")
        .addUserOption(x => x
            .setName("user_read")
            .setDescription("Target User.")
            .setRequired(true)    
        )
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(interaction) {
        const user_add = interaction.options.getUser("user_add");
        const user_read = interaction.options.getUser("user_read");
        const content = interaction.options.getString("content");
        const subCmd = interaction.options.getSubcommand();

        var myData = fs.readFileSync(`./data/notes.json`, "utf8");
        var data = JSON.parse(myData);

        function addFunc(user, content) {
            var _noteObj = {
                user_id: user.id,
                author_id: [interaction.user.id],
                notes: [content]
            }

            if (data.length < 1) {
                data.push(_noteObj);
            } else {
                data.forEach(obj => {
                    if (data.some(item => item.user_id == user.id)) {
                        if (obj.user_id == user.id) {
                            obj.author_id.push(interaction.user.id);
                            obj.notes.push(content);
                        }
                    } else {
                        data.push(_noteObj);
                    }
                });
            }

            myData = JSON.stringify(data, null, 2);
            fs.writeFileSync(`./data/notes.json`, myData, "utf8");

            interaction.reply({ content: `Added a note to <@${user_add.id}>`, ephemaral: true });
        }

        function readFunc(user) {
            var _embeds = [];
            var _toggle = false;
            var _currentPage = 1;
            var _lastPage = 0;

            if (data.length < 1) {
                _toggle = true;
            } else {
                data.forEach(obj => {
                    if (data.some(item => item.user_id == user.id)) {
                        if (obj.user_id == user.id) {
                            obj.notes.forEach((item, i) => {
                                const embed = new EmbedBuilder()
                                    .setColor("#920dff")
                                    .setTitle(`${user.username}'s Notes`)
                                    .setDescription(`${item}\n\nNote Created by: <@${obj.author_id[i]}>`)
                                    .setFooter({ text: `Page ${i + 1}/${obj.notes.length}` })
                                    .setTimestamp()

                                _lastPage = obj.notes.length;
                                _embeds.push(embed);
                            });
                        }
                    } else {
                        _toggle = true;
                    }
                });
            }

            if (_toggle) {
                interaction.reply({ embeds: [
                    new EmbedBuilder()
                        .setTitle(`${user.username}'s Notes`)
                        .setColor("#920dff")
                        .setDescription("This User Has No Notes!")
                ] });
            } else {
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
                    .setCustomId("del")
                    .setLabel("❌")
                    .setStyle(ButtonStyle.Danger)

                const _row = new ActionRowBuilder()
                .addComponents(
                    _btn1,
                    _btn2,
                    _btn3
                )

                if (_lastPage == 1) {
                    _btn1.setDisabled(true);
                    _btn2.setDisabled(true);
                }

                interaction.reply({ embeds: [_embeds[_currentPage - 1]], components: [_row] });

                const filter = event => event.user.id == interaction.user.id;
                const collector = interaction.channel.createMessageComponentCollector({
                    time: 1000 * 30,
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
                    } else {
                        if (_lastPage == 1) {
                            _lastPage = 0;

                            data.forEach((obj, i) => {
                                if (data.some(item => item.user_id == user.id)) {
                                    if (obj.user_id == user.id) {
                                        data.splice(i, 1);
                                    }
                                }
                            });

                            myData = JSON.stringify(data, null, 2);
                            fs.writeFileSync(`./data/notes.json`, myData, "utf8");

                            _btn3.setDisabled(true);

                            buttonInteraction.deferUpdate();
                            return await interaction.editReply({
                                embeds: [
                                    new EmbedBuilder()
                                        .setTitle(`${user.username}'s Notes`)
                                        .setColor("#fbffd6")
                                        .setDescription("This User Has No Notes!")
                                ],
                                components: [_row]
                            });
                        } else if (_currentPage == 1) {
                            _lastPage -= 1;
                            _embeds.splice(0, 1);

                            data.forEach(obj => {
                                if (data.some(item => item.user_id == user.id)) {
                                    if (obj.user_id == user.id) {
                                        obj.notes.splice(0, 1);
                                    }
                                }
                            });

                            _embeds.forEach(embed => {
                                embed.data.footer.text = `Page 1/${_lastPage}`
                            });

                            myData = JSON.stringify(data, null, 2);
                            fs.writeFileSync(`./data/notes.json`, myData, "utf8");

                            buttonInteraction.deferUpdate();
                            await interaction.editReply({ embeds: [_embeds[_currentPage - 1]], components: [_row] });
                        } else if (_currentPage == _lastPage) {
                            _lastPage -= 1;
                            _currentPage -= 1;
                            _embeds.splice(_currentPage - 1, 1);

                            data.forEach(obj => {
                                if (data.some(item => item.user_id == user.id)) {
                                    if (obj.user_id == user.id) {
                                        obj.notes.splice(_currentPage - 1, 1);
                                    }
                                }
                            });

                            _embeds.forEach(embed => {
                                embed.data.footer.text = `Page ${_currentPage}/${_lastPage}`;
                            });

                            myData = JSON.stringify(data, null, 2);
                            fs.writeFileSync(`./data/notes.json`, myData, "utf8");
                            
                            buttonInteraction.deferUpdate();
                            await interaction.editReply({ embeds: [_embeds[_currentPage - 1]], components: [_row] });
                        } else {
                            _lastPage -= 1;
                            _embeds.splice(_currentPage - 1, 1);
                            
                            data.forEach(obj => {
                                if (data.some(item => item.user_id == user.id)) {
                                    if (obj.user_id == user.id) {
                                        obj.notes.splice(_currentPage - 1, 1);
                                    }
                                }
                            });

                            _embeds.forEach(embed => {
                                embed.data.footer.text = `Page ${_currentPage}/${_lastPage}`;
                            });

                            myData = JSON.stringify(data, null, 2);
                            fs.writeFileSync(`./data/notes.json`, myData, "utf8");
                            
                            buttonInteraction.deferUpdate();
                            await interaction.editReply({ embeds: [_embeds[_currentPage - 1]], components: [_row] });
                        }
                    }

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

                    await interaction.editReply({ embeds: [_embeds[_currentPage - 1]], components: [_row] });
                });
        
                collector.on("end", () => {
                    interaction.followUp({
                        ephemeral: true,
                        content: "Interaction Timed Out"
                    });
                });
            }
        }
    
        if (subCmd == "add") {
            addFunc(user_add, content);
        } else {
            readFunc(user_read);
        }
    }
}