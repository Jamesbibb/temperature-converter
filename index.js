function convertToCelsium(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
function describeTemperature(fahrenheit) {
  const celsius = convertToCelsium(fahrenheit);
  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}
const fahrenheitInput = prompt("Enter a temperature in Fahrenheit:");
const celsius = convertToCelsium(fahrenheitInput);
const description = describeTemperature(fahrenheitInput);
alert(
  `The temperature in Celsius is ${celsius}°C, which feels ${description}.`
);
