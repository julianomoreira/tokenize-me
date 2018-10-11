import sketch from 'sketch'
// var sketch = require('sketch/dom')
//var sketch = require('sketch');
// documentation: https://developer.sketchapp.com/reference/api/

var document = sketch.getSelectedDocument();
var documents = sketch.Document.getDocuments();
// console.log(document);
//var pages = document.pages;
var Page = sketch.Page;
//console.info(documents);

var doc = context.document;
//console.log(doc.pages());

export default function(context) {
  var selection = context.selection
  var selectedLayersCount = selection.length
  var immutableColor = MSImmutableColor.colorWithSVGString_('#991199');
  var color = MSColor.alloc().initWithImmutableObject_(immutableColor);

  console.log(selection);
  selection.forEach(key => {
    console.log(key);
    console.log(key.setTextColor(color));

  })

  // if (selectedLayersCount === 0) {
  //   sketch.UI.message("nothing selected")
  //
  // } else {
  //   selection.forEach((element) =>{
  //     var layer = element;
  //     for (var key in data){
  //       console.log(key)
  //     }
  //     sketch.UI.message(`Layer ${layer.name()} is selected`)
  //   })
}
