
const confirmationAccountTemplate = (data) => {
  const { email, nom, prenom, url, hashId } = data;
  console.log('URL ', url);
  console.log('LIEN', `"${url}/confirmation/${hashId}`)
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>MAXICONCOUR</title>
    <style>
      @media only screen and (max-width: 620px) {
        table.body h1 {
          font-size: 28px !important;
          margin-bottom: 10px !important;
        }

        table.body p,
        table.body ul,
        table.body ol,
        table.body td,
        table.body span,
        table.body a {
          font-size: 16px !important;
        }

        table.body .wrapper,
        table.body .article {
          padding: 10px !important;
        }

        table.body .content {
          padding: 0 !important;
        }

        table.body .container {
          padding: 0 !important;
          width: 100% !important;
        }

        table.body .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }

        table.body .btn table {
          width: 100% !important;
        }

        table.body .btn a {
          width: 100% !important;
        }

        table.body .img-responsive {
          height: auto !important;
          max-width: 100% !important;
          width: auto !important;
        }
      }
      @media all {
        .ExternalClass {
          width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }

        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }

        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }

        .btn-primary table td:hover {
          background-color: #34495e !important;
        }

        .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
        }
      }
    </style>
  </head>
  <body
    style="
      background-color: #f6f6f6;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      line-height: 1.4;
      margin: 0;
      padding: 0;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    "
  >
    <span
      className="preheader"
      style="
        color: transparent;
        display: none;
        height: 0;
        max-height: 0;
        max-width: 0;
        opacity: 0;
        overflow: hidden;
        mso-hide: all;
        visibility: hidden;
        width: 0;
      "
      >MAXICONCOUR</span
    >
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      className="body"
      style="
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #f6f6f6;
        width: 100%;
      "
      width="100%"
      bgcolor="#f6f6f6"
    >
      <tr>
        <td
          style="font-family: sans-serif; font-size: 14px; vertical-align: top"
          valign="top"
        >
          &nbsp;
        </td>
        <td
          className="container"
          style="
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
            display: block;
            max-width: 580px;
            padding: 10px;
            width: 580px;
            margin: 0 auto;
          "
          width="580"
          valign="top"
        >
          <div
            className="content"
            style="
              box-sizing: border-box;
              display: block;
              margin: 0 auto;
              max-width: 580px;
              padding: 10px;
            "
          >
            <!-- START CENTERED WHITE CONTAINER -->
            <table
              role="presentation"
              className="main"
              style="
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background: #ffffff;
                border-radius: 3px;
                width: 100%;
              "
              width="100%"
            >
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td
                  className="wrapper"
                  style="
                    font-family: sans-serif;
                    font-size: 14px;
                    vertical-align: top;
                    box-sizing: border-box;
                    padding: 20px;
                    border-radius: 5px;
                  "
                  valign="top"
                >
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      border-collapse: separate;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      width: 100%;
                    "
                    width="100%"
                  >
                    <tr>
                      <td
                        style="
                          font-family: sans-serif;
                          font-size: 14px;
                          vertical-align: top;
                        "
                        valign="top"
                      >
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                          "
                        >
                          Bonjour ${nom} ${prenom}
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                          "
                        >
                          Merci de votre inscription sur MAXICONCOUR !
                        </p>
                        <p
                          style="
                            font-family: sans-serif;
                            font-size: 14px;
                            font-weight: normal;
                            margin: 0;
                            margin-bottom: 15px;
                          "
                        >
                          Afin de pouvoir vous connecter, nous vous invitons à
                          cliquer sur le bouton
                          <span style="font-weight: bold">confirmer</span>
                          pour confirmer votre compte
                        </p>
                        <div>
                          <p
                            style="
                              font-family: sans-serif;
                              font-size: 14px;
                              font-weight: bold;
                              text-decoration: underline;
                              margin: 0;
                              margin-bottom: 15px;
                            "
                          >
                            Vos données de connexion sont les suivantes :
                          </p>
                          <p
                            style="
                              font-family: sans-serif;
                              font-size: 14px;
                              margin: 0;
                              margin-bottom: 15px;
                            "
                          >
                            <span style="font-weight: bold">Login :</span>
                            ${email}
                          </p>
                        </div>
                        <table
                          role="presentation"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          className="btn btn-primary"
                          style="
                            border-collapse: separate;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            box-sizing: border-box;
                            width: 100%;
                          "
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                align="left"
                                style="
                                  font-family: sans-serif;
                                  font-size: 14px;
                                  vertical-align: top;
                                  padding-bottom: 15px;
                                "
                                valign="top"
                              >
                                <table
                                  role="presentation"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  style="
                                    border-collapse: separate;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    width: auto;
                                  "
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style="
                                          font-family: sans-serif;
                                          font-size: 14px;
                                          vertical-align: top;
                                          border-radius: 5px;
                                          text-align: center;
                                          background-color: #3498db;
                                        "
                                        valign="top"
                                        align="center"
                                        bgcolor="#3498db"
                                      >
                                      <a
                                      href="${url}confirmation/${hashId}"
                                      target="_blank"
                                      style="
                                        border: solid 1px #3498db;
                                        border-radius: 5px;
                                        box-sizing: border-box;
                                        cursor: pointer;
                                        display: inline-block;
                                        font-size: 14px;
                                        font-weight: bold;
                                        margin: 0;
                                        padding: 12px 25px;
                                        text-decoration: none;
                                        text-transform: capitalize;
                                        background-color: #3498db;
                                        border-color: #3498db;
                                        color: #ffffff;
                                      "
                                      >Confirmer</a
                                    >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>
            <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>

  `;
};

export default confirmationAccountTemplate;
