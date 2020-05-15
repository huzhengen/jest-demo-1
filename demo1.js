function person1(age) {
  return age >= 100 ? '期颐' : '小于100岁'
}

function person2(age) {
  return age >= 30 ? '而立' : '小于30岁'
}
module.exports = {
  person1, person2
}