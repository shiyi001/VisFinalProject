



var currYear = 1901;
var startYear = 1901;
var endYear = 2018;

var part1_comp = document.getElementById('part1');
var part2_comp = document.getElementById('part2');

var myChart1 = echarts.init(part1_comp);
var myChart2 = echarts.init(part2_comp);



//chart1 data import from data.js
var NBdata=getNBdata();
var NBcountryList=getNBcountryList();
var NBgeoMap=getGeoMap();
var NBcolorlist=['#f4e925','#C1232B','#E87C25','#27727B','#60C0DD',
                 '#B5C334','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                 '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                ];
console.log(NBdata[0]);
//-----------------------
//chart1 function

function getnowNBNode(type)
{
	tag=currYear-startYear
	nodes=NBdata[tag]
	var res = [];
    console.log(nodes)
    for (var i = 1; i < nodes.length; i++) 
     {
        var nownode=nodes[i]
        var name=nownode[0]
        var geoCoord = NBgeoMap[nownode[4]];
        var prizetype=nownode[1]
        if (type!=prizetype) continue;
        var gender=nownode[2]
        var country=nownode[4]
        var des=nownode[5]
        var englishname=nownode[8]
        if (geoCoord) {
            res.push({
                name: nownode[0],
                value: geoCoord.concat(prizetype).concat(gender).concat(country).concat(des).concat(englishname).concat(name)
            });
            }
     }
     console.log(res);
     return res;
}
function getnowGender(tag)
{
	nowtag=parseInt(tag);
	if (nowtag==1) return "男";
		else 	   return "女";
}
function getnowPrize(tag)
{
	nowtag=parseInt(tag);
	if (nowtag==1)	return "物理奖";
	if (nowtag==2)  return "化学奖";
	if (nowtag==3)	return "生理或医药学奖";
	if (nowtag==4)  return "文学奖";
	if (nowtag==5)	return "经济学奖";
}
function getnowtooltip(nownode) 
{
	var prizetype=getnowPrize(nownode[2]);
	var gender=getnowGender(nownode[3]);
	var country=nownode[4];
	var des=nownode[5];
	var englishname=nownode[6];
	var name=nownode[7];
	s=name+"("+englishname+")<br/>"+"["+gender+"]"+" "+country+" "+prizetype+"<br/>"+des;
	return s;
}
function getnowDes()
{
	NBdes="This is "+currYear.toString()+":<br/>";
	tag=currYear-startYear
	nodes=NBdata[tag]
	var res = [];
    console.log(nodes)
    for (var i = 1; i < nodes.length; i++) 
     {
        var nownode=nodes[i]
        var name=nownode[0]
        var prizetype=getnowPrize(nownode[1])
        var gender=getnowGender(nownode[2])
        var country=nownode[4]
        var des=nownode[5]
        var englishname=nownode[8]
        var nowdes=name+" ("+englishname+"),  ["+gender+"]"+" "+country+" "+prizetype+" "+des+"<br/>";
        NBdes=NBdes+nowdes;
     }
     return NBdes;
}



// var data={
//     "years":{
//         "2001":{
//             "country":["美国","中国"],
//             "number":[12,45]
//         },
//         "2002":{
//             "country":["美国","中国"],
//             "number":[16,49]
//         },
//         "2003":{
//             "country":["美国","中国"],
//             "number":[22,51]
//         },
//         "2004":{
//             "country":["中国","美国"],
//             "number":[80,76]
//         }
//     }
// }

var data ={'years': {'1901': {'country': ['法国', '普鲁士(波兰)', '荷兰', '瑞士', '普鲁士(德国)', '石勒苏益格(德国)', '印度', '挪威', '波兰', '法罗群岛(丹麦)', '瑞典', '英国', '国际组织', '俄罗斯', '西班牙', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国', '意大利'], 'number': [2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, '1902': {'country': ['荷兰', '瑞士', '法国', '普鲁士(德国)', '普鲁士(波兰)', '石勒苏益格(德国)', '印度', '挪威', '波兰', '法罗群岛(丹麦)', '瑞典', '英国', '国际组织', '俄罗斯', '西班牙', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国', '意大利'], 'number': [3, 3, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}, '1903': {'country': ['法国', '荷兰', '瑞士', '普鲁士(德国)', '普鲁士(波兰)', '石勒苏益格(德国)', '印度', '挪威', '波兰', '法罗群岛(丹麦)', '瑞典', '英国', '国际组织', '俄罗斯', '西班牙', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国', '意大利'], 'number': [4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]}, '1904': {'country': ['法国', '荷兰', '瑞士', '普鲁士(德国)', '英国', '普鲁士(波兰)', '石勒苏益格(德国)', '印度', '挪威', '波兰', '法罗群岛(丹麦)', '瑞典', '国际组织', '俄罗斯', '西班牙', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国', '意大利'], 'number': [5, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]}, '1905': {'country': ['法国', '荷兰', '瑞士', '普鲁士(德国)', '波兰', '英国', '普鲁士(波兰)', '石勒苏益格(德国)', '印度', '挪威', '法罗群岛(丹麦)', '瑞典', '国际组织', '俄罗斯', '西班牙', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国', '意大利'], 'number': [5, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]}, '1906': {'country': ['法国', '荷兰', '瑞士', '普鲁士(德国)', '英国', '波兰', '西班牙', '普鲁士(波兰)', '石勒苏益格(德国)', '印度', '挪威', '法罗群岛(丹麦)', '瑞典', '国际组织', '俄罗斯', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国', '意大利'], 'number': [6, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}, '1907': {'country': ['法国', '荷兰', '瑞士', '普鲁士(德国)', '英国', '普鲁士(波兰)', '波兰', '西班牙', '石勒苏益格(德国)', '印度', '挪威', '法罗群岛(丹麦)', '瑞典', '国际组织', '俄罗斯', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国', '意大利'], 'number': [8, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}, '1908': {'country': ['法国', '普鲁士(波兰)', '荷兰', '瑞士', '普鲁士(德国)', '英国', '波兰', '瑞典', '西班牙', '石勒苏益格(德国)', '印度', '挪威', '法罗群岛(丹麦)', '国际组织', '俄罗斯', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国', '意大利'], 'number': [8, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}, '1909': {'country': ['法国', '瑞士', '普鲁士(波兰)', '荷兰', '普鲁士(德国)', '瑞典', '英国', '波兰', '西班牙', '意大利', '石勒苏益格(德国)', '印度', '挪威', '法罗群岛(丹麦)', '国际组织', '俄罗斯', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国'], 'number': [9, 4, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}, '1910': {'country': ['法国', '荷兰', '瑞士', '普鲁士(德国)', '普鲁士(波兰)', '瑞典', '英国', '波兰', '国际组织', '西班牙', '意大利', '石勒苏益格(德国)', '印度', '挪威', '法罗群岛(丹麦)', '俄罗斯', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)', '德国'], 'number': [9, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1]}, '1911': {'country': ['法国', '荷兰', '瑞士', '普鲁士(德国)', '瑞典', '普鲁士(波兰)', '波兰', '英国', '国际组织', '西班牙', '意大利', '比利时', '石勒苏益格(德国)', '印度', '挪威', '法罗群岛(丹麦)', '俄罗斯', '苏格兰', '奥匈帝国（捷克）', '匈牙利(斯洛文尼亚)'], 'number': [9, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1]}, '1912': {'country': ['法国', '荷兰', '普鲁士(德国)', '瑞典', '瑞士', '普鲁士(波兰)', '波兰', '英国', '国际组织', '西班牙', '意大利', '美国', '比利时', '石勒苏益格(德国)', '印度', '挪威', '法罗群岛(丹麦)', '俄罗斯', '苏格兰', '奥匈帝国（捷克）'], 'number': [12, 5, 5, 5, 4, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1]}, '1913': {'country': ['法国', '荷兰', '普鲁士(德国)', '瑞典', '瑞士', '普鲁士(波兰)', '波兰', '英国', '比利时', '印度', '国际组织', '西班牙', '意大利', '美国', '石勒苏益格(德国)', '挪威', '法罗群岛(丹麦)', '俄罗斯', '苏格兰', '奥匈帝国（捷克）'], 'number': [14, 6, 5, 5, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1]}, '1914': {'country': ['法国', '荷兰', '普鲁士(德国)', '瑞典', '瑞士', '普鲁士(波兰)', '波兰', '英国', '美国', '比利时', '印度', '国际组织', '西班牙', '德国', '意大利', '奥地利', '石勒苏益格(德国)', '挪威', '法罗群岛(丹麦)', '俄罗斯'], 'number': [14, 6, 5, 5, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1]}, '1915': {'country': ['法国', '荷兰', '普鲁士(德国)', '瑞典', '瑞士', '英国', '普鲁士(波兰)', '波兰', '德国', '美国', '比利时', '印度', '国际组织', '西班牙', '意大利', '奥地利', '石勒苏益格(德国)', '挪威', '法罗群岛(丹麦)', '俄罗斯'], 'number': [15, 6, 5, 5, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1]}, '1916': {'country': ['法国', '荷兰', '瑞典', '普鲁士(德国)', '瑞士', '英国', '普鲁士(波兰)', '波兰', '德国', '美国', '比利时', '印度', '国际组织', '西班牙', '意大利', '奥地利', '石勒苏益格(德国)', '挪威', '法罗群岛(丹麦)', '俄罗斯'], 'number': [15, 6, 6, 5, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1]}, '1917': {'country': ['法国', '荷兰', '瑞典', '普鲁士(德国)', '英国', '瑞士', '普鲁士(波兰)', '波兰', '国际组织', '德国', '美国', '丹麦', '比利时', '印度', '西班牙', '意大利', '奥地利', '石勒苏益格(德国)', '挪威', '法罗群岛(丹麦)'], 'number': [15, 6, 6, 5, 5, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1]}, '1918': {'country': ['法国', '荷兰', '瑞典', '普鲁士(德国)', '英国', '普鲁士(波兰)', '瑞士', '波兰', '国际组织', '德国', '美国', '丹麦', '比利时', '石勒苏益格(德国)', '印度', '西班牙', '意大利', '奥地利', '挪威', '法罗群岛(丹麦)'], 'number': [15, 6, 6, 5, 5, 4, 4, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1]}, '1919': {'country': ['法国', '荷兰', '瑞典', '瑞士', '普鲁士(德国)', '英国', '普鲁士(波兰)', '德国', '美国', '比利时', '波兰', '国际组织', '丹麦', '石勒苏益格(德国)', '印度', '西班牙', '意大利', '奥地利', '挪威', '法罗群岛(丹麦)'], 'number': [15, 6, 6, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1]}, '1920': {'country': ['法国', '荷兰', '瑞士', '普鲁士(德国)', '瑞典', '英国', '普鲁士(波兰)', '德国', '美国', '丹麦', '比利时', '波兰', '国际组织', '石勒苏益格(德国)', '印度', '挪威', '西班牙', '意大利', '奥地利', '法罗群岛(丹麦)'], 'number': [16, 6, 6, 6, 6, 5, 4, 4, 4, 4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 1]}, '1921': {'country': ['法国', '瑞典', '荷兰', '瑞士', '普鲁士(德国)', '英国', '德国', '普鲁士(波兰)', '美国', '丹麦', '比利时', '挪威', '波兰', '国际组织', '石勒苏益格(德国)', '印度', '西班牙', '意大利', '奥地利', '法罗群岛(丹麦)'], 'number': [17, 7, 6, 6, 6, 6, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2, 1]}, '1922': {'country': ['法国', '英国', '瑞典', '荷兰', '瑞士', '普鲁士(德国)', '德国', '丹麦', '普鲁士(波兰)', '挪威', '美国', '比利时', '波兰', '国际组织', '西班牙', '石勒苏益格(德国)', '印度', '意大利', '奥地利', '法罗群岛(丹麦)'], 'number': [17, 8, 7, 6, 6, 6, 6, 5, 4, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1]}, '1923': {'country': ['法国', '英国', '瑞典', '荷兰', '瑞士', '普鲁士(德国)', '德国', '美国', '丹麦', '普鲁士(波兰)', '挪威', '比利时', '波兰', '国际组织', '西班牙', '石勒苏益格(德国)', '印度', '苏格兰', '意大利', '奥地利'], 'number': [17, 8, 7, 6, 6, 6, 6, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2, 2]}, '1924': {'country': ['法国', '瑞典', '英国', '荷兰', '瑞士', '普鲁士(德国)', '德国', '美国', '丹麦', '普鲁士(波兰)', '挪威', '波兰', '比利时', '国际组织', '西班牙', '石勒苏益格(德国)', '印度', '苏格兰', '意大利', '奥地利'], 'number': [17, 8, 8, 6, 6, 6, 6, 5, 5, 4, 4, 4, 4, 3, 3, 2, 2, 2, 2, 2]}, '1925': {'country': ['法国', '英国', '瑞典', '德国', '荷兰', '瑞士', '普鲁士(德国)', '美国', '丹麦', '普鲁士(波兰)', '挪威', '波兰', '比利时', '国际组织', '西班牙', '石勒苏益格(德国)', '印度', '苏格兰', '意大利', '奥地利'], 'number': [17, 9, 8, 8, 6, 6, 6, 6, 5, 4, 4, 4, 4, 3, 3, 2, 2, 2, 2, 2]}, '1926': {'country': ['法国', '瑞典', '英国', '德国', '荷兰', '瑞士', '普鲁士(德国)', '美国', '丹麦', '普鲁士(波兰)', '挪威', '波兰', '比利时', '国际组织', '西班牙', '意大利', '石勒苏益格(德国)', '印度', '苏格兰', '奥地利'], 'number': [19, 9, 9, 9, 6, 6, 6, 6, 6, 4, 4, 4, 4, 3, 3, 3, 2, 2, 2, 2]}, '1927': {'country': ['法国', '德国', '瑞典', '英国', '美国', '荷兰', '瑞士', '普鲁士(德国)', '丹麦', '普鲁士(波兰)', '挪威', '波兰', '比利时', '国际组织', '西班牙', '苏格兰', '意大利', '奥地利', '石勒苏益格(德国)', '印度'], 'number': [21, 11, 9, 9, 7, 6, 6, 6, 6, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2]}, '1928': {'country': ['法国', '德国', '英国', '瑞典', '美国', '丹麦', '荷兰', '瑞士', '普鲁士(德国)', '普鲁士(波兰)', '挪威', '波兰', '比利时', '国际组织', '西班牙', '苏格兰', '意大利', '奥地利', '石勒苏益格(德国)', '印度'], 'number': [22, 12, 10, 9, 7, 7, 6, 6, 6, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2]}, '1929': {'country': ['法国', '德国', '英国', '瑞典', '美国', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '普鲁士(波兰)', '挪威', '波兰', '比利时', '国际组织', '西班牙', '苏格兰', '意大利', '奥地利', '石勒苏益格(德国)', '印度'], 'number': [23, 14, 12, 9, 8, 7, 7, 6, 6, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2]}, '1930': {'country': ['法国', '德国', '英国', '瑞典', '美国', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '普鲁士(波兰)', '挪威', '波兰', '比利时', '印度', '国际组织', '西班牙', '苏格兰', '意大利', '奥地利', '石勒苏益格(德国)'], 'number': [23, 15, 12, 10, 9, 7, 7, 6, 6, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2]}, '1931': {'country': ['法国', '德国', '英国', '瑞典', '美国', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '普鲁士(波兰)', '挪威', '比利时', '印度', '国际组织', '西班牙', '苏格兰', '意大利', '奥地利', '石勒苏益格(德国)'], 'number': [23, 17, 12, 11, 11, 7, 7, 6, 6, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2]}, '1932': {'country': ['法国', '德国', '英国', '美国', '瑞典', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '普鲁士(波兰)', '挪威', '比利时', '印度', '国际组织', '西班牙', '苏格兰', '意大利', '奥地利', '石勒苏益格(德国)'], 'number': [23, 18, 15, 12, 11, 7, 7, 6, 6, 5, 4, 4, 4, 3, 3, 3, 3, 3, 3, 2]}, '1933': {'country': ['法国', '德国', '英国', '美国', '瑞典', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '普鲁士(波兰)', '挪威', '比利时', '奥地利', '印度', '国际组织', '西班牙', '苏格兰', '意大利', '石勒苏益格(德国)'], 'number': [23, 18, 17, 13, 11, 7, 7, 6, 6, 5, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2]}, '1934': {'country': ['法国', '德国', '英国', '美国', '瑞典', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '普鲁士(波兰)', '挪威', '苏格兰', '意大利', '比利时', '奥地利', '印度', '国际组织', '西班牙', '石勒苏益格(德国)'], 'number': [23, 18, 17, 17, 11, 7, 7, 6, 6, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 2]}, '1935': {'country': ['法国', '德国', '英国', '美国', '瑞典', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '普鲁士(波兰)', '挪威', '苏格兰', '意大利', '比利时', '奥地利', '印度', '国际组织', '西班牙', '石勒苏益格(德国)'], 'number': [25, 20, 18, 17, 11, 7, 7, 6, 6, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 2]}, '1936': {'country': ['法国', '德国', '英国', '美国', '瑞典', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '奥地利', '普鲁士(波兰)', '挪威', '苏格兰', '意大利', '比利时', '印度', '国际组织', '西班牙', '石勒苏益格(德国)'], 'number': [25, 21, 19, 19, 11, 8, 7, 6, 6, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 2]}, '1937': {'country': ['法国', '英国', '德国', '美国', '瑞典', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '奥地利', '普鲁士(波兰)', '挪威', '苏格兰', '意大利', '比利时', '印度', '国际组织', '俄罗斯', '西班牙'], 'number': [26, 22, 21, 20, 11, 8, 7, 6, 6, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3]}, '1938': {'country': ['法国', '英国', '德国', '美国', '瑞典', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '意大利', '比利时', '奥地利', '普鲁士(波兰)', '挪威', '国际组织', '苏格兰', '印度', '俄罗斯', '西班牙'], 'number': [26, 22, 21, 21, 11, 8, 7, 6, 6, 5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3]}, '1939': {'country': ['法国', '英国', '德国', '美国', '瑞典', '荷兰', '丹麦', '瑞士', '普鲁士(德国)', '波兰', '意大利', '比利时', '奥地利', '普鲁士(波兰)', '挪威', '国际组织', '苏格兰', '印度', '俄罗斯', '西班牙'], 'number': [26, 22, 22, 22, 11, 8, 7, 6, 6, 6, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3]}, '1943': {'country': ['法国', '美国', '英国', '德国', '瑞典', '荷兰', '丹麦', '波兰', '瑞士', '普鲁士(德国)', '意大利', '比利时', '奥地利', '普鲁士(波兰)', '挪威', '国际组织', '苏格兰', '印度', '俄罗斯', '西班牙'], 'number': [26, 23, 22, 22, 11, 8, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3]}, '1944': {'country': ['法国', '美国', '德国', '英国', '瑞典', '丹麦', '荷兰', '波兰', '瑞士', '普鲁士(德国)', '国际组织', '意大利', '比利时', '奥地利', '普鲁士(波兰)', '挪威', '苏格兰', '印度', '俄罗斯', '西班牙'], 'number': [26, 25, 23, 22, 11, 9, 8, 8, 6, 6, 5, 5, 5, 5, 4, 4, 4, 3, 3, 3]}, '1945': {'country': ['法国', '美国', '德国', '英国', '瑞典', '丹麦', '荷兰', '波兰', '瑞士', '普鲁士(德国)', '奥地利', '国际组织', '苏格兰', '意大利', '比利时', '普鲁士(波兰)', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [26, 26, 24, 22, 11, 9, 8, 8, 6, 6, 6, 5, 5, 5, 5, 4, 4, 3, 3, 3]}, '1946': {'country': ['美国', '法国', '德国', '英国', '瑞典', '丹麦', '荷兰', '波兰', '瑞士', '普鲁士(德国)', '奥地利', '国际组织', '苏格兰', '意大利', '比利时', '普鲁士(波兰)', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [33, 26, 25, 22, 11, 9, 8, 8, 6, 6, 6, 5, 5, 5, 5, 4, 4, 3, 3, 3]}, '1947': {'country': ['美国', '法国', '德国', '英国', '瑞典', '丹麦', '荷兰', '波兰', '国际组织', '瑞士', '普鲁士(德国)', '奥地利', '苏格兰', '意大利', '比利时', '普鲁士(波兰)', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [33, 27, 25, 24, 11, 9, 8, 8, 7, 6, 6, 6, 5, 5, 5, 4, 4, 3, 3, 3]}, '1948': {'country': ['美国', '法国', '英国', '德国', '瑞典', '丹麦', '荷兰', '波兰', '瑞士', '国际组织', '普鲁士(德国)', '奥地利', '苏格兰', '意大利', '比利时', '普鲁士(波兰)', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [34, 27, 25, 25, 12, 9, 8, 8, 7, 7, 6, 6, 5, 5, 5, 4, 4, 3, 3, 3]}, '1949': {'country': ['美国', '法国', '英国', '德国', '瑞典', '丹麦', '荷兰', '瑞士', '波兰', '国际组织', '普鲁士(德国)', '苏格兰', '奥地利', '意大利', '比利时', '普鲁士(波兰)', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [35, 27, 25, 25, 12, 9, 8, 8, 8, 7, 6, 6, 6, 5, 5, 4, 4, 3, 3, 3]}, '1950': {'country': ['美国', '法国', '英国', '德国', '瑞典', '波兰', '丹麦', '荷兰', '瑞士', '国际组织', '普鲁士(德国)', '苏格兰', '奥地利', '普鲁士(波兰)', '意大利', '比利时', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [38, 27, 27, 26, 12, 9, 9, 8, 8, 7, 6, 6, 6, 5, 5, 5, 4, 3, 3, 3]}, '1951': {'country': ['美国', '法国', '英国', '德国', '瑞典', '波兰', '丹麦', '荷兰', '瑞士', '国际组织', '普鲁士(德国)', '苏格兰', '奥地利', '普鲁士(波兰)', '意大利', '比利时', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [40, 28, 28, 26, 13, 9, 9, 8, 8, 7, 6, 6, 6, 5, 5, 5, 4, 3, 3, 3]}, '1952': {'country': ['美国', '英国', '法国', '德国', '瑞典', '瑞士', '波兰', '丹麦', '荷兰', '国际组织', '普鲁士(德国)', '苏格兰', '奥地利', '普鲁士(波兰)', '意大利', '比利时', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [41, 30, 29, 26, 13, 9, 9, 9, 8, 7, 6, 6, 6, 5, 5, 5, 4, 3, 3, 3]}, '1953': {'country': ['美国', '英国', '法国', '德国', '瑞典', '荷兰', '瑞士', '波兰', '丹麦', '国际组织', '普鲁士(德国)', '苏格兰', '奥地利', '普鲁士(波兰)', '意大利', '比利时', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [42, 31, 29, 28, 13, 9, 9, 9, 9, 7, 6, 6, 6, 5, 5, 5, 4, 3, 3, 3]}, '1954': {'country': ['美国', '英国', '法国', '德国', '瑞典', '波兰', '荷兰', '瑞士', '丹麦', '国际组织', '普鲁士(德国)', '苏格兰', '奥地利', '普鲁士(波兰)', '意大利', '比利时', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [48, 31, 29, 29, 13, 10, 9, 9, 9, 8, 6, 6, 6, 5, 5, 5, 4, 3, 3, 3]}, '1955': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '荷兰', '瑞士', '丹麦', '国际组织', '普鲁士(德国)', '苏格兰', '奥地利', '普鲁士(波兰)', '意大利', '比利时', '挪威', '印度', '俄罗斯', '西班牙'], 'number': [50, 31, 30, 29, 14, 10, 9, 9, 9, 8, 6, 6, 6, 5, 5, 5, 4, 3, 3, 3]}, '1956': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '荷兰', '瑞士', '丹麦', '国际组织', '普鲁士(德国)', '苏格兰', '奥地利', '普鲁士(波兰)', '意大利', '比利时', '挪威', '俄罗斯', '西班牙', '印度'], 'number': [52, 33, 31, 30, 14, 10, 9, 9, 9, 8, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3]}, '1957': {'country': ['美国', '英国', '德国', '法国', '瑞典', '瑞士', '波兰', '荷兰', '丹麦', '国际组织', '苏格兰', '普鲁士(德国)', '奥地利', '普鲁士(波兰)', '意大利', '比利时', '挪威', '俄罗斯', '西班牙', '印度'], 'number': [52, 33, 31, 30, 14, 10, 10, 9, 9, 8, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3]}, '1958': {'country': ['美国', '英国', '德国', '法国', '瑞典', '瑞士', '波兰', '荷兰', '丹麦', '国际组织', '俄罗斯', '苏格兰', '普鲁士(德国)', '比利时', '奥地利', '普鲁士(波兰)', '意大利', '挪威', '西班牙', '印度'], 'number': [55, 34, 31, 30, 14, 10, 10, 9, 9, 8, 8, 7, 6, 6, 6, 5, 5, 4, 4, 3]}, '1959': {'country': ['美国', '英国', '德国', '法国', '瑞典', '瑞士', '波兰', '荷兰', '丹麦', '国际组织', '俄罗斯', '苏格兰', '意大利', '普鲁士(德国)', '比利时', '奥地利', '普鲁士(波兰)', '西班牙', '挪威', '印度'], 'number': [57, 35, 31, 30, 14, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 6, 5, 5, 4, 3]}, '1960': {'country': ['美国', '英国', '德国', '法国', '瑞典', '瑞士', '波兰', '荷兰', '丹麦', '国际组织', '俄罗斯', '苏格兰', '意大利', '普鲁士(德国)', '比利时', '奥地利', '普鲁士(波兰)', '西班牙', '挪威', '印度'], 'number': [59, 35, 31, 30, 14, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 6, 5, 5, 4, 3]}, '1961': {'country': ['美国', '英国', '德国', '法国', '瑞典', '瑞士', '波兰', '荷兰', '丹麦', '国际组织', '俄罗斯', '苏格兰', '意大利', '普鲁士(德国)', '比利时', '奥地利', '普鲁士(波兰)', '西班牙', '挪威', '印度'], 'number': [61, 35, 32, 30, 15, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 6, 5, 5, 4, 3]}, '1962': {'country': ['美国', '英国', '德国', '法国', '瑞典', '瑞士', '波兰', '荷兰', '丹麦', '国际组织', '俄罗斯', '苏格兰', '意大利', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '挪威', '印度'], 'number': [64, 37, 32, 30, 15, 10, 10, 9, 9, 8, 8, 7, 7, 7, 6, 6, 5, 5, 4, 3]}, '1963': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '瑞士', '国际组织', '荷兰', '丹麦', '俄罗斯', '意大利', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '挪威', '澳大利亚'], 'number': [64, 39, 34, 30, 15, 11, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 4, 4]}, '1964': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '瑞士', '国际组织', '荷兰', '丹麦', '俄罗斯', '意大利', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚', '挪威'], 'number': [66, 39, 35, 31, 15, 12, 10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 5, 4]}, '1965': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '瑞士', '荷兰', '俄罗斯', '丹麦', '意大利', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚', '挪威'], 'number': [69, 39, 35, 34, 15, 12, 11, 10, 9, 9, 9, 8, 7, 7, 6, 6, 5, 5, 5, 4]}, '1966': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '瑞士', '荷兰', '俄罗斯', '丹麦', '意大利', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚', '挪威'], 'number': [71, 39, 36, 34, 15, 12, 11, 10, 9, 9, 9, 8, 7, 7, 6, 6, 5, 5, 5, 4]}, '1967': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '瑞士', '荷兰', '俄罗斯', '丹麦', '意大利', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚', '挪威'], 'number': [73, 41, 37, 34, 15, 12, 11, 10, 9, 9, 9, 8, 7, 7, 6, 6, 5, 5, 5, 4]}, '1968': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '瑞士', '荷兰', '俄罗斯', '丹麦', '意大利', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '挪威', '西班牙', '澳大利亚'], 'number': [76, 41, 37, 35, 15, 12, 11, 10, 9, 9, 9, 8, 7, 7, 6, 6, 5, 5, 5, 5]}, '1969': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '俄罗斯', '意大利', '丹麦', '挪威', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚'], 'number': [78, 42, 38, 35, 15, 12, 12, 10, 10, 9, 9, 9, 7, 7, 7, 6, 6, 5, 5, 5]}, '1970': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '俄罗斯', '意大利', '丹麦', '挪威', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚'], 'number': [81, 42, 39, 37, 17, 12, 12, 10, 10, 10, 9, 9, 7, 7, 7, 6, 6, 5, 5, 5]}, '1971': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '俄罗斯', '意大利', '丹麦', '挪威', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚'], 'number': [82, 42, 41, 37, 17, 12, 12, 10, 10, 10, 9, 9, 7, 7, 7, 6, 6, 5, 5, 5]}, '1972': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '俄罗斯', '意大利', '丹麦', '挪威', '苏格兰', '奥地利', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚'], 'number': [90, 44, 42, 37, 17, 12, 12, 10, 10, 10, 9, 9, 7, 7, 7, 6, 6, 5, 5, 5]}, '1973': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '俄罗斯', '瑞士', '意大利', '丹麦', '奥地利', '挪威', '苏格兰', '普鲁士(德国)', '比利时', '普鲁士(波兰)', '西班牙', '澳大利亚'], 'number': [90, 47, 44, 37, 17, 12, 12, 11, 11, 10, 9, 9, 9, 8, 7, 6, 6, 5, 5, 5]}, '1974': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '俄罗斯', '瑞士', '奥地利', '意大利', '丹麦', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '普鲁士(波兰)', '西班牙', '澳大利亚'], 'number': [91, 50, 44, 38, 20, 12, 12, 11, 11, 10, 10, 9, 9, 8, 7, 7, 6, 5, 5, 5]}, '1975': {'country': ['美国', '英国', '德国', '法国', '瑞典', '荷兰', '波兰', '国际组织', '俄罗斯', '意大利', '瑞士', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '澳大利亚', '普鲁士(波兰)', '西班牙'], 'number': [95, 50, 44, 38, 20, 12, 12, 12, 12, 11, 10, 10, 10, 8, 7, 7, 6, 6, 5, 5]}, '1976': {'country': ['美国', '英国', '德国', '法国', '瑞典', '荷兰', '波兰', '国际组织', '俄罗斯', '意大利', '瑞士', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '澳大利亚', '普鲁士(波兰)', '西班牙'], 'number': [101, 50, 44, 38, 20, 12, 12, 12, 12, 11, 10, 10, 10, 8, 7, 7, 6, 6, 5, 5]}, '1977': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '俄罗斯', '荷兰', '波兰', '意大利', '瑞士', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '西班牙', '澳大利亚', '普鲁士(波兰)'], 'number': [104, 52, 44, 39, 21, 13, 13, 12, 12, 11, 10, 10, 10, 8, 7, 7, 6, 6, 6, 5]}, '1978': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '俄罗斯', '荷兰', '瑞士', '意大利', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '西班牙', '澳大利亚', '普鲁士(波兰)'], 'number': [108, 53, 45, 39, 21, 13, 13, 13, 12, 11, 11, 10, 10, 8, 7, 7, 6, 6, 6, 5]}, '1979': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '俄罗斯', '荷兰', '瑞士', '意大利', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '西班牙', '澳大利亚', '普鲁士(波兰)'], 'number': [111, 55, 46, 39, 21, 13, 13, 13, 12, 11, 11, 10, 10, 8, 7, 7, 6, 6, 6, 5]}, '1980': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '俄罗斯', '荷兰', '瑞士', '意大利', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '西班牙', '澳大利亚', '普鲁士(波兰)'], 'number': [117, 56, 46, 40, 21, 13, 13, 13, 12, 11, 11, 10, 10, 8, 7, 7, 6, 6, 6, 5]}, '1981': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '波兰', '俄罗斯', '瑞士', '意大利', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '西班牙', '澳大利亚', '加拿大'], 'number': [120, 56, 46, 40, 23, 14, 13, 13, 13, 11, 11, 10, 10, 8, 7, 7, 6, 6, 6, 6]}, '1982': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '波兰', '俄罗斯', '瑞士', '意大利', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '普鲁士(德国)', '西班牙', '澳大利亚', '加拿大'], 'number': [122, 57, 46, 40, 26, 14, 13, 13, 13, 11, 11, 10, 10, 8, 7, 7, 6, 6, 6, 6]}, '1983': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '俄罗斯', '瑞士', '意大利', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '加拿大', '普鲁士(德国)', '西班牙', '澳大利亚'], 'number': [124, 58, 46, 41, 26, 14, 14, 13, 13, 11, 11, 10, 10, 8, 7, 7, 7, 6, 6, 6]}, '1984': {'country': ['美国', '英国', '德国', '法国', '瑞典', '荷兰', '波兰', '国际组织', '俄罗斯', '意大利', '瑞士', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '加拿大', '普鲁士(德国)', '西班牙', '澳大利亚'], 'number': [125, 60, 47, 41, 26, 14, 14, 14, 13, 12, 11, 10, 10, 8, 7, 7, 7, 6, 6, 6]}, '1985': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '波兰', '俄罗斯', '意大利', '瑞士', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '加拿大', '普鲁士(德国)', '西班牙', '澳大利亚'], 'number': [129, 60, 47, 41, 26, 15, 14, 14, 13, 13, 11, 10, 10, 8, 7, 7, 7, 6, 6, 6]}, '1986': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '波兰', '意大利', '俄罗斯', '瑞士', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '加拿大', '普鲁士(德国)', '西班牙', '澳大利亚'], 'number': [132, 60, 49, 41, 26, 15, 14, 14, 14, 13, 12, 10, 10, 8, 7, 7, 7, 6, 6, 6]}, '1987': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '波兰', '意大利', '瑞士', '俄罗斯', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '加拿大', '日本', '普鲁士(德国)', '西班牙'], 'number': [134, 60, 49, 42, 26, 15, 14, 14, 14, 13, 13, 10, 10, 8, 7, 7, 7, 7, 6, 6]}, '1988': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '波兰', '意大利', '瑞士', '俄罗斯', '丹麦', '奥地利', '挪威', '苏格兰', '比利时', '加拿大', '日本', '普鲁士(德国)', '西班牙'], 'number': [138, 60, 52, 43, 26, 16, 14, 14, 14, 13, 13, 10, 10, 8, 8, 7, 7, 7, 6, 6]}, '1989': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '波兰', '意大利', '瑞士', '俄罗斯', '丹麦', '奥地利', '挪威', '苏格兰', '加拿大', '普鲁士(德国)', '西班牙', '比利时', '日本'], 'number': [142, 60, 53, 43, 26, 16, 14, 14, 14, 13, 13, 10, 10, 9, 8, 8, 7, 7, 7, 7]}, '1990': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '波兰', '意大利', '瑞士', '俄罗斯', '丹麦', '奥地利', '挪威', '加拿大', '苏格兰', '普鲁士(德国)', '西班牙', '比利时', '日本'], 'number': [150, 60, 53, 43, 26, 16, 14, 14, 14, 13, 13, 10, 10, 9, 9, 8, 7, 7, 7, 7]}, '1991': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '荷兰', '瑞士', '波兰', '意大利', '俄罗斯', '丹麦', '奥地利', '挪威', '加拿大', '苏格兰', '普鲁士(德国)', '西班牙', '比利时', '日本'], 'number': [150, 61, 55, 44, 26, 16, 14, 14, 14, 14, 13, 10, 10, 9, 9, 8, 7, 7, 7, 7]}, '1992': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '瑞士', '意大利', '俄罗斯', '丹麦', '奥地利', '加拿大', '挪威', '苏格兰', '普鲁士(德国)', '西班牙', '比利时', '日本'], 'number': [152, 61, 55, 44, 26, 16, 15, 14, 14, 14, 13, 10, 10, 10, 9, 8, 7, 7, 7, 7]}, '1993': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '瑞士', '意大利', '俄罗斯', '丹麦', '奥地利', '加拿大', '挪威', '苏格兰', '普鲁士(德国)', '西班牙', '比利时', '日本'], 'number': [159, 63, 55, 44, 26, 16, 15, 14, 14, 14, 13, 10, 10, 10, 9, 8, 7, 7, 7, 7]}, '1994': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '丹麦', '奥地利', '挪威', '苏格兰', '日本', '普鲁士(德国)', '西班牙', '比利时'], 'number': [163, 63, 55, 44, 26, 16, 16, 14, 14, 14, 13, 11, 10, 10, 9, 8, 8, 7, 7, 7]}, '1995': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '丹麦', '奥地利', '挪威', '苏格兰', '日本', '普鲁士(德国)', '西班牙', '比利时'], 'number': [169, 63, 56, 44, 26, 17, 17, 15, 14, 14, 13, 11, 10, 10, 9, 8, 8, 7, 7, 7]}, '1996': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '丹麦', '奥地利', '挪威', '苏格兰', '日本', '普鲁士(德国)', '西班牙', '比利时'], 'number': [174, 64, 56, 44, 26, 18, 17, 15, 15, 14, 13, 12, 10, 10, 9, 9, 8, 7, 7, 7]}, '1997': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '丹麦', '奥地利', '挪威', '苏格兰', '日本', '普鲁士(德国)', '西班牙', '比利时'], 'number': [180, 65, 56, 44, 26, 18, 18, 15, 15, 15, 13, 13, 11, 10, 9, 9, 8, 7, 7, 7]}, '1998': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '丹麦', '奥地利', '挪威', '苏格兰', '日本', '普鲁士(德国)', '西班牙', '比利时'], 'number': [184, 66, 56, 44, 26, 18, 18, 15, 15, 15, 13, 13, 11, 11, 9, 9, 8, 7, 7, 7]}, '1999': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '加拿大', '俄罗斯', '丹麦', '奥地利', '挪威', '苏格兰', '日本', '普鲁士(德国)', '西班牙', '比利时'], 'number': [184, 66, 56, 44, 26, 20, 19, 17, 15, 15, 14, 13, 11, 11, 9, 9, 8, 7, 7, 7]}, '2000': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '加拿大', '俄罗斯', '奥地利', '丹麦', '挪威', '苏格兰', '日本', '普鲁士(德国)', '西班牙', '比利时'], 'number': [189, 66, 57, 44, 27, 20, 19, 17, 15, 15, 14, 13, 12, 11, 9, 9, 9, 7, 7, 7]}, '2001': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '加拿大', '俄罗斯', '奥地利', '丹麦', '日本', '挪威', '苏格兰', '普鲁士(德国)', '西班牙', '比利时'], 'number': [197, 68, 57, 44, 27, 20, 20, 17, 15, 15, 14, 13, 12, 11, 10, 9, 9, 7, 7, 7]}, '2002': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '加拿大', '俄罗斯', '奥地利', '日本', '丹麦', '挪威', '苏格兰', '普鲁士(德国)', '西班牙', '比利时'], 'number': [202, 69, 57, 44, 27, 20, 20, 17, 16, 16, 14, 13, 12, 12, 11, 9, 9, 7, 7, 7]}, '2003': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '奥地利', '日本', '丹麦', '挪威', '苏格兰', '南非', '普鲁士(德国)', '西班牙'], 'number': [206, 72, 57, 44, 27, 20, 20, 17, 16, 16, 14, 14, 12, 12, 11, 9, 9, 8, 7, 7]}, '2004': {'country': ['美国', '英国', '德国', '法国', '瑞典', '波兰', '国际组织', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '奥地利', '日本', '丹麦', '挪威', '苏格兰', '南非', '普鲁士(德国)', '西班牙'], 'number': [213, 72, 57, 44, 27, 20, 20, 17, 16, 16, 14, 14, 13, 12, 11, 10, 9, 8, 7, 7]}, '2005': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '奥地利', '日本', '丹麦', '挪威', '苏格兰', '澳大利亚', '比利时', '南非'], 'number': [218, 73, 59, 44, 27, 21, 20, 17, 16, 16, 14, 14, 13, 12, 11, 10, 9, 9, 8, 8]}, '2006': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '瑞士', '意大利', '俄罗斯', '加拿大', '奥地利', '日本', '丹麦', '挪威', '苏格兰', '澳大利亚', '比利时', '南非'], 'number': [224, 73, 59, 44, 27, 22, 20, 17, 16, 16, 14, 14, 13, 12, 11, 10, 9, 9, 8, 8]}, '2007': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '意大利', '瑞士', '俄罗斯', '加拿大', '奥地利', '日本', '丹麦', '挪威', '苏格兰', '澳大利亚', '比利时', '南非'], 'number': [227, 75, 60, 45, 27, 23, 20, 17, 17, 16, 15, 14, 13, 12, 11, 10, 9, 9, 8, 8]}, '2008': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '意大利', '瑞士', '日本', '俄罗斯', '加拿大', '奥地利', '丹麦', '挪威', '苏格兰', '澳大利亚', '比利时', '南非'], 'number': [230, 75, 61, 48, 27, 23, 20, 17, 17, 16, 16, 15, 14, 13, 11, 10, 9, 9, 8, 8]}, '2009': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '意大利', '瑞士', '日本', '俄罗斯', '加拿大', '奥地利', '丹麦', '挪威', '澳大利亚', '苏格兰', '比利时', '南非'], 'number': [236, 76, 61, 48, 27, 23, 20, 17, 17, 16, 16, 15, 15, 13, 11, 10, 10, 9, 8, 8]}, '2010': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '俄罗斯', '意大利', '日本', '瑞士', '加拿大', '奥地利', '丹麦', '挪威', '澳大利亚', '苏格兰', '中国', '比利时'], 'number': [239, 77, 61, 48, 27, 23, 20, 17, 17, 17, 17, 16, 15, 13, 11, 10, 10, 9, 9, 8]}, '2011': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '荷兰', '俄罗斯', '意大利', '日本', '瑞士', '加拿大', '奥地利', '丹麦', '挪威', '澳大利亚', '苏格兰', '中国', '比利时'], 'number': [245, 77, 61, 48, 28, 23, 20, 17, 17, 17, 17, 16, 16, 13, 11, 10, 10, 9, 9, 8]}, '2012': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '日本', '荷兰', '俄罗斯', '意大利', '瑞士', '加拿大', '奥地利', '丹麦', '挪威', '澳大利亚', '中国', '苏格兰', '比利时'], 'number': [250, 78, 61, 48, 28, 24, 20, 18, 17, 17, 17, 16, 16, 13, 11, 10, 10, 10, 9, 8]}, '2013': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '波兰', '日本', '荷兰', '俄罗斯', '意大利', '加拿大', '瑞士', '奥地利', '丹麦', '挪威', '澳大利亚', '中国', '苏格兰', '比利时'], 'number': [255, 79, 62, 48, 28, 25, 20, 18, 17, 17, 17, 17, 16, 14, 11, 10, 10, 10, 9, 9]}, '2014': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '日本', '波兰', '荷兰', '俄罗斯', '意大利', '加拿大', '瑞士', '奥地利', '挪威', '丹麦', '澳大利亚', '中国', '苏格兰', '比利时'], 'number': [258, 79, 62, 50, 28, 25, 21, 20, 17, 17, 17, 17, 16, 14, 12, 11, 10, 10, 9, 9]}, '2015': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '日本', '波兰', '加拿大', '荷兰', '俄罗斯', '意大利', '瑞士', '奥地利', '挪威', '丹麦', '中国', '澳大利亚', '苏格兰', '比利时'], 'number': [259, 80, 62, 50, 29, 26, 23, 20, 18, 17, 17, 17, 16, 14, 12, 11, 11, 10, 9, 9]}, '2016': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '日本', '波兰', '荷兰', '加拿大', '俄罗斯', '意大利', '瑞士', '奥地利', '挪威', '丹麦', '中国', '澳大利亚', '苏格兰', '比利时'], 'number': [260, 85, 62, 51, 29, 26, 24, 20, 18, 18, 17, 17, 16, 14, 12, 11, 11, 10, 9, 9]}, '2017': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '日本', '波兰', '荷兰', '加拿大', '瑞士', '俄罗斯', '意大利', '奥地利', '挪威', '丹麦', '中国', '澳大利亚', '苏格兰', '比利时'], 'number': [268, 86, 63, 51, 29, 27, 24, 20, 18, 18, 17, 17, 17, 14, 12, 11, 11, 10, 9, 9]}, '2018': {'country': ['美国', '英国', '德国', '法国', '瑞典', '国际组织', '日本', '波兰', '加拿大', '荷兰', '瑞士', '俄罗斯', '意大利', '奥地利', '挪威', '丹麦', '中国', '澳大利亚', '苏格兰', '比利时'], 'number': [274, 87, 63, 52, 29, 27, 25, 20, 19, 18, 17, 17, 17, 14, 12, 11, 11, 10, 9, 9]}}}


// var country=['美国','中国']

var itemStyle = {
    normal: {
        opacity: 0.7,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        // color: function(params) {
        //     // build a color map as your need.
        //     var colorList = [
        //       '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
        //        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
        //        '#D7504B','#C6E579','#F4E001','#F0805A','#F0805A'
        //     ];
        //     return colorList[params.dataIndex]
        // },
        // text:'asdfadf'
        // color:"auto"
        // shadowColor: 'rgba(0, 0, 0, 0.5)'

    }
};

myChart1_option = {
	legend: {
        data: ['物理学奖',"化学奖","生理与医药学奖","文学奖","经济学奖"]
    },
    tooltip: {
       
        formatter: function (datas) {
        var res =getnowtooltip(datas.value);
         return res
       }
   },

    title: {
		text: '不知道标题起什么名字',
		textStyle: {
			color: 'black',
			fontSize: 20
		},
		top: '10px',
		left: '10px'
	},
	geo: {
		map: 'world',       // 与引用进来的地图js名字一致
		roam: false
	},
	series:[]
	
};


myChart2_option = {

    title: {
        text: '诺贝尔奖排名',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['获奖人数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        // name:'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        // name: 'category',
        // data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
        data:[]
    },

    // series: [
    //     {
    //         name: '2011年',
    //         type: 'bar',
    //         data: [18203, 23489, 29034, 104970, 131744, 630230]
    //     },
    //     {
    //         name: '2012年',
    //         type: 'bar',
    //         data: [19325, 23438, 31000, 121594, 134141, 681807]
    //     }
    // ]
    series:[]
};

myChart2.setOption(myChart2_option, true);
 myChart1.setOption(myChart1_option, true);
var prev = document.getElementById('prev');
prev.onclick = function() {
	currYear = currYear - 1;
	if (currYear < startYear) {
		currYear = endYear;
	}
	draw();
}

var next = document.getElementById('next');
next.onclick = function() {           
	currYear = currYear + 1;
	if (currYear > endYear) {
		currYear = startYear;
	}
	draw();
}

var intr = document.getElementById('intr');  

function draw() 
{
    // $.get('D:\\exchange\\VisFinalProject\\VisFinalProject\\data.json').done(function (data) {
    //     // 填入数据
    //     myChart2.setOption({
    //         yAxis: {
    //             data: data.years[currYear].country
    //             // data:['美国','中国']
    //         },
    //         series: [{
    //             // 根据名字对应到相应的系列
    //             name: '获奖人数',
    //             type: 'bar',
    //             // data: data.years[currYear].number
    //             data:[12,23]
    //         }]
    //     });
    //     // myChart2.setOption(myChart2_option, true);
    // });
     myChart1.setOption( {
		series: 
		[
		{
			name: '物理学奖',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 3,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: false,
					position: 'left',
					formatter: '{b}',
					color:'black'
				}
			},
			symbolSize: function(val) {
				return 8;
			},
			itemStyle: {
                normal: {
                    color: NBcolorlist[1] 
                }
         	},
			data: getnowNBNode(1)
		},
		{
			name: '化学奖',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 3,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: false,
					position: 'left',
					formatter: '{b}',
					color:'black'
				}
			},
			symbolSize: function(val) {
				return 8;
			},
			itemStyle: {
                normal: {
                    color: NBcolorlist[2]
                }
         	},
			data: getnowNBNode(2)
		},
		{
			name: "生理与医药学奖",
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 3,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: false,
					position: 'left',
					formatter: '{b}',
					color:'black'
				}
			},
			symbolSize: function(val) {
				return 8;
			},
			itemStyle: {
                normal: {
                    color: NBcolorlist[3]
                }
         	},
			data: getnowNBNode(3)
		},
		{
			name: '文学奖',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 3,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: false,
					position: 'left',
					formatter: '{b}',
					color:'black'
				}
			},
			symbolSize: function(val) {
				return 8;
			},
			itemStyle: {
                normal: {
                    color: NBcolorlist[4]
                }
         	},
			data: getnowNBNode(4)
		},
		{
			name: '经济学奖',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 3,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: false,
					position: 'left',
					formatter: '{b}',
					color:'black'
				}
			},
			symbolSize: function(val) {
				return 8;
			},
			itemStyle: {
                normal: {
                    color: NBcolorlist[5]
                }
         	},
			data: getnowNBNode(5)
		}
		],   // 将之前处理的数据放到这里
		textStyle: {
			fontSize: 12
		}
	},

	);

    myChart2.setOption({
        yAxis: {
            data: data.years[currYear].country,
            inverse:true
            // reverse:True
            // data:['美国','中国']
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '获奖人数',
            type: 'bar',
            data: data.years[currYear].number,
            itemStyle:itemStyle,
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    // color:'auto'
                    // position: ['50%', '50%'],
                    color:'#fff',
                    fontSize:16,
                    formatter:"{b} {c}"
                    }
                },
            color:function(param){
                    if (param.name =="美国"){
                        return '#C1232B';
                    }else if (param.name =="英国"){
                        return '#B5C334';
                    }else if (param.name =="德国"){
                        return '#FCCE10';
                    }else if (param.name =="法国"){
                        return '#E87C25';
                    }else if (param.name =="瑞士"){
                        return '#27727B';
                    }else if (param.name =="中国"){
                        return '#FE8463';
                    }else if (param.name =="日本"){
                        return '#9BCA63';
                    }else if (param.name =="澳大利亚"){
                        return '#FAD860';
                    }else if (param.name =="意大利"){
                        return '#F3A43B';
                    }else if (param.name =="加拿大"){
                        return '#60C0DD';
                    }else if (param.name =="比利时"){
                        return '#D7504B';
                    }else if (param.name =="瑞典"){
                        return '#C6E579';
                    }else if (param.name =="丹麦"){
                        return '#F4E001';
                    }else if (param.name =="国际组织"){
                        return '#F0805A';
                    }else{
                        return '#F0805A';
                    }
            },
            // data:[12,23]
        }]
    });
   
    
	//alert(currYear);
	des=getnowDes()
	$("#intr").html(des);
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
    }, 3000)
}
play();