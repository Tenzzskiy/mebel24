

const nodemailer = require("nodemailer");


export default function email(req:any, res:any) {

    const htmlLi = [];

    for (let index = 0; index < req.body.items.length; index++){
        const li = `
            <li style="display: flex flex-direction: row; justify-content: center ; align-items: center;">
                <p style="color: #0b2650; ">Название: ${req.body.items[index].title}</p>
                <p>Время: ${req.body.items[index].time}</p>
                <p style="color: green">Стоимость: ${req.body.items[index].firstPrice}</p>  
            </li>
        `;
        htmlLi.push(li)
    }

    const html = ` 
               <ul>
                ${htmlLi.join("")}
            </ul>
    `
    const EMAIL_LOG = "";
    const EMAIL_PASS = "";
    // const EMAIL_LOG = 'begliy710@yandex.ru'
    // const EMAIL_PASS = 'Ten22101975'
    const type = req.body.type;

    if (!type) {
        res.status(200).json({success: false});
    }

    try {
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.yandex.ru",
            auth: {
                user: EMAIL_LOG,
                pass: EMAIL_PASS,
            },
            secure: true,
        });

        const mailData = {
            from: EMAIL_LOG,
            to: "info@arenda-plazm77.ru",
            subject: `Заявка с сайта Аренда-Плазм77 `,
            text: "Sent from website",
            html: "",
        };

        if (type === "phone") {
            mailData.html = `
            <h1 style="padding-top: 10px; padding-bottom: 10px">
                Получен заказ на номер: <i style="color: red;">${req.body.phone.phone}</i>   </h1>
              <h3>  В корзину ничего не было добавлено, заявка оставлена для рассчета </h3>
          `;
        } else if (type === "cart") {
            `
             
            `
            mailData.html =
                `
                  <h1 style="padding-top: 10px; padding-bottom: 10px">
                Получен заказ на номер: <i style="color: red;">${req.body.phone.phone}</i>   </h1>
              <h3>  Итоговая стоимость : <i style="color: green">${req.body.totalPrice} ₽ </i></h3>
                
                `
                + html
        } else {
            res.status(200).json({success: false});
        }

        transporter.sendMail(mailData, (err:any, info:any) => {
            if (err.length > 0) {

                res.status(200).json({success: false});
            }

        });
    } catch {
        res.status(200).json({success: false});
    }
    res.status(200).json({success: true});
}