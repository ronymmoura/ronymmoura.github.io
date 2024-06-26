export function capitalizeFirstLetter(str?: string) {
  if(str)
    return str[0].toUpperCase() + str.substring(1);
  return null;
}