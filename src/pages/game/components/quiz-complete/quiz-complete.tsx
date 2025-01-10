const QuizCompleted: React.FC = () => {
  return (
    <div className="min-h-screen p-3">
      <div className="m-2 mx-auto mt-10 flex min-h-96 max-w-4xl flex-col items-center justify-center rounded-lg bg-orange-500 px-8 py-12 text-white shadow-2xl">
        <div className="animate-fadeIn text-center">
          <h1 className="mb-6 text-4xl font-semibold">
            Quiz Already Completed!
          </h1>
          <div className="rounded-lg bg-white px-4 py-2 text-orange-500">
            <p className="text-lg font-medium">Well done!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCompleted;
