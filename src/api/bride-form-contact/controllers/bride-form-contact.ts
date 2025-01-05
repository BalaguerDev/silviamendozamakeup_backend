import bridalInquiryTemplate from "../../../utils/emailTemplates/brideTemplate";

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bride-form-contact.bride-form-contact', ({ strapi }) => ({
  async create(ctx) {
    // Llama al controlador base para guardar los datos en la base de datos
    const response = await super.create(ctx);

    // Extraer datos del formulario
    const { name, email, phone, details, date, hour, place } = ctx.request.body.data;

    try {
      // Enviar el primer correo (para ti)
      await strapi.plugins['email'].services.email.send({
        to: 'balaguer.dev@gmail.com', // Correo donde quieres recibir los datos
        subject: 'Una Novia se casa y pide información 😍',
        text: `
          Aquí tienes los datos de ${name}:
          - Teléfono: ${phone}
          - Email: ${email}
          - Fecha de la boda: ${date}
          - Hora de la ceremonia: ${hour || 'No ha especificado'}
          - Lugar: ${place}
          - Detalles adicionales: ${details || 'No ha especificado'}
        `,
        html: `
          <h2>Nuevo formulario recibido</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Fecha de la boda:</strong> ${date}</p>
          <p><strong>Hora de la ceremonia:</strong> ${hour || 'No especificada'}</p>
          <p><strong>Lugar:</strong> ${place}</p>
          <p><strong>Detalles adicionales:</strong> ${details || 'No especificados'}</p>
        `,
      });

      // Enviar el segundo correo (al cliente)
      await strapi.plugins['email'].services.email.send({
        to: email, // Correo del cliente
        subject: '¡Gracias por contactarnos para tu boda!',
        text: `Hola ${name},\n\nGracias por ponerte en contacto con Silvia Mendoza Makeup. En breve me pondré en contacto contigo para ofrecerte más información sobre mi servicio de maquillaje para tu boda. ¡Estoy aquí para ayudarte a brillar en tu día especial!`,
        html: bridalInquiryTemplate(name), // Tu plantilla personalizada
      });

      // Devuelve la respuesta original de Strapi
      return response;
    } catch (err) {
      // Manejo de errores al enviar correos
      ctx.response.status = 500;
      ctx.response.body = { message: 'Error al enviar el correo electrónico', error: err };
    }
  },
}));
