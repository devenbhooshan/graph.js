

function MinPQ(list){
	
	bh=new binaryHeap();
	this.heap=bh;
}

MinPQ.prototype.push=function(node,priority){
	var temp=new MinPQNodes(node,priority);
	this.heap.insert_push(temp);
};

MinPQ.prototype.pop=function(){
	return this.heap.remove_pop().content;
};


MinPQ.prototype.remove=function(node){
	return this.heap.delete_node(node);
};

MinPQ.prototype.top=function(){
	return this.heap.top().content;
};
MinPQ.prototype.size=function(){
	return this.heap.size();
};

function MinPQNodes(content,priority){
	this.content=content;
	this.priority=priority;
}