//@author devenbhooshan

function Graph(){
	this.isWeighted=false;
	this.nodes=[]
	this.addNode=addNode;
	this.removeNode=removeNode;
	this.nodeExist=nodeExist;
	this.getAllNodes=getAllNodes;
	function addNode(Name){
		temp=new Node(Name);
		this.nodes.push(temp);
		return temp;
	}
	function removeNode(Name){
		
		index=this.nodes.indexOf(Name);
		if(index>-1){
			this.nodes.splice(index,1);
			len=this.nodes.length;

			for (var i = 0; i < len; i++) {
				if(this.nodes[i].adjList.indexOf(Name)>-1){
					this.nodes[i].adjList.slice(this.nodes[i].adjList.indexOf(Name));
					this.nodes[i].weight.slice(this.nodes[i].adjList.indexOf(Name));
				}
			}
		}
		
	}
	function nodeExist(Name){
		index=this.nodes.indexOf(Name);
		if(index>-1){
			return true;
		}
		return false;
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