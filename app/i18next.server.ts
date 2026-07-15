const translations: Record<string, string> = {
  'common.tokenError': 'Verification token was not provided!',
  tokenError: 'Verification token was not provided!',
  'common.unknowError': 'An unknown error occurred',
  'address.idError': "Parameter 'id' is missing",
  'address.deleteModal.title': 'Remove Address',
  'address.deleteModal.confirmation': 'Do you want to remove this address?',
  'account.signUp': 'Sign Up',
  'account.signIn': 'Sign In',
  'account.verifyMessage':
    'Your account has been verified successfully. Redirecting in 5s...',
  'account.verifyEmailMessage':
    'Your new E-Mail address has been verified successfully. Redirecting in 5s...',
  'vendure.registrationError':
    'Registration cant be used with Vendure demo shop! Please connect your own instance.',
};

function getTranslation(key: string): string {
  return translations[key] || key;
}

export async function getFixedT(request: Request) {
  return getTranslation;
}
