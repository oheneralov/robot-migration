package com.robotbird.robotbird;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

public class MainPage {
	public WebDriver driver;

	public void open(WebDriver driver, String url) {
		this.driver = driver;
		this.driver.get(url);

	}

	public String getTitle() {
		return this.driver.getTitle();
	}

	@FindBy(how = How.LINK_TEXT, using = "2d simulation")
	WebElement first_top_link;

	@FindBy(how = How.LINK_TEXT, using = "3d simulation")
	WebElement second_top_link;

	public String getFirstLink() {
		return first_top_link.getText();
	}

	public String getSecondLink() {
		return second_top_link.getText();
	}

	public BufferedImage getScreenShot() {
		File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		BufferedImage siteimg = null;
		try {
			siteimg = ImageIO.read(src);
		} catch (IOException e) {

			e.printStackTrace();
		}
		return siteimg;
	}

	public BufferedImage getPredefinedImage() {
		BufferedImage imgPredefined = null;
		try {
			imgPredefined = ImageIO.read(new File("screenshot1.png"));
		} catch (IOException e1) {
			System.out.println("screenshot1 was not read!");
			e1.printStackTrace();
		}
		return imgPredefined;
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

}
