var serviceURL = "http://localhost/emp/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});
function getFacebook(){
 $('#employeeList li').remove();
		  $.ajaxSetup({ cache: true }); 
		    FB.init({
		      appId: '772672609440031',
		    });     
		    $('#loginbutton,#feedbutton').removeAttr('disabled');
		   /// FB.getLoginStatus(updateStatusCallback);	
		  
	   FB.api(
    	"/194315394024518/feed",
  	 	 	function (responses) {
    	  if (responses && !responses.error) {
       		 $.each(responses, function(index, response) {
       		 	var response = response[0];
       		 	var image = "";
       		 	var id = 11;
       		 	 console.log(response.id);
       		 	$('#employeeList').append('<li><a href="employeedetails.html?id=' +  id + '">' +
					 alert(response.message);
					'<h4>' + response.message + '</h4> </li>');
       		 	 
       		 });
       		$('#employeeList').listview('refresh');
    	      }
   			}
		);	   
    }
function getEmployeeList() {

	 getFacebook();
	 return;
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.picture + '"/>' +
					'<h4>' + employee.firstName + ' ' + employee.lastName + '</h4>' +
					'<p>' + employee.title + '</p>' +
					'<span class="ui-li-count">' + employee.reportCount + '</span></a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}