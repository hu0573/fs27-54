import Item from "./components/Item";
import AddItem from "./components/AddItem";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface ItemData {
  id: string;
  content: string;
}

const STORAGE_KEY = "items-data";

function Items() {
  const [items, setItems] = useState<ItemData[]>(() => {
    try {
      const storedItems = localStorage.getItem(STORAGE_KEY);
      if (storedItems) {
        return JSON.parse(storedItems);
      }
    } catch (error) {
      console.error("读取本地存储失败:", error);
    }
    return [
      { id: uuidv4(), content: "First" },
      { id: uuidv4(), content: "Second" },
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("保存到本地存储失败:", error);
    }
  }, [items]);

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
