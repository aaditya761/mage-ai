export const getSensorName = (sensorId, sensorList) => {
  const sensor = sensorList.find((sensor) => sensor.sensor_id === sensorId);
  return sensor?sensor.name:'';
};
