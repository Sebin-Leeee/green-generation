
export default function Results({ resultScore }) {
  if (resultScore == 9) {
    return "Result Perfect";
  } else if (resultScore >= 6) {
    return "Result Very Good";
  } else if (resultScore >= 3) {
    return "Result Almost";
  } else {
    return "Result Improve";
  }
