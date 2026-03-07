interface IAddress {
  village: string;
  union: string;
  upozila: string;
  district: string;
  googleLocation: string; // could be "lat,long" or URL
}

export interface ISchool extends Document {
  schoolName: string;
  schoolCode: string;
  password: string;
  concernMobileNumber: string;
  totalEmployees: number;
  address: IAddress;
}

interface ISchoolLogin {
  schoolCode: string;
  password: string;
}
export { ISchoolLogin };
