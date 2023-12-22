export class ErrorMessage {
  public static readonly EMPTY_INPUT_MESSAGE =
    'Veuillez remplir tous les champs obligatoires pour continuer.';
  public static readonly EMAIL_ERROR_MESSAGE =
    'Please enter a valid email address';
  public static readonly FIRST_NAME_ERROR = 'Veuillez saisir votre prénom.';
  public static readonly LAST_NAME_ERROR =
    'Veuillez saisir votre nom de famille.';
  public static readonly EMAIL_ERROR = 'Veuillez fournir votre adresse e-mail.';
  public static readonly CONDITIONS_ERROR =
    'Veuillez accepter les conditions générales.';
  public static readonly PRIVACY_ERROR =
    'Veuillez accepter la politique de confidentialité.';
  public static readonly PASSWORD_ERROR = 'Veuillez choisir un mot de passe.';
  public static readonly CONFIRM_PASSWORD_ERROR =
    'Veuillez confirmer votre mot de passe.';
  public static readonly NEWSLETTER_ERROR =
    'Veuillez indiquer si vous souhaitez recevoir notre newsletter.';

  public static setMessage(
    setErrorMessage: React.Dispatch<string>,
    message: string
  ): void {
    setErrorMessage(message);
  }
}

export class Validation {
  public static isEmailValid(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  public static isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  }

  public static isValidPassword(password: string): boolean {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
    return passwordRegex.test(password);
  }

  public static arePasswordsMatching(
    password: string,
    confirmPassword: string
  ): boolean {
    return password === confirmPassword;
  }
}
