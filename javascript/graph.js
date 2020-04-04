var chartType = $("#type");
var submit = $("#submit");
var sidebarData = $("#data");
var sidebarVisualize = $("#visualize");
var dataForm = $("#data-form");
var dataGraphContainer = $('#data-graph-container');
var main = $("#main");


sidebarVisualize.on("click",function(){
	dataForm.addClass('disappear');
});

sidebarData.on("click",function(){
	dataForm.removeClass('disappear');
});

submit.on("click",function(){
	deleteChart();
	main.append(
		'<div class="card" style="margin: 10%;" id="data-graph-container"><canvas id="myChart" width="400" height="200"></canvas></div>'
	);
	var canvas = document.getElementById('myChart');
	createChart(chartType.val(),canvas);
});


function deleteChart(){
	$(".card").remove();
}


function createChart(type,canvas){
	var ctx = canvas.getContext('2d');
	var myChart = new Chart(ctx, {
	    type: type,
	    data: {
	        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	        datasets: [{
	            label: '# of Votes',
	            data: [12, 19, 3, 5, 2, 3],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            ],
	            borderColor: [
	                'rgba(255, 99, 132, 1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)',
	                'rgba(153, 102, 255, 1)',
	                'rgba(255, 159, 64, 1)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
}

