function pq(){
		
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
		bh=new MinPQ();
		bh.push(node1,2);
		bh.push(node2,5);
		bh.push(node4,3);
		bh.push(node3,8);
		bh.push(node7,39);
		bh.push(node5,2);
		test='Priority Queue Test:<br>';
		error=false;
		if(!bh.remove(node1)==true){
			error=true;
			test+="not able to remove "+node1.name+"<br>";
		}
		if(!bh.top()==node5){
			error=true;
			test+="Top element error-Expected:"+node5.name+" Found:"+bh.top().name+"<br>";
		}
		if(!(bh.remove(node1)==false)){
			error=true;
			test+="Should not present but found node : "+node1.name+"<br>";
		}
		if(!error) test+="All is well<br>";
		document.getElementById('test').innerHTML+=test;
}