import { Octokit } from 'octokit'
import { DateTime } from 'luxon'

export default async function getCommits(since, until){
    let data;
    let commits =[]
  
    const octokit = new Octokit({
      auth: import.meta.env.CALENDAR_GITHUB_TOKEN
    })
  
    await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner: 'Nix27',
      repo: 'Snowboarding_equipment_webshop',
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