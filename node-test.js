var client = require("webdriverjs").remote();
//var client = webdriverjs.remote({desiredCapabilities:{browserName:"safari"}}); // to run in chrome

client.addCommand("getUrlAndTitle", function(callback) {
    this.url(
        function(urlResult)
        {
            this.getTitle(
                function(titleResult)
                {
                    var specialResult = {url: urlResult.value, title: titleResult};
                    if (typeof callback == "function")
                    {
                        callback(specialResult);
                    }
                }
            )
        }
    );
});

client
    .testMode()
    .init()
    .url("http://jboland-w7e.hq.daptiv.com/root/Applications/DynamicApp/DynamicAppGrid.aspx?oid=520de04e-379d-4064-8f87-48b314e4fd11|c54fa0a4-d965-4a79-b6a8-e80fd6218d17")
    .setValue("#email", "jboland@daptiv.com")
    .setValue("#password", "password")
    .submitForm("#login-btn")
    .waitFor(".slick-cell", 3000)
    .click(".slick-cell")
    .click("#btnCopy")
    .click("#btnPaste")
    .tests.titleEquals("webdriver - Google Search")
    .pause(5000)
    .end();
