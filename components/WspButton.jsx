import { IoLogoWhatsapp } from "react-icons/io5";

const WspButton = () => {
  return (
    <button onClick={() => window.open("https://wa.me/573135309486", "_blank")} className="fixed bottom-5 right-5 bg-[#25D366] p-4 rounded-full cursor-pointer hover:bg-[#128C7E] transition-all duration-200">
      <IoLogoWhatsapp color="white" size="30" />
    </button>
  );
};

export default WspButton;
