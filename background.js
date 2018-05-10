'use strict';

/**
 * On Click, clear all browsing data.
 */
browser.browserAction.onClicked.addListener(() => {
    browser.browsingData.removeCache({});
});
