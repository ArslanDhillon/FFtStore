export default function Header() {
    return (
      <div className="px-4 lg:px-12 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">LLt Store</div>
        <div className="flex gap-4 items-center">
          <button>🔍</button>
          <button>👤</button>
          <button>🛒</button>
        </div>
      </div>
    );
  }
  