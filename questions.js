const Questions = [

    {
        type: "list",
        name: "chosenShape",
        message: "Pick a shape for your SVG :",
        choices: ["Circle", "Triangle", "Square"]
    
    },
    {
        type: "input",
        name: "svgColor",
        message: "Pick color for your SVG. Now you can also use Hex Codes eg: (#305da6) :",
    
    },
    {
        type: "input",
        name: "text",
        message: "Add Some text in your SVG (only three words) :",
    
    },
    {
        type: "input",
        name: "textColor",
        message: "Pick color for your Text. Now you can also use Hex Codes eg: (#ffffff) :"
    },
    
    
    ]

    module.exports = Questions