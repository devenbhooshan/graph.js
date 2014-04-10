
//Minimum Spanning Tree

function prim(graph){

	nodes=graph.getAllNodes();
	this.error=false;
	this.Vnode=[];
	this.Vedge=[];
	this.Vnode.push(nodes[0]);

	this.pq=new MinPQ();
	
	this.InsertEdgeIntoPQ(nodes[0],this.pq)
	
	while(this.Vnode.length!=nodes.length){

		if(this.pq.size()==0){ 
			this.error=true;
			return ;
		}

		while(this.pq.size()!=0){

			minEdge=this.pq.pop();
			if(this.Vnode.indexOf(minEdge[1])==-1){

				this.Vedge.push(minEdge);
				this.Vnode.push(minEdge[1]);
				this.InsertEdgeIntoPQ(minEdge[1],this.pq);
				break;
			}

		}
	}
	return;
}

prim.prototype.InsertEdgeIntoPQ = function(node,pq) {
	adjList=node.adjList;
	wights=node.weight;
	for (var i = 0; i < adjList.length; i++) {
		temp=[];
		temp.push(node);
		temp.push(adjList[i]);
		pq.push(temp,wights[i]);		
	}
}

function kruskal(graph){
	node = graph.getAllNodes();
	nodes=graph.getAllNodes();
	this.error=false;
	this.Vnode=[];
	this.Vedge=[];
	var i = 0;

	this.pq=new MinPQ();
	while(i<nodes.length){
		this.InsertEdgeIntoPQ(nodes[i],pq);
		i++;
	}

	while(this.Vnode.length!=nodes.length && this.pq.size()!=0){
		minEdge=this.pq.pop();
		if(this.Vnode.indexOf(minEdge[1])==-1 && this.Vnode.indexOf(minEdge[0])==-1){
			this.Vedge.push(minEdge);
			this.Vnode.push(minEdge[1]);
			this.Vnode.push(minEdge[0]);
		}
		else if(this.Vnode.indexOf(minEdge[1])!=-1 && this.Vnode.indexOf(minEdge[0])==-1){
			this.Vedge.push(minEdge);
			this.Vnode.push(minEdge[0]);
		}
		else if(this.Vnode.indexOf(minEdge[1])==-1 && this.Vnode.indexOf(minEdge[0])!=-1){
			this.Vedge.push(minEdge);
			this.Vnode.push(minEdge[1]);
		}
		else{
			continue;
		}

	}
	if(this.pq.size()==0 && this.Vnode.length!=nodes.length){ 
			this.error=true;
			return ;
	}
	return;
}

kruskal.prototype.InsertEdgeIntoPQ = function(node,pq) {
	adjList=node.adjList;
	weights=node.weight;
	for (var i = 0; i < adjList.length; i++) {
		temp=[];
		temp.push(node);
		temp.push(adjList[i]);
		pq.push(temp,weights[i]);		
	}
}

