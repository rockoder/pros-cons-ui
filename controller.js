app.controller('Ctrl', function($scope,$rootScope) {
	
	

       $scope.listItem = [];	
	
	 $scope.IsVisibleSubject = false;
	 $scope.IsVisiblePronsTitle = false;
	 $scope.IsVisibleConsTitle = false;
	 $scope.IsVisibleSubjectTextArea = false;
	 $scope.IsVisiblePronsTextArea = false;
	 $scope.IsVisibleConsTextArea = false;
	$scope.anotherTitle=false;
		  $scope.app = {
			subject: 'Enter subject here',
			  title:{prons:'Enter title here',cons:'Enter title here'
					}
		  };

	      $scope.addItem=function(){
         
            

           var newItemNo = $scope.listItem.length+1;
            $scope.listItem.push(newItemNo);
		 
            }
		  $scope.change=function(handle){
			  if(handle.remove==''&&handle.remove1==''){
				 $scope.removeFeild();
			  }
			  
		  }
		

		   $scope.removeFeild = function() {
        
            var removeItem = $scope.listItem.length-1;
            $scope.listItem.splice(removeItem);
          };

	
	          $scope.hideSubjectTextArea = function (subject) {
                $scope.subject=subject;
                $scope.IsVisibleSubjectTextArea = $scope.IsVisibleSubjectTextArea ? false : true;
            }
			
		     
            $scope.hidePronsTextArea = function (title) {
                $scope.title=title;
				
                $scope.IsVisiblePronsTextArea = $scope.IsVisiblePronsTextArea ? false : true;
            }
			  $scope.hideConsTextArea = function (constitle) {
				  $scope.anotherTitle=true;
                $scope.constitle=constitle;
                $scope.IsVisibleConsTextArea = $scope.IsVisibleConsTextArea ? false : true;
				var newItemNo = $scope.listItem.length+1;
                 $scope.listItem.push(newItemNo);
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
			
			
			/*new code*/

			$(document).ready(function() {
    //Helper function to keep table row from collapsing when being sorted
    var fixHelperModified = function(e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();
        $helper.children().each(function(index)
        {
          $(this).width($originals.eq(index).width())
        });
        return $helper;
    };

    //Make  table sortable
    $("#sort_list tbody").sortable({
        helper: fixHelperModified,
        stop: function(event,ui) {renumber_table('#sort_list')}
    }).disableSelection();

  
});

//Renumber table rows
function renumber_table(tableID) {
    $(tableID + " tr").each(function() {
        count = $(this).parent().children().index($(this)) + 1;
        $(this).find('.priority').html(count);
    });
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