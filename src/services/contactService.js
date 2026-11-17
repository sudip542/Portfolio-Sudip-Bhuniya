/**
 * Contact Service Abstraction
 * 
 * Provides an extensible interface for sending contact form messages.
 * Currently defaults to a simulated mock service with network delay.
 * Can be connected to EmailJS, Resend, or a custom Spring Boot backend endpoint.
 */

export const contactService = {
  isConfigured: false, // Set to true when an email provider or backend API is plugged in

  /**
   * Submit contact form message
   * @param {Object} data - { name, email, subject, message }
   * @returns {Promise<{ success: boolean, message: string }>}
   */
  async sendMessage(data) {
    // Artificial delay to reflect network round-trip and test loading state
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // If an external backend or EmailJS is configured:
    if (this.isConfigured) {
      try {
        // Example:
        // const res = await fetch('/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data),
        // });
        // if (!res.ok) throw new Error('Failed to send');
        // return { success: true, message: 'Message sent successfully!' };
        return { success: true, message: "Message sent successfully!" };
      } catch (err) {
        return {
          success: false,
          message: err.message || "Failed to deliver message. Please try again or email directly.",
        };
      }
    }

    // Unconfigured state: transparently inform the user while confirming client validation passed
    // Console log for local inspection
    console.info("[ContactService] Form submission received in client mock mode:", data);

    return {
      success: true,
      simulated: true,
      message:
        "Thank you! Your message was validated successfully. (Note: Email service is currently running in local demo mode. For urgent inquiries, please email directly at sudipbhuniya@gmail.com).",
    };
  },
};
