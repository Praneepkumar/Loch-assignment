import "./Testimonials.css";
import "../App.css";
import Slider from "./Slider/Slider";

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className='testimonials-heading'>
        <h4>Testimonials</h4>
      </div>
      <div className='testimonials-content'>
        <div className='logo'>
          <img src='assets/logo.svg' alt='logo' className='img-responsive' />
        </div>

        <Slider />
      </div>
    </section>
  );
};

export default Testimonials;
