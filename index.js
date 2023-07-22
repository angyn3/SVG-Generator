const inquirer = require("inquirer");

const fs = require("fs");
const Questions = require("./questions")
const {Circle,Square,Triangle} = require("./lib/shapes")




class userInput{
     constructor(){
        this.text = "";
        this.shape = ""
     }

createShape(){
    return `<svg version="1.1"  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}</svg>`
}

pushText(text,textColor){
    return this.text = ` <text x="50%" y="55" font-size="20" text-anchor="middle" fill="${textColor}">${text}</text>`
}
 pushShape(shape){
    return this.shape = shape.createShape

 }




}


function generateSvg (){
    inquirer.prompt(Questions).then(res=>{
        var text = ""
       

        function checkCharacters(text){
            if(res.text.length > 3){
                console.log("you cant put more than 3 characters");
                throw new Error("More than 3 characters detected");
            }
           
    
        }
        checkCharacters();
        text = res.text
        let textColor = res.textColor;
        let shapeColor = res.svgColor;
        // console.log(shapeColor)
        let shape = res["chosenShape"];
        
        let newShape;
        if (shape === "Square") {
          newShape = new Square();
        } 
        else if (shape === "Circle") {
          newShape = new Circle();
        } 
        else if (shape === "Triangle") {
          newShape = new Triangle();
        }
        
        newShape.setColor(shapeColor);
        
        var updateInfo = new userInput();
        
        updateInfo.pushText(text, textColor);
        console.log("hellot"+ text)
        
        updateInfo.pushShape(newShape);
        
        let data = "";
        data = updateInfo.createShape();
        console.log("Your SVG  file is ready please check the Finished.Svg under the SVG Folder.")
        let fileName = "./examples/SVG.svg"
        
        return fs.writeFileSync(fileName, data, (err) => {
        
          if (err) throw err;
        });
    })







    
}






generateSvg()