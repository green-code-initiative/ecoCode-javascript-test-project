function success(pos) {
  console.log(pos.coords);
}

function error(err) {
  console.warn(err);
}

// NOK: enableHighAccuracy set to true
const invalidOptions = { enableHighAccuracy: true, timeout: 5000 };
navigator.geolocation.getCurrentPosition(success, error, invalidOptions);

// OK: enableHighAccuracy is false by default, so its valid
navigator.geolocation.getCurrentPosition(success);

// OK: explicit enableHighAccuracy set to false
const validOptions = { enableHighAccuracy: false, maximumAge: 0 };
navigator.geolocation.getCurrentPosition(success, error, validOptions);
