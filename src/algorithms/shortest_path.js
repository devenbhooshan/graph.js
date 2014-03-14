


function dijkstra(graph,source,destination){

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
					pq.remove(v);
					pq.push(v,this.distance[v.name]);
				}
			}
		}
	}
	
	return this.distance[destination.name];
}

function bellman_ford(graph,source,destination){
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
						this.distance[v.name]=alt;
					}
				}
			}
		}
	}

	for(var j=0;j<length;j++){
		u=nodes[i];
		adjList=u.adjList;
		for (var i = 0; i < adjList.length; i++) {
			v=adjList[i];
			if(this.distance[u.name]!=Number.POSITIVE_INFINITY){	
				alt=this.distance[u.name]+u.weight[i];
				if(alt<this.distance[v.name]){
					return false;
				}
			}
		}
	}
	
	return this.distance[destination.name];	

}