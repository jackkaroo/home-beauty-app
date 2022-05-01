export interface Master {
  id: number,
  firstName: string,
  lastName: string,
  image: any;
  address: string,
  rate: string,
  reviews: number,
  price: string,
  category: string,
  services: any,
  phone?: string,
  nickname?: string,
}

export interface USER {
  id: string,
  name: string,
  surname: string,
  phone: string,
  email: string,
  role: string,
}

export interface Category {
  id: string,
  name: string,
  desc: string,
}

export interface Service {
  service: string,
  price: string,
  duration: string,
}
