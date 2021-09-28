// this file sets up the info needed for the map, we can have a similar function for any other state we create.
const setMapObject = info => {
  const mapInfo = {
    latitude: parseFloat(info.latitude),
    longitude: parseFloat(info.longitude),
    width: '100vw',
    height: '100vh',
    zoom: 8,
  };
  return mapInfo;
};
export default setMapObject;
