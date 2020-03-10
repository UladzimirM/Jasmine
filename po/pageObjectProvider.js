var PAGE_OBJECT_MAP = {
    "home": "./homePage",
    "results": "./resultsPage",
    "join": "./joinPage"
};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);
};