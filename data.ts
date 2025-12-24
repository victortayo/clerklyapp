
import { Template, Specialty } from './types';

export const CLERKING_TEMPLATES: Template[] = [
  // Pediatrics
  {
    id: 'peds-1',
    title: 'Acute Asthma Exacerbation',
    specialty: Specialty.Pediatrics,
    subSpecialty: 'Children Emergencies',
    condition: 'Asthma',
    symptoms: ['Wheezing', 'Shortness of breath', 'Cough', 'Tachypnea'],
    contributor: 'Admin',
    lastModified: '2023-10-25',
    content: `HISTORY OF PRESENTING COMPLAINT:
- Onset and duration of wheezing/shortness of breath.
- Triggers (URTI, allergens, exercise).
- Home management (Inhaler frequency, dosage).
- Associated symptoms: fever, runny nose, nocturnal cough.

PAST MEDICAL HISTORY:
- Previous admissions (especially ICU/High Dependency).
- Oral steroid courses in last 12 months.
- Eczema/Allergic Rhinitis (Atopy history).

EXAMINATION:
- General: Respiratory distress, use of accessory muscles, cyanosis.
- Vitals: HR, RR, SpO2, Temperature.
- Respiratory: Air entry, wheeze (expiratory/inspiratory), focal signs.

PLAN:
- Oxygen if SpO2 < 94%.
- Salbutamol/Ipratropium nebulizers.
- Corticosteroids (Prednisolone).
- CXR if focal signs or first presentation.`
  },
  {
    id: 'peds-2',
    title: 'Neonatal Jaundice',
    specialty: Specialty.Pediatrics,
    subSpecialty: 'Neonatology',
    condition: 'Hyperbilirubinemia',
    symptoms: ['Yellowish discoloration', 'Poor feeding', 'Lethargy'],
    contributor: 'Admin',
    lastModified: '2023-10-20',
    content: `MATERNAL HISTORY:
- Blood group & Rhesus status.
- Infections (TORCHES).
- Medication history.

BIRTH HISTORY:
- Gestational age.
- Mode of delivery (instrumental? cephalhematoma?).
- Apgar scores.

NEONATAL HISTORY:
- Age of onset (hours/days of life).
- Feeding (breast/formula, frequency, volume).
- Stool and urine (color of stool).

EXAMINATION:
- Kramer's staging.
- Hydration status.
- Hepatomegaly/Splenomegaly.
- Neurological exam (Moro reflex, tone).

INVESTIGATIONS:
- TSB, SBR (Direct/Indirect).
- FBC, Blood film (hemolysis?).
- G6PD status.`
  },

  // Internal Medicine
  {
    id: 'im-1',
    title: 'Acute Coronary Syndrome (ACS)',
    specialty: Specialty.InternalMedicine,
    subSpecialty: 'Cardiology Clinic',
    condition: 'Myocardial Infarction',
    symptoms: ['Chest pain', 'Diaphoresis', 'Nausea', 'Radiation to jaw'],
    contributor: 'Admin',
    lastModified: '2023-11-01',
    content: `CHIEF COMPLAINT:
- Central crushing chest pain radiating to left arm/jaw.

PRESENT HISTORY:
- Duration and intensity.
- Relieving/Aggravating factors (GTN use).
- Associated symptoms: Nausea, Vomiting, Sweating.

RISK FACTORS:
- HTN, DM, Dyslipidemia, Smoking.
- Family history of premature CAD.

EXAMINATION:
- Vitals: BP (both arms), Pulse rate, regularity.
- Cardiac: Murmurs, S3/S4.
- Pulmonary: Basal crepitations (Heart Failure).

PLAN:
- 12-lead ECG (immediately).
- Cardiac enzymes (Troponin T/I).
- Aspirin 300mg + Clopidogrel 300mg.
- Referral to cardiology for PCI/Thrombolysis.`
  },

  // OBGYN
  {
    id: 'ob-1',
    title: 'Pre-eclampsia Assessment',
    specialty: Specialty.OBGYN,
    subSpecialty: 'Antenatal Clinic',
    condition: 'Pre-eclampsia',
    symptoms: ['Headache', 'Visual disturbances', 'Epigastric pain', 'Edema'],
    contributor: 'Admin',
    lastModified: '2023-11-05',
    content: `OBSTETRIC HISTORY:
- Gravidity/Parity.
- Current gestational age (LMP/USS).

SYMPTOMS OF SEVERITY:
- Severe headache not relieved by simple analgesics.
- Visual blurring/flashing lights.
- Right upper quadrant/Epigastric pain.
- Sudden increase in facial/hand edema.

EXAMINATION:
- BP (Serial measurements).
- Urinalysis (Proteinuria).
- Hyperreflexia / Clonus.
- Fundal height, Fetal Heart Rate.

MANAGEMENT:
- Admission if BP > 140/90 and proteinuria.
- Labetalol/Nifedipine if severe.
- Magnesium Sulfate for eclampsia prophylaxis.`
  },

  // Surgery
  {
    id: 'surg-1',
    title: 'Acute Appendicitis',
    specialty: Specialty.Surgery,
    subSpecialty: 'Surgical Emergencies',
    condition: 'Appendicitis',
    symptoms: ['Migratory RIF pain', 'Anorexia', 'Nausea', 'Fever'],
    contributor: 'Admin',
    lastModified: '2023-11-10',
    content: `HISTORY:
- Pain: Periumbilical onset, migrating to Right Iliac Fossa.
- Associated: Anorexia (classic), nausea, vomiting.
- Bowel habits: Last bowel motion, flatus.

EXAMINATION:
- General: Febrile, flushed.
- Abdominal:
  - Tenderness at McBurney's point.
  - Rebound tenderness, Guarding.
  - Rovsing's sign, Psoas sign, Obturator sign.

INVESTIGATIONS:
- FBC (Leukocytosis).
- CRP.
- Urine HCG (in females).
- Ultrasound Abdomen/Pelvis.

PLAN:
- NPO (Nil per os).
- IV Fluids.
- Analgesia.
- Surgical consultation for Appendectomy.`
  }
];
