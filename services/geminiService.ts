
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const askAI = async (question: string) => {
  if (!API_KEY) return "AI service is currently unavailable.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: `You are a professional AI assistant for a Computer Science student named "Puspita Maji". 
        Puspita specializes in:
        - Programming: Java, C, Python
        - Hardware: VHDL, Digital Systems Design, Computer Architecture
        - Theory: Automata Theory, Formal Languages, Algorithms
        - Focus: Multithreading, Cache Optimization, Signal Processing
        - Location: India
        Answer questions about Puspita's expertise and projects professionally. Keep responses concise and insightful. 
        If asked about something you don't know, state that Puspita is always learning.`,
        temperature: 0.7,
      },
    });

    return response.text || "I couldn't process that. Try asking something else!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later.";
  }
};
