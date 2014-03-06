
function bfs(graph){
	ans=[];
	traversedNodes=[];
	traversedNodes.push(graph.nodes[0]);
	allNodes=graph.getAllNodes();
	marked={};
	while(traversedNodes.length!=0){
		var v=traversedNodes.shift();
		marked[v.name]=true;
		console.log(v);
		ans.push(v);
		adjList=v.adjList;
		for (var i=0;i<adjList.length;i++){
			u=adjList[i];
			if(marked[u.name]!=true){
				traversedNodes.push(u);
				marked[u.name]=true;

			}
		}			
	}
	return ans;
}


function dfs(graph){
	ans=[];
	traversedNodes=[];
	traversedNodes.push(graph.nodes[0]);
	allNodes=graph.getAllNodes();
	marked={};
	while(traversedNodes.length!=0){
		var v=traversedNodes.pop();
		marked[v.name]=true;
		adjList=v.adjList;
		console.log(v);
		ans.push(v);
		for (var i=0;i<adjList.length;i++){
			u=adjList[i];
			if(marked[u.name]!=true){
				traversedNodes.push(u);
				marked[u.name]=true;
			}
		}			
	}
	return ans;
}