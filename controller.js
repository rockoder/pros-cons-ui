app.controller('Ctrl', function($scope,$rootScope) {
	
	   $scope.count=false
       $scope.listItem = [];	
	
	 $scope.IsVisibleSubject = false;
	 $scope.IsVisiblePronsTitle = false;
	 $scope.IsVisibleConsTitle = false;
	 $scope.IsVisibleSubjectTextArea = false;
	 $scope.IsVisiblePronsTextArea = false;
	 $scope.IsVisibleConsTextArea = false;
	    
		  $scope.app = {
			subject: 'Enter subject here',
			  title:{prons:'Enter title here',cons:'Enter title here'
					}
		  };
			
	      $scope.addItem=function(){

            $scope.count=true;

           var newItemNo = $scope.listItem.length+1;
            $scope.listItem.push(newItemNo);
		 
            }
		  $scope.change=function(handle){
			  if(handle==''){
				 $scope.removeTask();
			  }
			  
		  }
		
		  
		  
		  
		   $scope.removeTask = function() {
        
            var removeItem = $scope.listItem.length-1;
            $scope.listItem.splice(removeItem);
          };
		     
            $scope.hidePronsTextArea = function () {
                
                $scope.IsVisiblePronsTextArea = $scope.IsVisiblePronsTextArea ? false : true;
            }
			  $scope.hideConsTextArea = function () {
                
                $scope.IsVisibleConsTextArea = $scope.IsVisibleConsTextArea ? false : true;
            }
			
			  $scope.hideSubjectTextArea = function () {
                
                $scope.IsVisibleSubjectTextArea = $scope.IsVisibleSubjectTextArea ? false : true;
            }
			
	
            $scope.ShowHideSubject = function () {
                
                $scope.IsVisibleSubject = $scope.IsVisibleSubject ? false : true;
            }
			$scope.ShowHidePronsTitle = function () {
              
                $scope.IsVisiblePronsTitle = $scope.IsVisiblePronsTitle ? false : true;
            }
			$scope.ShowHideConsTitle = function () {
               
                $scope.IsVisibleConsTitle = $scope.IsVisibleConsTitle ? false : true;
            }
            });

			app.directive('ngEnter', function () {
				return function (scope, element, attrs) {
					element.bind("keydown keypress", function (event) {
						if(event.which === 13) {
							scope.$apply(function (){
								scope.$eval(attrs.ngEnter);
							});

							event.preventDefault();
						}
					});
				};
			});