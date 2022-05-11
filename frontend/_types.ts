import { DayPeriod } from 'data/slots';

export interface Master {
  id: number;
  name: string;
  surname: string;
  avatar: any;
  address?: string;
  rate?: string;
  reviews?: number;
  price?: number;
  category?: {
    id: number;
    name: string;
    description: string;
  };
  services?: any;
  workingDays?: any;
  phone?: string;
  nickname?: string;
}

export interface USER {
  id: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  role: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Service {
  name: string;
  price: string;
  duration: string;
}

export interface ISlot {
  id: number;
  date?: string;
  slotStartTime: string;
  slotEndTime: string;
  clientId?: number;
}
