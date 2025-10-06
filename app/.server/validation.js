export function validateText(text) {
  if (text.length < 2) {
    return "invalid input";
  }
}

export function validateEmail(email) {
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid.";
  }
}

export function validateMessage(message) {
  if (!message) errors.message = "Message cannot be empty.";
}

export function validatePassword(password) {
  if (password.length < 6) {
    return "password must be atleast 10 char";
  }
}

export function validatePhone(phone) {
  if (!phone) {
    return "Phone number is required.";
  }

  // Kenyan format: 07XXXXXXXX or +2547XXXXXXXX
  const kenyanRegex = /^(\+254|0)(7\d{8})$/;

  // Generic international format: +XXXXXXXX (10–15 digits)
  const intlRegex = /^\+?[0-9]{10,15}$/;

  if (!kenyanRegex.test(phone) && !intlRegex.test(phone)) {
    return "Enter a valid phone number (e.g., 0712345678 or +254712345678).";
  }
}
