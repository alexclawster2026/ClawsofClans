
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AdvisorChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'advisor', content: string}[]>([
    { role: 'advisor', content: 'Greeting, Commander. I am the Great Shell Seer. Ask me anything about the Claws Clan, battle strategies, or the secrets of the deep.' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      // Create a new GoogleGenAI instance right before making an API call to ensure current key usage
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: 'You are the "Great Shell Seer", a wise, battle-hardened crustacean advisor for the Claws Of Clan ocean warfare game. Your personality is epic, slightly salty, and very strategic. You use ocean-themed metaphors (e.g., "The tide turns in your favor", "May your shell never crack"). Keep responses concise and immersive.',
        }
      });

      // Directly access .text property from GenerateContentResponse
      setMessages(prev => [...prev, { role: 'advisor', content: response.text || 'The ocean is silent right now, Commander. Try again.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'advisor', content: 'A storm is brewing in the networks. I cannot see the future clearly right now.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px]">
        {/* Chat Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-cyan-900 rounded-full border-2 border-cyan-400 flex items-center justify-center mr-4">
               <span className="text-2xl">🐚</span>
            </div>
            <div>
              <h3 className="font-fantasy text-xl font-bold text-cyan-400 glow-cyan">GREAT SHELL SEER</h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Strategic Advisor Online
              </p>
            </div>
          </div>
        </div>

        {/* Chat Body */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-opacity-20"
        >
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-amber-500 text-slate-950 font-bold rounded-tr-none' 
                  : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
              } shadow-lg`}>
                <p className="text-sm leading-relaxed">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none flex space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Chat Footer */}
        <form onSubmit={handleSendMessage} className="p-6 bg-slate-950 border-t border-slate-800 flex space-x-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask for strategy, Commander..."
            className="flex-1 bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 p-3 rounded-xl transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdvisorChat;
