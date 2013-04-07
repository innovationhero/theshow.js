
var theshow = function(){
				  this.addIdea = function(idea) {
							
					}
					
					this.removeIdea = function(idea) {
							
					}

					this.updateIdea = function(idea, update) {
							
					}
}


// idea is a jquery gridster element  
var idea = function(x,y,width,height){

					this.addBlock = function() {
							this.addClass('success');
							this.removeClass('error');
							this.removeClass('down');
							this.removeClass('unstable');
						}

					this.deleteBlock = function() {
							this.addClass('error');
							this.removeClass('success');
							this.removeClass('down');
							this.removeClass('unstable');
					  }
}

var block = function(){

}

var frag = function(){

}
