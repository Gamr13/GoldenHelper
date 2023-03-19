function AppCmd(i, iType, cmds, oId) {
    /*
    First line gets the command by it's name.

    Second line gets the execute
    parameter from the command file.
    The execute parameter consist how the command
    will reply to the interaction associated with it.
    */
    const command = cmds.get(i.commandName);
    const { execute, permissions, ownerOnly, roles } = command;

    /*
    If the interaction isn't an ApplicationCommand or doesn't exist,
    it's going to return and not continue with handling the command.
    */
    if (!i.type == iType.ApplicationCommand || !command) return;

    // Execute the code.
    if (permissions) {
        permissions.forEach(perm => {
            if (i.member.permissions.has(perm)) {
                execute(i);
            } else {
                return i.reply("Insufficient Permissions!");
            }            
        });
    } else if (roles) {
        roles.forEach(xrole => {
            if (i.member.roles.cache.some(role => role.id === xrole)) {
                execute(i);
            } else {
                return i.reply("Insufficient Permissions!");
            }
        });
    } else if (ownerOnly && i.member.id == oId) {
        execute(i);
    } else {
        execute(i); 
    }
}

exports.AppCmd = AppCmd;