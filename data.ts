
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
    content: `2-year-old female toddler who resides with her Christian Igbo parents at Ijebu-Ode, Ogun State

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
Commenced AFM shortly after birth and expressed breast milk after 5 days post-delivery.
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
    symptoms: ['Yellowness of the eyes', 'Yellow body', 'EMCS delivery'],
    contributor: 'Admin',
    lastModified: '2025-12-27',
    content: `DOB: 04/10/25
TOB: 11:48 am
Date of delivery: EMCS
Indication: 2 previous caesarean sections in labour
EGA: 40 weeks
Tribe: Yoruba
Religion: Islam

A 48-hour-old term female neonate

PC:
Yellowness of the eyes × 1 day PTP

HPI:
She was apparently well until about a day prior to presentation when she was noticed to have yellowness of the eyes and body while by the mother’s side during postnatal ward round.
Mother’s blood group: O positive
No history of use of icterogenic substances.
No poor suck or refusal of feeds.
Mother was unbooked and registered for ANC at a federal neuropsychiatric facility in Ogun State.
She received 2 doses of IM TT during pregnancy and 2 doses of IPT for malaria.
No history of peripartum fever or rash.
No symptoms suggestive of UTI, abnormal vaginal discharge, APH or PROM.
Baby was delivered at term via EMCS.
Birth weight: 3.8 kg
Cried spontaneously at birth.
APGAR score: 9 @ 1 min, 10 @ 5 mins.

Feeding History:
Exclusively breastfed.
Mother reports good lactation.
Baby feeds for about 30 minutes per feed and sleeps thereafter.
No excessive sweating, difficulty in breathing or prolonged suck–rest–suck cycle.

Social History:
Mother is a 36-year-old patent medicine vendor.
Father is a 36-year-old aluminium fabricator with HLE: HND, supportive of care.
Patient is the 4th of 4 children in a monogamous setting.
1st: 13-year-old female, alive and well
2nd: 6-year-old male, alive and well
3rd: 4-year-old male, alive and well
No history of neonatal jaundice requiring admission in siblings.
They reside in a well-ventilated, netted 2-bedroom apartment.

ROS:
No fever
No seizures or loss of consciousness
No cough, difficulty in breathing or bluish discoloration of lips or limbs
No vomiting, loose stools or refusal of feeds
No bleeding from any orifice
No rash

O/E:
Conscious, average-sized neonate, not in respiratory distress
Not pale, icteric, not cyanosed
Afebrile (T: 36.4°C)
Weight: 2.8 kg
Length: 50 cm
OFC: 36 cm

CNS:
Conscious with good activity
AF, PF: patent, normotensive
Grasp reflex: firm
Moro reflex: complete
Suck reflex: sustained
Tone: normal

CVS:
PR: 130 bpm, full volume, regular
HS: Normal S1 and S2

Respiratory:
Not dyspnoeic
RR: 36 cpm
BS: Vesicular
SpO₂: 97% in room air

Digestive System:
Mouth: NAD
Abdomen: full, moves with respiration, soft
No tenderness
No palpable organomegaly

UGS:
Normal female external genitalia
Kidneys not ballotable

Investigations:
RBS: 84 mg/dL
PCV: 44%

Diagnosis:
Neonatal jaundice ? cause

Plan:
Admit into NNU
Blood group, serum bilirubin, reticulocyte count, DCT, CRP
Commence intensive phototherapy
Feed as tolerated
Monitor T, PR, RR, SpO₂ 4-hourly
Counsel mother on diagnosis, prognosis and line of management
Review with investigation results.`
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
