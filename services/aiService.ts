
import { Template } from '../types';

export interface CaseExplanation {
    summary: string;
    keyFindings: string[];
    differentialDiagnosis: string[];
    managementRationale: string[];
    clinicalPearls: string[];
    disclaimer: string;
}

// In a real app, you would call an API like OpenAI or Google Gemini here.
// For this demo, we will simulate the AI analysis based on the template content.

export const generateCaseExplanation = async (template: Template): Promise<CaseExplanation> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const contentLower = template.content.toLowerCase();
    const conditionLower = template.condition.toLowerCase();

    // Default Generic Content
    let explanation: CaseExplanation = {
        summary: "This case presents a complex clinical picture. The patient has multiple symptoms that require a systematic approach to diagnosis and management.",
        keyFindings: [
            "**Acute Onset**: Symptoms started suddenly, suggesting an acute pathology.",
            "**Systemic Involvement**: Multiple body systems appear to be affected.",
            "**History Triggers**: Potential identifiable triggers in the patient's history."
        ],
        differentialDiagnosis: [
            "**Infectious Etiology**: Bacterial or viral infection.",
            "**Metabolic Disturbance**: Electrolyte or endocrine imbalance.",
            "**Inflammatory Process**: Autoimmune or allergic reaction."
        ],
        managementRationale: [
            "**Stabilization**: Immediate priority is to stabilize airway, breathing, and circulation.",
            "**Investigation**: Directed labs and imaging to narrow the differential.",
            "**Symptomatic Relief**: Managing pain or distress while awaiting results."
        ],
        clinicalPearls: [
            "⚠️ Always rule out life-threatening causes first.",
            "💡 A thorough history is often more diagnostic than investigations.",
            "⚠️ Re-evaluate frequently if the patient does not improve as expected."
        ],
        disclaimer: "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines (e.g., WHO, NICE)."
    };

    // Specific Condition Logic
    if (contentLower.includes('asthma') || conditionLower.includes('asthma')) {
        explanation = {
            summary: "This is a classic presentation of **Acute Asthma Exacerbation**. The patient (a toddler) presents with the trademark triad of cough, difficulty breathing, and wheezing (implied by rhonchi). The history of 'nasal discharge' strongly suggests a viral upper respiratory tract infection as the trigger, which is the most common cause of exacerbations in this age group.",
            keyFindings: [
                "**'Difficulty in breathing x 1/7'**: Acute onset indicates an exacerbation rather than poor chronic control.",
                "**'Widespread rhonchi'**: Indicates narrowed airways due to bronchospasm and mucosal edema.",
                "**'Chest in-drawing'**: A sign of significant respiratory distress and increased work of breathing (using accessory muscles).",
                "**'Family history of allergy'**: Mother's reaction to perfumes supports an atopic/allergic background, a key risk factor."
            ],
            differentialDiagnosis: [
                "**Bronchiolitis**: Common in this age group, but usually presents with finer crepitations rather than just rhonchi.",
                "**Foreign Body Aspiration**: Should be considered in toddlers with sudden onset wheeze, but usually unilateral findings.",
                "**Pneumonia**: Would typically present with high fever and focal crackles/bronchial breath sounds."
            ],
            managementRationale: [
                "**Nebulised Salbutamol**: A short-acting beta-2 agonist (SABA) to rapidly relax bronchial smooth muscle.",
                "**Oral Prednisolone**: Systemic corticosteroids to reduce airway inflammation and prevent relapse (late-phase response).",
                "**Monitoring SpO2**: Essential to detect hypoxia (<94%), which is a sign of severe life-threatening asthma."
            ],
            clinicalPearls: [
                "💡 **'All that wheezes is not asthma'** – but in a patient with atopy and recurrent episodes, it most likely is.",
                "⚠️ **Silent Chest**: A silent chest in a dyspneic asthmatic is an ominous sign of imminent respiratory arrest.",
                "💡 **Steroid Timing**: Give steroids early (within the first hour) as they take 4-6 hours to have maximal effect."
            ],
            disclaimer: "This explanation is AI-generated for educational purposes only. always verify with clinical guidelines."
        };
    } else if (contentLower.includes('jaundice') || contentLower.includes('yellow')) {
        explanation = {
            summary: "This patient presents with **Jaundice (Hyperbilirubinemia)**. In a neonate < 24 hours (if applicable), this is pathological. In an adult, as seen in the 'Decompensated Liver Disease' template, this points to hepatocellular failure. The presence of 'hepatic encephalopathy' (irrational talk) and 'ascites' confirms decompensation.",
            keyFindings: [
                "**'Yellowish discoloration'**: Hallmarks of jaundice due to bilirubin deposition in tissues.",
                "**'Abdominal Swelling (Ascites)'**: Caused by portal hypertension and hypoalbuminemia.",
                "**'Abnormal Behaviour (Irrational Talk)'**: Suggests Hepatic Encephalopathy due to ammonia accumulation.",
                "**'Haematemesis'**: Suggests ruptured esophageal varices from portal hypertension."
            ],
            differentialDiagnosis: [
                "**Chronic Hepatitis B/C**: Leading causes of cirrhosis in this demographic.",
                "**Alcoholic Liver Disease**: Should be ruled out via history (though denied here).",
                "**Hepatocellular Carcinoma (HCC)**: Bloody ascites and rapid weight loss are red flags for malignancy."
            ],
            managementRationale: [
                "**Lactulose**: To reduce ammonia absorption in the gut and treat encephalopathy.",
                "**IV Antibiotics (Ceftriaxone)**: To treat potential Spontaneous Bacterial Peritonitis (SBP) or other infections.",
                "**Viral Markers (HBsAg)**: Essential to identify the underlying etiology.",
                "**Alpha-fetoprotein (AFP)**: Screening marker for Hepatocellular Carcinoma."
            ],
            clinicalPearls: [
                "⚠️ **Encephalopathy Grades**: Learn to grade West Haven criteria (Grade I: Sleep reversal, Grade II: Disorientation).",
                "💡 **Bloody Ascites**: Highly suspicious for Hepatocellular Carcinoma or traumatic tap.",
                "⚠️ **Variceal Bleeding**: A medical emergency requiring stabilization and endoscopy."
            ],
            disclaimer: "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines."
        };
    } else if (contentLower.includes('malaria')) {
        explanation = {
            summary: "This is a case of **Severe Malaria**. The presence of 'severe anemia' (pallor) or 'respiratory distress' (acidosis) classifies it as severe malaria (formerly complicated malaria). This is a medical emergency requiring parenteral therapy.",
            keyFindings: [
                "**'High grade fever'**: The hallmark of malaria, caused by red blood cell rupture and cytokine release.",
                "**'Pallor / PCV < 20%'**: Indicates severe anemia due to hemolysis of RBCs.",
                "**'Respiratory distress'**: A sign of metabolic acidosis (lactic acidosis) from tissue hypoxia – a grave prognostic sign.",
                "**'Hyperglycemia vs Hypoglycemia'**: While hypoglycemia is common, stress hyperglycemia can also occur."
            ],
            differentialDiagnosis: [
                "**Sepsis**: Can mimic severe malaria and often co-exists.",
                "**Severe Pneumonia**: Can cause fever and respiratory distress.",
                "**Meningitis**: If determining consciousness is difficult, LP may be needed."
            ],
            managementRationale: [
                "**IV Artesunate**: The WHO gold standard for severe malaria (superior to quinine).",
                "**Blood Transfusion**: Vital to restore oxygen-carrying capacity in heart failure/severe anemia.",
                "**Furosemide**: Used cautiously during transfusion to prevent fluid overload (TACO) in anemic heart failure."
            ],
            clinicalPearls: [
                "💡 **Artesunate vs Quinine**: IV Artesunate reduces mortality by ~22% compared to Quinine.",
                "⚠️ **Lactic Acidosis**: Respiratory distress (deep breathing) is often a sign of acidosis, not just primary lung pathology.",
                "💡 **Hypoglycemia Check**: Always check RBS in a convulsing or unconscious child with malaria."
            ],
            disclaimer: "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines."
        };
    } else if (contentLower.includes('chest pain') || conditionLower.includes('stemi')) {
        explanation = {
            summary: "This patient presents with **Acute Coronary Syndrome (STEMI)**. The 'crushing' nature of the pain and 'sudden onset' are classic angina symptoms. The ECG findings (ST elevation) confirm transmural ischemia/infarction.",
            keyFindings: [
                "**'Crushing chest pain'**: Classic Levine's sign description.",
                "**'Sudden onset'**: Differentiates from gradual inflammatory processes.",
                "**'Hypertension history'**: A major risk factor (along with age and male sex) for coronary artery disease.",
                "**'Tachycardia'**: Sympathetic response to pain and reduced cardiac output."
            ],
            differentialDiagnosis: [
                "**Aortic Dissection**: 'Tearing' pain radiating to back. Must rule out before giving anticoagulants.",
                "**Pulmonary Embolism**: Dyspnea and pleuritic pain predominate.",
                "**Pericarditis**: Pain relieved by sitting forward, saddle-shaped ST elevation."
            ],
            managementRationale: [
                "**MONA Therapy**: Morphine (pain), Oxygen (hypoxia), Nitrates (vasodilation), Aspirin (antiplatelet).",
                "**Dual Antiplatelet Therapy (DAPT)**: Aspirin + Clopidogrel to prevent further platelet aggregation.",
                "**Anticoagulation (Clexane)**: To stabilize the thrombus.",
                "**Reperfusion**: PCI (Primary Percutaneous Coronary Intervention) is gold standard if available within 90 mins."
            ],
            clinicalPearls: [
                "⚠️ **Time is Muscle**: Every 30 minutes of delay increases 1-year mortality by 7.5%.",
                "💡 **Inferior MI**: Be cautious with Nitrates in inferior MI (Right Ventricular Infarction) as it can cause severe hypotension.",
                "⚠️ **Aortic Dissection**: Always check BP in both arms if pain radiates to the back."
            ],
            disclaimer: "This explanation is AI-generated for educational purposes only. Always verify with clinical guidelines."
        };
    }

    return explanation;
}
