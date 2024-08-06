import { sent } from "./Toast";

const ToastButton: React.FC = () => {
  const handleClick = () => {
    sent("Toast message");
  };

  return (
    <div>
      <button className="bg-black text-white p-4 m-10" onClick={handleClick}>
        Show Toast
      </button>
    </div>
  );
};

export default ToastButton;
