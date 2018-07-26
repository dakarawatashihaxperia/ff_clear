'use strict';

/**
 * On Click, clear all browsing data.
 */
browser.browserAction.onClicked.addListener(() => {
    browser.browsingData.removeCache({});
    browser.browsingData.removeCookies({});
    browser.browsingData.removeDownloads({});
    browser.browsingData.removeFormData({});
    browser.browsingData.removeHistory({});
    browser.browsingData.removeLocalStorage({});
    browser.browsingData.removePasswords({});
    browser.browsingData.removePluginData({});
});
