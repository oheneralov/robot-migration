package cucumberJava; 

import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver; 

import cucumber.annotation.en.Given; 
import cucumber.annotation.en.Then; 
import cucumber.annotation.en.When; 

public class cucumberJava { 
   WebDriver driver = null; 
	
   @Given("^I have open the browser$") 
   public void openBrowser() { 
	   System.setProperty("webdriver.chrome.driver", "C:\\alex\\training\\java\\chromedriver_win32\\chromedriver.exe");
	   driver = new ChromeDriver();
   } 
	
   @When("^I open Facebook website$") 
   public void goToFacebook() { 
     // driver.navigate().to("http://localhost:3000"); 
      driver.get("http://localhost:3000");
   } 
	
   @Then("^Title Robot simulator should exits$") 
   public void loginButton() { 
      if(driver.getTitle() == "Robot simulator") { 
         System.out.println("Test 1 Pass"); 
      } else { 
         System.out.println("Test 1 Fail"); 
      } 
      driver.close(); 
   } 
}