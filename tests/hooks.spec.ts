
import { test } from '@playwright/test';

//Runs ONCE before all tests in the test file:

test.beforeAll(async () => {
    console.log('before All..... connect to DB');
    
    // user creation
    // admin settings
    // uploading test data
});

//Runs before each test:

test.beforeEach(async () => {
    console.log('before EACH....login to the app');
});

//Runs after each test
test.afterEach(async () => {
    console.log('after each....logout from the app');
});

//Runs ONCE after all the tests in the test file:
test.afterAll(async () => {
    console.log('after All.... disconnect from the DB');
});

test('title test', async () => {
    console.log('title test');
});

test('home page test', async () => {
    console.log('home page test');
});

test('cart page test', async () => {
    console.log('cart page test');
});

test('search page test', async () => {
    console.log('search page test');
});