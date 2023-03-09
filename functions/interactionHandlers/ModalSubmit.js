const fs = require("fs");

function MdlSbmt(i) {
    const modalFiles = fs.readdirSync("./functions/interactionHandlers/modals/").filter(file => file.endsWith(".js"));
    const name = `${i.customId}.js`;

    if (modalFiles.includes(name)) {
        const { execute } = require(`./modals/${name}`);

        execute(i);
    } else {
        i.reply("Modal not recognized");
    }
}

exports.MdlSbmt = MdlSbmt;