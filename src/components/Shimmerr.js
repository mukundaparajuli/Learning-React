const Shimmer = () => {
  return Array(16)
    .fill("")
    .map((e, index) => <div className="shimmer" key={index}></div>);
};
export default Shimmer;
