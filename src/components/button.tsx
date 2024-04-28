import { useEffect, useState } from "react";

function Button(props: {
  btnColor: string;
  label: string;
  emitClickEvent?: () => void;
}) {
  const { btnColor = "black", label = "Fechar" } = props;
  const [color, setColor] = useState("");

  useEffect(() => {
    switch (btnColor) {
      case "black": {
        setColor("bg-black hover:bg-black-500");
        break;
      }
      case "blue": {
        setColor("bg-blue-700 hover:bg-blue-500");
        break;
      }
      case "green": {
        setColor("bg-green-700 hover:bg-green-500");
        break;
      }
      case "red": {
        setColor("bg-red-700 hover:bg-red-500");
        break;
      }
      case "yellow": {
        setColor("bg-yellow-700 hover:bg-yellow-500");
        break;
      }
      case "transparent": {
        setColor("bg-transparent hover:bg-gray-100");
        break;
      }
      default:
        setColor("");
    }
  }, [btnColor]);

  return (
    <button
      onClick={props.emitClickEvent}
      className={`w-full rounded-lg p-2 font-semibold text-white ${color}`}
    >
      {label}
    </button>
  );
}

export default Button;
