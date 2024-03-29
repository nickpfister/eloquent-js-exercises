const graph = require("./graph");

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall"
];

// exports.roadGraph = function() {
//   let roadArray = [];
//   for (let connection of roads) {
//     roadArray.push(connection.split("-"));
//   }
//   return graph.buildGraph(roadArray);
// };

// Shorter example from the solution
exports.roadGraph = graph.buildGraph(roads.map(r => r.split("-")));
