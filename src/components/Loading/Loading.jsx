const Loading = ({ text }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        style={{ borderTopColor: 'transparent' }}
        className="w-16 h-16 border-4 animate-spin bg-indigo-900 text-gray-100 border-solid rounded-full"
      ></div>
      <p>{text}</p>
    </div>
  );
};

export default Loading;
