import PrsToolkit from "./prs-toolkit";

export default async function test() {
  // Making a pull request story template from the first pull request returned by GitHub
  const toolkit = new PrsToolkit();
  const pullRequests = await toolkit.listAuthenticatedUsersPullRequests();
  const firstPullRequest = pullRequests[0];
  const diffs = await toolkit.getPullRequestDiffs(firstPullRequest);
  
  console.log(
    'Diffs for', 
    `${firstPullRequest?.repositoryOwner}/${firstPullRequest?.repositoryName}/pulls/${firstPullRequest?.pullRequestNumber}\n======================`
  );
  diffs.forEach(async(diff) => {
    const newFileContent = await diff.newFileContent;
    const oldFileContent = await diff.oldFileContent || 'File did not exist.';

    // Excluding long files *cough* package-lock.json *cough*
    if(newFileContent.length < 1000) {
      console.log('+++New+++\n' + newFileContent + '\n');
      console.log('---Old---\n' + oldFileContent + '\n');
      console.log('\n');
    }
    
  });
}