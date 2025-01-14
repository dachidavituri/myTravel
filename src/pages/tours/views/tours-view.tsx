import Form from "../components/form";
import Hero from "../components/hero";

import Tours from "../components/tours";

const ToursView: React.FC = () => {
  return (
    <div>
      <Hero />
      <Form />
      <Tours />
    </div>
  );
};

export default ToursView;
