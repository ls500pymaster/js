function getLocation() {
    navigator.geolocation.getCurrentPosition(position => {
        const latitude= position.coords.latitude;
        const longitude= position.coords.longitude;

        const myLat = document.createElement("div");
        const myLong = document.createElement("div");
        myLong.textContent = `My Longitude: ${longitude}`;
        myLat.textContent = `My Latitude: ${latitude}`;

        document.body.append(myLong);
        document.body.append(myLat);

        const newLink = document.createElement("a");
        newLink.href = `https://www.google.com/maps/place/${latitude},${longitude}`;
        newLink.textContent = "Your location";
        document.body.append(newLink);
    });
}

getLocation();



