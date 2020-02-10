/* eslint no-console: 0 */
const fs = require('fs');
const component = process.argv[2];

if (process.argv.length < 3) {
    console.log('Usage: yarn run create-component {name}');
    process.exit(1);
}

// Content
const indexFile = `import ${component} from './${component}';

export default ${component};
`;

const componentFile = `import React from 'react';

import './${component}.scss';

const ${component} = (props: any) => {
    return (
        <div className="${component}"></div>
    );
}

export default ${component};
`;

/* const testFile = `import React from 'react';
import ReactDOM from 'react-dom';

import CIWrapper from '../../Utils/CIWrapper';
import ${component} from './${component}';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(CIWrapper(<${component} />), div);
    ReactDOM.unmountComponentAtNode(div);
});
`; */

// Make the directory
fs.mkdirSync('./src/components/' + component);

// Write the files
fs.writeFileSync('./src/components/' + component + '/index.tsx', indexFile, 'utf8');
fs.writeFileSync('./src/components/' + component + '/' + component + '.tsx', componentFile, 'utf8');
// fs.writeFileSync('./src/components/' + component + '/' + component + '.test.tsx', testFile, 'utf8');

fs.writeFileSync('./src/components/' + component + '/' + component + '.scss', '', 'utf8');

console.log('Wrote 3 files...');
