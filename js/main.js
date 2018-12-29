var currYear = 2000;
var part1_comp = document.getElementById('part1');
var part2_comp = document.getElementById('part2');

var myChart1 = echarts.init(part1_comp);
var myChart2 = echarts.init(part2_comp);

myChart1_option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }]
};


myChart2_option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};

var prev = document.getElementById('prev');
prev.onclick = function() {
	currYear = currYear - 1;
	if (currYear < 2000) {
		currYear = 2008;
	}
	draw();
}

var next = document.getElementById('next');
next.onclick = function() {           
	currYear = currYear + 1;
	if (currYear > 2008) {
		currYear = 2000;
	}
	draw();
}

var intr = document.getElementById('intr');

function draw() {
	myChart1.setOption(myChart1_option, true);

	myChart2.setOption(myChart2_option, true);

	//alert(currYear);
	$("#intr").text("This is " + currYear.toString() + "!");
}

$(document).ready(function() {
	draw();

	//必须，绑定图表自适应功能
    window.onresize = function () {
    	myChart1.resize(); 
    	myChart2.resize();
    }    
})

var timer;
function play() {
    timer = setInterval(function () {
        next.onclick()
    }, 1500)
}
play();