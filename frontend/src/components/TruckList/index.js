import IndividualTruck from "../IndividualTruck";

const TruckList = ({ truckList, deleteTruck, add5mins }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {/* <CardGroup> */}
        {truckList.map(function (truck, index) {
          return (
            <IndividualTruck
              key={index}
              truck={truck}
              index={index}
              onAdd5Mins={() => add5mins(index)}
              onDelete={() => deleteTruck(index)}
            />
          );
        })}
        {/* </CardGroup> */}
      </div>
    </>
  );
};

export default TruckList;
