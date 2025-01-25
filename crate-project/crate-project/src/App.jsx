import Message from "./Pages/Message";

function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
  return (
    <>
      <div>
        <h1>Wealcome To My First Project</h1>
        <p>This is a simple react project</p>
        <Message fruits={fruits} />
      </div>
    </>
  );
}

export default App;
