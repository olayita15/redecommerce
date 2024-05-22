export class WhatsappService {
    constructor(phone) {
        this.phone = phone;
        this.lineBreak = '%0A';
    }

    skipLine(sentence) {
        return `${this.lineBreak}${sentence}${this.lineBreak}`;
    }

    sendHelp(product) {
        const greeting = `Me interesa el producto *${product}*. ¿Tienes más información al respecto?`;
        const messageURL = `https://api.whatsapp.com/send?phone=${this.phone}&text=${greeting}`;
        return messageURL;
    }

    sendPurchases(list) {
        const greeting = `Quisiera comprar los siguientes elementos:`;
        const messageText = list.reduce((message, element) => {
            return message + `${this.lineBreak}${element.title}`;
        }, greeting);
        const messageURL = `https://api.whatsapp.com/send?phone=${this.phone}&text=${messageText}`;
        return messageURL;
    }
}
