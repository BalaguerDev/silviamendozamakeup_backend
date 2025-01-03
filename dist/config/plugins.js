module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.gmail.com', // Puedes usar Gmail, Outlook o tu propio servidor SMTP
                port: 465,
                secure: true,
                auth: {
                    user: 'balaguer.dev@gmail.com',
                    pass: 'zcow kwsk hpby puwi', // Debes generar una contraseña de aplicación
                },
            },
            settings: {
                defaultFrom: 'tu-email@gmail.com',
                defaultReplyTo: 'tu-email@gmail.com',
            },
        },
    },
});
