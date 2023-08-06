const peopleNames  = require('../country/state/city/index')
const  getFirstNames  = require('../utilites/utils/index');
const getPeopleInCity = (peopleNames)=>{
    return getFirstNames(peopleNames);
}
module.exports = getPeopleInCity;