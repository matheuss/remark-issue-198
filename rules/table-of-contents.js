const visit = require('unist-util-visit');

module.exports = (ast, file, language, done) => {
    visit(ast, 'list', () => {
        console.log('one list here');
    });
    done();
};
