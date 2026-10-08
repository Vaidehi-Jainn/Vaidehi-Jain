export type Experience = {
  company: string;
  employmentType?: string;
  totalDuration?: string;
  location?: string;
  roles: ExperienceRole[];
};

export type ExperienceRole = {
  title: string;
  period: string;
  duration: string;
  responsibilities: string[];
  skills: string[];
};
