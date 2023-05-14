function success(pos) {
  console.log(pos.coords);
}

function error(err) {
  console.warn(err);
}

// NOK: enableHighAccuracy set to true
var invalidOptions = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
navigator.geolocation.getCurrentPosition(success, error, invalidOptions);

// OK: enableHighAccuracy is false by default, so its valid
navigator.geolocation.getCurrentPosition(success);

// OK: explicit enableHighAccuracy set to false
var validOptions = { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 };
navigator.geolocation.getCurrentPosition(success, error, validOptions);
