import { WhatsappService } from '../../../services/whatsappService/whatsappService';

export class RopaWhatsappService extends WhatsappService {
  constructor(phone) {
    super(phone); // Llama al constructor de la clase base
    this.bienvenida = '¡Hola! ¿En qué puedo ayudarte?';
  }

  saludar() {
    console.log(this.bienvenida); // Imprime la propiedad 'bienvenida'
    super.saludar(); // Llama al método 'saludar' de la clase base
  }
};