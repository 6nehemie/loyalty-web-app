export enum ErrorMessages {
  CIVILITY_ERROR = 'Veuillez sélectionner votre civilité.',

  EMPTY_INPUT_MESSAGE = 'Veuillez remplir tous les champs obligatoires pour continuer.',

  //? First & Last Name
  FIRST_NAME_ERROR = 'Veuillez saisir votre prénom.',
  LAST_NAME_ERROR = 'Veuillez saisir votre nom de famille.',

  //? Privacy & Conditions
  CONDITIONS_ERROR = 'Veuillez accepter les conditions générales.',
  PRIVACY_ERROR = 'Veuillez accepter la politique de confidentialité.',

  // ? Email
  EMAIL_ERROR_MESSAGE = 'Please enter a valid email address',
  EMAIL_ERROR = 'Veuillez fournir votre adresse e-mail.',
  USER_ALREADY_EXIST_ERROR = 'Cet utilisateur existe déjà.',

  //? Reset Code
  VERIFICATION_CODE_EMPTY_ERROR = 'Veuillez saisir le code de vérification.',
  VERIFICATION_CODE_INVALID_ERROR = 'Le code de vérification saisi est incorrect.',

  NEWSLETTER_ERROR = 'Veuillez indiquer si vous souhaitez recevoir notre newsletter.',

  //? Password
  PASSWORD_ERROR = 'Veuillez choisir un mot de passe.',
  CONFIRM_PASSWORD_ERROR = 'Veuillez confirmer votre mot de passe.',
  PASSWORDS_NOT_MATCH_ERROR = 'Les mots de passe ne correspondent pas.',
  PASSWORD_CRITERIA_ERROR = 'Le mot de passe doit contenir au moins 8 caractères, inclure au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial parmi @$!%*?&.',
  NEW_PASSWORD_EMPTY_ERROR = 'Veuillez saisir votre nouveau mot de passe.',
  CONFIRM_PASSWORD_EMPTY_ERROR = 'Veuillez confirmer votre nouveau mot de passe.',
  PASSWORD_MISMATCH_ERROR = 'Le mot de passe saisis ne correspond pas.',
  SAME_PASSWORD_ERROR = "Le nouveau mot de passe doit être différent de l'ancien.",

  //? Address Error
  COUNTRY_EMPTY_ERROR = 'Veuillez sélectionner votre pays.',
  ADDRESS_LINE1_EMPTY_ERROR = 'Veuillez saisir votre adresse ligne 1.',
  CITY_EMPTY_ERROR = 'Veuillez saisir le nom de votre ville.',
  POSTAL_CODE_EMPTY_ERROR = 'Veuillez saisir votre code postal.',

  //? Phone Number
  PHONE_NUMBER_EMPTY_ERROR = 'Veuillez saisir votre numéro de téléphone.',

  //? Product
  //? Vehicle
  VEHICLE_TITLE_ERROR = 'Veuillez saisir le titre du véhicule.',
  VEHICLE_BRAND_ERROR = 'Veuillez saisir la marque du véhicule.',
  VEHICLE_MODEL_ERROR = 'Veuillez saisir le modèle du véhicule.',
  VEHICLE_SHORT_DESCRIPTION_ERROR = 'Veuillez saisir une brève description du véhicule.',
  VEHICLE_DESCRIPTION_ERROR = 'Veuillez saisir une description détaillée du véhicule.',
  VEHICLE_EMBED_DATA_ERROR = "Veuillez saisir les données d'intégration YouTube du véhicule.",
  VEHICLE_CAR_IMAGE_ERROR = 'Veuillez sélectionner une image du véhicule.',
  VEHICLE_WALLPAPER_ERROR = "Veuillez sélectionner un fond d'écran du véhicule.",
  VEHICLE_PRICE_PER_DAY_ERROR = 'Veuillez saisir un prix par jour valide pour le véhicule.',
  VEHICLE_CAUTION_ERROR = 'Veuillez saisir un montant de caution valide pour le véhicule.',
  VEHICLE_DRIVER_MINIMUM_AGE_ERROR = 'Veuillez saisir un âge minimum du conducteur valide pour le véhicule.',
}
