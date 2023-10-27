import { Octokit } from 'octokit'
import { DateTime } from 'luxon'

export default async function getCommits(since, until){
    let data;
    let commits =[]
  
    const octokit = new Octokit({
      auth: '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'
    })
  
    await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: 'Nix27',
      repo: 'Calendar',
      since: since.toISO(),
      until: until.toISO(),
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then(response => data = response.data)
      .catch(error => console.log(error))
  
     data.forEach(element => {
        commits.push({
          date: DateTime.fromISO(element.commit.committer.date),
          email: element.commit.committer.email,
          name: element.commit.committer.name,
          message: element.commit.message
        })
     });
  
     return commits
   }