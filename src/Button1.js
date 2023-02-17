import PropTypes from "prop-types";

export default function Button1({ text, name = "Usuario" }) {
  return (
    <button>
      {text} -{name}
    </button>
  );
}

Button1.propTypes = {
  text: PropTypes.string.isRequired,
};
