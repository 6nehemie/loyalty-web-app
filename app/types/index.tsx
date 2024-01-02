export type ChoiceType = 'Monsieur' | 'Madame' | undefined;
export interface UserStepOneDataType {
  civility: ChoiceType;
  firstName: string;
  lastName: string;
  email: string;
  generalConditions: boolean;
  privacy: boolean;
}

export interface UserStepTwoData {
  password: string;
  confirmPassword: string;
  newsletter: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  price: string;
  carImage: string;
  createdAt: Date;
}

export interface INameUpdateValidation {
  firstName: string;
  lastName: string;
}

export interface IAddressUpdateValidation {
  country: string;
  address1: string;
  address2?: string;
  city: string;
  postalCode: string;
}

export interface IstepOne {
  civility: string;
  firstName: string;
  lastName: string;
  email: string;
  generalConditions: string;
  privacy: string;
}
export interface IstepTwo {
  password: string;
  confirmPassword: string;
  newsletter?: string;
}

export interface IEmailUpdateValidation {
  email: string;
  resetCode: string;
}

export interface IPasswordUpdateValidation {
  password: string;
  newPassword: string;
  passwordConfirm: string;
}

export interface IResetPasswordValidation {
  email: string;
}

export type RoleType = 'ADMIN' | 'USER';

export interface IUploadResponse {
  // include other properties as needed

  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
}
