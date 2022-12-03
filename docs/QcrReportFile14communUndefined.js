
//<![CDATA[
var datadepend = datadependUndefined;
function doDessinerUndefined() {
  var lsStr = "";
  lsStr+="<table border='1'>";
  lsStr+="<tr><td>Undefined class</td><td>Called by classes</td></tr>";
	for (var liCol1=0; liCol1<datadepend.lesdatas.length; liCol1++) {
	   lsStr+="<tr><td>"+datadepend.lesdatas[liCol1].undefinedclass+"</td><td></td></tr>";
	   for (var liCol2=0; liCol2<datadepend.lesdatas[liCol1].callers.length; liCol2++) {
	      lsStr+="<tr><td></td><td>"+datadepend.lesdatas[liCol1].callers[liCol2].caller+"</td></tr>";
     }
  }
  lsStr+="</table>";
  var theDivBloc = document.getElementById("maDivUndefined");  
  theDivBloc.innerHTML = lsStr;
}
doDessinerUndefined();
//]]>
