//METODO O - SOLID
class Notification {
    send(message) {
      throw new Error("Método 'send()' deve ser implementado");
    }
  }
  
  class EmailNotification extends Notification {
    send(message) {
      console.log(`Enviando email com a mensagem: ${message}`);
    }
  }
  
  class SMSNotification extends Notification {
    send(message) {
      console.log(`Enviando SMS com a mensagem: ${message}`);
    }
  }
  
  class PushNotification extends Notification {
    send(message) {
      console.log(`Enviando notificação push com a mensagem: ${message}`);
    }
  }
  
  class NotificationService {
    notify(notification, message) {
      notification.send(message);
    }
  }
  
  const notificationService = new NotificationService();
  
  notificationService.notify(new EmailNotification(), "Seu pedido foi enviado!");
  notificationService.notify(new SMSNotification(), "Seu código de verificação é 123456");
  notificationService.notify(new PushNotification(), "Você tem uma nova mensagem no chat.");
  