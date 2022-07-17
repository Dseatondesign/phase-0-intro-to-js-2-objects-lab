// Write your solution in this file!
const employee = {
    name: 'John',
    streetAddress: '30 eucalyptus drive'
};
  
function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObject = {...object};
    newObject[key] = value;
    return newObject;
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value
    return object;
}
function deleteFromEmployeeByKey(object, key) {
    const newObject = {...object};
    delete newObject[key];
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}
