import { DateTime } from 'luxon';
import getCommits from './commitUtils';
import getWeeksOfCurrentMonth from './dateUtils';

export default async function getWeeksWithCommits(currentDate){
    const weeks = getWeeksOfCurrentMonth(currentDate)
    let numberOfDays = currentDate.daysInMonth
    const firstDate = DateTime.local(currentDate.year, currentDate.month, 1)
    const lastDate = DateTime.local(currentDate.year, currentDate.month, numberOfDays)
    const commits = await getCommits(firstDate, lastDate);

    let weeksWithCommits = []

    for(const week of weeks){
        const weekWithCommits = getWeekWithCommits(week, commits)
        weeksWithCommits.push(weekWithCommits)
    }

    return weeksWithCommits
}

function getWeekWithCommits(days, commits){
    let weekWithCommits = []
  
    for(const day of days){
      const commitsInDay = commits.filter(c => c.date.day === day)
  
      weekWithCommits.push({
        day: day,
        commitsInDay: commitsInDay
      })
    }
  
    return weekWithCommits
  }