
const cities = [
 {isVisited:true, name: 'Tokyo'}, 
 {isVisited:false, name: 'Madagascar'},
 {isVisited:true, name: 'Amsterdam'}, 
 {isVisited:false, name: 'Seul'}
];

const visitCities = cities.map((city) => 
  (city.isVisited === true) ? `${city.name} visited` : city.name);

     console.log(visitCities);
