const { punish } = require("../functions/punish.js");
const fs = require('fs');

module.exports = {
    // Providing the event name as well as making sure that it can be run more than once.
    name: "messageCreate",
    once: false,

    // Code to be run when any message is sent.
    execute(message) {
        if (message.author.bot) return;

        const blacklistFile = fs.readFileSync("./data/blacklist.json", "utf8");
        const blacklist = JSON.parse(blacklistFile);

        for (const index in blacklist) {
            let name = blacklist[index];

            if (message.content.toLowerCase().includes(index)) {
                const strikesFile = fs.readFileSync("./data/strikes.json", "utf8");
                const strikes = JSON.parse(strikesFile);
                let message_remove = name.message_remove;
                let strikes_given = name.strikes_given;
                let response = name.response;


                if (!strikes[message.author.id]) {
                    strikes[message.author.id] = {
                        strikes: strikes_given
                    };
                } else {
                    strikes[message.author.id].strikes += strikes_given;
                }
                fs.writeFileSync("./data/strikes.json", JSON.stringify(strikes, null, 2), "utf8");
        
                punish(message.member);

                if (response) message.reply({ content: response, ephemeral: true });
                if (message_remove) message.delete();
            }
        }
    }
}