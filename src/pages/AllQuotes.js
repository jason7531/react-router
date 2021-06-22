import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "Jason", text: "Learning React" },
  { id: "q2", author: "Max", text: "Learning Angular" },
  { id: "q3", author: "Raze", text: "Learning Vue" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
