var fs = require('fs-extra');
var path = require('path');

var snippetsPath = './snippets';
var staticPartsPath = './static-parts';

var snippets = {}, startPart = '', endPart = '', output = '';

try {
  var snippetFilenames = fs.readdirSync(snippetsPath);
  snippetFilenames.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  for(var snippet of snippetFilenames){
    var content = fs.readFileSync(path.join(snippetsPath,snippet),'utf8');
    var title = content.substring(4, content.search('\n'));
    var text = content.substring(content.search('\n'));
    snippets[snippet] = {title, text};
  }
}
catch (err){
  console.log('Error during snippet loading: '+err);
  process.exit(1);
}

try {
  startPart = fs.readFileSync(path.join(staticPartsPath,'README-start.md'),'utf8');
  endPart = fs.readFileSync(path.join(staticPartsPath,'README-end.md'),'utf8');
}
catch (err){
  console.log('Error during static part loading: '+err);
  process.exit(1);
}

try {
  output += `${startPart+'\n'}`;
  for(var snippet of Object.entries(snippets))
    output += `* [${snippet[1].title}](#${anchor(snippet[0])})\n`
  output += '\n';
  for(var snippet of Object.entries(snippets))
    output += `<h3 id="${anchor(snippet[0])}">${snippet[1].title}</h3>${snippet[1].text}`;
  output += `${endPart+'\n'}`;
  fs.writeFileSync('README.md', output);
}
catch (err){
  console.log('Error during README generation: '+err);
  process.exit(1);
}

function anchor(filename) {
  return filename.slice(0,filename.length-3).replace(/\(/g,'').replace(/\)/g,'').toLowerCase();
}
