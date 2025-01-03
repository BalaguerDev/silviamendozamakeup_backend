"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const newsletterTemplate_1 = __importDefault(require("../../../utils/emailTemplates/newsletterTemplate"));
exports.default = strapi_1.factories.createCoreController('api::newsletter.newsletter', ({ strapi }) => ({
    // Sobrescribe el método "create"
    async create(ctx) {
        // Llama al método "create" base para guardar la suscripción en la base de datos
        const response = await super.create(ctx);
        // Extrae el email enviado por el usuario
        const { email } = ctx.request.body.data;
        // Si el email existe, envía el correo
        if (email) {
            try {
                // Usa el servicio de correo de Strapi
                await strapi.plugins['email'].services.email.send({
                    to: email, // Correo del suscriptor
                    subject: '¡Gracias por suscribirte a nuestra newsletter!',
                    text: `Hola,\n\nGracias por suscribirte a nuestra newsletter. ¡Te mantendremos informado sobre nuestras novedades!`,
                    html: (0, newsletterTemplate_1.default)(),
                });
                console.log(`Correo de confirmación enviado a ${email}`);
            }
            catch (error) {
                console.error('Error al enviar el correo:', error);
                // Opcional: Puedes devolver un error o un aviso al frontend si el correo falla
            }
        }
        return response; // Devuelve la respuesta base
    },
}));
