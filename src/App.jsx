// import the styling for the app from app.css file
import "./App.css";
//import the personcard component to display people's info
import PersonCard from "./components/PersonCard";
// import the button component to create clickable buttons
import Button from "./components/Button";
// import the quotecard component to show quotes
import QuoteCard from "./components/QuoteCard";
// this function runs when a button is clicked
function handleClick() {
  console.log("Button clicked!"); // logs a message in the console
}
// this is the main app component where everything gets shoowed  to the screen
function App() {
  return (
    <>
      {/* this is the main heading */}
      <h1>My People</h1>
      {/* showing three different people with their info */}
      <PersonCard name="Alice Wonderland" age={25} occupation="Explorer" />
      <PersonCard name="Bob Builder" age={33} occupation="Engineer" />
      <PersonCard name="Rachel P." age={28} occupation="Software Developer" />
      {/* two buttons that run handleclick when clicked */}
      <Button text="Click Me" onClick={handleClick} />
      <Button text="Second Button" onClick={handleClick} />
      {/* two quote cards showing different quotes and who said them */}
      <QuoteCard quote="Stay hungry, stay foolish." author="Steve Jobs" />
      <QuoteCard
        quote="Code is like humor. When you have to explain it, it’s bad."
        author="Cory House"
      />
    </>
  );
}
// exporting the app so react can use it and show it on the screen
export default App;
