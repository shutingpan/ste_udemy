class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Write a method called addVertex, which accepts a name of a vertex
  // It should add a key to the adjacency list with the name of the vertec and set its value to be an empty array
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // ADDING AN EDGE
  // this function should accept 2 vertices, we can call them vertex1 and vertex2.
  // the function should find in the adjacency list the key of vertex1 and push vertex2 to the array
  // the function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  // dont worry about handling errors/invalid vertices
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // REMOVING AN EDGE
  // this function should accept two vertices, we'll call them vertex1 and vertex2
  // the function should reassign the key of vertex1 to be an array that does not contain vertex2
  // the function should reassign the key of vertex2 to be an array that does not contain vertex1
  // dont worry about handling errors/invalid vertices
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  // REMOVING A VERTEX
  // the function should accept a vertex to remove
  // the function should loop as long as there are any other vertices in the adjacency list for that vertex
  // inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  // delete the key in the adjacency list for that vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbour => {
        // if any not visited yet
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex("Tokyo");
// g.adjacencyList["Tokyo"].push("SOMTHIG");
g.addVertex("Tokyo");
g.addVertex("Dallas");
g.addVertex("Hong Kong");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Dallas", "Hong Kong");
g.removeEdge("Dallas", "Aspen");
console.log(g);
g.removeVertex("Hong Kong");
console.log(g);

let g2 = new Graph();
g2.addVertex("A");
g2.addVertex("B");
g2.addVertex("C");
g2.addVertex("D");
g2.addVertex("E");
g2.addVertex("F");

g2.addEdge("A", "B");
g2.addEdge("A", "C");
g2.addEdge("B", "D");
g2.addEdge("C", "E");
g2.addEdge("D", "E");
g2.addEdge("D", "F");
g2.addEdge("E", "F");

console.log(g2.depthFirstRecursive("A"));
console.log(g2.depthFirstIterative("A"));
console.log(g2.breadthFirst("A"));
