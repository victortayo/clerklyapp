
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
    summary: '2-year-old female with acute asthma exacerbation (probable viral-triggered) on background of previous similar episodes.',
    content: `2-year-old female toddler who resides with her Christian Igbo parents at Ijebu-Ode, Ogun State

PC:
Nasal discharge x 4/7
Cough x 1/7
Difficulty in breathing x 1/7

She was apparently well until 4 days PTP when she developed nasal discharge described as clear to whitish, associated with nasal blockage.

Cough started about 3 days into onset of illness, insidious in onset, non-barky, non-paroxysmal, worse at night, with no post-tussive vomiting. No identifiable trigger.

About the same time, she was noted to have difficulty in breathing evidenced by fast breathing and chest in-drawing. Symptoms were gradual in onset and progressively worsened.
No associated bluish discoloration of lips or skin. 

Since the onst of symptoms, mother has given Otrivin nasal drops 1 drop bd, Broncholyte 5 mls and Sinufed 5 mls.
However, due to persistence and worsening of symptoms, she presented here for expert care.

She was first admitted at about 4 months of age for similar symptoms, during which she received IV medications (names not known) and nebulisation.
Has since had repeated hospital visitations for similar episodes.

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
    summary: '48-hour-old term female neonate presenting with jaundice on day 1 of life. Delivered via EMCS.',
    content: `DOB: 04/10/25
TOB: 11:48 am
Mode of delivery: EMCS
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
  {
    id: 'peds-3',
    title: 'Acute Tonsillitis',
    specialty: Specialty.Pediatrics,
    subSpecialty: 'Otolaryngology / Pediatrics',
    condition: 'Acute Tonsillitis',
    symptoms: ['Fever', 'Noisy breathing', 'Snoring', 'Hyperemic tonsils'],
    contributor: 'Admin',
    lastModified: '2025-12-28',
    summary: '2-year-old male with 3-day history of high-grade fever and noisy breathing (snoring). Hyperemic tonsils on examination.',
    content: `Patient Seen
2-year-old male residing with Muslim Yoruba parents at Harmony

Informant: Father

PC:

Fever × 3 days
Noisy breathing × 2 days

HPC:
Patient was well until 3 days ago when he developed high-grade, intermittent fever, temporarily relieved by medications. Noisy breathing started 1 day ago, insidious in onset, described as snoring, worse during sleep, disturbing sleep.
He was initially seen at a private facility where investigations were done, IV fluids and oral medications were given, and he was discharged. Due to persistent symptoms, he was brought here for further care.
No history of asthma, seizure disorder, or sickle cell disease. No prior hospital admissions, surgeries, or blood transfusions. Genotype unknown; no history suggestive of hemoglobinopathy.
No cough or chest pain
No bluish discoloration of lips or limbs
No vomiting, diarrhea, dysuria, or passage of dark/frothy urine

O/E:
Well-nourished, acutely ill-looking, febrile (37.8°C), not pale, icteric, cyanosed, or dehydrated. Bilateral submandibular lymph node enlargement. No pedal edema. No digital clubbing.

Weight: 16 kg

Respiratory:
Not dyspneic
RR 32 cpm
BS vesicular
SpO₂ 99% in room air

ENT:
Tonsils hyperemic, not enlarged, no exudates
No tragal or pinnal tenderness

CVS:
PR 132 bpm, full volume, regular
HS S1 S2 heard

Abdomen:
Full, MWR, soft, non-tender, 
No organomegaly

CNS: Grossly intact

MSS: NAD

mRDT: Negative

Diagnosis: 
Acute tonsillitis with postnasal obstruction

Plan:
CRP
Steam inhalation
X-ray of postnasal spaces (already done, shows obliteration of nasopharyngeal air column)
Oral PCM 10 mg/kg = 160 mg 6 hourly
Oral Ibuprofen 9 mg/kg = 150 mg 8 hourly
Oral Amoxiclav 30 mg/kg = 480 mg 12 hourly
Commence Aristobet-N nasal drops
Commence oral Cetrizine 2.5 mg daily
Commence oral Actifed 1 mg 6 hourly
See in ENT clinic
Continue other supportive management`
  },

  {
    id: 'peds-4',
    title: 'Severe Malaria with Severe Anemia',
    specialty: Specialty.Pediatrics,
    subSpecialty: 'Emergency Pediatrics',
    condition: 'Severe Malaria',
    symptoms: ['Fever', 'Difficulty in breathing', 'Fast breathing', 'Pallor', 'Gallop rhythm', 'Hepatomegaly'],
    contributor: 'Admin',
    lastModified: '2025-12-28',
    summary: '2-year-old female presenting with high-grade fever and respiratory distress. Found to have severe anemia (PCV 15%) and gallop rhythm.',
    content: `2-year-old female child of Christian, Yoruba parents.
Informant: mother.

PC:
Fever x 3 days
Difficulty in breathing x 4 hrs PTP

HPC:
She was apparently well until 3 days PTP when she developed high-grade, intermittent fever temporarily relieved with PCM. 
4 hrs PTP, she developed difficulty in breathing, evidenced by fast breathing. 
Since the onset of symptoms, mother has given her 3 doses of 5 mls syrup amoxicillin without resolution of symptoms necessitating her presentation to a private facility.
At the private hospital, she was noted to be pale and was advised on the need for a blood transfusion, hence the referral to this facility.

PMH:
No history of previous hospitalization, blood transfusion, or surgery. Genotype unknown.

Pregnancy, Birth, and Neonatal Hx:
Pregnancy, delivery, and neonatal period were not adversely eventful.

Nutritional Hx:
Exclusively breastfed for 6 months, currently on family diet.

Immunization Hx:
Fully immunized for age according to the NPI schedule.

Developmental Hx:
Attained developmental milestones as and when due.

Family & Social Hx:
Third of three children.
1st child: 7-year-old male, alive and well
2nd child: 5-year-old male, alive and well
Mother, 29 years, tailor, HLE: FSLC
Father, 40 years, self-employed, HLE: SSCE
Family lives in a single-room dwelling.

ROS:
One episode of vomiting with passage of loose stool
Nil cough
Nil reduction in urine output
Nil convulsion or loss of consciousness

O/E:
Not pale, anicteric, not cyanosed, febrile, not dehydrated, nil pedal edema
Anthropometry:
Weight: 10 kg
Length: 70 cm
MUAC: 14 cm
OFC: 45 cm

CVS:
PR 156 bpm, full volume, regular
S1 and S2 with gallop rhythm

RS:
RR 30 cpm, dyspneic with flaring of alar nasi
BS vesicular
SpO₂ 93% in room air

Digestive:
Mouth: NAD
Abdomen full, soft, MWR
Liver soft, 3 cm below RCM, tender
Nil splenomegaly

CNS:
Conscious
Tone normal globally
Power full in all limbs

Investigations:
mRDT: positive
PCV: 15%
RBS: 147 mg/dL
Urinalysis: within normal limits

Diagnosis:
Severe malaria with severe anemia 
Hyperglycemia

Plan:
Admit
MP for microscopy
FBC, Hb phenotype
Group-specific uncrossmatched blood
Transfuse with settle cell 15 mL/kg = 150 mL over 2 hours
IV Artesunate 3 mg/kg = 30 mg at 0 hr, 12 hr, and 24 hr (Commence oral ACT Artemether-Lumefantrine 20/120 at 0, 8, 12 hrs x3/7 after completion of IV Artesunate)
IV Furosemide 1 mg/kg = 10 mg 12 hourly x24 hrs
IVF 5% dextrose in half saline 1000 mL over 24 hrs via fluid giving set
Monitor vital signs (PR, RR, Temp, SpO₂) 4 hourly
Review with investigation results`
  },

  {
    id: 'peds-5',
    title: 'Severe Malaria with Hyperglycemia',
    specialty: Specialty.Pediatrics,
    subSpecialty: 'Emergency Pediatrics',
    condition: 'Severe Malaria',
    symptoms: ['Fever', 'Pale eyes and feet', 'Respiratory distress', 'Severe pallor', 'Bounding pulse', 'Hepatomegaly', 'Hyperglycemia'],
    contributor: 'Admin',
    lastModified: '2025-12-28',
    summary: '5-year-old male with severe anemia (PCV 8%), respiratory distress, and hyperglycemia (RBS 206 mg/dL). Twin gestation.',
    content: `5 year old male pre-schooler, with Christian TIV parents, resides at Akure, Ondo State.
Informant is the paternal aunt and mother. 

PC:
Fever x5/7
Pale eyes and feet x2/7

HPC:
He was in his usual state of health until 5 days ago when he developed fever, fever was said to be high grade, intermittent, worse in the evening. It was temporarily relieved with tepid sponging.
About 3 days after onset of fever, he was noticed to be pale which was described that the hands, feet and eyes were white in colour.
Since onset of symptoms, step mother had called an auxiliary who administered blood tonic and an intramuscular injection which could not be ascertained.
However symptoms persisted and the paternal aunt was called which necessitated presentation to this facility for expert care.

PMH:
No hx of similar symptoms in the past.
No hx of previous hospital admission could not be ascertained.
No hx of blood transfusion or surgery.

Pregnancy, Birth and Perinatal Hx:
Pregnancy was planned, spontaneously concieved, booked and delivered at a private hospital.
No hx of febrile illness, no hx of HTN, DM, or symptoms suggestive of UTI during pregnancy.

He is the 2nd of a set of twin delivered at about 33weeks EGA, cried spontaneously at birth, BW could not be ascertained; mother described he was average in size.
Child was put to breast within 1 hour of delivery; however, mother was not lactating well and had to be given baby food.
No adverse event during the perinatal period.

Immunization hx:
Immunized for age according to NPI schedule.

Developmental hx:
Attained developmental milestones as at when due.

Nutritional Hx:
Child was not exclusively breast fed, and was on AFM. Currently on family diet.

Family & Social HX:
He is the 2nd of a set of twin born in a polygamous family setting with 2 wives.
Mother is the 1st wife; however, is separated from father and does not reside with them. Mother has 4 children for the father.
Mother is a 26 year old farmer with no formal education. Genotype is unknown. Average income of mother is about N50,000 monthly.
Father is ?age, farmer with HLE as First School Leaving Certificate. Average income of father could not be ascertained.
Eldest sibling is a 9 year old male, not in school, alive and well, no hx of similar symptoms.
2nd sibling is a 7 year old male, not in school, alive and well, no hx of similar symptoms.
1st set of twin is a 5 year old female, not in school, alive and well, no hx of similar symptoms.
Child lives with father and step mother along with siblings in a mud house.

ROS:
No loss of consciousness, no convulsion, no bluish discoloration of any part of the body. Positive hx of generalized body weakness.
No vomiting, no passage of loose stool.
No rash, hx of change in colour or decrease in urine output could not be ascertained.

O/E:
Acutely ill-looking, in respiratory distress, severely pale, not icteric, febrile (T: 37.8C), not cyanosed, not dehydrated, no finger clubbing, no PLNE, no pedal edema.
Weight: 16kg
WFA at 15th centile
Length 102cm
LFA between -1 & -2 z-score
WFL at 0 z-score
MUAC 15cm
MUAC for age between -1 & -2 z-score
OFC 50cm
OFC for age at 0 z-score

Respiratory:
Dyspneic with IC, SC recession
RR 68cpm
BS Vesicular
SpO2 88-92% on INO2

CVS:
PR 156bpm, bounding, regular
BP 88/40mmHg
SBP <50th centile
DBP <50th centile
HS S1S2

Digestive:
Abdomen full, MWR, soft
? Vague generalised tenderness
Liver 5cm below RCM, soft, ?tender
Spleen not palpably enlarged

CNS:
Conscious
Pupils round, equal, reactive to light bilaterally
No neck stiffness
Kernig negative
Brudzinski negative
Tone normal globally

UGS:
Testes not palpable within scrotal sac

Investigations:
PCV 8%
mRDT Positive
RBS 206mg/dL
RVS Non-reactive
Urinalysis:
Glucose: negative
Bilirubin: negative
Ketone: Trace
SG: 1.030
Blood: negative
pH: 6.5
Protein: negative
Urobilinogen: Normal
Nitrite: Negative
Leucocyte: Negative

Diagnosis:
Severe malaria in anemic heart failure
Hyperglycemia
Cryptorchidism

PLAN:
Admit 
Commence INO2
MP Microscopy, FBC, EUCr, Hb phenotype
IV Artesunate 3mg/kg = 48mg @ 0, 12, 24 hours (Commence oral ACT 40/240 mg 0, 8, 12 hrs x 3/7 after completion of IV Artesunate)
IV Furosemide 1mg/kg = 16mg 8 hourly
Urgent transfusion with 20mL/kg = 320mL group-specific uncrossmatched blood
Monitor T, PR, RR, SpO2 4 hourly
Monitor RBS hourly till 3 normal values then 4 hourly
Invite the pediatric surgical team for his cryptorchidism`
  },

  // Internal Medicine
  {
    id: 'im-1',
    title: 'Acute STEMI',
    specialty: Specialty.InternalMedicine,
    subSpecialty: 'Cardiology Clinic',
    condition: 'ST Elevation Myocardial Infarction',
    symptoms: ['Chest pain', 'Crushing chest pain', 'Sudden-onset chest pain', 'Febrile illness', 'Tachycardia'],
    contributor: 'Admin',
    lastModified: '2025-12-27',
    summary: '51-year-old male with sudden-onset crushing chest pain and history of hypertension. ECG shows Anterolateral STEMI.',
    content: `Patient seen 
51-year-old man presented with 

Chest pain × 2 days.

He was in his usual state of health until 2 days prior to presentation when he developed central, sudden-onset, crushing chest pain, non-radiating, graded 10/10, starting a few minutes after an altercation with his son. No known aggravating or relieving factors.
Four days before chest pain onset, patient had a febrile illness treated at a private hospital with antimalarials and antibiotics. No previous history of similar symptoms. No cough, sweating, calf swelling or pain, palpitations, orthopnea, PND, vomiting, or abdominal pain.

Patient is a known hypertensive for 5 years, on Tab Vasoprin, Amlodipine, Bondomet, and Lisinopril with fair compliance. 
No diabetes, seizure disorder, or asthma. 
Does not smoke or consume alcohol.

At onset, patient presented to a referring facility where he was managed for Plasmodiasis. On presentation at our facility, ECG showed Acute STEMI, Sinus Tachycardia, Anterolateral ST Elevation, suggestive of acute infarct.

Admitting vitals:
BP 177/123 mmHg
PR 112 bpm

O/E:
Middle-aged man, in moderate painful distress, anicteric, acyanosed, afebrile, no pedal edema

CVS:
PR 112 bpm, 
LCB+, 
BP 150/80 mmHg, 
HS S1 & S2 heard

Chest:
RR 26 cpm, 
SpO₂ 98% room air, 
Vesicular breath sounds

ABD:
Full, MWR, 
No tenderness, 
No organomegaly, 
L0S0K0

CNS:
Conscious, 
OTPP, 
GCS 15/15, 
No meningeal signs, 
Normal tone, 
Full power in all limbs

Assessment:
Acute coronary syndrome, likely ST Elevation Myocardial Infarction (STEMI)

Plan:
For ICU admission for cardiac monitoring
FBC, EUCr, FLP, LFT, urinalysis, urine MCS, HbA1C
Troponin I and T, CXR, abdominopelvic USS, repeat ECG in 12 hours, ECHO
Tab Vastarel 35 mg bd
Tab Aspirin 300 mg stat, then 75 mg daily
Tab Atorvastatin 20 mg nocte
Syrup Morphine 10 ml tds
Commence INO₂ if SpO₂ <94%
IV Rabeprazole 20 mg bd
Withhold Lisinopril for now
SC Clexane 40 mg bd
Tab Telmisartan 80 mg daily
Tab Bisoprolol 5 mg daily
Strict input/output monitoring
Patient may benefit from interventional radiology
Dietary counselling
Counsel on diagnosis and management plan`
  },

  // OBGYN
  {
    id: 'ob-1',
    title: 'Severe Pre-eclampsia',
    specialty: Specialty.OBGYN,
    subSpecialty: 'Gynae Emergency',
    condition: 'Pre-eclampsia',
    symptoms: ['High blood pressure', 'Proteinuria', 'Chronic hypertension', 'G5P3+1'],
    contributor: 'Admin',
    lastModified: '2025-12-27',
    summary: '39-year-old G5P3+1 with chronic hypertension and superimposed severe pre-eclampsia at 28 weeks + 5 days.',
    content: `GYNAE EMERGENCY

An unbooked 39-year-old G5P3+1 (3A), chronic hypertensive, at EGA of 28 weeks + 5 days, a businesswoman, Christian, Yoruba, with HLE: SSCE, residing at Ilesa, Osun State.

LMP: 23/08/2024
EDD: 30/05/2025
EGA: 28 weeks + 5 days

She was referred from Unity Specialist Hospital on account of elevated blood pressure (200/100 mmHg) and proteinuria 2+ for expert care and logistic reasons. She is a known hypertensive diagnosed 2 years ago, on antihypertensive therapy but not regular with drugs.

Index pregnancy was spontaneously conceived, planned, desired. Pregnancy was suspected with a missed period and confirmed by early scan.
Booked at a secondary hospital at EGA of 25 weeks.
She has not yet commenced TT and IPT in this pregnancy.
Currently on oral hematinics.

Past obstetric history:
2009 – VTOP at EGA 4 weeks; no PAC; no complications.
2012 – 1st confinement: term SVD, male alive and well, delivered at a PHC in Osun State; uneventful puerperium.
2014 – 2nd confinement: term SVD, female alive and well, delivered at a PHC in Osun State; uneventful puerperium.
2022 – 3rd confinement: term SVD, male alive and well, delivered at Royal Haven Hospital, Osun State; uneventful puerperium.

Menstrual history:
Menarche at 16 years.
Cycle: 28 days, 5-day duration, with dysmenorrhea.
No menorrhagia, dyspareunia.
Patient not aware of Pap smear.
Aware of contraception but never used any.

Medical history:
Diagnosed hypertensive 2 years ago, currently on Nifedipine 30 mg daily.
No history of diabetes, asthma, seizure disorder, or sickle cell disease.
No previous hospital admissions, blood transfusions, or surgeries.
No known drug or food allergies.

Social history:
Married to a 50-year-old truck driver, HLE: ND, second wife in a polygamous setting, with 3 children. Supportive of care.
Does not smoke or take alcohol.

O/E:
Young woman, not in obvious distress, afebrile, not pale, anicteric, not cyanosed, not dehydrated, no peripheral lymphadenopathy, no finger clubbing, no pitting edema up to knees.

RS:
RR 20 cpm
SpO₂ 96% in room air
Breath sounds vesicular

CVS:
PR 94 bpm
BP 180/100 mmHg
S1 S2 heard

ABD:
Gravidly enlarged, moves with respiration
SFH 31 cm
Singleton fetus, longitudinal lie, cephalic presentation
FHR 144 bpm

VE:
Normal vulva and vagina
Cervix posterior, medium, uneffaced, os closed

ASS:
Chronic hypertension with superimposed severe pre-eclampsia at EGA 28 weeks + 5 days in an unbooked 39-year-old G5P3+1 (3A)

PLAN:
Counsel patient on diagnosis and management
Admit to ANW, secure incubator space
BPP without NST
Urgent urinalysis (3+ protein, SG 1.020, pH 6.5)
Daily urinalysis
FBC + platelet count
EUCr
Liver function tests
RVS
HBsAg, HCV, VDRL
Blood group and genotype
Group and crossmatch 2 units of blood
IM Dexamethasone 12 mg 12-hourly × 2 doses
IV Labetalol 20 mg stat
Tab Labetalol 200 mg bd
Tab Nifedipine XL 30 mg bd
Catheterize and monitor urine output
IV MgSO₄ as per Zuspan regimen
To commence FKC starting tomorrow
Close monitoring of blood pressure
Consult to the medical team on call for blood pressure control.`
  },
  {
    id: 'ob-2',
    title: 'ANC Booking',
    specialty: Specialty.OBGYN,
    subSpecialty: 'Antenatal Clinic',
    condition: 'Antenatal Care',
    symptoms: ['Advanced maternal age', 'Previous CS scar', 'Previous perinatal loss', 'History of hypertensive disorder of pregnancy'],
    contributor: 'Admin',
    lastModified: '2025-12-27',
    summary: '36-year-old G3P2+0 (1A) at 21 weeks + 3 days. Previous CS scar and perinatal loss.',
    content: `ANC BOOKING

LMP: 20/07/2025
EGA: 21 weeks + 3 days
EDD: 27/04/2026

A 36-year-old G3P2+0 (1A), with one previous CS scar, a civil servant, Christian, Yoruba, residing at Ifo, Ogun State.

Index pregnancy was planned for, desired and naturally conceived. Pregnancy was suspected using urine pregnancy test and confirmed with USS at EGA of 10 weeks 5 days. Pregnancy has been uneventful so far. Currently on Pregnacare.

Obstetric history:
– 20/07/2015: Delivered a live female baby at term via EMCS at a private hospital in Ogun State on account of suspected severe pre-eclampsia. Puerperium was uneventful. Child is alive and well.
– 10/04/2025: Had SVD of a live male baby who died immediately after birth at a secondary health facility in Ogun State.

Menstrual history:
Menarche at 17 years.
Cycle: 3–4/28 days.
No dysmenorrhoea or menorrhagia.
No history of contraceptive use.

Gynaecological history:
Aware of Pap smear and had one done last year in this facility, reported to be normal.

Past medical history:
Mother is hypertensive.
Patient is not a known hypertensive, diabetic, asthmatic or sickle cell disease patient.
No history of blood transfusion.
No known drug or food allergies.

Social history:
Married to a 40-year-old civil servant in a monogamous setting.
Occasional alcohol intake.
Does not smoke cigarettes.

Available investigations:
1. Blood group – O positive
2. HBsAg – Negative
3. HCV – Negative
4. VDRL – Non-reactive

O/E
A young woman, anxious, afebrile, not pale, no pedal oedema.
Weight: 102.5 kg
PR: 112 bpm
BP: 123/81 mmHg

ABD
Gravidly enlarged abdomen, moves with respiration
Pfannenstiel scar, healed by primary intention
SFH: 21 cm (corresponds with gestational age)

Risk stratification:
Advanced maternal age, previous caesarean section, history of hypertensive disorder of pregnancy, previous perinatal loss.

Assessment:
Ongoing pregnancy in a 36-year-old G3P2+0 (1A) at EGA of 21 weeks + 3 days, with one previous caesarean section scar.

Plan:
1. FBS
2. PCV, urinalysis
3. RVS
4. Continue Pregnacare
5. Follow-up in 4 weeks.`
  },

  {
    id: 'ob-3',
    title: 'Antenatal Clinic',
    specialty: Specialty.OBGYN,
    subSpecialty: 'Antenatal Clinic',
    condition: 'Antenatal Care',
    symptoms: ['G2P0+1', 'Antenatal booking', 'Pregnancy assessment', 'Routine ANC'],
    contributor: 'Admin',
    lastModified: '2025-12-27',
    summary: '28-year-old G2P0+1 at 27 weeks + 6 days for routine booking. Uneventful pregnancy.',
    content: `ANTENATAL CLINIC

Patient seen.
A 28-year-old G2P0+1, housewife, residing at Kemta, Abeokuta, Christian, Yoruba.
LMP: 26/08/23
EGA: 27 weeks + 6 days 
EDD: 1/06/24

She presented today for antenatal booking. Pregnancy has been uneventful. No lower abdominal pain, no vaginal bleeding, no discharge, no headaches, visual disturbance or swelling. She is yet to donate blood.
Has had one dose of TT in this pregnancy, yet to commence IPT.

Booking investigations:
HIV: Negative
Others not yet done

Index pregnancy was spontaneously conceived, planned and desired. Suspected following a period of amenorrhoea, confirmed via urine PT, and later localized with an early ultrasound scan.

Attained menarche at 15 years. Menses lasts 4 days in a 28-day cycle. No dysmenorrhoea, intermenstrual bleeding, menorrhagia, dyspareunia or postcoital bleeding. She is aware of contraceptives but does not use any. She is not aware of Pap smear and has never done one.

She is not a known hypertensive, diabetic, asthmatic or PUD patient. Not epileptic. No previous blood transfusion. No known drug or food allergies.

Social history:
Married in a monogamous setting to a 32-year-old commercial motorcyclist. She does not smoke nor take alcohol.

O/E: 
Young woman, in NAD, not pale, anicteric, acyanosed, not dehydrated, no pedal oedema.
RR: 20 cpm 
PR: 76 bpm
BP: 112/69 mmHg

ABDOMEN
Gravidly enlarged, moves with respiration. Nil area of tenderness.
SFH: 27 cm
FHR: 154 bpm

ASS: 
Ongoing cyesis in a booked 28-year-old G2P0+1 at EGA 27 weeks + 6 days.

PLAN
To do required booking investigations
Tabs Fansidar iii stat
Tabs Ferrous Sulphate 200 mg daily
Tabs Folic Acid 5 mg daily
Tabs B complex 1 daily
Tabs Vitamin C 200 mg tds
Encourage patient to ensure ANC blood donation
See in 2/52.`
  },

  {
    id: 'ob-4',
    title: 'Symptomatic Uterine Fibroid',
    specialty: Specialty.OBGYN,
    subSpecialty: 'Gynae Clinic',
    condition: 'Abnormal Uterine Bleeding',
    symptoms: ['Lower abdominal pain', 'Heavy menstrual bleeding', 'Abdominal swelling', 'Dysmenorrhea', 'Uterine fibroid'],
    contributor: 'Admin',
    lastModified: '2025-12-27',
    summary: '45-year-old P4+0 with symptomatic uterine fibroids presenting with lower abdominal pain and heavy menstrual bleeding.',
    content: `GYNAE CLINIC

Patient Seen
A 45-year-old P4+0 (3A) married food seller, Ede, Osun State, Christian, Yoruba, with HLE: Primary.

LMP: 06/09/2025

PC:
Recurrent lower abdominal pain × 5 years
Heavy menstrual bleeding × 2 weeks

HPC:
She was in her usual state of health until about 5 years when she noted recurrent lower abdominal pain described as dull, intermittent, insidious, sometimes radiating to the back, no aggravating factors, pain severity 5–7/10, severe enough to affect daily activities.
There is an associated abdominal swelling first noticed 2 years ago, non-progressive, mildly tender, worse with periods.

Heavy menstrual bleeding started about 2 weeks ago at onset of period, described as dark, foul-smelling blood with passage of clots, but no change in number of pads used per day. Associated dizziness noted, no fainting, weakness, or seizures. No abnormal vaginal discharge. Positive family history of uterine fibroid.

She attained menarche at 15 years. First pregnancy at 17 years. 
No history of swelling elsewhere, weight loss, urinary symptoms, or prior abortions. 
There is a positive history of dysmenorrhea and dyspareunia. 
Patient is not aware of Pap smear but was counseled. 
Aware of contraception but does not use any.

Obstetric history:
1st confinement – 1998, booked, term male via SVD, BW 3.5 kg, uneventful puerperium
2nd confinement – 2000, booked, term male/female via SVD, BW 3.7 kg, uneventful puerperium
3rd confinement – 2002, booked, term female via SVD, BW 3.0 kg, uneventful puerperium
4th confinement – 2005, booked, term male via SVD, BW 3.4 kg, uneventful puerperium; child died at 7 years from RTA
All other children alive and well

Past Medical History:
She is a known hypertensive diagnosed 1 year ago at a local hospital, defaulted treatment, irregular on antihypertensives. 
She uses Ibuprofen and other NSAIDs regularly. 
Not known diabetic, asthmatic, seizure disorder, or sickle cell disease. 
No prior hospital admissions, blood transfusions, or surgeries.

Social History:
Married in a monogamous family with 3 children. 
Spouse 60 years old, security guard, HLE: secondary. 
No smoking or alcohol use. 

Family history of twinning in brother.
No known drug or food allergy.

O/E:
Middle-aged woman, afebrile (36.1°C), mildly pale, anicteric, not cyanosed, not dehydrated, mild bilateral pitting pedal edema up to shin.

CVS:
PR 73 bpm
BP 160/102 mmHg

Chest:
RR 22 cpm
SpO₂ 98% room air
Breath sounds vesicular

ABD:
Obese, moves with respiration
Mild suprapubic tenderness
Uterus 12-week size, L0S0K0

Speculum:
Normal vulva and vagina
Cervix smeared with altered blood, os closed, no active bleeding

VE:
Cervix posterior, firm, 2 cm long, os closed, examining finger stained with altered blood

ASS:
Abnormal uterine bleeding, ?secondary to uterine fibroid

PLAN:
Pelvic USS
Urgent PCV
EUCr
Tab Nifedipine 30 mg bd
Tab Ferrous 200 mg daily
Tab Vitamin C 200 mg daily
See Gynae clinic on Wednesday
See Cardiology clinic
Review PCV result before discharge`
  },
  {
    id: 'ob-5',
    title: 'Fibroid Degeneration in Pregnancy',
    specialty: Specialty.OBGYN,
    subSpecialty: 'Gynae Emergency',
    condition: 'Fibroid Degeneration',
    symptoms: ['Lower abdominal pain', 'Retching', 'Low back ache', 'Abdominopelvic mass', 'Tenderness', 'Serum pregnancy test positive'],
    contributor: 'Admin',
    lastModified: '2025-12-28',
    summary: '36-year-old G3P0+2 at 6 weeks 3 days with lower abdominal pain and tender abdominopelvic mass. Suspected fibroid degeneration.',
    content: `GYNAE EMERGENCY 

36-year-old married Christian Yoruba female, G3P0+2, primary school teacher, resides in a Ede, Osun State.

LMP: 15/09/2025
EDD: 22/06/2026
EGA: 6 weeks 3 days
PC: Lower abdominal pain × 1 day
HPC:
She was apparently well until 1 day ago when she developed lower abdominal pain localised to the lower abdomen, more in the centre of the lower abdomen, and also felt in the right and left lower abdomen. Pain is colicky, waxing and waning, no particular aggravating or relieving factor. She also gave history of retching though not vomiting. No fever, though she gave history of chills. No headache. No urinary symptoms. She also gave history of low back ache which has been recurrent. No diarrhea. No bleeding or spotting per vaginam, no blurring of vision, no dizziness, no fainting attack. No other complaint. Patient has done a USS in the past which discovered uterine fibroids, though the scan was not presented. She presented this morning on account of worsening symptoms. Patient also did a serum pregnancy test 1 week ago which was positive. She has however not localised the pregnancy with USS nor booked the pregnancy.


She attained menarche at the age of 18 years, menstruates for 3-5 days in a regular 28 day cycle. 
No heavy menstrual bleeding, intermenstrual or postcoital bleeding. 
No dysmenorrhea or dyspareunia. 
She has history of 2 VTOPs which were surgically evacuated by dilatation and curettage. No postabortal sequelae. 
She is aware of family planning methods. 

She is not a known hypertensive, diabetic, asthmatic, or seizure disorder patient. 
She has no history of blood transfusion or surgery. 

She is married in a monogamous setting to a business man. 
She does not smoke cigarette nor take alcoholic drinks. 

She has no drug or food allergy. 

Review of system is not contributory.

O/E:
A young woman, conscious, alert, oriented in time, place and person, in moderate painful distress, not in respiratory distress, afebrile T is 36.1 C, not pale, anicteric, acyanosed, not dehydrated, no pedal edema

RS:
RR 22 cpm
SpO2 in room air is 99 %

CVS:
PR 96 bpm, full volume and regular
BP 156/108 mmHg

ABDOMEN:
Full, moves with respiration
Moderate generalised tenderness, more in suprapubic region and right and left iliac fossa
Abdominopelvic mass about 26 weeks size, relatively mobile, irregular, tender, firm, moves freely under the overlying skin
LoSoKo

VE:
Normal female external genitalia
SPECULUM revealed healthy looking closed cervix, no bleeding or spotting per vaginam
DIGITAL revealed posterior, firm, uneffaced, closed cervix, pouch of Douglas not full, no adnexal tenderness bilaterally

Assessment:
Suspected fibroid degeneration in pregnancy in an unbooked G3P0+2 at 6 weeks 3 days EGA

Plan:
Counsel patient on findings, diagnosis, and management plan
Admit to Gynae Emergency
Urgent labs: FBC (PCV), blood film for malaria parasite, urinalysis, blood group, serum pregnancy test, HBsAg, HCV, RVS, RBS
Abdominopelvic USS / Transvaginal USS
Pain management: IM Pentazocine 30 mg stat, IV Paracetamol 1 g q6h
IVF: 0.9% N/S 1 L stat, then 500 mL q4h
Close monitoring of vital signs
Review with USS results
Inform consultant on call`
  },

  // Surgery
  {
    id: 'surg-1',
    title: 'Acute Appendicitis',
    specialty: Specialty.Surgery,
    subSpecialty: 'Surgical Emergencies',
    condition: 'Appendicitis',
    symptoms: ['Abdominal pain', 'Anorexia', 'Vomiting', 'Low-grade fever', 'Right lower quadrant pain'],
    contributor: 'Admin',
    lastModified: '2025-12-28',
    summary: '22-year-old male with 2-day history of migratory RIF pain, vomiting, and anorexia. Signs of peritoneal irritation present.',
    content: `Patient seen

A 22 year old male, Christian Yoruba, residing at Oke-Igbo, Abeokuta, student.

Informant: Self

PC: Abdominal pain × 2 days

HPC:
Patient was apparently well until 2 days ago when he developed generalized abdominal pain, insidious in onset, progressively worsening, and now localised to the right lower quadrant. Pain is constant, sharp in nature, aggravated by movement, and associated with anorexia. 
He also had 2 episodes of vomiting, and low-grade fever. 
No history of diarrhea, constipation, or urinary symptoms. 
No prior similar episode. 
No history of trauma. 
No known drug allergy.

Past Medical History:
Not a known hypertensive, diabetic, asthmatic, or seizure disorder patient.
No prior hospital admissions, surgeries, or blood transfusions.

Family History:
Non-contributory

Social History:
Lives with parents, non-smoker, does not drink alcohol.

O/E:
A young male, in moderate painful distress, febrile (T: 38.2°C), not pale, anicteric, not cyanosed, mildly dehydrated.

Abdomen:
Tenderness maximal at the right iliac fossa (McBurney’s point), 
positive rebound tenderness and guarding. 
Rovsing’s sign positive. 
Bowel sounds present. 
No hepatosplenomegaly
No other palpable masses

RS:
RR 20 cpm
SpO2 98% in room air

CVS:
PR 94 bpm, full volume, regular
BP 118/72 mmHg
S1 S2 heard

CNS:
Conscious, alert, oriented, no neurological deficit

ASSESSMENT:
Acute appendicitis 

PLAN:
Counsel patient and relatives on diagnosis and need for surgical intervention
Admit to surgical emergency
FBC, PCV, Blood film for MP, Urinalysis
Serum electrolytes, urea, creatinine
Abdominal ultrasound
Nil per oral (NPO)
0.9% N/S 1 liter stat then 125 mL/hr
Ceftriaxone 1 g stat then 1 g daily, IV Metronidazole 500 mg 8 hourly
IV Paracetamol 1 g 6 hourly, IM Pentazocine 30 mg stat as needed
Prepare for emergency appendicectomy
Monitor vital signs closely
Review by the surgical team`
  }
];
