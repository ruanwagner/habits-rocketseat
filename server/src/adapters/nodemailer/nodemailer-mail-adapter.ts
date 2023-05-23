import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter"
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e6f2d2f1a3ace5",
        pass: "9fb156f182a91f"
    }
})
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <ruan.wagner@universo.univates.br>',
            to: 'Ruan Wagner <ruan.wagner137@hotmail.com>',
            subject,
            html: body,
        })
    }
}