import DemoTestPage from "../fixtures/ActionClasses/demoTestPage";
import DemoTestPage2 from "../fixtures/ActionClasses/demoTestPage2";
import DemoTestPage3 from "../fixtures/ActionClasses/demoTestPage3";


//  common class which instantiates all the action classes and provide one test object to access them all
class TestSessionInitiator{

    demoTestPage = new DemoTestPage();
    demoTestPage2 = new DemoTestPage2();
    demoTestPage3 = new DemoTestPage3();

}

export const test = new TestSessionInitiator();