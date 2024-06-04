document.addEventListener("DOMContentLoaded", () => {
  const cpuInfoDiv = document.getElementById("cpu-info");
  const gpuInfoDiv = document.getElementById("gpu-info");
  const networkInfoDiv = document.getElementById("network-info");

  // Fetching CPU Information
  chrome.system.cpu.getInfo((cpuInfo) => {
    cpuInfoDiv.innerHTML = `<h2>CPU Info</h2><pre>${JSON.stringify(
      cpuInfo,
      null,
      2
    )}</pre>`;
  });

  // Fetching GPU Information using WebGL
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl");
  if (gl) {
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const gpuInfo = {
      vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    };
    gpuInfoDiv.innerHTML = `<h2>GPU Info</h2><pre>${JSON.stringify(
      gpuInfo,
      null,
      2
    )}</pre>`;
  } else {
    gpuInfoDiv.innerHTML = "<h2>GPU Info</h2><pre>WebGL not supported</pre>";
  }

  // Fetching Network Information using external API
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      networkInfoDiv.innerHTML += `<h2>IP Address</h2><pre>${data.ip}</pre>`;
    })
    .catch((error) => {
      networkInfoDiv.innerHTML += `<h2>IP Address</h2><pre>Error fetching IP address: ${error}</pre>`;
    });
});
