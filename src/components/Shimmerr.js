const Shimmer = () => {
  return Array(16)
    .fill("")
    .map((e, index) => (
      <div
        className="m-4 w-[250px] h-[400px] bg-gray-100 rounded-lg"
        key={index}
        data-testid="shimmer-ui"
      ></div>
    ));
};
export default Shimmer;

