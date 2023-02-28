# Discord Bot Template
---
## Installation
1) Download the Zip
2) Modules Required for the Bot
   - discord.js
   - fs
   - ms
3) Installing of the Modules
    - `npm i discord.js`
    - `npm i fs`
    - `npm i ms`
4) Change the Owner ID, Bot Client ID and Bot Token in `~/data/config.json`
   ```json
   {
      "token": "TOKEN_HERE",
      "clientId": "BOT_CLIENT_ID_HERE",
      "ownerId": "OWNER_ID_HERE"
   }
   ```
5) Launch the Bot
   - `node index.js`