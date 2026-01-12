from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pytest


@pytest.fixture
def driver():
    """Setup Chrome driver for tests"""
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)
    yield driver
    driver.quit()


def test_browserstack_homepage(driver):
    """Test BrowserStack homepage loads correctly"""
    driver.get("https://www.browserstack.com")
    assert "BrowserStack" in driver.title


def test_find_products_link(driver):
    """Test that Products link exists on homepage"""
    driver.get("https://www.browserstack.com")
    wait = WebDriverWait(driver, 10)
    products_link = wait.until(
        EC.presence_of_element_located((By.LINK_TEXT, "Products"))
    )
    assert products_link is not None


def test_pricing_page(driver):
    """Test navigation to pricing page"""
    driver.get("https://www.browserstack.com/pricing")
    assert "Pricing" in driver.title
