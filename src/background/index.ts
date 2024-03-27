import { Storage } from "@plasmohq/storage";

chrome.storage.onChanged.addListener((changes) => {
  chrome.tabs.query(
    {
      url: [
        "https://*.console.aws.amazon.com/*",
        "https://*.awsapps.com/*",
        "https://*.signin.aws.amazon.com/*"
      ]
    },
    (tabs) => {
      for (const [key, change] of Object.entries(changes)) {
        if (key === "AWS_MASKING_SETTINGS") {
          for (const tab of tabs) {
            chrome.tabs.sendMessage(tab.id, {
              method: "UPDATE_SETTINGS",
              settings: JSON.parse(change.newValue)
            });
          }
        }
      }
    }
  );

  return true;
});

chrome.runtime.onMessage.addListener(async (request, _sender, sendResponse) => {
  if (request.method === "GET_SETTINGS") {
    const storage = new Storage();
    const settings = await storage.get("AWS_MASKING_SETTINGS");

    sendResponse(settings);
  }
  return true;
});
