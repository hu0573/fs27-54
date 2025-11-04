// interface AddItemProps {
//   addItem: (content: string) => void;
// }

// function AddItem({ addItem }: AddItemProps) {
//   return (
//     <div className="min-w-70 h-40 bg-black/10 rounded-3xl p-5 m-5">
//       <form action=""></form>
//     </div>
//   );
// }

// export default AddItem;

import { useState } from "react";

interface AddItemProps {
  addItem: (content: string) => void;
}

function AddItem({ addItem }: AddItemProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!value.trim()) return;
    addItem(value);
    setValue("");
  }

  return (
    <div className="min-w-70 h-40 bg-black/10 rounded-3xl p-5 m-5">
      <form onSubmit={handleSubmit}>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text"
          className="w-full resize-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddItem;
