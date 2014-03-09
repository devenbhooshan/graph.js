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
	this.compare=compare;
	function addEdge(neighbour,weight){
		this.adjList.push(neighbour);
		this.weight.push(weight);	
	}
	
	function getAdjList(){
		return adjList;
	}
	function compare(node2){
		return this.weight-node2.weight;
	}
}