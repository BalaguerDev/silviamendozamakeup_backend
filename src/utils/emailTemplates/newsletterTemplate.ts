const newsletterTemplate = () => {
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gracias por Suscribirte</title>
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
          <tr>
            <td class="header">
              <h1>¡Gracias por Suscribirte!</h1>
            </td>
          </tr>
          <tr>
            <td class="content">
              <h2>"¡Bienvenida al mundo de la belleza de Silvia Mendoza! ✨"</h2>
             <p>
        Estoy encantada de darte la bienvenida a mi newsletter, donde cada dos semanas te 
        compartiré <strong>mi nuevo post en el blog</strong> y te compartiré, tendencias de belleza y 
        recomendaciones exclusivas para que siempre brilles en tu mejor versión.
      </p>

       <p>
        Aquí no solo encontrarás inspiración, sino también recursos valiosos y 
        <strong>ofertas especiales</strong> solo para suscriptoras como tú.
      </p>
              <p style="text-align: center;">
        <a href="https://www.silviamendozamakeup.com" class="button"
          >Explora Nuestra Web</a
        >
      </p>

      <p>
        Si tienes alguna duda o necesitas asesoramiento sobre maquillaje para tu día a día 
        o eventos especiales, no dudes en escribirme. ¡Estaré encantada de ayudarte!
      </p>

      <p>Gracias por confiar en mí y en mi pasión por el maquillaje. 💖</p>

      <p style="font-style: italic; text-align: center;">
        “La belleza comienza en el momento en que decides ser tú misma.”  
        — Coco Chanel
      </p>

      <div class="footer">
        © 2024 Silvia Mendoza Makeup |  
        <a href="https://www.silviamendozamakeup.com/politica-de-privacidad"
          >Política de Privacidad</a
        >
      </div>
    </div>
      </body>
      </html>
    `;
  };
  
  export default newsletterTemplate;
  