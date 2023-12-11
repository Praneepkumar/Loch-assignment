import { motion } from "framer-motion";
import "./TestimonialCard.css";
const TestimonialCard = ({ name, designation, testimonial }) => {
  return (
    <motion.div className='testimonial-card'>
      <div className='testimonial-heading'>
        <h2>{name}</h2>
        <em>{designation}</em>
      </div>
      <blockquote> &ldquo;{testimonial}&rdquo;</blockquote>
    </motion.div>
  );
};
export default TestimonialCard;
