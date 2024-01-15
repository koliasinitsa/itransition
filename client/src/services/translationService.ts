// src/services/translationService.ts

class TranslationService {
    async loadTranslations(url: string): Promise<{ [key: string]: string }> {
      try {
        const response = await fetch(url);
        return response.json();
      } catch (error) {
        console.error('Failed to load translations:', error);
        return {};
      }
    }
  }
  
  const translationService = new TranslationService();
  
  export default translationService;
  