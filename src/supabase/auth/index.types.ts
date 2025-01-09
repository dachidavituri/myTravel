/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AuthPayload {
  email: string;
  password: string;
}

export interface UpdatePasswordProps {
  currentPassword: string;
  newPassword: string;
}

export interface UpdatePasswordResponse {
  user: any;
}
