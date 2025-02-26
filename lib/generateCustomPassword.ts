interface generateCustomPasswordProps {
  length: number;
  mayus: boolean;
  minus: boolean;
  numbers: boolean;
  specialCharacters: boolean;
}

export const generateCustomPassword = ({
  length,
  mayus,
  minus,
  numbers,
  specialCharacters,
}: generateCustomPasswordProps) => {
  const mayusCharsets = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  const minusCharsets = "abcdefghijklmnopqrstuvwxz";
  const numbersCharsets = "0123456789";
  const specialCharsets = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let charset = "";
  if (mayus) charset += mayusCharsets;
  if (minus) charset += minusCharsets;
  if (numbers) charset += numbersCharsets;
  if (specialCharacters) charset += specialCharsets;

  let password = "";

  if (mayus)
    password += mayusCharsets.charAt(
      Math.floor(Math.random() * mayusCharsets.length),
    );

  if (minus)
    password += minusCharsets.charAt(
      Math.floor(Math.random() * minusCharsets.length),
    );

  if (numbers)
    password += numbersCharsets.charAt(
      Math.floor(Math.random() * numbersCharsets.length),
    );

  if (specialCharacters)
    password += specialCharsets.charAt(
      Math.floor(Math.random() * specialCharsets.length),
    );

  for (let i = password.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
};
