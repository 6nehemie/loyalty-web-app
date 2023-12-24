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
}
