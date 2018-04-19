/*
* jasmine init
* jasmine examples
* jasmine spec/appSpec.js
* jasmine --filter="a spec name"
* jasmine --stop-on-failure=true
* jasmine --random=true
*/

const{Browser,By,Key,until, Builder} = require('selenium-webdriver');
var driver;
var foo;
global.jasmine.DEFAULT_TIMEOUT_INTERVAL = 120*1000;

describe("Test main page", function() {
	beforeAll(async function(){
		driver = new Builder().forBrowser('firefox').build();
	    this.tile = "Магазин электротоваров и радиоэлектроники. Радиорынок в Киеве. Измерительная техника и радиодетали. Интернет-магазин Electronoff";
	});

	
	it('Test left link', async function(){
		await driver.get('http://localhost:3000');
		await driver.wait(until.titleIs('Robot simulator'), 3000);
		var simulation2dlinkClass = await driver.findElement(By.linkText('2d simulation')).getAttribute('class');
        expect(simulation2dlinkClass).toBe('activetab');
		var title = await driver.getTitle();
		expect(title).toEqual("Robot simulator");
	});
	
	it('Test right link', async function(){
		await driver.get('http://localhost:3000');
		await driver.wait(until.titleIs('Robot simulator'), 3000);
		var simulation2dlinkClass = await driver.findElement(By.linkText('3d simulation')).getAttribute('class');
        expect(simulation2dlinkClass).toBe('');
		var title = await driver.getTitle();
		expect(title).toEqual("Robot simulator");
	});
	
	xit("Test timer", function() {
        expect(true).toBe(false);
		expect(12).toEqual(jasmine.any(Number));
		//not nnull or undefined
		expect(1).toEqual(jasmine.anything());
    });
	


	afterAll(async () => {
		driver.close();
	});
	
});

