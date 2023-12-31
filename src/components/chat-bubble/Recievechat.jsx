import PropTypes from "prop-types";
import logo from "/img/brandlogo.png"
function Recievechat({ name, text }) {
  return (
    <>
      <div className="flex flex-col space-y-2 text-sm max-w-sm mx-2 order-2 items-start">
        <div>
          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
            {text}
          </span>
        </div>
      </div>
      <img
        src={logo}
        alt={`${name} profile picutre`}
        className="w-6 h-6 rounded-full order-1 object-cover"
      />
    </>
  );
}

Recievechat.propTypes = {
  name: PropTypes.string,
  text: PropTypes.object
};


export default Recievechat;
