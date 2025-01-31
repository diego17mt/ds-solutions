import PropTypes from "prop-types";

const CardTestimonial = ({ text, titleCard }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <blockquote className="flex flex-col gap-4">
        <p>{text}</p>
        <cite className="font-bold not-italic">{titleCard}</cite>
      </blockquote>
    </div>
  );
};

CardTestimonial.propTypes = {
  text: PropTypes.string.isRequired,
  titleCard: PropTypes.string.isRequired,
};

export default CardTestimonial;
