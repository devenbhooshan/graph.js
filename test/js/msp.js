function msp(){

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

		node1.addEdge(node2,11);
		node2.addEdge(node1,5);

		node1.addEdge(node4,12);
		node4.addEdge(node1,2);

		node2.addEdge(node3,8);
		node3.addEdge(node2,8);

		node4.addEdge(node3,4);
		node3.addEdge(node4,4);

		node3.addEdge(node5,7);
		node5.addEdge(node3,7);

		node2.addEdge(node6,6);
		node6.addEdge(node2,6);

		node6.addEdge(node7,5);
		node7.addEdge(node6,5);
		
		node5.addEdge(node8,6);
		node8.addEdge(node5,6);

		node5.addEdge(node9,12);
		node9.addEdge(node5,12);

		node8.addEdge(node10,4);
		node10.addEdge(node8,4);
		
		node9.addEdge(node10,3);
		node10.addEdge(node9,3);
		
		error=false;
		test='Minimum Spanning Tree Test:<br>';		
		
		
		if(kruskal(graph).error==true){
			error=true;
			test+='Graph is not connected<br>';
		}
		ans=[[1,2],[2,6],[6,7],[2,3],[3,4],[3,5],[5,8],[8,10],[10,9]]
		Vedge=msp.Vedge;
		for (var i = 0; i < Vedge.length; i++) {
			if(ans[i][0]!=Vedge[i][0].name || ans[i][1]!=Vedge[i][1].name ){
				error=true;
				test+='Prime returned:'+Vedge[i][0].name+'->'+Vedge[i][1].name+'but expected'+ans[i][0]+'->'+ans[i][1];
				break;
			}
		}

		if(prim(graph).error==true){
			error=true;
			test+='Graph is not connected<br>';
		}
		ans=[[1,2],[2,6],[6,7],[2,3],[3,4],[3,5],[5,8],[8,10],[10,9]]
		Vedge=msp.Vedge;
		for (var i = 0; i < Vedge.length; i++) {
			if(ans[i][0]!=Vedge[i][0].name || ans[i][1]!=Vedge[i][1].name ){
				error=true;
				test+='Prime returned:'+Vedge[i][0].name+'->'+Vedge[i][1].name+'but expected'+ans[i][0]+'->'+ans[i][1];
				break;
			}
		}

		if(!error) test+="All is well<br>";
		
		document.getElementById('test').innerHTML+=test;

}



