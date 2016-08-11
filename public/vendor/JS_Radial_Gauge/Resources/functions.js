$(document).ready(function(){
$("#container_NeedleWithSections").data("function",NeedleWithSections);
	$("#container_NeedleWithSections").data("title","Needle with Sections");
	if ($("#container_NeedleWithSections").parent().attr("thumb_type") != "none") {	
		var chart_NeedleWithSections = new cfx.gauge.RadialGauge();
		NeedleWithSections(chart_NeedleWithSections);		
		chart_NeedleWithSections.create(document.getElementById("container_NeedleWithSections"));
		if ($("#container_NeedleWithSections").parent().attr("thumb_type") == "crop") {
			Positioning(chart_NeedleWithSections,"100","50",$("#container_NeedleWithSections"),"radial_container");
		}
		else {
			fix_thumb(chart_NeedleWithSections, "radial");	
		}	
	}
	
	$("#container_Progress").data("function",Progress);
	$("#container_Progress").data("title","Progress");
	if ($("#container_Progress").parent().attr("thumb_type") != "none") {	
		var chart_Progress = new cfx.gauge.RadialGauge();
		Progress(chart_Progress);		
		chart_Progress.create(document.getElementById("container_Progress"));
		if ($("#container_Progress").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Progress,"171","59",$("#container_Progress"),"radial_container");
		}
		else {
			fix_thumb(chart_Progress, "radial");	
		}	
	}
	
	$("#container_Marker").data("function",Marker);
	$("#container_Marker").data("title","Marker");
	if ($("#container_Marker").parent().attr("thumb_type") != "none") {	
		var chart_Marker = new cfx.gauge.RadialGauge();
		Marker(chart_Marker);		
		chart_Marker.create(document.getElementById("container_Marker"));
		if ($("#container_Marker").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Marker,"100","50",$("#container_Marker"),"radial_container");
		}
		else {
			fix_thumb(chart_Marker, "radial");	
		}	
	}
	
	$("#container_LEDs").data("function",LEDs);
	$("#container_LEDs").data("title","LEDs");
	if ($("#container_LEDs").parent().attr("thumb_type") != "none") {	
		var chart_LEDs = new cfx.gauge.RadialGauge();
		LEDs(chart_LEDs);		
		chart_LEDs.create(document.getElementById("container_LEDs"));
		if ($("#container_LEDs").parent().attr("thumb_type") == "crop") {
			Positioning(chart_LEDs,"68","60",$("#container_LEDs"),"radial_container");
		}
		else {
			fix_thumb(chart_LEDs, "radial");	
		}	
	}
	
	$("#container_SimpleBarAndNeedle").data("function",SimpleBarAndNeedle);
	$("#container_SimpleBarAndNeedle").data("title","Simple Bar and Needle");
	if ($("#container_SimpleBarAndNeedle").parent().attr("thumb_type") != "none") {	
		var chart_SimpleBarAndNeedle = new cfx.gauge.RadialGauge();
		SimpleBarAndNeedle(chart_SimpleBarAndNeedle);		
		chart_SimpleBarAndNeedle.create(document.getElementById("container_SimpleBarAndNeedle"));
		if ($("#container_SimpleBarAndNeedle").parent().attr("thumb_type") == "crop") {
			Positioning(chart_SimpleBarAndNeedle,"100","87",$("#container_SimpleBarAndNeedle"),"radial_container");
		}
		else {
			fix_thumb(chart_SimpleBarAndNeedle, "radial");	
		}	
	}
	
	$("#container_WeatherGauge").data("function",WeatherGauge);
	$("#container_WeatherGauge").data("title","Weather Gauge");
	if ($("#container_WeatherGauge").parent().attr("thumb_type") != "none") {	
		var chart_WeatherGauge = new cfx.gauge.RadialGauge();
		WeatherGauge(chart_WeatherGauge);		
		chart_WeatherGauge.create(document.getElementById("container_WeatherGauge"));
		if ($("#container_WeatherGauge").parent().attr("thumb_type") == "crop") {
			Positioning(chart_WeatherGauge,"121","117",$("#container_WeatherGauge"),"radial_container");
		}
		else {
			fix_thumb(chart_WeatherGauge, "radial");	
		}	
	}
	
	$("#container_SimpleBarAndNeedle2").data("function",SimpleBarAndNeedle2);
	$("#container_SimpleBarAndNeedle2").data("title","Simple Bar and Needle 2");
	if ($("#container_SimpleBarAndNeedle2").parent().attr("thumb_type") != "none") {	
		var chart_SimpleBarAndNeedle2 = new cfx.gauge.RadialGauge();
		SimpleBarAndNeedle2(chart_SimpleBarAndNeedle2);		
		chart_SimpleBarAndNeedle2.create(document.getElementById("container_SimpleBarAndNeedle2"));
		if ($("#container_SimpleBarAndNeedle2").parent().attr("thumb_type") == "crop") {
			Positioning(chart_SimpleBarAndNeedle2,"104","95",$("#container_SimpleBarAndNeedle2"),"radial_container");
		}
		else {
			fix_thumb(chart_SimpleBarAndNeedle2, "radial");	
		}	
	}
	
	$("#container_WeatherGauge2").data("function",WeatherGauge2);
	$("#container_WeatherGauge2").data("title","Weather Gauge 2");
	if ($("#container_WeatherGauge2").parent().attr("thumb_type") != "none") {	
		var chart_WeatherGauge2 = new cfx.gauge.RadialGauge();
		WeatherGauge2(chart_WeatherGauge2);		
		chart_WeatherGauge2.create(document.getElementById("container_WeatherGauge2"));
		if ($("#container_WeatherGauge2").parent().attr("thumb_type") == "crop") {
			Positioning(chart_WeatherGauge2,"72","62",$("#container_WeatherGauge2"),"radial_container");
		}
		else {
			fix_thumb(chart_WeatherGauge2, "radial");	
		}	
	}
	
	$("#container_Progress2").data("function",Progress2);
	$("#container_Progress2").data("title","Progress 2");
	if ($("#container_Progress2").parent().attr("thumb_type") != "none") {	
		var chart_Progress2 = new cfx.gauge.RadialGauge();
		Progress2(chart_Progress2);		
		chart_Progress2.create(document.getElementById("container_Progress2"));
		if ($("#container_Progress2").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Progress2,"100","120",$("#container_Progress2"),"radial_container");
		}
		else {
			fix_thumb(chart_Progress2, "radial");	
		}	
	}
	
	$("#container_RealisticSemicircular").data("function",RealisticSemicircular);
	$("#container_RealisticSemicircular").data("title","Realistic Semicircular");
	if ($("#container_RealisticSemicircular").parent().attr("thumb_type") != "none") {	
		var chart_RealisticSemicircular = new cfx.gauge.RadialGauge();
		RealisticSemicircular(chart_RealisticSemicircular);		
		chart_RealisticSemicircular.create(document.getElementById("container_RealisticSemicircular"));
		if ($("#container_RealisticSemicircular").parent().attr("thumb_type") == "crop") {
			Positioning(chart_RealisticSemicircular,"113","126",$("#container_RealisticSemicircular"),"radial_container");
		}
		else {
			fix_thumb(chart_RealisticSemicircular, "radial");	
		}	
	}
	
	$("#container_ShadowSections").data("function",ShadowSections);
	$("#container_ShadowSections").data("title","Shadow Sections");
	if ($("#container_ShadowSections").parent().attr("thumb_type") != "none") {	
		var chart_ShadowSections = new cfx.gauge.RadialGauge();
		ShadowSections(chart_ShadowSections);		
		chart_ShadowSections.create(document.getElementById("container_ShadowSections"));
		if ($("#container_ShadowSections").parent().attr("thumb_type") == "crop") {
			Positioning(chart_ShadowSections,"75","118",$("#container_ShadowSections"),"radial_container");
		}
		else {
			fix_thumb(chart_ShadowSections, "radial");	
		}	
	}
	
	$("#container_TickmarksUsingSectionColor").data("function",TickmarksUsingSectionColor);
	$("#container_TickmarksUsingSectionColor").data("title","Tickmarks Using Section Color");
	if ($("#container_TickmarksUsingSectionColor").parent().attr("thumb_type") != "none") {	
		var chart_TickmarksUsingSectionColor = new cfx.gauge.RadialGauge();
		TickmarksUsingSectionColor(chart_TickmarksUsingSectionColor);		
		chart_TickmarksUsingSectionColor.create(document.getElementById("container_TickmarksUsingSectionColor"));
		if ($("#container_TickmarksUsingSectionColor").parent().attr("thumb_type") == "crop") {
			Positioning(chart_TickmarksUsingSectionColor,"99","99",$("#container_TickmarksUsingSectionColor"),"radial_container");
		}
		else {
			fix_thumb(chart_TickmarksUsingSectionColor, "radial");	
		}	
	}
	
	$("#container_ThinNeedle").data("function",ThinNeedle);
	$("#container_ThinNeedle").data("title","Thin Needle");
	if ($("#container_ThinNeedle").parent().attr("thumb_type") != "none") {	
		var chart_ThinNeedle = new cfx.gauge.RadialGauge();
		ThinNeedle(chart_ThinNeedle);		
		chart_ThinNeedle.create(document.getElementById("container_ThinNeedle"));
		if ($("#container_ThinNeedle").parent().attr("thumb_type") == "crop") {
			Positioning(chart_ThinNeedle,"136","100",$("#container_ThinNeedle"),"radial_container");
		}
		else {
			fix_thumb(chart_ThinNeedle, "radial");	
		}	
	}
	
	$("#container_GradientSections").data("function",GradientSections);
	$("#container_GradientSections").data("title","Gradient Sections");
	if ($("#container_GradientSections").parent().attr("thumb_type") != "none") {	
		var chart_GradientSections = new cfx.gauge.RadialGauge();
		GradientSections(chart_GradientSections);		
		chart_GradientSections.create(document.getElementById("container_GradientSections"));
		if ($("#container_GradientSections").parent().attr("thumb_type") == "crop") {
			Positioning(chart_GradientSections,"106","92",$("#container_GradientSections"),"radial_container");
		}
		else {
			fix_thumb(chart_GradientSections, "radial");	
		}	
	}
	
	$("#container_MinimalisticWithSections").data("function",MinimalisticWithSections);
	$("#container_MinimalisticWithSections").data("title","Minimalistic with Sections");
	if ($("#container_MinimalisticWithSections").parent().attr("thumb_type") != "none") {	
		var chart_MinimalisticWithSections = new cfx.gauge.RadialGauge();
		MinimalisticWithSections(chart_MinimalisticWithSections);		
		chart_MinimalisticWithSections.create(document.getElementById("container_MinimalisticWithSections"));
		if ($("#container_MinimalisticWithSections").parent().attr("thumb_type") == "crop") {
			Positioning(chart_MinimalisticWithSections,"165","50",$("#container_MinimalisticWithSections"),"radial_container");
		}
		else {
			fix_thumb(chart_MinimalisticWithSections, "radial");	
		}	
	}
	
	$("#container_Progress3").data("function",Progress3);
	$("#container_Progress3").data("title","Progress 3");
	if ($("#container_Progress3").parent().attr("thumb_type") != "none") {	
		var chart_Progress3 = new cfx.gauge.RadialGauge();
		Progress3(chart_Progress3);		
		chart_Progress3.create(document.getElementById("container_Progress3"));
		if ($("#container_Progress3").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Progress3,"100","50",$("#container_Progress3"),"radial_container");
		}
		else {
			fix_thumb(chart_Progress3, "radial");	
		}	
	}
	
	$("#container_Progress4").data("function",Progress4);
	$("#container_Progress4").data("title","Progress 4");
	if ($("#container_Progress4").parent().attr("thumb_type") != "none") {	
		var chart_Progress4 = new cfx.gauge.RadialGauge();
		Progress4(chart_Progress4);		
		chart_Progress4.create(document.getElementById("container_Progress4"));
		if ($("#container_Progress4").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Progress4,"100","50",$("#container_Progress4"),"radial_container");
		}
		else {
			fix_thumb(chart_Progress4, "radial");	
		}	
	}
	
	$("#container_Progress5").data("function",Progress5);
	$("#container_Progress5").data("title","Progress 5");
	if ($("#container_Progress5").parent().attr("thumb_type") != "none") {	
		var chart_Progress5 = new cfx.gauge.RadialGauge();
		Progress5(chart_Progress5);		
		chart_Progress5.create(document.getElementById("container_Progress5"));
		if ($("#container_Progress5").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Progress5,"100","50",$("#container_Progress5"),"radial_container");
		}
		else {
			fix_thumb(chart_Progress5, "radial");	
		}	
	}
	
	$("#container_Progress6").data("function",Progress6);
	$("#container_Progress6").data("title","Progress 6");
	if ($("#container_Progress6").parent().attr("thumb_type") != "none") {	
		var chart_Progress6 = new cfx.gauge.RadialGauge();
		Progress6(chart_Progress6);		
		chart_Progress6.create(document.getElementById("container_Progress6"));
		if ($("#container_Progress6").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Progress6,"142","73",$("#container_Progress6"),"radial_container");
		}
		else {
			fix_thumb(chart_Progress6, "radial");	
		}	
	}
	
	$("#container_Progress7").data("function",Progress7);
	$("#container_Progress7").data("title","Progress 7");
	if ($("#container_Progress7").parent().attr("thumb_type") != "none") {	
		var chart_Progress7 = new cfx.gauge.RadialGauge();
		Progress7(chart_Progress7);		
		chart_Progress7.create(document.getElementById("container_Progress7"));
		if ($("#container_Progress7").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Progress7,"100","50",$("#container_Progress7"),"radial_container");
		}
		else {
			fix_thumb(chart_Progress7, "radial");	
		}	
	}
	
	$("#container_Progress8").data("function",Progress8);
	$("#container_Progress8").data("title","Progress 8");
	if ($("#container_Progress8").parent().attr("thumb_type") != "none") {	
		var chart_Progress8 = new cfx.gauge.RadialGauge();
		Progress8(chart_Progress8);		
		chart_Progress8.create(document.getElementById("container_Progress8"));
		if ($("#container_Progress8").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Progress8,"100","50",$("#container_Progress8"),"radial_container");
		}
		else {
			fix_thumb(chart_Progress8, "radial");	
		}	
	}
	
	$("#container_Bold").data("function",Bold);
	$("#container_Bold").data("title","Bold");
	if ($("#container_Bold").parent().attr("thumb_type") != "none") {	
		var chart_Bold = new cfx.gauge.RadialGauge();
		Bold(chart_Bold);		
		chart_Bold.create(document.getElementById("container_Bold"));
		if ($("#container_Bold").parent().attr("thumb_type") == "crop") {
			Positioning(chart_Bold,"100","90",$("#container_Bold"),"radial_container");
		}
		else {
			fix_thumb(chart_Bold, "radial");	
		}	
	}
	
	$("#container_BumpGlare").data("function",BumpGlare);
	$("#container_BumpGlare").data("title","Bump Glare");
	if ($("#container_BumpGlare").parent().attr("thumb_type") != "none") {	
		var chart_BumpGlare = new cfx.gauge.RadialGauge();
		BumpGlare(chart_BumpGlare);		
		chart_BumpGlare.create(document.getElementById("container_BumpGlare"));
		if ($("#container_BumpGlare").parent().attr("thumb_type") == "crop") {
			Positioning(chart_BumpGlare,"196","182",$("#container_BumpGlare"),"radial_container");
		}
		else {
			fix_thumb(chart_BumpGlare, "radial");	
		}	
	}	
});

function NeedleWithSections(radialGauge1)
{
	radialGauge1.setMainValue(35);

// Customize scale
var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
mainScale.setAllowHalves(false);
mainScale.setAlignment(cfx.StringAlignment.Near);
radialGauge1.getBorder().setInsideGap(-0.05);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setLabelGap(1.5);

// Create sections
var sections = radialGauge1.getMainScale().getSections();
var section = new cfx.gauge.ScaleSection();
section.setFrom(70);
section.setTo(100);
sections.add(section);
section = new cfx.gauge.ScaleSection();
section.setFrom(30);
section.setTo(70);
sections.add(section);section = new cfx.gauge.ScaleSection();
section.setFrom(0);
section.setTo(30);
sections.add(section);

// Add sections titles
var titles = radialGauge1.getTitles();
var title = new cfx.gauge.Title();
title.setText("Safe");
title.setX(0.22);
title.setY(0.55);
title.setFont("8pt Arial");
title.setTextColor("#2F912F");
title.setAlignment(cfx.StringAlignment.Near);
titles.add(title);
title.setTag("TitleSafe");

title = new cfx.gauge.Title();
title.setText("Warning");
title.setX(0.5);
title.setY(0.27);
title.setFont("8pt Arial");
title.setTextColor("#FDB023");
titles.add(title);
title.setTag("TitleWarning");

title = new cfx.gauge.Title();
title.setText("Danger");
title.setX(0.78);
title.setY(0.55);
title.setFont("8pt Arial");
title.setTextColor("#F43131");
title.setAlignment(cfx.StringAlignment.Far);
titles.add(title);
title.setTag("TitleDanger");

// Add main title
title = new cfx.gauge.Title();
title.setText("Temp. C");
titles.add(title);
}
function Progress(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setVisible(false);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setVisible(false);
mainScale.getCap().setVisible(false);
mainScale.setStartAngle(270);
mainScale.setSweepAngle(360);
mainScale.setPosition(0.25);
var bar = mainScale.getBar();
bar.setPosition(0);
bar.setThickness(1);
bar.setVisible(true);
mainScale.setThickness(0.2);
var filler = new cfx.gauge.Filler();
filler.setPosition(0.25);
filler.setSize(1);
radialGauge1.setMainIndicator(filler);
radialGauge1.setMainValue(67);

radialGauge1.getBorder().setTemplate("<DataTemplate></DataTemplate>");

var title = new cfx.gauge.Title();
title.setTag("TitleLarge");
title.setText("%v");
title.setX(0.5);
title.setY(0.5);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setTag("DockedTitle");
title.setText("New Leads Today");
title.setDock(cfx.DockArea.Top);
radialGauge1.getTitles().add(title);
}
function Marker(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
mainScale.setAllowHalves(false);
var majorTickmarks = mainScale.getTickmarks().getMajor();
//majorTickmarks.setVisible(false);
//majorTickmarks.setStyle(cfx.gauge.TickmarkStyle.Circle);
majorTickmarks.setSize(0.3);
majorTickmarks.setWidth(0.05);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
//mediumTickmarks.setVisible(false);
//mediumTickmarks.setStyle(cfx.gauge.TickmarkStyle.Circle);
mediumTickmarks.setSize(0.25);
//mediumTickmarks.setPosition(0);
mainScale.getCap().setVisible(false);
var bar = mainScale.getBar();
bar.setVisible(true);
bar.setThickness(0.075);
mainScale.setThickness(0.35);
mainScale.setPosition(0.1);


var marker = new cfx.gauge.Marker();
marker.setSize(0.6);
radialGauge1.setMainIndicator(marker);

radialGauge1.setMainValue(54);

var title = new cfx.gauge.Title();
title.setText("Weight (lbs.)");
title.setX(0.5);
title.setY(0.5);
radialGauge1.getTitles().add(title);
}
function LEDs(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100000);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setVisible(false);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setVisible(false);
mainScale.getCap().setVisible(false);
mainScale.setStartAngle(270);
mainScale.setSweepAngle(360);
mainScale.setPosition(0.25);
var bar = mainScale.getBar();
bar.setVisible(false);
mainScale.setThickness(0.2);

var repeater = new cfx.gauge.Repeater();
repeater.setTemplate("MarkerThickRectangle");
radialGauge1.setMainIndicator(repeater);

radialGauge1.setMainValue(67134);

var border = radialGauge1.getBorder();
border.setTemplate("LinearBorderStraightBasicMedium");
border.setInsideColor("#000000");
border.setInsideColor("#000000");
border.setWidth(2);

var title = new cfx.gauge.Title();
title.setTag("TitleLarge");
title.setText("%v");
title.setX(0.5);
title.setY(0.5);
title.setFont("24pt Arial");
title.setTextColor("#FD6F29");
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setTag("Title");
title.setText("Sales");
title.setX(0.15);
title.setY(0.1);
title.setTextColor("#999999");
radialGauge1.getTitles().add(title);
}
function SimpleBarAndNeedle(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setThickness(0.8);
mainScale.setPosition(-0.3);
mainScale.setStartAngle(180);
mainScale.setSweepAngle(180);
mainScale.setMax(100);

var bar = mainScale.getBar();
bar.setColor("#BDE031");
bar.setBorderColor("#BDE031");
bar.setVisible(true);
var cap = mainScale.getCap();
cap.setVisible(false);

var mainIndicator = radialGauge1.getMainIndicator();
mainIndicator.setValue(43);
mainIndicator.setColor("#000000");
mainIndicator.setBorderColor("#000000");
mainIndicator.setSize(1.25);
mainIndicator.setPosition(0.7);
mainIndicator.setTemplate("NeedleThinDrop");

radialGauge1.getBorder().setTemplate("<DataTemplate ></DataTemplate>");

var tickmarks = radialGauge1.getMainScale().getTickmarks();
tickmarks.getMajor().setVisible(false);
tickmarks.getMedium().setVisible(false);

radialGauge1.setFont("12pt Arial");
radialGauge1.setTextColor("#1FB1ED");

var section = new cfx.gauge.ScaleSection();
section.setColor("#8EDA2C");
section.setBorderColor("#8EDA2C");
section.setFrom(0);
section.setTo(80);
mainScale.getSections().add(section);

var title = new cfx.gauge.Title();
title.setText("%v");
title.setDock(cfx.gauge.DockArea.Top);
title.setFont("bold 36pt Arial");
title.setTextColor("#000000");
radialGauge1.getTitles().add(title);
}
function WeatherGauge(radialGauge1)
{
	var RadialBorderWeather = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
       '<DataTemplate.Resources>' +
           '<sys:String x:Key="ratio">1</sys:String>' +
           '<Thickness x:Key="borderFactor">0.02</Thickness>' +
           '<sys:String x:Key="strokeFactor">0.5</sys:String>' +
           '<sys:String x:Key="defWidth">1</sys:String>' +
           '<MultiplyConverter x:Key="multConv" ></MultiplyConverter>' +
       '</DataTemplate.Resources>' +
       '<Canvas>' +
           '<Ellipse x:Name="Colors" Fill="{Binding Path=Stroke}" Stroke="{Binding Path=Stroke}" Margin="{Binding Path=StrokeThickness, Converter={StaticResource multConv},ConverterParameter=.5}" StrokeThickness="{Binding Path=StrokeThickness}"></Ellipse>' +
           '<Ellipse Stroke="#99000000" ></Ellipse>' +
           '<Ellipse Margin="4" Fill="{Binding Path=Fill}" ></Ellipse>' +
           '<Ellipse Margin="4" Stroke="#99000000" ></Ellipse>' +
       '</Canvas>' +
    '</DataTemplate>';

var CapThickRing = '<DataTemplate>' +
         '<Canvas>' +
             '<Ellipse Fill="{Binding Path=Fill}" ></Ellipse>' +
             '<Ellipse Margin="3" Stroke="#99FFFFFF" StrokeThickness="6"></Ellipse>' +
         '</Canvas>' +
     '</DataTemplate>';

var border = radialGauge1.getBorder();
border.setColor("#CCCCC4");
border.setInsideColor("#FFFFFF");
border.setTemplate(RadialBorderWeather);

var scale = radialGauge1.getMainScale();
scale.setStartAngle(270);
scale.setSweepAngle(360);
scale.setMin(0);
scale.setMax(80);
scale.setAllowHalves(false);
scale.getTickmarks().getMedium().setVisible(false);

var majortickmarks = scale.getTickmarks().getMajor();
majortickmarks.setColor("#CCCCC4");
majortickmarks.setWidth(0.08);
majortickmarks.setStyle(cfx.gauge.TickmarkStyle.Line);
majortickmarks.setPosition(1.7);
majortickmarks.setSize(1.1);
scale.setDrawLabels(false);

var cap = scale.getCap();
cap.setColor("#CCCCC4");
cap.setSize(0.4);
cap.setTemplate(CapThickRing);

var marker = new cfx.gauge.Marker();
marker.setColor("#C61E1E");
marker.setTemplate("MarkerBigTriangle");
marker.setPosition(2.6);
radialGauge1.setMainIndicator(marker);

radialGauge1.setMainValue(27);

var title = new cfx.gauge.Title();
title.setText("N");
title.setFont("16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.5);
title.setY(0.12);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("E");
title.setFont("16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.88);
title.setY(0.5);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("S");
title.setFont("16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.5);
title.setY(0.88);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("W");
title.setFont("24pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.12);
title.setY(0.5);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("NE");
title.setFont("16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.78);
title.setY(0.23);
title.setAngle(45);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("SE");
title.setFont("16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.78);
title.setY(0.77);
title.setAngle(-45);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("SW");
title.setFont("16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.22);
title.setY(0.77);
title.setAngle(45);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("NW");
title.setFont("16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.22);
title.setY(0.23);
title.setAngle(-45);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("3");
title.setFont("24pt Arial");
title.setTag("TitleLarge");
title.setTextColor("#FFFFFF");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.5);
title.setY(0.5);
radialGauge1.getTitles().add(title);
}
function SimpleBarAndNeedle2(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setThickness(0.8);
mainScale.setPosition(0);
var bar = mainScale.getBar();
bar.setColor("#D8D8D8");
bar.setBorderColor("#D8D8D8");
bar.setThickness(0.8);
bar.setPosition(0.15);
bar.setVisible(true);
mainScale.setStartAngle(205);
mainScale.setSweepAngle(130);
mainScale.setMax(100);

var cap = mainScale.getCap();
cap.setVisible(false);

var indicator = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
        '<DataTemplate.Resources>' +
            '<sys:String x:Key="ratio">0.15</sys:String>' +
            '<sys:String x:Key="yPivot">0.135</sys:String>' +
        '</DataTemplate.Resources>' +
        '<Viewbox ViewWidth="13" ViewHeight="86">' +
            '<Grid>' +
                '<Path Fill="{Binding Path=Fill}" Data="M8.819,68.433V-5h-5v73.583C1.568,69.605,0,71.867,0,74.5c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5C13,71.728,11.262,69.368,8.819,68.433z"></Path>' +
            '</Grid>' +
        '</Viewbox>' +
        '</DataTemplate>';

var filler = new cfx.gauge.Filler();
filler.setColor("#CE2834");
filler.setBorderColor("#CE2834");
filler.setSize(mainScale.getBar().getThickness());
filler.setPosition(mainScale.getBar().getPosition());
radialGauge1.setMainIndicator(filler);

var needle = new cfx.gauge.Needle();
needle.setColor("#000000");
needle.setBorderColor("#000000");
needle.setSize(1);
needle.setPosition(0);
needle.setTemplate(indicator);
mainScale.getIndicators().add(needle);

radialGauge1.setMainValue(22);

radialGauge1.getBorder().setTemplate("<DataTemplate ></DataTemplate>");

var tickmarks = radialGauge1.getMainScale().getTickmarks();
tickmarks.getMajor().setVisible(false);
tickmarks.getMedium().setVisible(false);

radialGauge1.setFont("12pt Arial");
radialGauge1.setTextColor("#1FB1ED");

var title = new cfx.gauge.Title();
title.setText("22");
title.setY(0.65);
title.setFont("24pt Arial");
title.setTextColor("#000000");
radialGauge1.getTitles().add(title);
}
function WeatherGauge2(radialGauge1)
{
	var RadialBorderWeather = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
       '<DataTemplate.Resources>' +
           '<sys:String x:Key="ratio">1</sys:String>' +
           '<Thickness x:Key="borderFactor">0.02</Thickness>' +
           '<sys:String x:Key="strokeFactor">0.5</sys:String>' +
           '<sys:String x:Key="defWidth">1</sys:String>' +
           '<MultiplyConverter x:Key="multConv" ></MultiplyConverter>' +
       '</DataTemplate.Resources>' +
       '<Canvas>' +
           '<Ellipse x:Name="Colors" Fill="{Binding Path=Stroke}" Stroke="{Binding Path=Stroke}" Margin="{Binding Path=StrokeThickness, Converter={StaticResource multConv},ConverterParameter=.5}" StrokeThickness="{Binding Path=StrokeThickness}"></Ellipse>' +
           '<Ellipse Stroke="#99000000" ></Ellipse>' +
           '<Ellipse Margin="4" Fill="{Binding Path=Fill}" ></Ellipse>' +
           '<Ellipse Margin="4" Stroke="#99000000" ></Ellipse>' +
       '</Canvas>' +
    '</DataTemplate>';

var CapThickRing = '<DataTemplate>' +
         '<Canvas>' +
             '<Ellipse Fill="{Binding Path=Fill}" ></Ellipse>' +
             '<Ellipse Margin="3" Stroke="#99FFFFFF" StrokeThickness="6"></Ellipse>' +
         '</Canvas>' +
     '</DataTemplate>';

var border = radialGauge1.getBorder();
border.setColor("#CCCCC4");
border.setInsideColor("#FFFFFF");
border.setTemplate(RadialBorderWeather);

var scale = radialGauge1.getMainScale();
scale.setStartAngle(100);
scale.setSweepAngle(340);
scale.setMin(0);
scale.setMax(50);
scale.setAllowHalves(true);
scale.getTickmarks().getMedium().setVisible(false);

var bar = scale.getBar();
bar.setColor("#E9E9E3");
bar.setBorderColor("#C3C3BE");
bar.setPosition(0);
bar.setVisible(true);

var majortickmarks = scale.getTickmarks().getMajor();
majortickmarks.setColor("#C3C3BE");
majortickmarks.setWidth(0.08);
majortickmarks.setStyle(cfx.gauge.TickmarkStyle.Line);
majortickmarks.setPosition(0);
majortickmarks.setStep(2);
scale.setDrawLabels(false);

var cap = scale.getCap();
cap.setColor("#CCCCC4");
cap.setSize(0.5);
cap.setTemplate(CapThickRing);

var filler = new cfx.gauge.Filler();
filler.setColor("#128517");
filler.setSize(0.5);
filler.setPosition(0);
radialGauge1.setMainIndicator(filler);

radialGauge1.setMainValue(29.9);

title = new cfx.gauge.Title();
title.setText("FAIR");
title.setFont("bold 16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.72);
title.setY(0.27);
title.setAngle(45);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("DRY");
title.setFont("bold 16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.72);
title.setY(0.73);
title.setAngle(-45);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("STORM");
title.setFont("bold 16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.28);
title.setY(0.73);
title.setAngle(45);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("RAIN");
title.setFont("bold 16pt Arial");
title.setTextColor("#000000");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.28);
title.setY(0.27);
title.setAngle(-45);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("29.90");
title.setTag("TitleLarge");
title.setFont("20pt Arial");
title.setTextColor("#FFFFFF");
title.setAlignment(cfx.StringAlignment.Center);
title.setX(0.5);
title.setY(0.5);
radialGauge1.getTitles().add(title);
}
function Progress2(radialGauge1)
{
	var RadialRoundSquareBorder = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
'<DataTemplate.Resources>' +
    '<Thickness x:Key="borderGap">8</Thickness>' +
    '<Thickness x:Key="externalGap">2</Thickness>' +
'</DataTemplate.Resources>' +
'<Canvas>' +
    '<Border BorderBrush="{x:Null}" Background="{Binding Path=Fill}" CornerRadius="20" ></Border>' +
    '<Border BorderBrush="{x:Null}" CornerRadius="20">' +
        '<Border.Background>' +
            '<LinearGradientBrush StartPoint="0.5,0" EndPoint="0.5,1">' +
                '<GradientStop Color="#60FFFFFF" Offset="0" ></GradientStop>' +
                '<GradientStop Color="#00FFFFFF" Offset="1" ></GradientStop>' +
            '</LinearGradientBrush>' +
        '</Border.Background>' +
    '</Border>' +
'</Canvas>' +
'</DataTemplate>';

var border = radialGauge1.getDashboardBorder();
border.setColor("#F4F4F4");
border.setInsideColor("#F4F4F4");
border.setTemplate(RadialRoundSquareBorder);

radialGauge1.getBorder().setTemplate('<DataTemplate ></DataTemplate>');

var scale = radialGauge1.getMainScale();
scale.setDrawLabels(false);
scale.getTickmarks().getMedium().setVisible(false);
scale.setPosition(1);
scale.setStartAngle(270);
scale.setSweepAngle(360);
scale.setMax(50);
scale.getCap().setVisible(false);

var majortickmarks = scale.getTickmarks().getMajor();
majortickmarks.setPosition(-0.7);
majortickmarks.setColor("#D6D6D6");
majortickmarks.setInsideColor("#D6D6D6");

var bar = scale.getBar();
bar.setVisible(true);
bar.setColor("#FFFFFF");
bar.setBorderColor("#FFFFFF");
bar.setThickness(1);

var filler = new cfx.gauge.Filler();
filler.setPosition(1.3);
filler.setSize(0.9);
filler.setColor("#57ACDA");
filler.setBorderColor("#4281A4");
filler.setTemplate("RadialFillerRound");
radialGauge1.setMainIndicator(filler);

var title = new cfx.gauge.Title();
title.setText("Pageviews");
title.setDock(cfx.gauge.DockArea.Bottom);
title.setFont("20pt Arial");
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("%v");
title.setTag("TitleLarge");
title.setTextColor("#000000");
title.setX(0.5);
title.setY(0.5);
title.setFont("bold 24pt Arial");
radialGauge1.getTitles().add(title);

radialGauge1.setMainValue(45);
}
function RealisticSemicircular(radialGauge1)
{
	var scale = radialGauge1.getMainScale();

radialGauge1.getBorder().setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>'+
        '<Thickness x:Key="borderFactor">0.13,0.16,0.13,0.10</Thickness>' +
        '<sys:String x:Key="ratio">1.854</sys:String>' +
        '<sys:String x:Key="startLocation">185</sys:String>' +
        '<sys:String x:Key="endLocation">355</sys:String>' +
        '<sys:String x:Key="yCenter">1</sys:String>' +
        '<ColorConverter x:Key=\"clrConverter\"/>' +
    '</DataTemplate.Resources>' +
    '<Viewbox ViewWidth="102" ViewHeight="55">' +
        '<Canvas>' +
        '<Path Data="M0.5,54.5 L0.5,50 C0.5,22.38576251 22.88576251,0 50.5,0 C 78.11423749,0 100.5,22.38576251 100.5,50 L100.5,54.5Z">' +
            '<Path.Fill>' +
            '<LinearGradientBrush>' +
                '<GradientStop Color="#E1E1E1" Offset="0"></GradientStop>' +
                '<GradientStop Color="#E1E1E1" Offset="0.26"></GradientStop>' +
                '<GradientStop Color="#424242" Offset="1"></GradientStop>' +
            '</LinearGradientBrush>' +
            '</Path.Fill>' +
        '</Path>' +
        '<Path Data="M0.5,54.5 L0.5,50 C0.5,22.38576251 22.88576251,0 50.5,0 C 78.11423749,0 100.5,22.38576251 100.5,50 L100.5,54.5" StrokeThickness="0.55">' +
            '<Path.Stroke>' +
            '<LinearGradientBrush StartPoint="0,0" EndPoint="0,1">' +
                '<GradientStop Color="#8A8A8A" Offset="0"></GradientStop>' +
                '<GradientStop Color="#D0D0D0" Offset="1"></GradientStop>' +
            '</LinearGradientBrush>' +
            '</Path.Stroke>' +
        '</Path>' +
        '<Path Data="M0.75,54.5 L0.75,50.5 C0.75,22.88576251 23.02576251,0.5 50.75,0.5" StrokeThickness="0.55">' +
            '<Path.Stroke>' +
            '<LinearGradientBrush StartPoint="0,0" EndPoint="0,1">' +
                '<GradientStop Color="#00D6D6D6" Offset="0"></GradientStop>' +
                '<GradientStop Color="#FFD6D6D6" Offset="1"></GradientStop>' +
            '</LinearGradientBrush>' +
            '</Path.Stroke>' +
        '</Path>' +
        '<Path Data="M4.5,50 C4.5,24.8710438841 24.8710438841,4.5 50,4.5 C 75.1289561159,4.5 95.5,24.8710438841 95.5,50 Z" Fill="{Binding Path=Fill}"></Path>' +
        '<Path Data="M12,27 C14,30.1289561159 24.8710438841,46.5 50,46.5 C 75.1289561159,46.5 86,30.1289561159 88,27 C 91.5,29 95.5,43 95.5,50 L4.5,50 C 4.5,43 8.5,29 12,27 Z">' +
            '<Path.Fill>' +
            '<LinearGradientBrush StartPoint="0,0" EndPoint="0,1">' +
                '<GradientStop Color="{Binding Path=FillColor, Converter={StaticResource clrConverter},ConverterParameter=a:0}" Offset="0"></GradientStop>' +
                '<GradientStop Color="{Binding Path=FillColor, Converter={StaticResource clrConverter},ConverterParameter=a:0}" Offset="0.2"></GradientStop>' +
                '<GradientStop Color="{Binding Path=FillColor, Converter={StaticResource clrConverter},ConverterParameter=a:100;v:20}" Offset="1"></GradientStop>' +
            '</LinearGradientBrush>' +
            '</Path.Fill>' +
        '</Path>' +
        '<Path Data="M4.5,50 C4.5,24.8710438841 24.8710438841,4.5 50,4.5 C 75.1289561159,4.5 95.5,24.8710438841 95.5,50" StrokeThickness="0.75">' +
            '<Path.Stroke>' +
            '<LinearGradientBrush StartPoint="0,0" EndPoint="1,0">' +
                '<GradientStop Color="#525252" Offset="0"></GradientStop>' +
                '<GradientStop Color="#C5C5C4" Offset="0.5"></GradientStop>' +
                '<GradientStop Color="#939393" Offset="1"></GradientStop>' +
            '</LinearGradientBrush>' +
            '</Path.Stroke>' +
        '</Path>' +
        '</Canvas>' +
    '</Viewbox>' +
    '</DataTemplate>');

scale.getCap().setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
'<Viewbox ViewWidth="50" ViewHeight="50">' +
'<Canvas>' +
    '<Ellipse Canvas.Left="0" Canvas.Top="0" Width="50" Height="50">' +
        '<Ellipse.Fill>' +
            '<LinearGradientBrush>' +
                '<GradientStop Color="#E1E1E1" Offset="0"></GradientStop>' +
                '<GradientStop Color="#E1E1E1" Offset="0.26"></GradientStop>' +
                '<GradientStop Color="#424242" Offset="1"></GradientStop>' +
            '</LinearGradientBrush>' +
        '</Ellipse.Fill>' +
    '</Ellipse>' +
    '<Ellipse Canvas.Left="5" Canvas.Top="5" Width="40" Height="40">' +
        '<Ellipse.Fill>' +
        '<LinearGradientBrush StartPoint="1,1" EndPoint="0,0">' +
            '<GradientStop Color="#E1E1E1" Offset="0"></GradientStop>' +
            '<GradientStop Color="#424242" Offset="1"></GradientStop>' +
        '</LinearGradientBrush>' +
        '</Ellipse.Fill>' +
    '</Ellipse>' +
'</Canvas>' +
'</Viewbox></DataTemplate>');

radialGauge1.getMainIndicator().setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
'<DataTemplate.Resources>' +
    '<sys:String x:Key="ratio">0.20</sys:String>' +
        '<ColorConverter x:Key=\"clrConverter\"/>' +
'</DataTemplate.Resources>' +
'<Viewbox ViewWidth="20" ViewHeight="100">' +
'<Canvas>' +
    '<Path Data="M8,0 L12,0 L20,100 L0,100Z" Fill="#000000">' +
'<Path.BitmapEffect>' +
'<BlurBitmapEffect OffsetY="3" OffsetX="3" Radius="2"></BlurBitmapEffect>' +
'</Path.BitmapEffect>' +
    '</Path>' +
    '<Path Data="M8,0 L12,0 L20,100 L0,100Z" Fill="{Binding Path=Fill}" Stroke="{Binding Path=FillColor, Converter={StaticResource clrConverter},ConverterParameter=b;v:25}" StrokeThickness="0.8"></Path>' +
'</Canvas>' +
'</Viewbox>' +
'</DataTemplate>');

radialGauge1.getBorder().getGlare().setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<DataTemplate.Resources>' +
        '<ColorConverter x:Key=\"clrConverter\"/>' +
    '</DataTemplate.Resources>' +
    '<Viewbox ViewWidth="120" ViewHeight="60">' +
        '<Canvas>' +
            '<Ellipse Canvas.Left="15" Canvas.Top="-2" Width="90" Height="80" Fill="#40FFFFFF">' +
            '<Ellipse.Fill>' +
                '<LinearGradientBrush StartPoint="0,0" EndPoint="0,1">' +
                    '<GradientStop Color="{Binding Path=FillColor, Converter={StaticResource clrConverter},ConverterParameter=s:21;v:74;a:95}" Offset="0"></GradientStop>' +
                    '<GradientStop Color="{Binding Path=FillColor, Converter={StaticResource clrConverter},ConverterParameter=s:90;v:44;a:10}" Offset="0.5"></GradientStop>' +
                    '<GradientStop Color="#00720B0C" Offset="1"></GradientStop>' +
                '</LinearGradientBrush>' +
            '</Ellipse.Fill>' +
            '</Ellipse>' +
        '</Canvas>' +
    '</Viewbox>' +
    '</DataTemplate>');

scale.getCap().setSize(0.15);
radialGauge1.getMainIndicator().setPosition(0.5);
radialGauge1.getMainIndicator().setColor("#C94961");
radialGauge1.getBorder().setInsideColor("#780000");
scale.setTextColor("#E0E0E0");
scale.setAllowHalves(false);
}
function ShadowSections(radialGauge1)
{
	radialGauge1.getBorder().setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><Thickness x:Key="borderFactor">0.03</Thickness><sys:String x:Key="ratio">2</sys:String><sys:String x:Key="startLocation">185</sys:String><sys:String x:Key="endLocation">355</sys:String></DataTemplate.Resources><Viewbox ViewWidth="102" ViewHeight="50"><Canvas><Path Stroke="{Binding Path=Stroke}" Fill="{Binding Path=Fill}" Data="M1,50 C1,22.38576251 23.38576251,0 51,0 C 78.61423749,0 101,22.38576251 101,50 Z" ></Path></Canvas></Viewbox></DataTemplate>');

radialGauge1.getBorder().getGlare().setVisible(false);
radialGauge1.getBorder().setInsideColor("#EDEDED");
radialGauge1.getBorder().setColor("#A0A0A0");

var scale = radialGauge1.getMainScale();
scale.getTickmarks().getMajor().setStyle(cfx.gauge.TickmarkStyle.None);
scale.getTickmarks().getMedium().setVisible(false);

var bar = scale.getBar();
bar.setVisible(true);
bar.setTemplate('<DataTemplate><Path Data="{Binding Path=Geometry}" Fill="#60404040"><Path.BitmapEffect><BlurBitmapEffect OffsetY="2" OffsetX="2" Radius="2"></BlurBitmapEffect></Path.BitmapEffect></Path></DataTemplate>');

var section;
section = new cfx.gauge.ScaleSection();
section.setFrom(1);
section.setTo(1.35);
section.setColor("#D0E7F4");
scale.getSections().add(section);
section = new cfx.gauge.ScaleSection();
section.setFrom(1.35);
section.setTo(1.6);
section.setColor("#63B9E0");
scale.getSections().add(section);
section = new cfx.gauge.ScaleSection();
section.setFrom(1.6);
section.setTo(1.8);
section.setColor("#559EC5");
scale.getSections().add(section);
section = new cfx.gauge.ScaleSection();
section.setFrom(1.8);
section.setTo(2);
section.setColor("#3A687E");
scale.getSections().add(section);

radialGauge1.setMainValue(1.15);
scale.setMin(1);
scale.setMax(2);

scale.getCap().setVisible(false);
scale.getCap().setSize(0);

var needle = scale.getMainIndicator();

needle.setColor("#328ABC");
needle.setSize(0.7);
needle.setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><Thickness x:Key="borderFactor">0.03</Thickness><sys:String x:Key="ratio">0.12</sys:String></DataTemplate.Resources><Viewbox ViewWidth="1" ViewHeight="10"><Canvas><Path Data=\"M0,9.5 C0,9.7761423749 0.2238576251,10 0.5,10 C 0.7761423749,10 1,9.7761423749 1,9.5 L0.5,0 Z" Fill="{Binding Path=Fill}"></Path></Canvas></Viewbox></DataTemplate>');
}
function TickmarksUsingSectionColor(radialGauge1)
{
	var template = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
    '<Canvas>' +
    '<Path Data="{Binding Path=Geometry}" Fill="{Binding Path=Fill}" Stroke="{x:Null}" Opacity="0.25"></Path>' +
    '<Path Data="{Binding Path=GeometryOutside}" Stroke="{Binding Path=Stroke}"></Path>' +
    '</Canvas>' +
    '</DataTemplate>';
var section;

radialGauge1.getMainIndicator().setTemplate('<DataTemplate>' +
'<Viewbox ViewWidth="20" ViewHeight="100">' +
'<Canvas>' +
    '<Path Data="M8,0 L12,0 L20,100 L0,100Z" Fill="{Binding Path=Fill}" Stroke="{x:Null}"></Path>' +
'</Canvas>' +
'</Viewbox>' +
'</DataTemplate>');
radialGauge1.getMainIndicator().setColor("#F0F0F0");
radialGauge1.getMainIndicator().setPosition(0.5);

radialGauge1.getBorder().setTemplate("LinearBorderStraightBasic");
radialGauge1.getBorder().getGlare().setVisible(false);

section = new cfx.gauge.ScaleSection();
section.setFrom(0);
section.setTo(20);
section.setColor("#FF0000");
section.setBorderColor("#FF0000");
section.setTemplate(template);
radialGauge1.getMainScale().getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(20);
section.setTo(40);
section.setColor("#FFFF00");
section.setBorderColor("#FFFF00");
section.setTemplate(template);
radialGauge1.getMainScale().getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(40);
section.setTo(50);
section.setColor("#00FF00");
section.setBorderColor("#00FF00");
section.setTemplate(template);
radialGauge1.getMainScale().getSections().add(section);

var majorTickmarks = radialGauge1.getMainScale().getTickmarks().getMajor();
majorTickmarks.setUseSectionColor(true);
majorTickmarks.setWidth(0.05);
majorTickmarks.setSize(0.5);
var mediumTickmarks = radialGauge1.getMainScale().getTickmarks().getMedium();
mediumTickmarks.setUseSectionColor(true);
mediumTickmarks.setWidth(0.05);
mediumTickmarks.setSize(0.3);

radialGauge1.getMainScale().getCap().setVisible(false);
}
function ThinNeedle(radialGauge1)
{
	radialGauge1.getBorder().setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><Thickness x:Key="borderFactor">0</Thickness><sys:String x:Key="ratio">2</sys:String><sys:String x:Key="startLocation">180</sys:String><sys:String x:Key="endLocation">360</sys:String></DataTemplate.Resources><Canvas></Canvas></DataTemplate>');
var scale = radialGauge1.getMainScale();

var cap = scale.getCap();
cap.setVisible(true);
cap.setTemplate('<DataTemplate><Ellipse Stroke="#F19024" StrokeThickness="2" Fill="#FFFFFF"></Ellipse></DataTemplate>');
cap.setSize(0.04);

scale.getTickmarks().getMajor().setVisible(false);
scale.getTickmarks().getMedium().setVisible(false);
scale.setThickness(1);
scale.setPosition(0);

var filler = new cfx.gauge.Filler();
filler.setColor("#666666");
filler.setValue(75);
filler.setPosition(0.1);
filler.setSize(1);
scale.setMainIndicator(filler);

scale.setMax(100);

var needle = new cfx.gauge.Needle();
needle.setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.008</sys:String></DataTemplate.Resources><Rectangle Fill="{Binding Path=Fill}" Stroke="{Binding Path=Fill}"></Rectangle></DataTemplate>');
needle.setPosition(0);
needle.setSize(0.96);
needle.setColor("#F19024");
scale.getIndicators().add(needle);

var bar = scale.getBar();
bar.setVisible(true);
bar.setPosition(0.1);
bar.setThickness(1);

var title = new cfx.gauge.Title();
title.setText("%v");
title.setTextColor("#808080");
title.setFont("30pt Arial");
title.setDock(cfx.gauge.DockArea.Bottom);
radialGauge1.getTitles().add(title);

radialGauge1.getBorder().getGlare().setVisible(false);
}
function GradientSections(radialGauge1)
{
	radialGauge1.setMainValue(126);

// Customize scale
var mainScale = radialGauge1.getMainScale();
mainScale.setMax(200);
mainScale.setStartAngle(115);
mainScale.setSweepAngle(310);

var border = radialGauge1.getBorder();
border.setTemplate("RadialBorderMetal");
border.setColor("#8E91A4");
border.setInsideColor("#182028");
border.getGlare().setTemplate("RadialGlareConcave");
border.setInsideGap(0);

var cap = mainScale.getCap();
cap.setTemplate("CapCarved");

var needleTemplate = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.1</sys:String><sys:String x:Key="yPivot">0.1</sys:String></DataTemplate.Resources><Viewbox ViewWidth="30" ViewHeight="200"><Grid><Path Fill="{Binding Path=Fill}" Data="M15,0 L30,200 0,200 z" Opacity="0.9"></Path><Path Data="M15,0 L30,200 0,200 z"><Path.Fill><LinearGradientBrush EndPoint="1,0.5" StartPoint="0,0.5"><GradientStop Color="#7FFFFFFF" Offset="0"></GradientStop><GradientStop Color="#00FFFFFF" Offset="0.4"></GradientStop><GradientStop Color="#00000000" Offset="0.6"></GradientStop><GradientStop Color="#33000000" Offset="1"></GradientStop></LinearGradientBrush></Path.Fill></Path><Path  Data="M15,0 L30,200 0,200 z" StrokeThickness="2"><Path.Stroke><LinearGradientBrush EndPoint="0.5,1" StartPoint="0.5,0"><GradientStop Color="#55000000" Offset="0"></GradientStop><GradientStop Color="#00000000" Offset="0.5"></GradientStop><GradientStop Color="#00FFFFFF" Offset="0.7"></GradientStop><GradientStop Color="#22FFFFFF"  Offset="1"></GradientStop></LinearGradientBrush></Path.Stroke></Path></Grid></Viewbox></DataTemplate>';
var indicator = radialGauge1.getMainIndicator();
indicator.setTemplate(needleTemplate);
indicator.setColor("#FFD329");
indicator.setSize(1.05);

var marker = new cfx.gauge.Marker();
marker.setTemplate("MarkerCircle");
marker.setValue(30);
marker.setSize(0.35);
marker.setPosition(1.2);
marker.setColor("#FFBC57");
marker.setBorderColor("#A3310B");
mainScale.getIndicators().add(marker);

var defaultAttributes = radialGauge1.getDefaultAttributes();
defaultAttributes.setSectionPosition(2.5);
defaultAttributes.setSectionThickness(1);

// Sections
var section = new cfx.gauge.ScaleSection();
section.setFrom(0);
section.setTo(40);
section.setColor("#047900");
section.setAlternateColor("#6FBD00");
section.setFillType(cfx.gauge.SectionFill.GradientData);
section.setStrokeThickness(0);
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(39.5);
section.setTo(80);
section.setColor("#6FBD00");
section.setAlternateColor("#D6F700");
section.setFillType(cfx.gauge.SectionFill.GradientData);
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(79.5);
section.setTo(120);
section.setColor("#D6F700");
section.setAlternateColor("#E4AF00");
section.setFillType(cfx.gauge.SectionFill.GradientData);
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(119.5);
section.setTo(160);
section.setColor("#E4AF00");
section.setAlternateColor("#F16B00");
section.setFillType(cfx.gauge.SectionFill.GradientData);
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(159.5);
section.setTo(200);
section.setColor("#F16B00");
section.setAlternateColor("#FF0000");
section.setFillType(cfx.gauge.SectionFill.GradientData);
mainScale.getSections().add(section);
}
function MinimalisticWithSections(radialGauge1)
{
	radialGauge1.getBorder().setTemplate("<DataTemplate ></DataTemplate>");
var mainScale = radialGauge1.getMainScale();
mainScale.getTickmarks().getMajor().setVisible(false);
mainScale.getTickmarks().getMedium().setVisible(false);
mainScale.setMax(1000000);
var cap = mainScale.getCap();
cap.setTemplate('<DataTemplate><Ellipse Stroke="#999999" StrokeThickness="2" ></Ellipse></DataTemplate>');
var indicator = radialGauge1.getMainIndicator();
indicator.setColor("#999999");
indicator.setBorderColor("#999999");
indicator.setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.02</sys:String></DataTemplate.Resources><Rectangle Fill="{Binding Path=Fill}" Stroke="{Binding Path=Fill}"></Rectangle></DataTemplate>');
indicator.setPosition(-0.01);
indicator.setSize(0.63);
indicator.setTitle("Current");

radialGauge1.setMainValue(463240);

var target = new cfx.gauge.Marker();
target.setTemplate("MarkerBigTriangleInverted");
target.setValue(750000);
target.setUseSectionColor(true);
target.setTitle("Target");
mainScale.getIndicators().add(target);

// Sections
var defaultAttributes = radialGauge1.getDefaultAttributes();
defaultAttributes.setSectionThickness(0.3);

var section = new cfx.gauge.ScaleSection();
section.setFrom(0);
section.setTo(330000);
section.setColor("#FF0000");
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(340000);
section.setTo(660000);
section.setColor("#FF6A00");
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(670000);
section.setTo(1000000);
section.setColor("#30A000");
mainScale.getSections().add(section);

// Titles
var title = new cfx.gauge.Title();
title.setText("YEARLY SALES");
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("$ %v");
title.setTag("TitleLarge");
title.setY(0.9);
radialGauge1.getTitles().add(title);
}
function Progress3(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setVisible(false);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setVisible(false);
mainScale.getCap().setVisible(false);
mainScale.setStartAngle(270);
mainScale.setSweepAngle(360);
mainScale.setPosition(0.25);
var bar = mainScale.getBar();
bar.setPosition(0);
bar.setThickness(0.6);
bar.setVisible(true);
mainScale.setThickness(0.2);
var filler = new cfx.gauge.Filler();
filler.setPosition(0.25);
filler.setSize(0.6);
radialGauge1.setMainIndicator(filler);
radialGauge1.setMainValue(67);

radialGauge1.getBorder().setTemplate("<DataTemplate></DataTemplate>");

var title = new cfx.gauge.Title();
title.setTag("TitleLarge");
title.setText("%v");
title.setX(0.5);
title.setY(0.5);
title.setResizeableFont(cfx.gauge.ResizeFont.Never);
radialGauge1.getTitles().add(title);
}
function Progress4(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
mainScale.setDrawLabels(false);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setPosition(0);
majorTickmarks.setSize(0.4);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setPosition(0.1);
mediumTickmarks.setSize(0.3);
mainScale.getCap().setVisible(false);
mainScale.setStartAngle(270);
mainScale.setSweepAngle(360);
mainScale.setPosition(0.25);
var bar = mainScale.getBar();
bar.setPosition(0.8);
bar.setThickness(0.6);
bar.setVisible(true);
mainScale.setThickness(0.2);
var filler = new cfx.gauge.Filler();
filler.setPosition(1.05);
filler.setSize(0.6);
filler.setTemplate("RadialFillerRound");
radialGauge1.setMainIndicator(filler);
radialGauge1.setMainValue(23);

radialGauge1.getBorder().setTemplate("LinearBorderStraightBasic");

var title = new cfx.gauge.Title();
title.setTag("TitleLarge");
title.setText("%v%%");
title.setX(0.5);
title.setY(0.5);
title.setResizeableFont(cfx.gauge.ResizeFont.Never);
radialGauge1.getTitles().add(title);
}
function Progress5(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
mainScale.setDrawLabels(false);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setPosition(0);
majorTickmarks.setSize(0.4);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setPosition(0.1);
mediumTickmarks.setSize(0.3);
mainScale.getCap().setVisible(false);
mainScale.setStartAngle(270);
mainScale.setSweepAngle(360);
mainScale.setPosition(0.25);
var bar = mainScale.getBar();
bar.setPosition(0.8);
bar.setThickness(0.6);
bar.setVisible(true);
mainScale.setThickness(0.2);
var filler = new cfx.gauge.Filler();
filler.setPosition(1.05);
filler.setSize(0.6);
filler.setTemplate("RadialFillerRound");
radialGauge1.setMainIndicator(filler);
radialGauge1.setMainValue(48.2);

radialGauge1.getBorder().setTemplate("LinearBorderStraightBasic");

var title = new cfx.gauge.Title();
title.setTag("TitleLarge");
title.setText("%v%%");
title.setX(0.5);
title.setY(0.5);
title.setResizeableFont(cfx.gauge.ResizeFont.Never);
radialGauge1.getTitles().add(title);
}
function Progress6(radialGauge1)
{
	var borderTemplate = '<DataTemplate>' +
    '<Canvas>' +
        '<Ellipse Margin="3" Stroke="#DEDEDE" StrokeThickness="6" ></Ellipse>' +
        '<Ellipse Margin="7" Stroke="#C8C8C8" StrokeThickness="3" ></Ellipse>' +
        '<Ellipse Margin="10" Stroke="{Binding Path=Stroke}" StrokeThickness="3" Fill="{Binding Path=Fill}" ></Ellipse>' +
    '</Canvas>' +
'</DataTemplate>';

var border = radialGauge1.getBorder();
border.setTemplate(borderTemplate);

var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
mainScale.setDrawLabels(false);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setVisible(false);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setVisible(false);
mainScale.getCap().setVisible(false);
mainScale.setStartAngle(270);
mainScale.setSweepAngle(360);

mainScale.setThickness(0.2);
var filler = new cfx.gauge.Filler();
filler.setPosition(0.75);
filler.setSize(1);
radialGauge1.setMainIndicator(filler);
radialGauge1.setMainValue(14);

var title = new cfx.gauge.Title();
title.setTag("TitleLarge");
title.setText("%v%%");
title.setX(0.5);
title.setY(0.7);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setDock(cfx.gauge.DockArea.Bottom);
title.setText("User Engagement");
title.setX(0.5);
title.setY(0.5);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setImage("http://www.jchartfx.com/images/customer1.png,48,48");
title.setText("Test")
title.setX(0.5);
title.setY(0.25);
radialGauge1.getTitles().add(title);
}
function Progress7(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
mainScale.setDrawLabels(false);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setVisible(false);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setVisible(false);
mainScale.getCap().setVisible(false);
mainScale.setStartAngle(270);
mainScale.setSweepAngle(360);
mainScale.setPosition(0.25);
mainScale.setThickness(0.2);
var filler = new cfx.gauge.Filler();
filler.setPosition(0);
filler.setSize(0.3);
radialGauge1.setMainIndicator(filler);
radialGauge1.setMainValue(73);

radialGauge1.getBorder().setTemplate("<DataTemplate ></DataTemplate>");

var title = new cfx.gauge.Title();
title.setTag("TitleLarge");
title.setText("%v%%");
title.setX(0.5);
title.setY(0.5);
title.setResizeableFont(cfx.gauge.ResizeFont.Never);
radialGauge1.getTitles().add(title);
}
function Progress8(radialGauge1)
{
	var mainScale = radialGauge1.getMainScale();
mainScale.setMax(100);
var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setVisible(false);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setVisible(false);
mainScale.getCap().setVisible(false);
mainScale.setStartAngle(270);
mainScale.setSweepAngle(360);
mainScale.setPosition(0.25);
var bar = mainScale.getBar();
bar.setPosition(0);
bar.setThickness(0.9);
bar.setVisible(true);
mainScale.setThickness(0.2);
var filler = new cfx.gauge.Filler();
filler.setPosition(0.25);
filler.setSize(0.9);
radialGauge1.setMainIndicator(filler);
radialGauge1.setMainValue(67);

radialGauge1.getBorder().setTemplate('<DataTemplate><Ellipse Margin="40" Fill="{Binding Path=Fill}" ></Ellipse></DataTemplate>');

var title = new cfx.gauge.Title();
title.setTag("TitleLarge");
title.setText("%v");
title.setX(0.5);
title.setY(0.5);
title.setResizeableFont(cfx.gauge.ResizeFont.Never);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("Visitors");
title.setDock(cfx.gauge.DockArea.Bottom);
title.setResizeableFont(cfx.gauge.ResizeFont.Never);
radialGauge1.getTitles().add(title);
}
function Bold(radialGauge1)
{
	radialGauge1.setMainValue(126);

// Customize scale
var mainScale = radialGauge1.getMainScale();
mainScale.setMax(200);
mainScale.setStartAngle(125);
mainScale.setSweepAngle(290);
mainScale.setDrawLabels(false);

var majorTickmarks = mainScale.getTickmarks().getMajor();
majorTickmarks.setStyle(cfx.gauge.TickmarkStyle.Line);
majorTickmarks.setPosition(0.4);
majorTickmarks.setSize(1);
majorTickmarks.setWidth(0.1);
var mediumTickmarks = mainScale.getTickmarks().getMedium();
mediumTickmarks.setPosition(0.4);
mediumTickmarks.setSize(0.5);

var border = radialGauge1.getBorder();
border.setTemplate("RadialBorderMetal");
border.setColor("#8E91A4");
border.setInsideColor("#003873");
border.getGlare().setTemplate("RadialGlareDiagonal");
border.setInsideGap(0);
var shadow = radialGauge1.getBorder().getShadow();
shadow.setVisible(true);
shadow.setTemplate("RadialShadowSide");
shadow.setOffsetX(5);
shadow.setOffsetY(5);

var cap = mainScale.getCap();
cap.setTemplate("CapBevel");

var needleTemplate = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.15</sys:String><sys:String x:Key="yPivot">0.35</sys:String></DataTemplate.Resources><Viewbox ViewWidth="25" ViewHeight="192"><Grid><Path Fill="#33000000" Data="M25.583,190.666c0,1.105-0.895,2-2,2H6.417c-1.104,0-2-0.895-2-2l8.167-186c0-1.104,0.896-2,2-2h2c1.104,0,2,0.896,2,2L25.583,190.666z"><Path.BitmapEffect><BlurBitmapEffect Radius="2" ></BlurBitmapEffect></Path.BitmapEffect></Path><Path Fill="{Binding Path=Fill}" Data="M25.583,190.666c0,1.105-0.895,2-2,2H6.417c-1.104,0-2-0.895-2-2l8.167-186c0-1.104,0.896-2,2-2h2c1.104,0,2,0.896,2,2L25.583,190.666z"></Path><Path  Data="M25.583,190.666c0,1.105-0.895,2-2,2H6.417c-1.104,0-2-0.895-2-2l8.167-186c0-1.104,0.896-2,2-2h2c1.104,0,2,0.896,2,2L25.583,190.666z" StrokeThickness="4"><Path.Stroke><LinearGradientBrush EndPoint="0.5,1" StartPoint="0.5,0"><GradientStop Color="#22FFFFFF"  Offset="0"></GradientStop><GradientStop Color="#00FFFFFF" Offset="0.2"></GradientStop><GradientStop Color="#00000000" Offset="0.3"></GradientStop><GradientStop Color="#55000000" Offset="1"></GradientStop></LinearGradientBrush></Path.Stroke></Path></Grid></Viewbox></DataTemplate>';
var indicator = radialGauge1.getMainIndicator();
indicator.setTemplate(needleTemplate);
indicator.setColor("#FD571F");
indicator.setSize(1.2);

var defaultAttributes = radialGauge1.getDefaultAttributes();
defaultAttributes.setSectionPosition(0.4);
defaultAttributes.setSectionThickness(1);

// Sections
var section = new cfx.gauge.ScaleSection();
section.setFrom(0);
section.setTo(95);
section.setColor("#FCFC35");
section.setStrokeThickness(0);
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(95);
section.setTo(105);
section.setColor("#FCFC35");
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(105);
section.setTo(200);
section.setColor("#BFEB15");
mainScale.getSections().add(section);

var title = new cfx.gauge.Title();
title.setDock(cfx.gauge.DockArea.Top);
title.setTag("TitleMain");
title.setText("Forecasted Revenue");
title.setResizeableFont(cfx.gauge.ResizeFont.Never);
radialGauge1.getTitles().add(title);

title = new cfx.gauge.Title();
title.setText("%v");
title.setX(0.5);
title.setY(0.8);
radialGauge1.getTitles().add(title);
}
function BumpGlare(radialGauge1)
{
	radialGauge1.getBorder().setTemplate('<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><Thickness x:Key="borderFactor">0</Thickness><sys:String x:Key="ratio">2</sys:String><sys:String x:Key="startLocation">0</sys:String><sys:String x:Key="endLocation">360</sys:String></DataTemplate.Resources><Canvas><Rectangle Stroke="#000000" ></Rectangle></Canvas></DataTemplate>');

radialGauge1.setResizeableFont(cfx.gauge.ResizeFont.Never);

radialGauge1.setMainValue(537);

// Customize scale
var mainScale = radialGauge1.getMainScale();
mainScale.setMax(1000);
mainScale.setAlignment(cfx.StringAlignment.Near);
mainScale.setPosition(0);
mainScale.setAllowHalves(false);
mainScale.setStartAngle(180);
mainScale.setSweepAngle(180);
mainScale.setThickness(0.5);

var major = mainScale.getTickmarks().getMajor();
major.setSize(0.1);
major.setWidth(0.02);
major.setPosition(0);
major.setColor("#80000000");
var medium = mainScale.getTickmarks().getMedium();
medium.setSize(0.05);
medium.setWidth(0.02);
medium.setPosition(0);
medium.setColor("#80000000");

    var borderSemi = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
      '<DataTemplate.Resources>' +
        '<sys:String x:Key="ratio">2</sys:String>' +
        '<sys:String x:Key="startLocation">180</sys:String>' +
        '<sys:String x:Key="endLocation">360</sys:String>' +
      '</DataTemplate.Resources>' +
      '<Viewbox ViewWidth="100" ViewHeight="50">' +
        '<Canvas>' +
          '<Path Fill="{Binding Path=Fill}" Data="M7,50 C7,26.2517557586 26.2517557586,7 50,7 C 73.7482442414,7 93,26.2517557586 93,50 L75,50 C75,36.192881255 63.807118745,25 50,25 C 36.192881255,25 25,36.192881255 25,50 Z" ></Path>' +
        '</Canvas>' +
      '</Viewbox>' +
     '</DataTemplate>';

    var glareSemi = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib">' +
      '<DataTemplate.Resources>' +
        '<sys:String x:Key="ratio">2</sys:String>' +
      '</DataTemplate.Resources>' +
      '<Viewbox ViewWidth="100" ViewHeight="50">' +
        '<Canvas>' +
          '<Path Data="M0,50 C0,22.38576251 22.38576251,0 50,0 C 77.61423749,0 100,22.38576251 100,50 L75,50 C75,36.192881255 63.807118745,25 50,25 C 36.192881255,25 25,36.192881255 25,50 Z">' +
              '<Path.Fill>' +
                '<RadialGradientBrush>' +
                  '<RadialGradientBrush.RelativeTransform>' +
                    '<TransformGroup>' +
                      '<ScaleTransform ScaleX="1" ScaleY="2"></ScaleTransform>' +
                      '<TranslateTransform X="0" Y="0.5"></TranslateTransform>' +
                    '</TransformGroup>' +
                  '</RadialGradientBrush.RelativeTransform>' +
                  '<GradientStop Color="#00808080" Offset="0"></GradientStop>' +
                  '<GradientStop Color="#10000000" Offset="0.5"></GradientStop>' +
                  '<GradientStop Color="#30FFFFFF" Offset="0.51"></GradientStop>' +
                  '<GradientStop Color="#A0FFFFFF" Offset="0.53"></GradientStop>' +
                  '<GradientStop Color="#B0FFFFFF" Offset="0.55"></GradientStop>' +
                  '<GradientStop Color="#00FFFFFF" Offset="0.85"></GradientStop>' +
                  '<GradientStop Color="#00FFFFFF" Offset="1"></GradientStop>' +
                '</RadialGradientBrush>' +
              '</Path.Fill>' +
          '</Path>' +
        '</Canvas>' +
      '</Viewbox>' +
     '</DataTemplate>';

    var border = radialGauge1.getBorder();
    border.setTemplate(borderSemi);
    //border.setInsideColor("#000000");
    border.getGlare().setTemplate(glareSemi);
    border.setInsideGap(-0.04);

var bar = mainScale.getBar();
bar.setVisible(false);

var defaultAttributes = radialGauge1.getDefaultAttributes();
defaultAttributes.setSectionThickness(0.83);
defaultAttributes.setSectionPosition(0);

var section = new cfx.gauge.ScaleSection();
section.setFrom(0);
section.setTo(750);
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(750);
section.setTo(900);
mainScale.getSections().add(section);

section = new cfx.gauge.ScaleSection();
section.setFrom(900);
section.setTo(1000);
mainScale.getSections().add(section);

var cap = mainScale.getCap();
cap.setColor("#B4B4B4");
cap.setTemplate("CapSimple");
cap.setSize(0.05);

var indicatorTemplate = '<DataTemplate xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml" xmlns:sys="clr-namespace:System;assembly=mscorlib"><DataTemplate.Resources><sys:String x:Key="ratio">0.1</sys:String><sys:String x:Key="yPivot">0.1</sys:String></DataTemplate.Resources><Viewbox ViewWidth="30" ViewHeight="200"><Grid><Path Fill="{Binding Path=Fill}" Stroke="{Binding Path=Stroke}" Data="M15,0 L30,200 0,200 z"></Path></Grid></Viewbox></DataTemplate>';

var indicator = radialGauge1.getMainIndicator();
indicator.setColor("#FFFFFF");
indicator.setBorderColor("#A7A7A7");
indicator.setTemplate(indicatorTemplate);
indicator.setSize(0.8);


//#Size=width:300px;height:300px;
//End Do Not Show
}

