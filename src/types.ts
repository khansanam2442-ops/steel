export interface Product {
  id: string;
  name: string;
  category: 'Structural Steel' | 'Rail & Track' | 'Plates & Coils' | 'Rebars & TMT' | 'Wire Rods' | 'Special Alloys';
  subtitle: string;
  description: string;
  standards: string[];
  grades: string[];
  dimensions: string;
  applications: string[];
  keyFeatures: string[];
  brochureUrl: string;
  specTable: {
    property: string;
    value: string;
  }[];
}

export interface LandmarkProject {
  id: string;
  title: string;
  category: 'Rail Transit' | 'Bridges & Highways' | 'Energy & Power' | 'Skyscrapers' | 'Defense & Aerospace';
  location: string;
  steelSupplied: string;
  year: string;
  highlight: string;
  description: string;
  gradesUsed: string[];
}

export interface PlantFacility {
  id: string;
  name: string;
  location: string;
  type: string;
  capacity: string;
  keyUnits: string[];
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Metallurgy & R&D' | 'Operations & Maintenance' | 'Safety & Environment' | 'Supply Chain' | 'Corporate & Finance';
  location: string;
  experience: string;
  type: 'Full-time' | 'Contract' | 'Leadership';
  description: string;
  requirements: string[];
  postedDate: string;
}

export interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: 'Corporate' | 'Financial' | 'Expansion' | 'Sustainability';
  summary: string;
  fullText: string;
  readTime: string;
}

export interface InvestorReport {
  id: string;
  title: string;
  fiscalPeriod: string;
  type: 'Annual Report' | 'Quarterly Results' | 'Earnings Presentation' | 'ESG Disclosure';
  fileSize: string;
  publishDate: string;
}

export interface EnquirySubmission {
  id: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  department: string;
  productInterest?: string;
  quantityEst?: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'Under Review' | 'Processed';
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experienceYears: string;
  currentCompany: string;
  resumeFileName: string;
  submittedAt: string;
  status: 'Received' | 'Screening' | 'Interview Scheduled';
}
