import Form from "#/tours/components/form";
import Hero from "#/tours/components/hero";
import Tours from "#/tours/components/tours";

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
