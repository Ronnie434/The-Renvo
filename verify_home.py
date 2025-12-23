from playwright.sync_api import sync_playwright
import os

def verify_home():
    with sync_playwright() as p:
        print("Launching browser...")
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to home page...")
        try:
            page.goto("http://localhost:5173", timeout=30000)
            print("Page loaded.")
        except Exception as e:
            print(f"Error connecting to localhost:5173: {e}")
            return

        # Wait for key elements to ensure styles are applied
        try:
            page.wait_for_selector(".hero-title", state="visible", timeout=10000)
            print("Hero title found.")
        except Exception as e:
            print(f"Hero title not found: {e}")

        # Take screenshot
        # Ensure directory exists if we were to use one, but using root for simplicity
        screenshot_path = os.path.abspath("verification.png")
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot taken: {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    verify_home()
