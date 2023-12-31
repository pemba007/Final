var moment = require("moment"); // require
class Truck {
  constructor(
    registrationNumber,
    arrivalDateTime = null,
    departureDateTime = null,
    bayAssigned = -1
  ) {
    this.registrationNumber = registrationNumber;
    this.arrivalDateTime = arrivalDateTime;
    this.departureDateTime = departureDateTime;
    this.bayAssigned = bayAssigned;
  }

  setArrivalDate(arrivalDateTime) {
    this.arrivalDateTime = arrivalDateTime;
  }

  getArrivalDate() {
    return this.arrivalDateTime;
  }

  setDepartureDate(departureDateTime) {
    this.departureDateTime = departureDateTime;
  }

  getDepartureDate() {
    return this.departureDateTime;
  }

  addFiveMinutesDeparture() {
    var date = moment(this.departureDateTime);
    date.add(5, "minutes");
    this.setDepartureDate(date);
  }
}

module.exports = Truck;
