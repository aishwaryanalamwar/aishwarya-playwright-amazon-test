// utils/helpers.js

const { expect } = require('@playwright/test');

// Wait for specific time
async function waitFor(milliseconds) {
    await new Promise(r => setTimeout(r, milliseconds));
}

// Generate random username
function generateRandomUsername() {
    const timestamp = Date.now();
    return `testuser${timestamp}`;
}

// Generate random password
function generateRandomPassword() {
    const timestamp = Date.now();
    return `TestPass${timestamp}`;
}
  


// Generate random email
function generateRandomEmail() {
    const timestamp = Date.now();
    return `testuser${timestamp}@test.com`;
}

// Generate random number between min and max
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Format date for test data
function getCurrentDate() {
    const date = new Date();
    return date.toISOString().split('T')[0];    // returns YYYY-MM-DD
}

// Take screenshot with meaningful name
async function takeScreenshot(page, name) {
    await page.screenshot({
        path: `test-results/screenshots/${name}-${Date.now()}.png`
    });
    console.log(`📸 Screenshot saved: ${name}`);
}

module.exports = {
    waitFor,
    generateRandomUsername,     // ← added!
    generateRandomPassword,     // ← added!

    generateRandomEmail,
    randomNumber,
    getCurrentDate,
    takeScreenshot
};