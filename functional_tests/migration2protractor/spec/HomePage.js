const {By, until} = require('selenium-webdriver');

class HomePage {
	
	constructor(driver){
		this.driver = driver;
	}
	
	open(){
		this.driver.get('http://localhost:3000');
		this.driver.wait(until.titleIs('Robot simulator'), 30000);
	}
	
	getTopLinkClass(linkText){
		return this.driver.findElement(By.linkText(linkText)).getAttribute('class');
	}
	
	getTimerValue(){
		let xpath = '/html/body/div[1]/div/div/div/div/div/div'; 
		return this.driver.findElement(By.xpath(xpath)).getText();
	}
	
	getTitle(){
		return this.driver.getTitle();
	}
	
	close(){
		this.driver.close();
	}
}

module.exports = HomePage;