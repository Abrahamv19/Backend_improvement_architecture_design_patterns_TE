import { __dirname } from "../config.js"; //HAY QUE CAMBIAR ESTO
import config from "../config/config.js";
import nodemailer from "nodemailer";
import twilio  from "twilio";

const GOOGLE_EMAIL = process.env.GOOGLE_EMAIL
const GOOGLE_PASS = process.env.GOOGLE_PASS

// const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
// const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
// const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER
// const TWILIO_PHONE_WHATSAAP = process.env.TWILIO_PHONE_WHATSAAP

class MailController {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_PASS,
      },
    });
  }
  async sendMail() {
    const mailOptions = {
      from: GOOGLE_EMAIL,
      to: 'hugoabrahamv19@gmail.com',
      subject: 'Email prueba 5',
      html: `
        Prueba 5
      `,
    };
    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log(result);
      return 'Email sent';
    } catch (error) {
      throw new Error('Failed to send email');
    }
  }
}

export const mailController = new MailController();


// class SmsController {
//     constructor() {
//         this.client = new twilio.Twilio(
//             TWILIO_ACCOUNT_SID,
//             TWILIO_AUTH_TOKEN
//         );
//     }
//     async sendSms() {
//         const messageOptions = {
//         body: 'sms de prueba',
//         from: TWILIO_PHONE_NUMBER,
//         to: '+573113900587',
//         };
//     try {
//         const result = await this.client.messages.create(messageOptions);
//         console.log(result);
//         return 'SMS sent';
//     } catch (error) {
//         console.error(error);
//         throw new Error('Failed to send SMS');
//     }
//     }
// }

// export const smsController = new SmsController();

