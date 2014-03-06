//@author devenbhooshan

function Graph(){
	this.isWeighted=false;
	this.nodes=[]
	this.addNode=addNode;
	this.getAllNodes=getAllNodes;
	function addNode(Name){
		temp=new Node(Name);
		this.nodes.push(temp);
		return temp;
	}

	function getAllNodes(){
		return this.nodes;
	}
	
	function getBFSTravaersal(){

	}

	function getBFSTravaersal(){
		
	}
	
	function getBFSTravaersal(){
		
	}

}

function Node(Name){
	this.name=Name;
	this.adjList=[];
	this.weight=[];
	this.addEdge=addEdge;

	function addEdge(neighbour,weight){
		this.adjList.push(neighbour);
		this.weight.push(weight);	
	}
	
	function getAdjList(){
		return adjList;
	}
}
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