// Service pour les emails
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  id?: string;
}

export const emailService = {
  async sendContactForm(data: ContactFormData): Promise<EmailResponse> {
    try {
      // Simuler l'envoi du formulaire
      // En production, cela appellerait votre backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return {
        success: true,
        message: 'Email envoyé avec succès',
        id: Date.now().toString(),
      };
    } catch (error) {
      console.error('Email Send Error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erreur lors de l\'envoi',
      };
    }
  },

  async subscribe(email: string): Promise<EmailResponse> {
    try {
      // Simuler l'abonnement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        success: true,
        message: 'Vous êtes abonné !',
      };
    } catch (error) {
      console.error('Subscribe Error:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erreur lors de l\'abonnement',
      };
    }
  },
};

export default emailService;
