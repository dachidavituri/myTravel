import Description from "#/about/components/description";
import Hero from "#/about/components/hero";
import Services from "#/about/components/services";
const AboutView: React.FC = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Services />
    </div>
  );
};

export default AboutView;
