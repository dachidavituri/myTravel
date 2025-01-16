interface CardItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: React.FC<CardItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex h-full cursor-pointer flex-col items-center rounded-lg border-2 border-orange-200 p-6 text-center shadow-sm transition-shadow hover:shadow-lg">
      <div className="mb-4 rounded-full">{icon}</div>
      <h4 className="text-xl font-medium text-gray-800 dark:text-white">
        {title}
      </h4>
      <p className="mt-2 text-gray-600 dark:text-white">{description}</p>
    </div>
  );
};
export default Card;
