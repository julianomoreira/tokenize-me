import sketch from 'sketch'
// var sketch = require('sketch/dom')
//var sketch = require('sketch');
// documentation: https://developer.sketchapp.com/reference/api/

var document = sketch.getSelectedDocument();
var documents = sketch.Document.getDocuments();
//var pages = document.pages;
var Page = sketch.Page;
//console.info(documents);

export default function(context) {
  var selection = context.selection
  var selectedLayersCount = selection.length
  if (selectedLayersCount === 0) {
    sketch.UI.message("nothing selected")
  } else {
    selection.forEach((element) =>{
      var layer = element;
      sketch.UI.message(`Layer ${element.name()} is selected`)
    })
  }
}
