import "./App.css";
import PersonCard from "./components/PersonCard";
import Button from "./components/Button";
import QuoteCard from "./components/QuoteCard";

function handleClick() {
  console.log("Button clicked!");
}

function App() {
  return (
    <>
      <h1>My People</h1>

      <PersonCard name="Alice Wonderland" age={25} occupation="Explorer" />
      <PersonCard name="Bob Builder" age={33} occupation="Engineer" />
      <PersonCard name="Rachel P." age={28} occupation="Software Developer" />

      <Button text="Click Me" onClick={handleClick} />
      <Button text="Second Button" onClick={handleClick} />

      <QuoteCard quote="Stay hungry, stay foolish." author="Steve Jobs" />
      <QuoteCard
        quote="Code is like humor. When you have to explain it, it’s bad."
        author="Cory House"
      />
    </>
  );
}

export default App;
