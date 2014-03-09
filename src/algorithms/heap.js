

function binaryHeap(){
	this.nodes=[];
}

binaryHeap.prototype.size=function(){
		return this.nodes.length;
};

binaryHeap.prototype.compare = function(node1,node2) {
	return node1.priority-node2.priority;
};
binaryHeap.prototype.insert_push = function(element) {
	this.nodes.push(element);
	this.bubbleUp(this.nodes.length-1);
};

binaryHeap.prototype.remove_pop = function() {
	var ans=this.nodes[0];
	var last_element=this.nodes.pop();
	
	if(this.nodes.length> 0){
		this.nodes[0]=last_element;
		this.sinkDown(0);
	}
	return ans;
};

binaryHeap.prototype.delete_node = function(node) {
	var length=this.nodes.length;
	isPresent=false;
	for (var i = 0; i < length; i++) {
		if((this.nodes[i].content!=node)) continue;
		var end=this.nodes.pop();
		if(i==length-1) break;
		this.nodes[i]=end;
		this.bubbleUp(i);
		this.sinkDown(i);
		isPresent=true;
		break;
	}
	return isPresent;
};

binaryHeap.prototype.top = function() {
	return this.nodes[0];
};

binaryHeap.prototype.sinkDown = function(i) {
	var length=this.nodes.length;	
	while(true && i<length){
		var flag=0;
		if(2*i+1 < length && this.compare(this.nodes[i],this.nodes[2*i+1])>0){
			if(2*i+2< length && this.compare(this.nodes[2*i+1],this.nodes[2*i+2])>0){
				flag=2;
			}else{
				flag=1;
			}	
		}else if( 2*i+2 < length && this.compare(this.nodes[i],this.nodes[2*i+2])>0){
			flag=2;
		}else {
			break;
		}
			var temp=this.nodes[2*i+flag];
			this.nodes[2*i+flag]=this.nodes[i];
			this.nodes[i]=temp;
			i=2*i+flag;
	}
};


binaryHeap.prototype.bubbleUp = function(i) {
	
	var length=this.nodes.length;	
	while(i>0){
		var index=Math.floor((i+1)/2)-1;
		//console.log(this.compare(this.nodes[i],this.nodes[index]));
		if(this.compare(this.nodes[i],this.nodes[index])<0){
			//console.log(this.nodes[i].priority+' '+this.nodes[index].priority);
			var temp=this.nodes[index];
			this.nodes[index]=this.nodes[i];
			this.nodes[i]=temp;
			i=index;
		}else {
			break;
		}
			
	}
};
