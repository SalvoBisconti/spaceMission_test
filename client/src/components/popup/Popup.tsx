import { popupType } from "@/mocks/dataType";
import "animate.css";

const Popup = (prop: { popupSettings: popupType }) => {
  const { popupSettings } = prop;

  return (
    <div
      className={`w-fit  rounded border px-4 py-2 bg-text text-primary font-bold fixed transition-all 
     animate__animated 
     ${popupSettings.animation}
      ${popupSettings.isActive ? "block" : "hidden"}`}
    >
      <h3>{popupSettings.text}</h3>
    </div>
  );
};

export default Popup;
