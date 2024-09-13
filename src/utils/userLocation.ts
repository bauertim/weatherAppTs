export const getUserLocation = (setUserLocation: Function) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        localStorage.setItem(
          "currentLocation",
          JSON.stringify({ latitude, longitude })
        );
      },
      (error) => {
        console.error("Error get user location: ", error);
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser");
  }
};
