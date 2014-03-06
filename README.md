graph.js
========

A liteweight javascript graph library. 


    graph =new Graph(); // creates a graph
    node1=graph.AddNode("India"); // creates a node
    node2=graph.AddNode("Delhi"); // creates a node
    node1.addEdge(node2);         // Adds an edge between node1 & node2
    console.log(node1.adjList);   // returns all neighbouring nodes of nod1
		console.log(node2.adjList);   // returns all neighbouring nodes of nod2
		console.log(graph.nodes.length); // returns number of nodes in graph
    
