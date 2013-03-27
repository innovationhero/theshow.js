var $scope;
var app = angular.module('myApp', []);

function GridsterCntrl($scope) {
				  $scope.widgets = [
									    {showid: "1one", text:'Widget #1', datarow:1, datacol:1, datasizex:1, datasizey:1},
											{showid: "2one", text:'Widget #2', datarow:2, datacol:1, datasizex:1, datasizey:1},
											{text:'Widget #3', datarow:1, datacol:2, datasizex:1, datasizey:1},
											{text:'Widget #4', 	
															datarow:2, datacol:2,
															datasizex:1, datasizey:1}
				  ];
//angular.element("li").attr("data-col","2");



// consol.log(					angular.element('li').css("color"));
					$scope.shadow = "shadow";
	//				consol.log(angular.element('li').text('data_col'));
	//					consol.log(angular.element('li'));

};


$(function(){ //DOM Ready
				    $(".gridster ul").gridster({
										        widget_margins: [5, 5],
										        widget_base_dimensions: [40, 40],
/*	draggable: {
								stop: function(event, ui) {
																consol.log('save new columns');
																			},
													handle: '.title'
												}*/
							    });
});


app.directive('theshow', function(){
				  return{

									  restrict: 'AE',
				      replace: true,
				      template: '<div class="gridster">' +
												'		<ul> ' +
												'	<li ng-model="showid" ng-model="widget.datarow"   ng-repeat="widget in widgets"	data-showid= "{{widget.showid}}"	data-row="{{widget.datarow}}"	data-col="{{widget.datacol}}"	data-sizex="{{widget.datasizex}}"	data-sizey="{{widget.datasizey}}"	class="{{shadow}}" class=" .title">' +
'row= {{widget.datarow}} / col= {{widget.datacol}}' +
												'</li>' +
												'</ul>' +
												'</div>',

     link: function(scope, element, attrs) {
					 // Title element
				   element.bind('blur keyup change', function() {
					 scope.$apply(read);
					   });
					 var input = element.children();

									 function read() {
										 scope.title = input.val();
									 }
				  }
	}
});
/*
var block = angular.element('	<li	data-row="{{widget.datarow}}"	data-col="{{widget.datacol}}"	data-sizex="{{widget.datasizex}}"	data-sizey="{{widget.datasizey}}"> ' + '	{{widget.text}}, Row:{{widget.datarow}}, Col:{{widget.datacol}}		from angular element:	{{widget.text}}, Row:{{ngdatasizex }}, Col:{{widget.datacol}}	</li>			'	);	



				      template: '<div id="fountainG">' +
				       '<div class="fountainG" id="fountainG_1"></div>' +
				  '<div class="fountainG" id="fountainG_2"></div>' +
				  '<div class="fountainG" id="fountainG_3"></div>' +
				  '<div class="fountainG" id="fountainG_4"></div>' +
				  '<div class="fountainG" id="fountainG_5"></div>' +
				  '<div class="fountainG" id="fountainG_6"></div>' +
				  '<div class="fountainG" id="fountainG_7"></div>' +
				  '<div class="fountainG" id="fountainG_8"></div>' + '</div>',
*/

