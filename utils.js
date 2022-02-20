import moment from "moment";

const metersToKilometers = (meters) => {
  return Math.floor(meters / 10) / 100;
};

const formatTime = (seconds) => {
  return moment(seconds * 1000).format("mm:ss")
}

export { metersToKilometers, formatTime };
