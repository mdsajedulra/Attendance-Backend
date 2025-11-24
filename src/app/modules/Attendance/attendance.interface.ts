export interface IAttendance {
  spotId: string;
  female: number;
  male: number;
  child: number;
  notes?: string;
  timestamp?: Date;
}
export interface IFemaleAttendance {
  spotId: string;
  female: number;
  timestamp?: Date;
}
export interface IMaleAttendance {
  spotId: string;
  male: number;
  timestamp?: Date;
}
export interface IChildAttendance {
  spotId: string;
  child: number;
  timestamp?: Date;
}
export interface IComment {
  spotId: string;
  comment: string;
  timestamp?: Date;
}
