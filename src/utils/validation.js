const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function validateEmail(email) {
  return emailRegex.test(email);
}

export function validatePassword(
  password,
  messIfEmpty,
  messIfMinChar,
  messIfFalse
) {
  if (password.length === 0) {
    return [false, messIfEmpty];
  }

  if (password.length < 8) {
    return [false, messIfMinChar];
  }
  return [passwordRegex.test(password), messIfFalse];
}

export function validateMinChar(character, messIfEmpty, messIfFalse) {
  if (character.length === 0) {
    return [false, messIfEmpty];
  }

  return [character.length > 7, messIfFalse];
}

export function validateInputEmpty(character, messIfEmpty) {
  if (character.length === 0) {
    return [false, messIfEmpty];
  }

  return [character.length > 0, ""];
}
