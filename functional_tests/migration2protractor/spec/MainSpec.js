/*
* jasmine init
* jasmine examples
* jasmine spec/appSpec.js
* jasmine --filter="a spec name"
* jasmine --stop-on-failure=true
* jasmine --random=true
*/

const{Browser,By,Key,until, Builder} = require('selenium-webdriver');
var HomePage = require('./HomePage.js');
var driver;
var homePage;
global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 120*1000;

describe("Test main page", function() {
	beforeAll(async function(){
		driver = new Builder().forBrowser('firefox').build();
		homePage = new HomePage(driver);
	});

	it('Tests the top links', async function(){
		await homePage.open();
		var simulation2dlinkClass = await homePage.getTopLinkClass('2d simulation');
        expect(simulation2dlinkClass).toBe('activetab');
		
		var simulation2dlinkClass = await homePage.getTopLinkClass('3d simulation');
        expect(simulation2dlinkClass).toBe('');
	});
	
	it('Tests the title', async function(){
		var title = await homePage.getTitle();
		expect(title).toEqual("Robot simulator");
	});
	
	
	it("Test timer", async function() {
        var inaciveTimerValue = await homePage.getTimerValue();
		expect(inaciveTimerValue).toBe('00:00:00.000');
    });


	afterAll(async () => {
		homePage.close();
	});
	
});

