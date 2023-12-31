export function generatePassword() {
  const length = 10; // Choose the length of the password
  const charset =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$!%*?&.';
  let password = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset[Math.floor(Math.random() * n)];
  }

  // Check if the generated password matches the regex
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
  if (regex.test(password)) {
    return password;
  } else {
    // If the password doesn't match the regex, generate a new one
    return generatePassword();
  }
}
