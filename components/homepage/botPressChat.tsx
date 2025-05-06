'use client';

import { useEffect } from 'react';

// Declare the type augmentation for Window
declare global {
  interface Window {
    COMPANY_CONFIG?: {
      companyId: string;
      companyName: string;
      apiUrl: string;
      devMode: boolean;
    };
  }
}

export default function BotPressChat({
  companyId = 'acme-corp',
  companyName = 'ACME Corporation'
}) {
  useEffect(() => {
    // First define the COMPANY_CONFIG on the window
    window.COMPANY_CONFIG = {
      companyId,
      companyName,
      apiUrl: 'http://localhost:3000/',
      devMode: false
    };
    
    // Then load your chatbot script
    const script = document.createElement('script');
    script.src = 'http://localhost:5173/';
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      // Cleanup function
      if (script.parentNode) {
        document.body.removeChild(script);
      }
      
      // Using optional chaining operator for type safety
      if (window.COMPANY_CONFIG) {
        delete window.COMPANY_CONFIG;
      }
    };
  }, [companyId, companyName]);
  
  return null; // This component doesn't render anything
}