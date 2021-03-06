//[widget charts Javascript]

//Project:	Unique Admin - Responsive Admin Template
//Primary use:   Used only for the  widget charts



$( document ).ready(function() {
	"use strict";
	
	if( $('#chart_1').length > 0 ){
		var ctx1 = document.getElementById("chart_1").getContext("2d");
		var data1 = {
			labels: ["Lektor", "Dekan", "Rektorat", "Kaprodi"],
			datasets: [
			{
				label: "fir",
				backgroundColor: "#ffd13f",
				borderColor: "#ffd13f",
				pointBorderColor: "#ffd13f",
				pointHighlightStroke: "#ffd13f",
				data: [0, 59, 40, 75]
			},
			{
				label: "sec",
				backgroundColor: "#05b085",
				borderColor: "#05b085",
				pointBorderColor: "#05b085",
				pointBackgroundColor: "#05b085",
				data: [48, 88, 50, 58],
			}
			
			]
		};
		
		var areaChart = new Chart(ctx1, {
			type:"line",
			data:data1,
			
			options: {
				tooltips: {
					mode:"label"
				},
				elements:{
					point: {
						hitRadius:90
					}
				},
				
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#878787"
						}
					}]
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				}
				
			}
		});
	}
	
	if( $('#chart_2').length > 0 ){
		var ctx2 = document.getElementById("chart_2").getContext("2d");
		var data2 = {
			labels: ["Etika", "Keahlian Pada Bidang Ilmu (Kompetensi Utama)", "Kemampuan Berbahasa Asing", "Penggunaan Teknologi Informasi", "Kemampuan Berkomunikasi", "Kerjasama Tim", "Pengembangan Diri"],
			datasets: [
			{
				label: "Kinerja",
				backgroundColor: "#0285b4",
				borderColor: "#0285b4",
				data: [10, 59, 40, 80, 59, 40, 99]
			},
			{
				label: "Harapan",
				backgroundColor: "#40606d",
				borderColor: "#40606d",
				data: [48, 88, 50, 10, 59, 40, 80]
			}
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"horizontalBar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#0285b4"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#0285b4"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				}
				
			}
		});
	}

	if( $('#mychart_2').length > 0 ){
		var ctx2 = document.getElementById("mychart_2").getContext("2d");
		var data2 = {
			labels: ["Kurikulum", "Pelayanan Karir", "Sarana dan Prasarana"],
			datasets: [
			{
				label: "Kinerja",
				backgroundColor: "#0285b4",
				borderColor: "#0285b4",
				data: [10, 59, 40]
			},
			{
				label: "Kepentingan",
				backgroundColor: "#40606d",
				borderColor: "#40606d",
				data: [48, 88, 50]
			}
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"horizontalBar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#0285b4"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#0285b4"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				}
				
			}
		});
	}

	if( $('#chart_3').length > 0 ){
		var ctx3 = document.getElementById("chart_3").getContext("2d");
		var data3 = {
			labels: ["Beras", "Gula", "Telor", "Daging", "Jagung", "Sayur", "Sagu"],
			datasets: [
			{
				label: "Kenaikan",
				backgroundColor: "rgba(116, 96, 238, 0.6)",
				borderColor: "rgba(116, 96, 238, 0.6)",
				pointBackgroundColor: "rgba(116, 96, 238, 0.6)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(116, 96, 238, 0.6)",
				data: [65, 59, 90, 81, 56, 55, 40]
			},
			{
				label: "Penurunan",
				backgroundColor: "rgba(57, 139, 247, 1)",
				borderColor: "rgba(57, 139, 247, 1)",
				pointBackgroundColor: "rgba(57, 139, 247, 1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(57, 139, 247, 1)",
				data: [28, 48, 40, 19, 96, 27, 100]
			}
			]
		};
		var radarChart = new Chart(ctx3, {
			type: "radar",
			data: data3,
			options: {
				scale: {
					ticks: {
						beginAtZero: true,
						fontFamily: "Poppins",
						
					},
					gridLines: {
						color: "rgba(135,135,135,0)",
					},
					pointLabels:{
						fontFamily: "Poppins",
						fontColor:"#878787"
					},
				},
				
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
						fontFamily: "Poppins",
						fontColor:"#878787"
					}
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				}
			}
		});
	}

	if( $('#chart_4').length > 0 ){
		var ctx4 = document.getElementById("chart_4").getContext("2d");
		var data4 = {
			datasets: [{
				data: [
				11,
				16,
				7,
				3,
				14
				],
				backgroundColor: [
				"#05b085",
				"#ffd13f",
				"#69cce0",
				"#ef483e",
				"#ba69aa"
				],
				hoverBackgroundColor: [
				"#05b085",
				"#ffd13f",
				"#69cce0",
				"#ef483e",
				"#ba69aa"
				],
				label: 'My dataset' // for legend
			}],
			labels: [
			"lab 1",
			"lab 2",
			"lab 3",
			"lab 4",
			"lab 5"
			]
		};
		var polarChart = new Chart(ctx4, {
			type: "polarArea",
			data: data4,
			options: {
				elements: {
					arc: {
						borderColor: "#fff",
						borderWidth: 0
					}
				},
				scale: {
					ticks: {
						beginAtZero: true,
						fontFamily: "Poppins",
						
					},
					gridLines: {
						color: "rgba(135,135,135,0)",
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
						fontFamily: "Poppins",
						fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				}
			}
		});
	}

	if( $('#chart_5').length > 0 ){
		var ctx5 = document.getElementById("chart_5").getContext("2d");
		var data5 = {
			datasets: [
			{
				label: 'Kuadran I',
				data: [
				{
					x: 80,
					y: 60,
					r: 10
				},
				{
					x: 40,
					y: 40,
					r: 10
				},
				{
					x: 30,
					y: 40,
					r: 10
				},
				{
					x: 20,
					y: 10,
					r: 10
				},
				{
					x: 50,
					y: 30,
					r: 10
				}
				],
				backgroundColor:"#69cce0",
				hoverBackgroundColor: "#69cce0",
			},
			{
				label: 'Kuadran I',
				data: [
				{
					x: 40,
					y: 30,
					r: 10
				},
				{
					x: 25,
					y: 20,
					r: 10
				},
				{
					x: 35,
					y: 30,
					r: 10
				}
				],
				backgroundColor:"#ffd13f",
				hoverBackgroundColor: "#ffd13f",
			},
			{
				label: 'Kuadran III',
				data: [
				{
					x: 40,
					y: 80,
					r: 10
				},
				{
					x: 25,
					y: 70,
					r: 10
				},
				{
					x: 35,
					y: 60,
					r: 10
				}
				],
				backgroundColor:"red",
				hoverBackgroundColor: "red",
			},
			{
				label: 'Kuadran IV',
				data: [
				{
					x: 50,
					y: 80,
					r: 10
				},
				{
					x: 65,
					y: 70,
					r: 10
				},
				{
					x: 45,
					y: 60,
					r: 10
				}
				],
				backgroundColor:"yellow",
				hoverBackgroundColor: "yellow",
			}]
		};
		
		var bubbleChart = new Chart(ctx5,{
			type:"bubble",
			data:data5,
			options: {
				elements: {
					points: {
						borderWidth: 1,
						borderColor: 'rgb(33, 33, 33)'
					}
				},
				scales: {
					xAxes: [
					{
						ticks: {
							min: -10,
							max: 100,
							fontFamily: "Poppins",
							fontColor:"#878787"
						},
						gridLines: {
							color: "rgba(135,135,135,0)",
						}
					}],
					yAxes: [
					{
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#878787"
						},
						gridLines: {
							color: "rgba(135,135,135,0)",
						}
					}]
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
						fontFamily: "Poppins",
						fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				}
			}
		});
	}

	if( $('#chart_6').length > 0 ){
		var ctx6 = document.getElementById("chart_6").getContext("2d");
		var data6 = {
			labels: [
			"lab 1",
			"lab 2",
			"lab 3"
			],
			datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: [
				"#05b085",
				"#ffd13f",
				"#69cce0"
				],
				hoverBackgroundColor: [
				"#05b085",
				"#ffd13f",
				"#69cce0"
				]
			}]
		};
		
		var pieChart  = new Chart(ctx6,{
			type: 'pie',
			data: data6,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
						fontFamily: "Poppins",
						fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	}

	if( $('#chart_7').length > 0 ){
		var ctx7 = document.getElementById("chart_7").getContext("2d");
		var data7 = {
			labels: [
			"lab 1",
			"lab 2",
			"lab 3"
			],
			datasets: [
			{
				data: [300, 50, 100],
				backgroundColor: [
				"#ef483e",
				"#ba69aa",
				"#05b085"
				],
				hoverBackgroundColor: [
				"#ef483e",
				"#ba69aa",
				"#05b085"
				]
			}]
		};
		
		var doughnutChart = new Chart(ctx7, {
			type: 'doughnut',
			data: data7,
			options: {
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					labels: {
						fontFamily: "Poppins",
						fontColor:"#878787"
					}
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				},
				elements: {
					arc: {
						borderWidth: 0
					}
				}
			}
		});
	}
	
	if( $('#chart_8').length > 0 ){
		var ctx2 = document.getElementById("chart_8").getContext("2d");
		var data2 = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
			{
				label: "My First dataset",
				backgroundColor: "#05b085",
				borderColor: "#05b085",
				data: [15, 20, 70, 51, 36, 85, 50]
			}
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"bar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#878787"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#878787"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				maintainAspectRatio:false,
				legend: {
					display: false,
				},
				
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				}
				
			}
		});
	}
	
}); // End of use strict
