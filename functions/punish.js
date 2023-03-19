const fs = require("fs");
const ms = require("ms");


let punish = (user) => {
    const strikesFile = fs.readFileSync("./data/strikes.json", "utf8");
    const strikes = JSON.parse(strikesFile);
    const punishmentsFile = fs.readFileSync("./data/punishments.json", "utf8");
    const punishments = JSON.parse(punishmentsFile);

    punishments.forEach(punishment => {
        if (strikes[user.id].strikes >= punishment.strikes) {
            let type = punishment.type.split(" ")[0];

            if (type == "mute") {
                let time = punishment.type.split(" ")[1];
                if (user.moderatable) {
                    user.timeout(ms(time));
                }
            } else if (type == "kick") {
                if (user.moderatable) {
                    user.kick();
                }
            } else if (type == "ban") {
                if (user.moderatable) {
                    user.ban();
                }
            }
        }
    });
}

exports.punish = punish;