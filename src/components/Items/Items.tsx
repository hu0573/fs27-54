import Item from "./components/Item";
import AddItem from "./components/AddItem";
import { useState } from "react";

function Items() {
  const [items, setItems] = useState<string[]>(["First", "Second"]);
  function addItem(content: string) {
    setItems([...items, content]);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((element, index) => (
        <Item key={index} content={element} />
      ))}
      <AddItem addItem={addItem} />
    </div>
  );
}

export default Items;
