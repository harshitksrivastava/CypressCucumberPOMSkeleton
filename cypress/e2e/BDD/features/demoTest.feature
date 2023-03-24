Feature: Automation practice form
@P1 @setCookies
Scenario: Login using valid credentials
	Given User is on the homepage of the demoQA
	When User navigates to login form
	# And User enters "testingUserName" and "TestingPassword@123"
	Then Message is displayed for succesful login