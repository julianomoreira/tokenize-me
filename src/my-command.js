//import sketch from 'sketch'
var sketch = require('sketch')

// documentation: https://developer.sketchapp.com/reference/api/

// export default function() {
//   sketch.UI.message("It's alive 🙌")
// }

// var Document = sketch.Document
// var page = Document.SelectedPage
//console.log(page);

// export default function(context) {
//   const selectedLayers = context.selection
//   const selectedCount = selectedLayers.length
//   const selectedName = selectedLayers.forEach(function(item){ console.log(item) })
//
//   if (selectedCount === 0) {
//     context.document.showMessage('No layers are selected.')
//   } else {
//     context.document.showMessage(`${selectedCount} layers selected. My name is: ${selectedCount}`)
//   }
//
// }

// export default function(context) {
//   // we use this to get hold of native sketch doc
//   const document = sketch.fromNative(context.document)
//   var page = document.SelectedPage
//   const selectedLayers = context.selection
//   const selectedCount = selectedLayers.length
//   const layerName = selectedLayers.forEach(function(item){ console.log(item.name())  })
//   context.document.showMessage(`${layerName}`)
// }

// export default function(context) {
//   // We are passed a context variable when we're run.
//   // We use this to get hold of the native Sketch document and wrap it.
//   const document = sketch.fromNative(context.document)
//
//   // Next we want to extract the selected page of the selected (front-most) document
//   const page = document.selectedPage
//
//   // Now let's create a new text layer, and a traditional value...
//   const layer = new sketch.Text({
//     parent: page,
//     alignment: sketch.Text.Alignment.center,
//     text: 'Hello World',
//   })
//
//   // ...resize it so that the text just fits...
//   layer.adjustToFit()
//
//   // Finally, lets center the view on our new layer
//   // so that we can see where it is.
//   document.centerOnLayer(layer)
// }


export default (context) => {
  //const doc = sketch.getSelectedDocument()
  const selectedLayers = context.selection
  console.log(selectedLayers)
  var items = selectedLayers.forEach(function(item){
      context.document.showMessage(`${item.name()}`)
  })
}
