

function runTests (){

    switch (TestType){

        case "Smoke Test":
            console.log("This is smoke tetsing");
                break;

         case "Sanity Test":
            console.log("This is sanity tetsing");
                break;

                case "regression Test":
            console.log("This is Regression tetsing");
                break;

                default :
                console.log("This is smoke test");
    }

            
    }

    let TestType = "Smoke Test"
    runTests();
    


