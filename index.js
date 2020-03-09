// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(driver, key, value){
    // 1) "before each" hook for "returns a driver with the original key value 
    // pairs and the new key value pair"
    let newObj = {...driver}
    newObj[key] = value
    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    // 2) updates `driver` with the given `key` and `value` (it is destructive) 
    // and returns the entire updated driver
    driver[key] = value
    return driver

}

function deleteFromDriverByKey(driver, key){
    key="name"
    //   3) deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
    //   4) does not modify the original driver (it is non-destructive)
    let newObj = {...driver}
    delete newObj[key]
    return newObj
    
}
      
function destructivelyDeleteFromDriverByKey(driver, key){
    // 5) returns driver without the delete key/value pair
    // 6) modifies the original driver
    delete driver[key];
    return driver
   
}
      
// drivers
// updateDriverWithKeyAndValue(driver, key, value)
//   ✓ returns a driver with the original key value pairs and the new key value pair
//   ✓ it does not modify the original driver, but rather returns a clone with the new data
// destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
//   ✓ updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
// deleteFromDriverByKey(driver, key)
//   ✓ deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
//   ✓ does not modify the original driver (it is non-destructive)
// destructivelyDeleteFromDriverByKey(driver, key)
//   ✓ returns driver without the delete key/value pair
//   ✓ modifies the original driver