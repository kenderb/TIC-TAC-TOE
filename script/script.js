var template = ((selector) => {
    var templateNames = document.querySelector(selector);
    var htmlMain = document.querySelector("main");
    
    const htmlTemplate = (color, name) => {
        console.log(templateNames); 
        htmlMain.innerHTML = templateNames.innerHTML ;
    }
    return {
        htmlTemplate
    };
})(".template");

template.htmlTemplate("green", "pepe");

