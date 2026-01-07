
import { Template } from '../types';

export interface CaseExplanation {
    summary: string;
    keyFindings: string[];
    managementRationale: string[];
    disclaimer: string;
}

// In a real app, you would call an API like OpenAI or Google Gemini here.
// For this demo, we will simulate the AI analysis based on the template content.

export const generateCaseExplanation = async (template: Template): Promise<CaseExplanation> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const contentLower = template.content.toLowerCase();
    const conditionLower = template.condition.toLowerCase();

    let explanation: CaseExplanation = {
        summary: "This case appears to be a complex clinical presentation. The patient presents with multiple symptoms requiring careful history taking and examination.",
        keyFindings: [
            "Acute onset of symptoms",
            "Multiple system involvement",
            "Specific history triggers identified"
        ],
        managementRationale: [
            "Immediate stabilization is priority",
            "Investigations are needed to confirm diagnosis",
            "Symptomatic relief while awaiting results"
        ],
        disclaimer: "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines."
    };

    // Simple keyword matching to simulate "Intelligence" for the demo
    if (contentLower.includes('asthma') || conditionLower.includes('asthma')) {
        explanation = {
            summary: "This is a classic presentation of Acute Asthma Exacerbation. The patient (a toddler) presents with the triad of cough, difficulty breathing, and wheezing (implied by rhonchi). The history of 'nasal discharge' suggests a viral trigger, which is the most common cause of exacerbations in this age group.",
            keyFindings: [
                "**'Difficulty in breathing x 1/7'**: Acute onset indicates an exacerbation.",
                "**'Widespread rhonchi'**: Indicates narrowed airways due to bronchospasm and inflammation.",
                "**'Chest in-drawing'**: A sign of significant respiratory distress and increased work of breathing.",
                "**'Family history of allergy'**: Mother's reaction to perfumes supports an atopic/allergic background."
            ],
            managementRationale: [
                "**Nebulised Salbutamol**: A beta-2 agonist to rapidly dilate the airways and relieve bronchospasm.",
                "**Oral Prednisolone**: A corticosteroid to reduce airway inflammation and prevent relapse.",
                "**Monitoring SpO2**: Essential to ensure oxygen saturation remains >94% and detect deterioration early."
            ],
            disclaimer: "This explanation is AI-generated for educational purposes only. always verify with clinical guidelines."
        };
    } else if (contentLower.includes('jaundice') || contentLower.includes('yellow')) {
        explanation = {
            summary: "This patient presents with Jaundice (Hyperbilirubinemia). The timing (onset after 24 hours or before) is critical. If it's a neonate < 24 hours, it's pathological. In adults, it suggests liver or biliary pathology.",
            keyFindings: [
                "**'Yellowish discoloration'**: Hallmarks of jaundice.",
                "**'Dark urine / Pale stools'** (if present): Would suggest obstructive jaundice.",
                "**'Hepatic Encephalopathy'** (if behavioral changes): Suggests decompensated liver disease.",
                "**'Ascites'**: Signs of portal hypertension."
            ],
            managementRationale: [
                "**Liver Function Tests**: To distinguish between hepatocellular and cholestatic patterns.",
                "**Viral Markers (HBsAg)**: To rule out viral hepatitis as a primary cause.",
                "**Phototherapy (for neonates)**: To convert unconjugated bilirubin into water-soluble isomers for excretion."
            ],
            disclaimer: "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines."
        };
    } else if (contentLower.includes('malaria')) {
        explanation = {
            summary: "This is a case of Severe Malaria. The presence of 'severe anemia' (pallor) or 'respiratory distress' (acidosis) classifies it as severe malaria (formerly complicated malaria), which is a medical emergency.",
            keyFindings: [
                "**'High grade fever'**: The hallmark of malaria, caused by red blood cell rupture.",
                "**'Pallor / PCV < 20%'**: Indicates severe anemia due to hemolysis.",
                "**'Respiratory distress'**: A sign of metabolic acidosis (lactic acidosis) from tissue hypoxia.",
                "**'RBS abnormalities'**: hypoglycemia is a common complication in severe malaria."
            ],
            managementRationale: [
                "**IV Artesunate**: The gold standard for severe malaria (superior to quinine).",
                "**Blood Transfusion**: Required if PCV is critically low or patient is in heart failure.",
                "**Dextrose**: To prevent or treat hypoglycemia."
            ],
            disclaimer: "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines."
        };
    } else if (contentLower.includes('chest pain') || conditionLower.includes('stemi')) {
        explanation = {
            summary: "This patient presents with Acute Coronary Syndrome (STEMI). The 'crushing' nature of the pain and 'sudden onset' are classic angina symptoms. The ECG findings (ST elevation) confirm transmural ischemia.",
            keyFindings: [
                "**'Crushing chest pain'**: Classic Levine's sign description.",
                "**'Sudden onset'**: Differentiates from other gradual processes.",
                "**'Hypertension history'**: A major risk factor for coronary artery disease.",
                "**'Tachycardia'**: Sympathetic response to pain and reduced cardiac output."
            ],
            managementRationale: [
                "**MONA Therapy**: Morphine (pain), Oxygen (hypoxia), Nitrates (vasodilation), Aspirin (antiplatelet).",
                "**Dual Antiplatelet Therapy**: To prevent further clot growth.",
                "**Anticoagulation (Clexane)**: To stabilize the thrombus.",
                "**Reperfusion**: The ultimate goal (PCI or thrombolysis) to save myocardium."
            ],
            disclaimer: "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines."
        };
    }

    return explanation;
}
