google.charts.load('current', { 'packages': ['corechart', 'controls'] });

google.charts.setOnLoadCallback(drawChart);


function drawChart() {

	// Create the data table.
	var dataPie = new google.visualization.DataTable();
	dataPie.addColumn('string', 'Topping');
	dataPie.addColumn('number', 'Slices');
	dataPie.addRows([
	['Mushrooms', 3],
	['Onions', 1],
	['Olives', 1],
	['Zucchini', 1],
	['Pepperoni', 2]
	]);


	var optionsPie = {'title':'How Much Pizza I Ate Last Night',
					'width':400,
					'height':300};

	var chartPie = new google.visualization.PieChart(document.getElementById('pieChart'));
	chartPie.draw(dataPie, optionsPie);

	var chartBar = new google.visualization.BarChart(document.getElementById('barChart'));
	chartBar.draw(dataPie, optionsPie);


	var dataLine = google.visualization.arrayToDataTable([
		['Year', 'Sales', 'Expenses'],
		['2004',  1000,      400],
		['2005',  1170,      460],
		['2006',  660,       1120],
		['2007',  1030,      540]
	]);

	var dataFilter = google.visualization.arrayToDataTable([
		['Name', 'Donuts eaten'],
		['Michael' , 5],
		['Elisa', 7],
		['Robert', 3],
		['John', 2],
		['Jessica', 6],
		['Aaron', 1],
		['Margareth', 8]
	  ]);

	var optionsLine = {
		title: 'Company Performance',
		curveType: 'function',
		legend: { position: 'bottom' }
	};

	var chartLine = new google.visualization.LineChart(document.getElementById('lineChart'));
	chartLine.draw(dataLine, optionsLine);


	var dashboard = new google.visualization.Dashboard(document.getElementById('dash'));
	var donutRangeSlider = new google.visualization.ControlWrapper({
		'controlType': 'NumberRangeFilter',
		'containerId': 'filter',
		'options': {
		  'filterColumnLabel': 'Donuts eaten'
		}
	  });
	  var pieChartFiltered = new google.visualization.ChartWrapper({
		'chartType': 'PieChart',
		'containerId': 'dashChart',
		'options': {
		  'width': 300,
		  'height': 300,
		  'pieSliceText': 'value',
		  'legend': 'right'
		}
	  });
	  dashboard.bind(donutRangeSlider, pieChartFiltered);
	  dashboard.draw(dataFilter);




  }

