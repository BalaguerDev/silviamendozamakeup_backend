const bridalInquiryTemplate = (clientName) => {
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solicitud de Información para tu Boda</title>
        <style>
          /* Estilos generales */
          body {
            margin: 0;
            padding: 0;
            font-family: "Montserrat", sans-serif;
            background-color: #fdeee1; /* primary-light */
            color: #424242; /* dark-color */
          }
  
          table {
            border-spacing: 0;
            margin: 0 auto;
            background-color: #fff;
            max-width: 600px;
            width: 100%;
          }
  
          td {
            padding: 15px;
          }
  
          /* Encabezado */
          .header {
            background-color: #d0954e;
            text-align: center;
            padding: 20px;
          }
  
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-family: "Playfair Display", serif;
            color: #fff;
          }
  
          /* Contenido */
          .content {
            text-align: center;
            padding: 20px 15px;
          }
  
          .content h2 {
            font-family: "Playfair Display", serif;
            color: #d0954e;
            margin-bottom: 10px;
            font-size: 22px;
          }
  
          .content p {
            font-size: 16px;
            color: #424242;
            line-height: 1.5;
          }
  
          /* Botón */
          .button-container {
            text-align: center;
            margin: 30px 0;
          }
  
          .button {
            display: inline-block;
            padding: 10px 25px;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            color: #fff;
            background-color: #d0954e;
            border-radius: 5px;
            transition: background-color 0.3s;
          }
  
          .button:hover {
            background-color: #c4873b;
          }
  
          /* Footer */
          .footer {
            background-color: #f9f9f9;
            text-align: center;
            font-size: 14px;
            color: #777777;
            padding: 15px;
          }
  
          .footer a {
            color: #d0954e;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <table>
          <!-- Encabezado -->
          <tr>
            <td class="header">
              <h1>¡Gracias por tu Consulta, ${clientName}!</h1>
            </td>
          </tr>
  
          <!-- Contenido Principal -->
          <tr>
            <td class="content">
              <h2>Tu día especial merece lo mejor ✨</h2>
              <p>
                Me alegra que hayas pensado en <strong>Silvia Mendoza Makeup</strong> para el maquillaje 
                de uno de los días más importantes de tu vida.  
              </p>
              <p>
                He recibido tu solicitud y en breve me pondré en contacto contigo para proporcionarte 
                toda la información necesaria, resolver tus dudas y asegurar que tengas un 
                maquillaje que te haga <strong>sentir única y radiante</strong>.
              </p>
  
              <div class="button-container">
                <a href="https://www.silviamendozamakeup.com" class="button">Descubre Más Sobre Mis Servicios</a>
              </div>
  
              <p>
                Mientras tanto, si quieres ver más ejemplos de mi trabajo o inspirarte con mis 
                últimas creaciones, no dudes en visitar mi web o seguirme en redes sociales.  
              </p>
  
              <p>
                ¡Estoy aquí para ayudarte a crear un look que sea tan especial como tu boda! 💍
              </p>
  
              <p style="font-style: italic; text-align: center;">
                “La confianza en ti misma es el secreto para un maquillaje perfecto.”  
              </p>
            </td>
          </tr>
  
          <!-- Footer -->
          <tr>
            <td class="footer">
              <p>© 2024 Silvia Mendoza Makeup |  
              <a href="https://www.silviamendozamakeup.com/politica-de-privacidad"
                >Política de Privacidad</a>
              </p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;
  };
  
  export default bridalInquiryTemplate;
  