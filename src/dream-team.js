const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const initials = [];
  if (!Array.isArray(members)) {
    return false; 
  } else {
    members.forEach((member) => {
      if (typeof member === "string") {
        let trimmedMember = member.trim(); 
        initials.push(trimmedMember[0].toUpperCase());
      }
    });
  }
  
  const sortedInitials = initials.sort().join("");
  return sortedInitials;
}
module.exports = {
  createDreamTeam
};
