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
import org.openqa.selenium.support.PageFactory;

/**
 * Unit test for simple App.
 */
public class AppTest extends TestCase {
	WebDriver driver;
	MainPage mainPage;

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
	}

	/**
	 * Tests main page
	 */

	public void testMainPageLinks() {
		System.out.println("Starting tests");
		MainPage mainPage = PageFactory.initElements(driver, MainPage.class);
		mainPage.open(driver, Simulator.rootURL);
		assertEquals(Simulator.title, mainPage.getTitle());
		assertEquals(Simulator.firstLinkText, mainPage.getFirstLink());
		assertEquals(Simulator.secondLinkText, mainPage.getSecondLink());
		boolean isMainPageScreenshotOk = mainPage.bufferedImagesEqual(mainPage.getPredefinedImage(),
				mainPage.getScreenShot());
		assertTrue(isMainPageScreenshotOk);
	}

	public void tearDown() {
		driver.quit();

	}

}
