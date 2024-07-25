/**
 * This script sets up a WhatsApp bot using the whatsapp-web.js library.
 * It creates a client instance, generates a QR code for authentication,
 * and listens for incoming messages to respond to them.
 */
const { Client, LocalAuth } = require("whatsapp-web.js");
const cron = require("node-cron");
const qrcode = require("qrcode-terminal");
const MESSAGES = require("./constants/messages");

// Crear una nueva instancia del cliente
const client = new Client({ authStrategy: new LocalAuth() });

client.on("qr", (qr) => {
  // Generar y mostrar el código QR en la terminal
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Cliente está listo!");
});
// gets the messages from a chat
// client.on("message", (message) => {
//   console.log(message.body);
// });

// sends a message before the appointment
// const dateTimeAppointment = process.env.DATE_TIME_APPOINTMENT;
// console.log(dateTimeAppointment);
// const phNumber = process.env.PH_NUMBER; // Phone number - type: number
// console.log(phNumber);
// const chatId = `${phNumber}@c.us`;
// console.log(chatId);
// const message = format(MESSAGES.BEFORE, dateTimeAppointment);
// console.log(message);

// send a message before the appointment
// client
//   .sendMessage(chatId, MESSAGES.BEFORE)
//   .then((response) => {
//     console.log("Mensaje enviado con éxito!", response);
//   })
//   .catch((err) => {
//     console.error("Error al enviar el mensaje", err);
//   });

//--------------------------------------------------------------

// client.on("message", async (msg) => {
//   // const allMessages = (await msg.getChat()).fetchMessages;
//   const contact = await msg.getContact();

//   await chat.sendMessage(`Hello @${contact.id.user}`, {
//     mentions: [contact],
//   });
// });

//--------------------------------------------------------------

// Iniciar el cliente de wpp
client.initialize();

// Configurar una tarea que se ejecuta cada 1 minutos
cron.schedule("*/1 * * * *", () => {
  const now = new Date();
  console.log(`Verificación ejecutada a las ${now.toLocaleString()}`);
});

console.log(
  "El script cronJob.js está ejecutándose y verificará cada 1 minuto."
);

// const fecha = new Date("2024-07-25T10:00:00Z");
// console.log(fecha.toLocaleString());
// console.log(fecha.toLocaleDateString());
// console.log(fecha.toLocaleTimeString());

// Tarea cron que se ejecuta cada 30 minutos, de lunes a viernes, de 9 a 21 horas
// cron.schedule("*/30 9-21 * * 1-5", async () => {});
