function Heading({ title }) {
  return (
    <div className="flex flex-col  gap-2">
      <h1 className="text-white text-xl font-semibold">
        {title}
      </h1>

      {/* underline */}
      <div className="w-10 h-1 bg-white rounded"></div>
    </div>
  );
}

export default Heading;
