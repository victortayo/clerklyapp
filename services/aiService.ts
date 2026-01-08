
import { Template } from '../types';
import { GoogleGenerativeAI } from '@google/generative-ai';

export interface CaseExplanation {
    summary: string;
    keyFindings: string[];
    differentialDiagnosis: string[];
    managementRationale: string[];
    clinicalPearls: string[];
    disclaimer: string;
}

// Initialize Gemini API
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateCaseExplanation = async (template: Template): Promise<CaseExplanation> => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            You are a senior medical consultant. Provide a detailed clinical insight for the following medical clerking template.
            
            Template Title: ${template.title}
            Condition: ${template.condition}
            Specialty: ${template.specialty}
            Sub-Specialty: ${template.subSpecialty}
            
            Template Content:
            ${template.content}
            
            Please provide your response in the following JSON format:
            {
                "summary": "A concise paragraph (2-3 sentences) summarizing the clinical presentation and its significance.",
                "keyFindings": ["A list of 3-4 key clinical findings from the history or examination mentioned in the template, with brief explanations of their clinical importance."],
                "differentialDiagnosis": ["A list of 3 most likely differential diagnoses based on the presentation."],
                "managementRationale": ["A list of 3-4 key management steps or rationales based on current clinical guidelines."],
                "clinicalPearls": ["2-3 high-yield clinical pearls or 'don't miss' warnings related to this condition."],
                "disclaimer": "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines (e.g., WHO, NICE)."
            }
            
            Strictly return ONLY the JSON object. Do not include any markdown formatting like \`\`\`json or additional text.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Basic parsing of the response text
        // Sometimes Gemini might still include markdown blocks despite instructions
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();

        try {
            return JSON.parse(cleanedText) as CaseExplanation;
        } catch (parseError) {
            console.error("Failed to parse Gemini response as JSON:", cleanedText);
            throw parseError;
        }
    } catch (error) {
        console.error("Gemini API Error:", error);

        // Fallback to a generic response if API fails
        return {
            summary: `This case of ${template.condition} requires systematic evaluation. The clinical presentation suggests ${template.specialty} involvement.`,
            keyFindings: [
                "Detailed history and physical examination are essential.",
                "Clinical findings should be correlated with standard diagnostic criteria."
            ],
            differentialDiagnosis: [
                "Primary consideration: " + template.condition,
                "Secondary consideration based on symptoms",
                "Rule out life-threatening alternatives"
            ],
            managementRationale: [
                "Standard stabilization protocols per specialty guidelines.",
                "Investigation-led management based on clinical findings.",
                "Symptomatic management while awaiting definitive results."
            ],
            clinicalPearls: [
                "💡 Always prioritize life-threatening conditions.",
                "⚠️ Clinical judgement should supersede AI-generated insights."
            ],
            disclaimer: "Manual fallback: Gemini service is currently unavailable or failed to generate a structured response."
        };
    }
}
