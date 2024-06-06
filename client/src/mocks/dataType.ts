export interface userType {
  email: string;
  password: string;
}

export interface shuttleType {
  name: string;
  mission: string;
}

export interface shuttlesDataType {
  id: number;
  name: string;
  mission: string;
}

export interface popupType {
  text: string;
  isActive: boolean;
  animation: string;
}
