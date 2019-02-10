document.getElementById("id_logic_version").innerHTML = "Logic: 2019.01.08.2";

var svg = document.getElementById("id_svg");

svg.addEventListener("touchstart", on_touch_svg);
//svg.addEventListener("mousedown", on_touch_svg);
svg.addEventListener("touchend", on_touch);
//svg.addEventListener("touchmove", on_touch_svg);

var svg_rect = svg.getBoundingClientRect();
var nr = 0;
var a;
function on_touch_svg(e)
{

	for (var i = 0; i < e.changedTouches.length; i++)
	{
		var cerc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		cerc.setAttribute("cx", e.changedTouches[i].pageX);
		cerc.setAttribute("cy", e.changedTouches[i].pageY - svg_rect.top);
		cerc.setAttribute("r", 40);
		cerc.setAttribute("fill", "blue");
		a=svg.appendChild(cerc);
		
}
if(nr != a)
{
	nr++
}

}


function on_touch(e)
{
	setTimeout(function(){svg.remove(svg.appendChild);}, 3000);
alert(nr);
	
}