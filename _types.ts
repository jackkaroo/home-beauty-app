export interface Master {
  id: number,
  firstName: string,
  lastName: string,
  address: string,
  rate: string,
  reviews: number,
  price: string,
  category: string,
}

export interface Category {
  name: string,
  desc: string,
}
