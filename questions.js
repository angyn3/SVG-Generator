const Questions = [

    {
        type: "list",
        name: "chosenShape",
        message: "Please select a shape for your SVG :",
        choices: ["Circle", "Triangle", "Square"]
    
    },
    {
        type: "input",
        name: "svgColor",
        message: "Please select a background colour for your SVG. You can now also use Hex Codes eg: (#E6E6FA) :",
    
    },
    {
        type: "input",
        name: "text",
        message: "Please add a text in your SVG (three letters max) :",
    
    },
    {
        type: "input",
        name: "textColor",
        message: "Please select a colour for your text. You can now also use Hex Codes eg: (#ffffff) :"
    },
    
    
    ]

    module.exports = Questions