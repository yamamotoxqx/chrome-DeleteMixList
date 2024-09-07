chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            {
              header: "Referer",
              operation: "remove",
            },
          ],
        },
        condition: {
          urlFilter: "*://www.youtube.com/*&list=*",
          resourceTypes: ["main_frame"],
        },
      },
    ],
    removeRuleIds: [1],
  });
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.isEnabled) {
    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: changes.isEnabled.newValue
        ? [
            {
              id: 1,
              priority: 1,
              action: {
                type: "redirect",
                redirect: {
                  regexSubstitution: "^(.*)&list=.*$",
                  transform: {
                    queryTransform: {
                      removeParams: ["list"],
                    },
                  },
                },
              },
              condition: {
                urlFilter: "*://www.youtube.com/*&list=*",
                resourceTypes: ["main_frame"],
              },
            },
          ]
        : [],
      removeRuleIds: changes.isEnabled.newValue ? [] : [1],
    });
  }
});