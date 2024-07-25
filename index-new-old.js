const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", (message) => {
  console.log(message.body);
});

// Mention everyone
// https://wwebjs.dev/guide/mentioning-contacts.html#getting-mentioned-contacts
client.on("message", async (msg) => {
  if (msg.body === "!estoy") {
    if (message.body === "!estoy") {
      console.log("¡Mensaje recibido!", message);
    }

    // const allChatMessages = (await msg.getChat()).fetchMessages();
    // // console.log( await allChatMessages)

    // for (const mesag in allChatMessages) {
    //   console.log(`${mesag._data.notifyName}: ${mesag.body}`)
    // }

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

// client.on('message', async (msg) => {
//   const allMessages = (await msg.getChat()).fetchMessages;
//   const contact = await msg.getContact();

//   await chat.sendMessage(`Hello @${contact.id.user}`, {
//       mentions: [contact]
//   });
// });

// // Mention contacts that send you a message
// client.on('message', async (msg) => {
//     const chat = await msg.getChat();
//     const contact = await msg.getContact();

//     await chat.sendMessage(`Hello @${contact.id.user}`, {
//         mentions: [contact]
//     });
// });

client.initialize();
