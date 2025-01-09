import HeroImg from "!/360_F_111288833_YIh3Br4p3lzSlFjDutcVIjJMj9EkWlKv.jpg";
const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src={HeroImg}
        alt="Scenic View"
        className="h-[500px] w-full object-cover"
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white">
        About <span className="text-orange-500">Us</span>
      </h1>
    </div>
  );
};
export default Hero;
