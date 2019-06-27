const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const charsInLighthouses = (data) => data.map(x => x.length);

console.log(charsInLighthouses(lighthouses));