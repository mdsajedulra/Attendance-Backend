interface IAddress {
  village: string;
  union: string;
  upozila: string;
  district: string;
  googleLocation: string; // could be "lat,long" or URL
}

export interface ISpot extends Document {
  spotName: string;
  spotCode: string;
  password: string;
  concernMobileNumber: string;
  totalEmployees: number;
  address: IAddress;
}

interface ISpotLogin {
  spotCode: string;
  password: string;
}
export { ISpotLogin };
