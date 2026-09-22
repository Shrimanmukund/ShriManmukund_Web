import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/918208927917?text=Hello%20Shri%20Manmukund%20Hospital,%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 lg:bottom-6 right-5 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-warm-xl hover:scale-110 hover:shadow-2xl transition-all duration-200 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pl-0 group-hover:pl-2">
        Chat with Hospital
      </span>
    </a>
  );
};
