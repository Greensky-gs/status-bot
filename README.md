# status-bot
 A simple script for a bot that checks if you're bot's online

## Discord
This is a code for detect when your bot's down
This code is made for Discord.js v14

## Important
When hosting, host the code of the two bots **on two servers**.
Because if bot A crashes, the server will be down.
If the server is down, the bot can't do anything (He sleeps)

## Usage
### Javascript
If you have to use it in javascript, take the code in [`container`](./container)

### Typescript
If you have to use it in Typescript, take the code in [`container-typescript`](./container-typescript)

### Dependencies
Use `npm install` or `yarn install` to install dependencies
Then, start the bot (after completed the .env file [see [.env.example](./.env.example)])

### Intents
⚠️ Important informations about intents
You need to activate Presence intent for your bot - the checker - in discord developper portal
![Discord Authorization flow](https://media.discordapp.net/attachments/976356791451529236/1027178006982185121/unknown.png?width=1053&height=671)
![Discord Presence Intent](https://media.discordapp.net/attachments/976356791451529236/1027178007376433152/unknown.png?width=1440&height=154)

## Handler
The handler used for [`container`](./container) and [`container-typescript`](./container-typescript) is mine (check [this repository](https://github.com/Greensky-gs/event-handler))

## Contact
If you need to contact me, come on [this discord server](https://discord.gg/fHyN5w84g6)