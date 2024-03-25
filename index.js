function findMatching(names, query) {
    return names.filter(name => name.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(names, query) {
    return names.filter(name => name.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}

const drivers = [
    { name: "Bob", hometown: "Nairobi" },
    { name: "Van", hometown: "Kisumu" },
    { name: "Ian", hometown: "Kisii" }
];

console.log(findMatching(["Bob", "Van", "Ian"], "Van"));
console.log(fuzzyMatch(["Bob", "Van", "Ian"], "V"));
console.log(matchName(drivers, "Bob"));
