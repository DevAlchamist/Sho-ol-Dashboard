export interface LoginData {
  email?: String;
  password?: String;
  confirmPassword?: String;
  username?: String;
  role?: string;
}

export interface RegisterData extends LoginData {
  email?: String;
  password?: String;
}

export interface userTokenProps {
  token: any;
}
