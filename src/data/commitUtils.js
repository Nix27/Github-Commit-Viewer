import { Octokit } from 'octokit'
import { DateTime } from 'luxon'

export default async function getCommits(since, until, owner, repository, isForSearch){
    let data;
    let commits =[]
  
    const octokit = new Octokit({
      auth: import.meta.env.CALENDAR_GITHUB_TOKEN
    })
  
    await octokit.request('GET /repos/{owner}/{repo}/commits', getBodyForRequest(since, until, owner, repository, isForSearch))
      .then(response => data = response.data)
      .catch(error => console.log(error))
  
    
     data.forEach(element => {
        commits.push({
          date: DateTime.fromISO(element.commit.committer.date),
          name: element.commit.committer.name,
          message: element.commit.message
        })
     });

     if(isForSearch && commits.length > 0){
      sessionStorage.setItem('startDateOfCommits', commits[0].date.toString());
     }
  
     return commits
}

function getBodyForRequest(since, until, owner, repository, isForSearch){
  if(isForSearch){
    return {
      owner: owner,
      repo: repository,
      per_page: 100,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }
  }else{
    return {
      owner: owner,
      repo: repository,
      since: since,
      until: until,
      per_page: 100,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }
  }
}
