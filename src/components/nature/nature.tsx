import NatureImg from "!/rear-view-man-walking-road-sunset-beautiful-background-nature-large-tree-mountains-healthy-active-lifestyle-travel-sports-concepts_248459-25624.jpg";
const Nature: React.FC = () => {
  return (
    <div className="hidden md:flex md:w-1/2">
      <img
        src={NatureImg}
        alt="Nature View"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
export default Nature;
