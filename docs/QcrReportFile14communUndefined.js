
//<![CDATA[
var datadepend = datadependUndefined;
function doDessinerUndefined() {
  var lsStr = "";
  lsStr+="<table border='1'>";
	for (var liCol1=0; liCol1<datadepend.lesdatas.undefined.length; liCol1++) {
	   lsStr+="<tr>"+datadepend.lesdatas.undefined[liCol1]+"</tr><tr></tr>";
	   for (var liCol2=0; liCol2<datadepend.lesdatas.undefined[liCol1].callers.length; liCol++) {
	   lsStr+="<tr></tr><tr>"+datadepend.lesdatas.undefined[liCol1].callers[liCol2].caller+"</tr>";
     }
  }
  lsStr+="</table>";
  var theDivBloc = document.getElementById("maDivUndefined");  
  theDivBloc.innerHTML = lsStr;
}
doDessinerUndefined();
//]]>
