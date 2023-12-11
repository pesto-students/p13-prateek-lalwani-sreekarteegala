const { Stack } = require("./sampleStack");

function directoryPath(path) {

    const stack = new Stack();
    let paths = helper(path);

    for (let i = 0; i < paths.length; i++) {
        if (paths[i] == '.') {
            continue;
        }

        if (paths[i] == '..') {
            stack.pop();
        } else

            stack.push(paths[i]);
    }

    let simPath = [];
    while (stack.isEmpty() == false) {
        let val = stack.pop();

        simPath.push(val);
    };

    return '/' + simPath.reverse().join('/')
}


function helper(path) {
    let paths = path.split('/');
    let newPaths = [];

    for (let i = 0; i < paths.length; i++) {
        if (paths[i] != "") {
            newPaths.push(paths[i])
        }
    }

    return newPaths;

}


console.log(directoryPath('/home/.././user//foo/../../bar'))
console.log(directoryPath('/a/b/c'))