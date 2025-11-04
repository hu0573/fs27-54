import "./App.css";
import Items from "./components/Items";

function App() {
  return (
    <div
      className="w-screen h-screen justify-items-center "
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="p-5 max-w-5xl w-full h-full">
        <div className="p-10  w-full h-full bg-white/30 rounded-4xl">
          <h1 className="text-3xl">Notes</h1>
          <Items></Items>
        </div>
      </div>
    </div>
  );
}

export default App;
