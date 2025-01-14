import heroImg from "!/360_F_334777839_Y7Y5P8FFY5WFo7sTwjeT0vxDbTGxhIo5.jpg";
const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img src={heroImg} alt="Hero" className="h-[400px] w-full object-cover" />
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl font-bold text-white md:text-5xl">
        <span className="text-orange-500">All</span> Tours
      </h1>
    </div>
  );
};
export default Hero;
