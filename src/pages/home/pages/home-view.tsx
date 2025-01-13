import AgencyDescription from "../components/agecy-description";
import Videos from "../components/videos";
const HomeView: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-5 p-6 md:flex-row md:items-start md:p-12">
      <AgencyDescription />
      <Videos />
    </section>
  );
};

export default HomeView;
