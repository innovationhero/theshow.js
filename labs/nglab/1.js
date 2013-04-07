// Gridster Jquery Plugin initialization
$(function(){ //DOM Ready
				    $(".gridster ul").gridster({
										        widget_margins: [8, 8],
										        widget_base_dimensions: [10, 10],
							    });
});
var app = angular.module('myApp', []);

// GridsterCntrl 
function GridsterCntrl($scope) {
			  $scope.widgets = [
									    {showid: "fibonacci 3", text:'Widget #1', datarow:1, datacol:1, datasizex:5, datasizey:3},
											{showid: "fibonacci 5", text:'Widget #2', datarow:4, datacol:1, datasizex:5, datasizey:5},
											{showid: "fibonacci 8", text:'Widget #3', datarow:1, datacol:6, datasizex:8, datasizey:8},
				  ];
					$scope.shadow = "shadow";
//					console.debug("no of widgets(blocks) loaded "+ $scope.widgets.length);
//					console.debug("no of widgets(blocks) loaded "+ $scope.widgets[0].text);
/*					$scope.moveit = function(){
						
					}; */
};

// theshow Directive
app.directive('theshow', function(){
				  return{
						  restrict: 'AE',
				      replace: true,
//					    scope: {},//Must be emty? To fix this, simply supply an empty scope object outside of the linking function. Angular takes this to mean that this object has its own scope, and that the scope is private to each instance of the directive.


//							scope: {
//					            datarow: '=',
//				        },

				      template: '<div class="gridster">' +
												'<ul> ' +
												'	<li  ng-repeat="widget in widgets"  ng-click="fitnessSwap()" ng-model="datacol" data-row="{{widget.datarow}}" data-col="{{widget.datacol}}"	data-sizex="{{widget.datasizex}}"	data-sizey="{{widget.datasizey}}"	class="{{shadow}}" class=".title">' +
'row= {{widget.datarow}}  col= {{widget.datarow}}  x={{widget.datasizex}} y={{widget.datasizey}}' +
												'</li>' +
												'</ul>' +
												'</div>',

						  link: function(scope, element, attrs, ctrl) {
							var ablock = element.find(".gridster ul");
								scope.partyMode = false;
									console.debug("party mode  " + scope.partyMode);
								scope.party = function(){
									scope.partyMode = true;
									ablock.text =  "i am clicked";
									console.debug(ablock.showid);
									console.debug("party mode  " + scope.partyMode);
								}
								scope.fitnessSwap = function(){
								//angular.element.Gridster.move_widget_to(this.widget, 4);
				       console.log(ablock.attr("data-col"));			
						
						
//								console.log(angular.element.Gridster.can_go_up(this.widget));
//									console.debug("fitness funtion is fired, when a block is clicked its size increases according to the golden ratio ");
//									console.log(this.widget.datacol);
//									console.log(this);
									
								}
									scope.anychange = function(){
								//TODO n-change event	
									console.debug('whatever i want to fire whenver any change happens to the blocks');
									}
//									console.log(attrs.widget),
/*								 attrs.$observe('datarow', function(value) {
										 console.log('data-row has changed value to ' + value);
								 });
							},
						/*	compile: function(s,s,s){

							}*/
					}
				}
});

/*
/////////////////////////////////////////////////////////
/////////  http://jsfiddle.net/ThmeZ/10/
/////////////////////////////////////////////////////////
function slideshow( $scope, $timeout ) {
				    $scope.images = [
										        {src: 'http://imaging.nikon.com/lineup/dslr/d800/img/sample01/img_01.png'},
										        {src: 'http://imaging.nikon.com/lineup/dslr/d800/img/sample01/img_02.png'},
														        {src: 'http://imaging.nikon.com/lineup/dslr/d800/img/sample01/img_03.png'}
						    ];
								    
								    $scope.imgIndex = 0;
										    $timeout(function advanceSlide() {
																        $scope.imgIndex = ($scope.imgIndex + 1) % $scope.images.length; 
																				        $timeout(advanceSlide, 5000);
																								    });
}
app.directive('contentshow', function(){
				  return{
						  restrict: 'AE',
				      replace: true,
							scope: {
					            datarow: '=',
				        },

				      template: '<div ng-app ng-controller="slideshow">' + 
														'<img ng-src="{{images[imgIndex].src}}">' +
												'</div>',

						  link: function(scope, element, attrs) {
									console.log(attrs.widget),
								 attrs.$observe('datarow', function(value) {
										 console.log('data-row has changed value to ' + value);
								 });
							},
						/*	compile: function(s,s,s){

	}
});

*/
