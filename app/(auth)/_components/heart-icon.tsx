import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const HeartIcon = () => {
  return (
    <div className="w-11 h-11 bg-rose-500 rounded-xl flex items-center justify-center mb-1">
      <FontAwesomeIcon icon={faHeart} className="w-5 h-5 text-white" />
    </div>
  );
};

export default HeartIcon;
