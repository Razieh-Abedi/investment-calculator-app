import { calculateInvestmentResults } from "../util/investment";

export default function Results({ formInfo }) {
  const result = calculateInvestmentResults(formInfo);
//   const { annualInvestment, interest, valueEndOfYear, year } = result;

  return (
    <p>
      results here

    </p>
  );
}
