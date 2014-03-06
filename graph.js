//@author devenbhooshan

function Graph(){
	this.nodes=[]
	this.addNode=addNode;

	function addNode(Name){
		temp=new Node(Name);
		this.nodes.push(temp);
		return temp;
	}

	function getAllNodes(){
		return nodes;
	}

}

function Node(Name){
	this.name=Name;
	this.adjList=[];
	this.addEdge=addEdge;


	function addEdge(neighbour){
		this.adjList.push(neighbour);	
	}


	function getAdjList(){
		return adjList;
	}
}