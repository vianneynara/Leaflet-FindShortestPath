import Graph from "../classes/Graph.js";
import PERSIMPANGAN from "../../persimpangan.js";
import RUMAH_SAKIT from "../../rumahsakit.js";

const graph = new Graph();

const fullVertices = PERSIMPANGAN.concat(RUMAH_SAKIT);

fullVertices.forEach(vertexData => {
    // console.log(vertexData);
    graph.createVertex(vertexData.id, vertexData.vertexType, vertexData.latitude, vertexData.longitude, vertexData.label, vertexData.neighborIds, true);
});

// const testVertexId = "rs-dr-sardjito"; console.log(`[DEBUGGING] neighbors of ${testVertexId}`); console.log(graph.getVertex(testVertexId).getNeighborIds()); throw new Error("Stop here");
// console.log(graph.getVertices());

// console.log(graph.getVertex("itc-1").getNeighborIds());

const startId = "itc-57";
// const goalId = "rs-drs-hardjolukito";
// { id: "rs-gaada", vertexType: 'hospital', latitude: -7.81485173520654325, longitude: 110.38163959980212, label: 'DOES NOT EXIST', neighborIds: [] }
const goalId = "rs-gaada";
// const goalId = null;
const algorithm = 'dijkstra';
const result = graph.computeShortestRoute(startId, goalId, algorithm);
if (result == []) {
    console.log('No path found');
}
console.log(`Algorithm: ${algorithm}`);
console.log(result.toJSON());
result.printRoutes();