import { EnquirySubmission, JobApplication, PressRelease, Product } from '../types';
import { PRESS_RELEASES, PRODUCTS_DATA } from './mockData';

const ENQUIRIES_STORAGE_KEY = 'vanguard_steel_enquiries';
const APPLICATIONS_STORAGE_KEY = 'vanguard_steel_applications';
const PRESS_RELEASES_STORAGE_KEY = 'vanguard_steel_press_releases';

const INITIAL_ENQUIRIES: EnquirySubmission[] = [
  {
    id: 'ENQ-2026-8812',
    fullName: 'David Sterling',
    company: 'Aecon Infrastructure UK Ltd',
    email: 'd.sterling@aecon-infra.co.uk',
    phone: '+44 20 7183 9920',
    department: 'Global Exports',
    productInterest: 'Universal Beams, Columns & Heavy Structurals',
    quantityEst: '4,500 MT',
    message: 'Requesting mill test certification and commercial quotation for S355JR and S460ML heavy columns for our Birmingham interchange transit hub project.',
    submittedAt: '2026-02-18 14:32',
    status: 'Processed'
  },
  {
    id: 'ENQ-2026-9041',
    fullName: 'Rajesh K. Verma',
    company: 'Larsen & Toubro Heavy Civil',
    email: 'rkverma@lntecc.com',
    phone: '+91 98201 44521',
    department: 'Domestic Structural Steel',
    productInterest: 'Head-Hardened & High-Speed Rails (60E1 / 1080HH)',
    quantityEst: '12,000 MT',
    message: 'Seeking rolling schedule delivery timeline for 260m long 60E1 1080HH rails for Package C-4 of the Western Dedicated Freight Corridor.',
    submittedAt: '2026-02-22 09:15',
    status: 'Under Review'
  },
  {
    id: 'ENQ-2026-9128',
    fullName: 'Marcus Vance',
    company: 'Apex Marine Engineering Corp',
    email: 'm.vance@apexmarine.com',
    phone: '+1 (713) 554-9102',
    department: 'Plate & Coil Solutions',
    productInterest: 'Wide Heavy Plates & High-Strength Hot Rolled Coils',
    quantityEst: '2,800 MT',
    message: 'Enquiry for SA 516 Gr 70 normalized pressure vessel quality plates with HIC sour gas resistance testing requirements.',
    submittedAt: '2026-03-01 16:45',
    status: 'New'
  }
];

const INITIAL_APPLICATIONS: JobApplication[] = [
  {
    id: 'APP-2026-019',
    jobId: 'lead-metallurgy-engineer',
    jobTitle: 'Lead Metallurgist – High-Strength Alloy Development',
    fullName: 'Siddharth Mukherjee',
    email: 'siddharth.mukh@gmail.com',
    phone: '+91 98450 12389',
    experienceYears: '9 years',
    currentCompany: 'ArcelorMittal Nippon Steel',
    resumeFileName: 'Siddharth_Mukherjee_Lead_Metallurgist_CV.pdf',
    submittedAt: '2026-02-24 11:10',
    status: 'Interview Scheduled'
  },
  {
    id: 'APP-2026-024',
    jobId: 'rolling-mill-operations-manager',
    jobTitle: 'Operations Manager – Universal Rail & Section Mill',
    fullName: 'Girish Chandra Nayak',
    email: 'gcnayak.eng@rediffmail.com',
    phone: '+91 97760 99421',
    experienceYears: '12 years',
    currentCompany: 'JSW Steel Vijayanagar',
    resumeFileName: 'Girish_Nayak_Rail_Mill_Operations.pdf',
    submittedAt: '2026-02-28 17:20',
    status: 'Screening'
  }
];

export function getStoredEnquiries(): EnquirySubmission[] {
  try {
    const raw = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(INITIAL_ENQUIRIES));
      return INITIAL_ENQUIRIES;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_ENQUIRIES;
  }
}

export function saveEnquiry(enquiry: Omit<EnquirySubmission, 'id' | 'submittedAt' | 'status'>): EnquirySubmission {
  const all = getStoredEnquiries();
  const idNumber = Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newRecord: EnquirySubmission = {
    ...enquiry,
    id: `ENQ-2026-${idNumber}`,
    submittedAt: dateStr,
    status: 'New'
  };

  const updated = [newRecord, ...all];
  localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(updated));
  return newRecord;
}

export function updateEnquiryStatus(id: string, status: 'New' | 'Under Review' | 'Processed'): void {
  const all = getStoredEnquiries();
  const updated = all.map(item => item.id === id ? { ...item, status } : item);
  localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(updated));
}

export function getStoredApplications(): JobApplication[] {
  try {
    const raw = localStorage.getItem(APPLICATIONS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(INITIAL_APPLICATIONS));
      return INITIAL_APPLICATIONS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_APPLICATIONS;
  }
}

export function saveJobApplication(app: Omit<JobApplication, 'id' | 'submittedAt' | 'status'>): JobApplication {
  const all = getStoredApplications();
  const idNumber = String(all.length + 1).padStart(3, '0');
  const now = new Date();
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const newRecord: JobApplication = {
    ...app,
    id: `APP-2026-${idNumber}`,
    submittedAt: dateStr,
    status: 'Received'
  };

  const updated = [newRecord, ...all];
  localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(updated));
  return newRecord;
}

export function updateApplicationStatus(id: string, status: 'Received' | 'Screening' | 'Interview Scheduled'): void {
  const all = getStoredApplications();
  const updated = all.map(item => item.id === id ? { ...item, status } : item);
  localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(updated));
}

export function getStoredPressReleases(): PressRelease[] {
  try {
    const raw = localStorage.getItem(PRESS_RELEASES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PRESS_RELEASES_STORAGE_KEY, JSON.stringify(PRESS_RELEASES));
      return PRESS_RELEASES;
    }
    return JSON.parse(raw);
  } catch (e) {
    return PRESS_RELEASES;
  }
}

export function addPressRelease(pr: Omit<PressRelease, 'id'>): PressRelease {
  const all = getStoredPressReleases();
  const newPr: PressRelease = {
    ...pr,
    id: `pr-${Date.now()}`
  };
  const updated = [newPr, ...all];
  localStorage.setItem(PRESS_RELEASES_STORAGE_KEY, JSON.stringify(updated));
  return newPr;
}
