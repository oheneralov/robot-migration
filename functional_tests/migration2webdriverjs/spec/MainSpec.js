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

describe("Tests home page", function() {
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
	
	
	it("Tests timer default value", async function() {
        var inaciveTimerValue = await homePage.getTimerValue();
		expect(inaciveTimerValue).toBe('00:00:00.000');
    });
	
	it("Tests code section  header", async function() {
        let CodeSectionHeader = await homePage.getCodeSectionHeader();
		expect(CodeSectionHeader).toBe('Code:');
    });
	
	it("Tests start stop command buttons", async function() {
        let startButton = await homePage.getCommandButtonsValues().startButton;
		expect(startButton).toBe('Start simulation');
    });
	
	it("Tests command buttons", async function() {
        let stopButton = await homePage.getCommandButtonsValues().stopButton;
		expect(stopButton).toBe('Stop simulation');
    });
	
	it("Tests code area", async function() {
        let codeArea = await homePage.getCodeAreaValue();
		expect(codeArea).toBe('Parrot1->flyForward(10);');
    });


	afterAll(async () => {
		homePage.close();
	});
	
});

