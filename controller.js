app.controller('Ctrl', function($scope) {
	
	   $scope.count=0;
       $scope.listItem = [];
	
		  $scope.app = {
			subject: 'Enter subject here',
			  title:{prons:'Enter title here',cons:'Enter title here'}
		  };
	
	      $scope.addItem=function(){

            $scope.count=$scope.count+1;

           var newItemNo = $scope.listItem.length+1;
            $scope.listItem.push(newItemNo);
              
            }
		  

	
		  $scope.autoExpand = function(e) {
				var element = typeof e === 'object' ? e.target : document.getElementById(e);
					var scrollHeight = element.scrollHeight -60; 
				element.style.height =  scrollHeight + "px";    
			};
});