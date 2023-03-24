import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import { test } from '../../../support/TestSessionInitiator';


Given('User is on the homepage of the demoQA',()=>{
    // demoTestPage.launchApplication();
    test.demoTestPage.launchApplication();
})

When('User navigates to login form',()=>{
    test.demoTestPage.userClickOnBookStoreApplication();
    test.demoTestPage.userClicksOnLoginUnderBookStoreApplication();
})

// And('User enters {string} and {string} ',(userName, password)=>{
//     demoTestPage.userEnterCredentials(userName,password);
//     demoTestPage.userClicksOnLoginButton();
// })

Then('Message is displayed for succesful login',()=>{
    test.demoTestPage.verifySuccesfulMessage();
})