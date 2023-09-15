const fs = require('fs');
const path = require('path');

const currentDir = path.resolve(__dirname);
const mainGrammar = JSON.parse(fs.readFileSync(path.join(currentDir, 'mainGrammar.json'), 'utf8'));

// Get all JSON files in the current directory, excluding mainGrammar.json
const jsonFiles = fs.readdirSync(currentDir).filter(filename => {
    return filename.endsWith('.json') && filename !== 'mainGrammar.json' && filename !== 'bds.tmLanguage.json';
});

// Iterate over each JSON file and merge it into mainGrammar
for (const file of jsonFiles) {
    const content = JSON.parse(fs.readFileSync(path.join(currentDir, file), 'utf8'));
    Object.assign(mainGrammar.repository, content);
}

// Save the merged grammar
fs.writeFileSync(path.join(currentDir, 'bds.tmLanguage.json'), JSON.stringify(mainGrammar, null, 4));
