
export enum Specialty {
  Pediatrics = 'Pediatrics',
  InternalMedicine = 'Internal Medicine',
  OBGYN = 'Obstetrics and Gynecology',
  Surgery = 'Surgery',
  All = 'All Specialties'
}

export interface Template {
  id: string;
  title: string;
  content: string;
  specialty: Specialty;
  subSpecialty: string;
  condition: string;
  symptoms: string[];
  contributor: string;
  lastModified: string;
  summary: string;
}

export interface SearchFilters {
  query: string;
  specialty: Specialty;
}
