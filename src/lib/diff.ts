var Git = require("nodegit");

export default class Diff {
    private newFileContent: string;
    private oldFileContent: string;

    constructor(branchToMergeIntoCurrent: string, pathToFile: string) {
        Git.Repository.open('./tmp').then(function (repo) {
          });
    }
}

