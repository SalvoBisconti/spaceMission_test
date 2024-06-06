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

export interface ISSPosition {
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  footprint: number;
  timestamp: number;
  daynum: number;
  solar_lat: number;
  solar_lon: number;
  units: string;
}
