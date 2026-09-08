const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function replaceColors(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      replaceColors(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace Hex Pink with Red
      content = content.replace(/#FF2D78/gi, '#FF1A1A');
      // Replace Hex Light Pink with Light Red
      content = content.replace(/#FF6BA8/gi, '#FF4D4D');
      // Replace RGB Pink with RGB Red
      content = content.replace(/255,45,120/g, '255,26,26');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

replaceColors(srcDir);
console.log('Colors replaced successfully!');
