export interface IAttendance {
  schoolId: string;
  banana: number;
  banruti: number;
  egg: number;
  notes?: string;
  timestamp?: Date;
}
export interface IBananaAttendance {
  schoolId: string;
  banana: number;
  timestamp?: Date;
}
export interface IBanrutiAttendance {
  schoolId: string;
  banruti: number;
  timestamp?: Date;
}
export interface IEggAttendance {
  schoolId: string;
  egg: number;
  timestamp?: Date;
}
export interface IComment {
  schoolId: string;
  comment: string;
  timestamp?: Date;
}
