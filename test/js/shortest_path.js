function shortest_path(){
		graph =new Graph();
		node1=graph.addNode("1");
		node2=graph.addNode("2");
		node3=graph.addNode("3");
		node4=graph.addNode("4");
		node5=graph.addNode("5");
		node6=graph.addNode("6");
		node7=graph.addNode("7");
		node8=graph.addNode("8");
		node9=graph.addNode("9");
		node10=graph.addNode("10");
		
		node1.addEdge(node2,1);
		node1.addEdge(node4,2);
		node2.addEdge(node3,5);
		node4.addEdge(node3,14);
		node3.addEdge(node5,17);
		node2.addEdge(node6,4);
		node6.addEdge(node7,5);
		node5.addEdge(node8,6);
		node5.addEdge(node9,12);
		node8.addEdge(node10,4);
		node9.addEdge(node10,3);
		
		var test='';

		test+='Shortest Path Test:<br>';
		error=false;
		
		if(!dijkstra(graph,node1,node3)==6){
			error=true;
			test+="Disktra returns:"+dijkstra(graph,node1,node3)+" but should return :6 <br>";
		}
		
		if(!bellman_ford(graph,node6,node10)==Number.POSITIVE_INFINITY){
			error=true;
			test+="bellman_ford returns:"+bellman_ford(graph,node6,node10)+" but should return :POSITIVE_INFINITY <br>";	
		}

		if(!dijkstra(graph,node1,node10)==bellman_ford(graph,node1,node10))
		{
			error=true;
			test+="Disktra and bellman_ford returning different values- Dijkstra:"+dijkstra(graph,node1,node10)+" bellman_ford:"+bellman_ford(graph,node1,node10);
		}


		// Negative Edges

		graph =new Graph();
		node1=graph.addNode("1");
		node2=graph.addNode("2");
		node3=graph.addNode("3");
		node4=graph.addNode("4");
		node5=graph.addNode("5");
		node6=graph.addNode("6");
		node7=graph.addNode("7");
		node8=graph.addNode("8");
		node9=graph.addNode("9");
		node10=graph.addNode("10");
		
		node1.addEdge(node2,1);
		node1.addEdge(node4,1);
		node2.addEdge(node3,-1);
		node4.addEdge(node5,-4);
		node3.addEdge(node6,-2);
		node3.addEdge(node7,-2);
		node5.addEdge(node6,-1);
		node6.addEdge(node7,-1);
		node7.addEdge(node8,-3);
		node6.addEdge(node9,3);
		
			if(!(bellman_ford(graph,node6,node10)==Number.POSITIVE_INFINITY)){
				error=true;
				test+="bellman_ford returns:"+bellman_ford(graph,node6,node10)+" but should return :POSITIVE_INFINITY <br>";	
			}
			if(!(bellman_ford(graph,node1,node9)==-1)){
				error=true;
				test+="bellman_ford returns:"+bellman_ford(graph,node1,node9)+" but should return :-1 <br>";	
			}
			if(!(bellman_ford(graph,node1,node6)==-4)){
				error=true;
				test+="bellman_ford returns:"+bellman_ford(graph,node1,node6)+" but should return :-1 <br>";	
			}		
		

		// For cycle checking
		node6.addEdge(node1,1);
		iscycle=false;
		if((bellman_ford(graph,node1,node6)==false)){
			iscycle=true;
		}		
		if(!iscycle) {
			error=true;
			test+="Was not able to find cycle<br>";
		}
	
		if(error==false) test+='All is well<br>';
		document.getElementById('test').innerHTML+=test;

}