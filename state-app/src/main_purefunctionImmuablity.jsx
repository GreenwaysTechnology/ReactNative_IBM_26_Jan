
//impure function
// function updateProfile(profile, city) {
//     //update the city
//     profile.city = city
//     return profile
// }

//apply immutablity principle to convert impure into pure
function updateProfile(profile, city) {
    //immutablity : return new Object every time
    //in order to create new object , js provides three ways
    //way -1 
    // return {
    //     name: profile.name,
    //     city: city
    // }
    //way -2 
    // return Object.assign({}, profile, { city: city })
    //way -3 : using es 7 spread operator
    return { ...profile, city: city }
}

let profile = {
    name: 'Subramanian Murugan',
    city: 'Chennai'
}
console.log('Before update', profile)
const result = updateProfile(profile, 'Coimbatore')
//if you get result as "same Object" which is called impure, different means pure
console.log(profile === result ? "Same Object" : "Different Object")
console.log('After update', result)