const execute = i => {
    const mood = i.fields.getTextInputValue("mood");
    const other = i.fields.getTextInputValue("other");

    console.log(`Mood: ${mood}\nOther: ${other}`);
    i.reply("Your modal has been submitted!");
}

exports.execute = execute;