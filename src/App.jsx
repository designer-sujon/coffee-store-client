import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <>
      <div className="m-20">
        <h1 className="text-6xl text-center text-purple-700 mb-6">
          Coffee Store: {coffees.length}
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          {coffees.map((coffee, index) => (
            <CoffeeCard key={index} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
