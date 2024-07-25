/**
 * This script sets up a WhatsApp bot using the whatsapp-web.js library.
 * It creates a client instance, generates a QR code for authentication,
 * and listens for incoming messages to respond to them.
 */
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
// const { default: sendMessage } = require("./helpers/send-message");
const MESSAGES = require("./constants/messages");

// Crear una nueva instancia del cliente
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  // Generar y mostrar el código QR en la terminal
  qrcode.generate(qr, { small: true });
});

client.on("ready", async () => {
  console.log("Cliente está listo!");
});

// gets the messages from a chat
client.on("message", (message) => {
  console.log(message.body);
});

// Mention everyone
// https://wwebjs.dev/guide/mentioning-contacts.html#getting-mentioned-contacts
client.on("message", async (msg) => {
  if (msg.body === "!toy") {
    const allChatMessages = (await msg.getChat()).fetchMessages();
    // console.log( await allChatMessages)

    for (const mesag in allChatMessages) {
      console.log(`${mesag._data.notifyName}: ${mesag.body}`);
    }

    // const chat = await msg.getChat();

    // let text = "";
    // let mentions = [];

    // for(let participant of chat.participants) {
    //     const contact = await client.getContactById(participant.id._serialized);

    //     mentions.push(contact);
    //     text += `@${participant.id.user} `;
    // }

    // await chat.sendMessage(text, { mentions });
  }
});

// client.on("message", async (msg) => {
//   // const allMessages = (await msg.getChat()).fetchMessages;
//   const contact = await msg.getContact();

//   await chat.sendMessage(`Hello @${contact.id.user}`, {
//     mentions: [contact],
//   });
// });

// Iniciar el cliente
client.initialize();
