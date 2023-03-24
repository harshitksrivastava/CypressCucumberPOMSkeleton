export class DemoTestPage2{

    launchApplication(){
        cy.visit("/");
    }

    userClickOnBookStoreApplication(){
        cy.contains("Book Store Application").click();
    }

    userClicksOnLoginUnderBookStoreApplication(){
        cy.contains("Login").click();
    }

    // userEnterCredentials(){

    // }
    
    verifySuccesfulMessage(){
        console.log("logged In");
    }
}

// export const demoTestPage = new DemoTestPage();
export default DemoTestPage2;