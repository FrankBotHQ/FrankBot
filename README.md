<h1 align="center">
<img src="https://github.com/FrankBotHQ/brands/blob/main/frankbot/FrankBot-500x250.png" width="400" alt="FrankBot">
</h1>
<p align="center">🎃 The easiest tool for creating ChatBots and Virtual Assistants. Join us.</p>

## Getting Started

1 - Downloading project

- Download using [Git](https://git-scm.com/) in your terminal type:<br>
  `git clone https://github.com/FrankBotHQ/FrankBot.git`

2 - Downloading dependencies, type in your terminal: <br>

- `npm install` <br>

3 - Runing sample bot, type in your terminal: <br>

- `npm start` <br>

4 - Scan the QR Code that will appear in terminal and enjoy

5 - The development files of the first example bot can be found at bot/samples/FirstBot.ts

## Functions

|                                                                                             |     |
| ------------------------------------------------------------------------------------------- | --- |
| 🤖 Integrated with leading chatbot platforms such as RASA, BotPress, DialogFlow and more    | 🚧  |
| 🐙 Integrated with major channels like slack, telegram, venom-bot, whatsapp-web.js and more | 🚧  |
| 📁 Send **text, image, video, audio and docs**                                              | ✔️  |
| 👥 Get **contacts, chats, groups, group members, Block List**                               | 🚧  |
| 📞 Send contacts                                                                            | 🚧  |
| Send Buttons                                                                                | ✔️  |
| Send Lists                                                                                  | 🚧  |
| Send stickers/stickers GIF                                                                  | 🚧  |
| Multiple Sessions                                                                           | ✔️  |
| ⏩ Forward Messages                                                                         | 🚧  |
| 📥 Receive message                                                                          | ✔️  |
| 👤 insert user section                                                                      | 🚧  |
| 📍 Send location!!                                                                          | ✔️  |
| 🎃🎃 **and much more**                                                                      | ✔️  |

## Configurations

Channel settings that can be passed in the channel create() method

| Attribute        | Type     | Default         | Description                                                                           |
| ---------------- | -------- | --------------- | ------------------------------------------------------------------------------------- |
| `bot` (required) | _Bot_    | `null`          | Inform which object that implements the Bot interface will be used by the channel.    |
| `logger`         | _Logger_ | `ConsoleLogger` | Inform which object that implements the Logger interface will be used by the channel. |

## Folders and files structure

- **bot**: Here are the logics of your bots
- **channels**: Here are all the channels your bot can communicate, like: slack, telegram, discord, facebook and more
- **core**: Here are all the files necessary for the framework to work
- **logger**: Here are the logging strategies you want to use in your application, like: console, database, api hook etc.
- **./index.ts:** Here is your boot file with your bot settings

## How contribute

Check out our contributions guide: [Contributing](CONTRIBUTING.md)

## License

By contributing your code, you agree to license your contribution under the [MIT License](LICENSE).
By contributing to the documentation, you agree to license your contribution under the [Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).
