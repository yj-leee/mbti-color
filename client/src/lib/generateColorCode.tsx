function generateRandomHex(): string {
  const num: number = Math.floor(Math.random() * 256);
  const hex: string = num.toString(16).padStart(2, "0").toUpperCase();
  return hex;
}

export default function generateColorCode(): string {
  const colorCode = `#${generateRandomHex()}${generateRandomHex()}${generateRandomHex()}`;
  return colorCode;
}
