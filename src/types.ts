
export interface Founder {
  name: string;
  designation: string;
  bio: string;
  image: string;
}

export interface Establishment {
  name: string;
  year: string;
  location: string;
}

export interface Project {
  title: string;
  units: string;
  description: string;
  status: 'Completed' | 'Ongoing';
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
