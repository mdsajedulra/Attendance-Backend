export interface IAddress {
  village: string;
  union: string;
  upozila: string;
  district: string;
}
export interface ISpot {
  _id: string;
  spotName: string;
  spotCode: string;
  password?: string;
  concernMobileNumber?: string;
  totalEmployees?: number;
  address: IAddress;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
export interface IAttendanceItem {
  _id: string;
  spotId: ISpot;     // populated spot object
  child?: number;    // when type = child
  male?: number;     // when type = male
  female?: number;   // when type = female
  createdAt: string;
  updatedAt: string;
  __v?: number;
  type: "female" | "male" | "child";
  count: number;     // total count
  recordId: string;  // attendance record _id
}
 export interface IGroupedAttendance {
  date: string;  // e.g. "2025-11-24"
  spotId: string;
  spotName: string;
  spotCode: string;
  concernMobileNumber?: string;

  address: IAddress;

  female: number;
  male: number;
  child: number;

  spotDetails: ISpot;

  attendanceIds: string[];
}
