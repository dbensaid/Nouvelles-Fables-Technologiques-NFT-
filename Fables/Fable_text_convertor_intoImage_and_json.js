const textToImage = require('text-to-image');
var fs = require('fs');

// Reading the file where the raw text of the poems are
const content = fs.readFileSync("./fable.csv");

// List of poems
var fables = [];
let i = 0;
// Setting the first character as empty
fables[i] = '';

// Looping throught all the text to rebuild the poems
for (let c of content.toString()) {
  fables[i] += c;
  // Each poem is delimited by a ";"
  if (c == ';') {
    // Start of the new poem in the list
    i += 1;
    fables[i] = '';
  }
}

i=0;
// Looping through all poems to convert them to image
for (let fable of fables) {
  // Making the name with the counter
  let name = './Fables/Fable'+ i.toString() + '.png'

  // Converting thanks to textToImage
  const dataUri = textToImage.generateSync(fable, {
    debug: true,
    debugFilename: name,
    maxWidth: 720,
    fontSize: 18,
    fontFamily: 'Arial',
    lineHeight: 30,
    margin: 5,
    bgColor: 'pink',
    textColor: 'black',
  });

  name = './Fables/Fable'+ i.toString() + '.json'

  let meta
  meta = '{'
  meta +='"image" : "ipfs://MODIFY",'
  meta +='"description" : "Fable' + i.toString() +'",'
  meta +='"name" : "Jean de La Fontaine"'
  meta +='}'


  fs.writeFile(name, meta, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  i+=1;
}