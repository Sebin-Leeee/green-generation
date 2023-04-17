import ResultsAlmost from "./ResultsAlmost";
import Resultsimprove from "./ResultsImprove";
import ResultsPerfect from "./ResultsPerfect";

export default function Results({ resultScore }) {
  if (resultScore == 9) {
    return <ResultsPerfect/>;
  } else if (resultScore >= 6) {
    return <ResultsAlmost/>;
  } else if (resultScore >= 3) {
    return <Resultsimprove/>;
  } else {
    return <ResultsWorst/>;
  }
}