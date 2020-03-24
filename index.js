// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value }); 
    // const updateDriver = Object.assign({}, driver)
    // updateDriver[key] = value
    // return updateDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    // return Object.assign(driver, {[key]: value });
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const cloneOfDriver = Object.assign({}, driver);
    delete cloneOfDriver[key];
    return cloneOfDriver;

}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}
