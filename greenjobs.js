/**
 * Analytics for green jobs data set.
 * Created by Clint on 9/29/2015.
 */

/* globals _, greenjobs */

/**
 * Provides a small set of green job records from the greenjobs dataset.
 * @type {Array}
 */
var testData = greenjobs.splice(0, 10);

/**
 * Returns a list of the industries providing green jobs.
 * @param data  The green jobs data set.
 * @returns  An array of strings indicating all industries represented in the data set.
 */
function listIndustries(data){
  return _.uniq(_.pluck(data, 'Industry'));
}

/**
 * Returns a record of all the County names and the number of jobs within each respective County.
 * @param data  The green jobs data set.
 * @returns  An object with keys as County County names, with values of the keys as the number of green jobs listed in each County.
 */
function countyGreenJobs(data){
  return _.countBy(data,function(num){
    return num['County'];
  });
}

/**
 * Reports the list of job titles that contain a keyword passed to this function.
 * @param data  The green jobs data set.
 * @param keyword  A keyword that is used to identify corresponding green job titles.
 * @returns  a list of job titles containing the passed keyword argument.
 */
function jobswithKeyword(data, keyword){
  var jobs = _.filter(data, function(num){ return num['Job Title'].indexOf(keyword) !== -1; });

  return _.pluck(jobs, 'Job Title');
}

/* Test code for this program. */
console.log(listIndustries(testData));
console.log(countyGreenJobs(testData));
console.log(jobswithKeyword(testData, 'PV'));
