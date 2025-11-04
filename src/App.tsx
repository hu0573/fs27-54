import "./App.css";
import Items from "./components/Items";

function App() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex justify-center w-full h-full">
        <div className="relative z-10 p-5 max-w-5xl w-full min-h-screen">
          <div className="p-10 w-full h-full bg-white/30 rounded-4xl">
            <h1 className="text-3xl">Notes</h1>
            <Items></Items>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
