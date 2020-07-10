class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}
// then the graph class
class Graph {
  constructor(){
    this.nodes = [];
  }

// then lets make the addNode function which will allow for us to create a node
  addNode(value) {
    this.nodes.push(new Node(value))
  }

  getNode(value) {
    return this.nodes.find(node => node.value === value);
  }

  addEdges(value1, value2) {
    const firstNode = this.getNode(value1);
    const secondNode = this.getNode(value2);
    let visited = {};
    let flag = false
    const hasEdge = (start, target) => { // firstNode, firstNode
      /*
        Inputs: two nodes to be connected by edges
        Outputs: a boolean
        Constraints:
        Edge Cases: invalid nodes

        Look at both nodes, evaluate all of their edges recursively
          and if either contain either node, return false

        is this node real?
          if not return
        is this node equal to the target node?
        does this node have edges?
          if so, call on those edges
        return
      */
      if (start == target) {
        flag = true;
        return;
      }
      if (start.edges) {
        for (let node of start.edges) {
          hasEdge(node, target);
        }
      }
    }
    hasEdge(firstNode, secondNode);
    hasEdge(secondNode,firstNode);
    if (flag) {
      return `Sorry, you cannot add a edge with these two nodes: ${firstNode.value} and ${secondNode.value}, the graph would become cyclical`
    } else {
      firstNode.edges.push(secondNode);
      return `Edges, successfully added: ${firstNode.value} and ${secondNode.value}`
    }
  }

  printGraph() {
    /*
      prints the graph
        for each node
      assemble the string: node -> edge, edge, edge...
      print that string to the console  
    */
    for (let node of this.nodes) {
      let string = `${node.value} -> `
      if (node.edges.length) {
        for(let i = 0; i < node.edges.length; i++) {
          let edge = node.edges[i];
          if (i === 0) {
            string += `${edge.value}`
          } else {
            string += `,${edge.value}`
          }
        }
      } else {
        string += `No Children`;
      }
      console.log(string)
    }
    return `^ Graph printed above ^`
  }
}

const testGraph = new Graph();
testGraph.addNode(1);
testGraph.addNode(2);
testGraph.addNode(3);
testGraph.addNode(4);
testGraph.addNode(5);
testGraph.addNode(6);
testGraph.addEdges(1,2);
testGraph.addEdges(1,3);
testGraph.addEdges(1,4);
testGraph.addEdges(2,5);
testGraph.addEdges(3,6);
testGraph.addEdges(4,6);
testGraph.addEdges(4,3);
testGraph.addEdges(5,6);
// console.log(testGraph.addEdges(6,1));

console.log(`Graph print out line 392: `,testGraph.printGraph());