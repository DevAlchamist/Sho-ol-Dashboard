export interface LoginData {
  email?: String;
  password?: String;
  confirmPassword?: String;
  username?: String;
}

export interface RegisterData extends LoginData {
  email?: String;
  password?: String;
}
