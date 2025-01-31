import { LuCctv } from "react-icons/lu";
import { MdOutlineRemoveRedEye, MdLockOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { FiSmartphone } from "react-icons/fi";

import PropTypes from "prop-types";

const Card = ({ nombreIcono, titleCard, text }) => {
  const iconos = {
    camera: <LuCctv size="30" color="2563eb" />,
    eye: <MdOutlineRemoveRedEye size="30" color="2563eb" />,
    notification: <IoMdNotificationsOutline size="30" color="2563eb" />,
    lock: <MdLockOutline size="30" color="2563eb" />,
    check: <GoShieldCheck size="30" color="2563eb" />,
    smart: <FiSmartphone size="30" color="2563eb" />,
  };

  return (
    <div className="flex flex-col items-center">
      <span className="flex justify-center items-center rounded-full bg-blue-100 h-[50px] w-[50px]">
        {iconos[nombreIcono]}
      </span>
      <h3 className="text-bold text-xl my-4 text-center">{titleCard}</h3>
      <p className="text-md text-center">{text}</p>
    </div>
  );
};

Card.propTypes = {
  nombreIcono: PropTypes.string.isRequired,
  titleCard: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
