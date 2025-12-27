
import { Template, Specialty } from './types';

export const CLERKING_TEMPLATES: Template[] = [
  // Pediatrics
  {
    id: 'peds-1',
    title: 'Acute Asthma Exacerbation',
    specialty: Specialty.Pediatrics,
    subSpecialty: 'Children Emergencies',
    condition: 'Asthma',
    symptoms: ['Nasal discharge', 'Cough', 'Difficulty in breathing', 'Fast breathing', 'Chest in-drawing', 'Wheezing'],
    contributor: 'Admin',
    lastModified: '2025-12-27',
    content: `Acute exacerbation of asthma
2-year-old female toddler who resides with her Christian Igbo parents at Ijebu-Ode, Ogun State

PC:
Nasal discharge x 4/7
Cough x 1/7
Difficulty in breathing x 1/7

She was apparently well until 4 days PTP when she developed nasal discharge described as clear to whitish, associated with nasal blockage.
For which mother administered Otrivin nasal drops 1 drop bd, Broncholyte 5 mls and Sinufed 5 mls.
Cough started about 3 days into onset of illness, insidious in onset, non-barky, non-paroxysmal, worse at night, with no post-tussive vomiting. No identifiable trigger.
About the same time, she was noted to have difficulty in breathing evidenced by fast breathing and chest in-drawing. Symptoms were gradual in onset and progressively worsened.
No associated bluish discoloration of lips or skin. Mother continued Broncholyte and Sinufed.
However, due to persistence and worsening of symptoms, she presented for expert care.

She has been admitted in the past at about 4 months of age at a tertiary hospital in South-East Nigeria for similar symptoms, during which she received IV medications and nebulisation (names not known).
Has also had repeated hospital visitations for similar episodes, during which she was nebulised, with symptomatic improvement.

No history of blood transfusion.
No prior history of surgery.
Not a known sickle cell disease patient.
No history of seizure disorder.
No previous formal diagnosis of asthma.

Pregnancy was supervised at a private hospital. No history of fever or rash during pregnancy. 
She received 2 doses of TT and IPT. No history of hypertension or diabetes in pregnancy.
Delivery was preterm at an EGA of 31 weeks via EMCS at a tertiary facility due to PROM.
She cried spontaneously at birth. Birth weight was 1.6 kg.
No history of neonatal jaundice or other adverse neonatal events.
Commenced preterm formula shortly after birth and expressed breast milk after 5 days post-delivery.
She was on breast milk and formula for the first 6 months of life.
Family diet has since been introduced.

Fully immunized for age according to the NPI schedule.

Attained developmental milestones as at when due.

First child in a monogamous family setting.
Mother is a 34-year-old businesswoman (HLE: ND).
Father is a 35-year-old businessman (HLE: BSc).
They live in a well-ventilated 3-bedroom apartment with netted windows.
Does not routinely sleep under an ITN.

Source of drinking water: sachet water.
Sewage disposal: WC system.
Refuse disposal: municipal system.
Cooking fuel: gas.
No history of parental smoking.

No family history of asthma; however, mother complains of allergic symptoms when exposed to perfumes.
No pets in the home.
No rugs or carpets used.
Child does not attend daycare.

MRDT: Negative

O/E
Well-nourished child, acutely ill-looking, in obvious respiratory distress.
Not pale, not icteric, not cyanosed, afebrile (36.8°C), not dehydrated, no pedal oedema.

Weight: 10 kg

RS
RR: 38 cpm, dyspnoeic with intercostal recession
Chest movement symmetrical
Equal air entry bilaterally
Breath sounds vesicular with widespread rhonchi in the upper and middle lung zones bilaterally
SpO₂: 98% in room air

CVS
PR: 130 bpm, full volume, regular
S1 and S2 normal, no murmurs
DS

Abdomen: NAD

CNS
Conscious and alert


Diagnosis:
Acute exacerbation of asthma (probable viral-triggered)

Plan
Nebulise with Salbutamol nebules 2.5 mg × 3 doses (15 mins nebulisation with 5 mins rest interval, over one hour)
Oral Prednisolone 10 mg daily for 3 days
Monitor respiratory rate, work of breathing, and SpO₂
Reassess after completion of nebulisation`
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
