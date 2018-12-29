
$(document).ready(function() {
	drawFirstPart();

	drawSecondPart();

	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
})

function drawFirstPart() {
    option = {
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
    
    var myChart = echarts.init(document.getElementById('part1'));
    
 	//必须，绑定图表自适应功能
    window.onresize = function () {
    	myChart.resize(); //使第一个图表适应
    }

    myChart.setOption(option, true);
}

function drawSecondPart() {
	option = {
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

	var myChart = echarts.init(document.getElementById('part2'));
    
    myChart.setOption(option, true);
}