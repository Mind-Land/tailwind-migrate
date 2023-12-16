import PropTypes from "prop-types";

function Sendchat({ name, text }) {
  return (
    <>
      <div className="flex flex-col space-y-2 text-sm max-w-sm mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-color-primary-600 text-white ">
            {text}
          </span>
        </div>
      </div>
      <img
        src="/img/rafiq.jpg"
        alt={`${name} profile picutre`}
        className="w-6 h-6 rounded-full order-2 object-cover"
      />
    </>
  );
}

Sendchat.propTypes = {
  name: PropTypes.string,
  text: PropTypes.object,
};

export default Sendchat;
