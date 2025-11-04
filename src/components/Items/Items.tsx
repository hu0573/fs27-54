import Item from "./components/Item";
import AddItem from "./components/AddItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ItemData {
  id: string;
  content: string;
}

function Items() {
  const [items, setItems] = useState<ItemData[]>([
    { id: uuidv4(), content: "First" },
    { id: uuidv4(), content: "Second" },
  ]);
  function addItem(content: string) {
    setItems([...items, { id: uuidv4(), content }]);
  }
  function deleteItem(id: string) {
    setItems(items.filter((item) => item.id !== id));
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Item key={item.id} id={item.id} content={item.content} onDelete={deleteItem} />
      ))}
      <AddItem addItem={addItem} />
    </div>
  );
}

export default Items;
