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

// when a message arrives, the bot will respond with a message
client.on("message", async (msg) => {
  const chat = await msg.getChat();
  const contact = await msg.getContact();

  // Send a message to the chat
  // await chat.sendMessage(`Hello @${contact.id.user}`);
});

// sends a message before the appointment
client.on("message", async (msg) => {
  const phNumber = +5492617537440; // Phone number - type: number
  const chatId = `${phNumber}@c.us`;

  client
    .sendMessage(chatId, MESSAGES.BEFORE)
    .then((response) => {
      console.log("Mensaje enviado con éxito!", response);
    })
    .catch((err) => {
      console.error("Error al enviar el mensaje", err);
    });
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
