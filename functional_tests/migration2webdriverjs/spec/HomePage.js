const {By, until} = require('selenium-webdriver');

class HomePage {
	
	constructor(driver){
		this.driver = driver;
		this.xpath2Timer = '/html/body/div[1]/div/div/div/div/div/div';
		this.xpath2CodeHeader = '/html/body/div[1]/div/div/div/div/div/form/div/div[1]';
		this.homePageURL = 'http://localhost:3000';
	}
	
	open(){
		this.driver.get(this.homePageURL);
		this.driver.wait(until.titleIs('Robot simulator'), 30000);
	}
	
	getTopLinkClass(linkText){
		return this.driver.findElement(By.linkText(linkText)).getAttribute('class');
	}
	
	getTextByXPath(xpath){
		return this.driver.findElement(By.xpath(xpath)).getText();
	}
	
	getTimerValue(){
		return this.getTextByXPath(this.xpath2Timer);
	}
	
	getTitle(){
		return this.driver.getTitle();
	}
	
	getCodeSectionHeader(){
		return this.getTextByXPath(this.xpath2CodeHeader);
	}
	
	close(){
		this.driver.close();
	}
}

module.exports = HomePage;