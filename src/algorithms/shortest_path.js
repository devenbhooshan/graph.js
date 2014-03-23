


function dijkstra(graph,source,destination){

	this.previousNode=[];
	this.distance=new Array();				
	this.distance[source.name]=0;
	this.pq=new MinPQ();
	var nodes=graph.getAllNodes();
	length=nodes.length;
	for(var i=0;i<length;i++){
		if(nodes[i]!=source){
			this.distance[nodes[i].name]=Number.POSITIVE_INFINITY;
		}
		pq.push(nodes[i],this.distance[nodes[i].name]);
	}
	
	while(pq.size()!=0){
		u=pq.pop();
		adjList=u.adjList;
		for (var i = 0; i < adjList.length; i++) {
			v=adjList[i];
			if(this.distance[u.name]!=Number.POSITIVE_INFINITY){
				alt=this.distance[u.name]+u.weight[i];
				if(alt<this.distance[v.name]){
					this.distance[v.name]=alt;
					this.previousNode[v.name]=u.name;
					pq.remove(v);
					pq.push(v,this.distance[v.name]);
				}
			}
		}
	}
	if(typeof destination==='undefined'){

	}else 
	return this.distance[destination.name];
}

function bellman_ford(graph,source,destination){
	this.previousNode=[];
	this.distance=new Array();				
	this.distance[source.name]=0;
	var nodes=graph.getAllNodes();
	length=nodes.length;
	for(var i=0;i<length;i++){
		if(nodes[i]!=source){
			this.distance[nodes[i].name]=Number.POSITIVE_INFINITY;
		}
	}
	
	for(var k=0;k<length;k++){
		for(var j=0;j<length;j++){
			u=nodes[j];
			adjList=u.adjList;
			for (var i = 0; i < adjList.length; i++) {
				v=adjList[i];
				if(this.distance[u.name]!=Number.POSITIVE_INFINITY){	
					alt=this.distance[u.name]+u.weight[i];
					if(alt<this.distance[v.name]){

						this.previousNode[v.name]=u.name;
						this.distance[v.name]=alt;
					}
				}
			}
		}
	}

	for(var j=0;j<length;j++){
		u=nodes[j];
		adjList=u.adjList;
		for (var i = 0; i < adjList.length; i++) {
			v=adjList[i];
			if(this.distance[u.name]!=Number.POSITIVE_INFINITY){	
				alt=this.distance[u.name]+u.weight[i];
				if(alt<this.distance[v.name]){
					return null;
				}
			}
		}
	}
	
	return this.distance[destination.name];	

}

function johnson(graph){
	try
	{
		// http://en.wikipedia.org/wiki/Johnson%27s_algorithm
		temp=new Node('temp');
		graph.addNode(temp);
		nodes=graph.getAllNodes();
		length=nodes.length;
		for(var j=0;j<length-1;j++){
			u=nodes[j];
			temp.addEdge(u,0);
		}
		vari=bellman_ford(graph,temp,temp);
		if(vari==null) {
			return null;
		}
		bell=new bellman_ford(graph,temp,temp);
		length=nodes.length;
		h=bell.distance;
		graph.removeNode(temp);		
		length=nodes.length;
		for(var j=0;j<length;j++){
			u=nodes[j];
			adjList=u.adjList;
			for (var i = 0; i < adjList.length; i++) {
				v=adjList[i];
				u.weight[i]=u.weight[i]+h[u.name]-h[v.name];
			}
		}	
		distanceMatrix=new Array()
		length=nodes.length;
		for(var j=0;j<length;j++){
			u=nodes[j];
			list=u.weight;
			len=list.length;
			dij=new dijkstra(graph,nodes[j]);
			distanceMatrix[nodes[j].name]=dij.previousNode;
			
		}
		for(var j=0;j<length;j++){
			u=nodes[j];
			adjList=u.adjList;
			for (var i = 0; i < adjList.length; i++) {
				v=adjList[i];
				u.weight[i]=u.weight[i]-h[u.name]+h[v.name];
			}
		}
	}
	catch(e)
	{
		console.log(e);
	}
	return distanceMatrix;	
}