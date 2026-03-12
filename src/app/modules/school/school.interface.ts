interface IAddress {
  
  union: string;
  upazila: string;
  district: string;
  division: string
  
}

export interface ISchool extends Document {
  schoolName: string;
  schoolCode: string;
  password: string;
  concernMobileNumber: string;
  concernName: string;
  totalTeacher: number;
  totalStudent: number;
  address: IAddress;
  showDetails: string;
}

interface ISchoolLogin {
  schoolCode: string;
  password: string;
}
export { ISchoolLogin };
