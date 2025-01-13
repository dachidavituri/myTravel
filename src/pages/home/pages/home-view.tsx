import AgencyDescription from "../components/agecy-description";
import Gallery from "#/home/components/gallery";
import Videos from "#/home/components/videos";
const HomeView: React.FC = () => {
  return (
    <div className="p-6 md:p-12">
      <section className="flex flex-col items-center justify-between gap-5 md:flex-row md:items-start">
        <AgencyDescription />
        <Videos />
      </section>
      <Gallery />
    </div>
  );
};

export default HomeView;
