package com.robotbird.robotbird;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

/**
 * Unit test for simple App.
 */
public class AppTest extends TestCase {
	WebDriver driver;

	/**
	 * Create the test case
	 *
	 * @param testName
	 *            name of the test case
	 */
	public AppTest(String testName) {
		super(testName);
	}

	/**
	 * @return the suite of tests being tested
	 */
	public static Test suite() {
		return new TestSuite(AppTest.class);
	}

	public void setUp() throws Exception {
		System.setProperty("webdriver.gecko.driver", "C://alex//selenium//geckodriver-v0.18.0-win64//geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get(Simulator.rootURL);
	}
	
	/**
	 * Tests main page
	 */

	public void testMainPageLinks() {
		System.out.println("Starting tests");
		assertEquals(Simulator.title, driver.getTitle());
		assertEquals(Simulator.firstLinkText, driver.findElement(By.linkText("2d simulation")).getText());
		assertEquals(Simulator.secondLinkText, driver.findElement(By.linkText("3d simulation")).getText());
		File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(src, new File("c:\\tmp\\screenshot2.png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		BufferedImage imgPredefined = null;
		BufferedImage siteimg = null;
		try {
			imgPredefined = ImageIO.read(new File("C:/tmp/screenshot1.png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println("screenshot1 was not read!");
			e.printStackTrace();
		}
		
		try {
			siteimg = ImageIO.read(new File("C:/tmp/screenshot2.png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println("screenshot2 was not read!");
			e.printStackTrace();
		}
		boolean result = bufferedImagesEqual(imgPredefined, siteimg);
		System.out.println("result is: " + result);
		assertTrue(result);
	}
	

	
	boolean bufferedImagesEqual(BufferedImage img1, BufferedImage img2) {
	    if (img1.getWidth() == img2.getWidth() && img1.getHeight() == img2.getHeight()) {
	     for (int x = 0; x < img1.getWidth(); x++) {
	      for (int y = 0; y < img1.getHeight(); y++) {
	       if (img1.getRGB(x, y) != img2.getRGB(x, y))
	        return false;
	       }
	      }
	     } else {
	        return false;
	     }
	     return true;
	    }

	public void tearDown() {
		driver.quit();

	}

}
