const check = (input) => {
  const checkDigit = input % 10 // Last digit in string
  const payload = Array.from(String(Math.floor(input / 10)), Number);

  // Multiple last digit and every second digit to the left by 2
  const byTwo = (input, start) => {
    input[start] *= 2;
    start -= 2;
    return start >= 0 && byTwo(input, start);  
  }

  byTwo(payload, payload.length -1)

  // add double digit numbers together, example: 18 -> 1 + 8 = 9
  payload.forEach((x, i) => {
    if (x >= 10) {
      let split = [...(x.toString())];
      let a = +split[0], b = +split[1];
      payload[i] = a + b
    }
  })

  // convert payload to paySum (10 - payload sum % 10)
  const paySum = 10 - payload.reduce((a, b) => a + b) % 10;
  
  // paySum should === checkDigit if valid number
  return paySum === checkDigit
};

module.exports = {check};