// messages.js

// Constantes de mensajes
const appointmentTime = "10:00 am";

const MESSAGES = {
  WELCOME: "¡Bienvenido!",
  BEFORE: `Hola! Usted tiene un turno agendado para el día de mañana a las ${appointmentTime}. Por favor, recuerde llegar 10 minutos antes de la hora de su cita.`,
  AFTER:
    "Muchas gracias por su visita. Esperamos que haya sido de su agrado. Le enviamos un link para que pueda dejarnos su opinión acerca de nuestro servicio. Saludos!",
  ERROR: "Ha ocurrido un error.",
  SUCCESS: "Operación exitosa.",
};

// Exportar las constantes
module.exports = MESSAGES;
