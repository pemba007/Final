const BayList = ({ bayList }) => {
  // Component to show the currently available bay
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
          overflow: "auto",
        }}
      >
        {bayList.map(function (bayCondition, index) {
          return (
            <div
              key={index}
              style={{
                minheight: "20px",
                height: "5%",
                maxHeight: "80px",
                backgroundColor: bayCondition ? "green" : "red",
                display: "grid",
                placeItems: "center",
                color: "white",
              }}
              className={
                bayCondition
                  ? "bg-success text-white"
                  : "bg-secondary text-white"
              }
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BayList;
