import { changePageContent } from "../model/model.js";

function initListeners() {
    $("nav .links a, div.learn-more a").on("click", function(e) {
        let btnID = e.currentTarget.id;
        console.log(btnID);
        changePageContent(btnID);
        
    });

}

$(document).ready(function(){
    initListeners();
    changePageContent("home");
})
