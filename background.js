chrome.runtime.onInstalled.addListener(() => {
  console.log("System Info Extension installed.");
});

// chrome.action.onClicked.addListener((tab) => {
//   chrome.system.cpu.getInfo((cpuInfo) => {
//     console.log(cpuInfo);
//   });

//   chrome.system.memory.getInfo((memoryInfo) => {
//     console.log(memoryInfo);
//   });

//   chrome.system.network.getNetworkInterfaces((networkInfo) => {
//     console.log(networkInfo);
//   });
// });
