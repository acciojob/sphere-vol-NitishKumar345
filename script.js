function volume_sphere(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const radiusInput = document.getElementById("radius");
  const volumeOutput = document.getElementById("volume");

  const radius = parseFloat(radiusInput.value);

  // Validate input: must be a number and not negative
  if (isNaN(radius) || radius < 0) {
    volumeOutput.value = "NaN";
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  volumeOutput.value = volume.toFixed(4); // Round to 4 decimal places
}

// Attach handler when window loads
window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};