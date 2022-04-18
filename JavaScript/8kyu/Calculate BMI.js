function bmi(w, h) {
  const b = w/Math.pow(h, 2)
  return b<=18.5 ? `Underweight` : b<=25 ? `Normal` : b<=30 ? `Overweight` : b>30 ? `Obese` : null;
}
