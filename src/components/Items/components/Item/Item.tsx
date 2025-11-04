interface ItemProps {
  content: string;
}

function Item({ content = "Default content" }: ItemProps) {
  return (
    <div className="min-w-70 h-40 bg-black/10 rounded-3xl p-5 m-5 relative">
      <div>{content}</div>
      <div className="h-7 w-7 absolute bottom-3 right-5">
        <img src="/images/bin.svg" alt="" />
      </div>
    </div>
  );
}

export default Item;
