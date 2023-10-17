function dijkstra(graph, startNode) {
  const distances = {};
  const previousNodes = {};
  const unvisitedNodes = Object.keys(graph);

  unvisitedNodes.forEach(node => {
    distances[node] = Infinity;
  });

  distances[startNode] = 0;

  while (unvisitedNodes.length > 0) {
    const currentNode = unvisitedNodes.reduce((minNode, node) => {
      if (distances[node] < distances[minNode]) {
        return node;
      } else {
        return minNode;
      }
    }, unvisitedNodes[0]);

    const neighbors = graph[currentNode];

    for (let neighbor in neighbors) {
      const tentativeDistance = distances[currentNode] + neighbors[neighbor];
      if (tentativeDistance < distances[neighbor]) {
        distances[neighbor] = tentativeDistance;
        previousNodes[neighbor] = currentNode;
      }
    }

    unvisitedNodes.splice(unvisitedNodes.indexOf(currentNode), 1);
  }

  return { distances, previousNodes };
}
