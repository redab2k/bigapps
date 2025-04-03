export type User = {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
};

type Address = {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
};

type Geolocation = {
  lat: string;
  long: string;
};

type Name = {
  firstname: string;
  lastname: string;
};
