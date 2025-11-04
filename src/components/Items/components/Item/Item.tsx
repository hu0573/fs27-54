interface ItemProps {
  id: string;
  content: string;
  onDelete: (id: string) => void;
}

function Item({ id, content = "Default content", onDelete }: ItemProps) {
  function handleDelete() {
    onDelete(id);
  }

  return (
    <div className="min-w-70 h-40 bg-black/10 rounded-3xl p-5 m-5 relative">
      <div>{content}</div>
      <button
        onClick={handleDelete}
        className="h-7 w-7 absolute bottom-3 right-5 cursor-pointer hover:opacity-70 transition-opacity"
        aria-label="Delete item"
      >
        <img src="/images/bin.svg" alt="Delete" />
      </button>
    </div>
  );
}

export default Item;
