
//<![CDATA[
var lesPkg=[];
function doTraiter(aeVal) {
	const resul = lesPkg.find(({datas}) => datas.valeur === aeVal);
	console.log("main02 resul "+resul);
	if (resul===undefined) {
		console.log("main03 pas trouve "+aeVal+" ajoute");
		var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] } } ;
		lesPkg.push(laVar);
	} else {
		console.log("main04 "+aeVal+" deja trouve");
	}
}
function doAffecter(aeValStart, aeValEnd) {
	const resul1 = lesPkg.find(({datas}) => datas.valeur === aeValStart);
	const resul2 = lesPkg.find(({datas}) => datas.valeur === aeValEnd);
	console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
	console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
	lesPkg[resul1.datas.rang].datas.listeappelles[resul2.datas.rang] = "X";
}
console.log("main01 Debut");
var lsStr = "";
//lsStr+="<table border='1'>";
for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
	console.log("main01 "+liInd);
	//lsStr+="<tr><td>"+liInd+"&nbsp;"+datadepend.lesdatas[liInd].start+"</td><td>"+"&nbsp;"+datadepend.lesdatas[liInd].end+"</td></tr>";
	var leVal1 = datadepend.lesdatas[liInd].start; doTraiter(leVal1);
	var leVal2 = datadepend.lesdatas[liInd].end  ; doTraiter(leVal2);
	console.log("main03 taille "+lesPkg.length);
}
//lsStr+="</table>";
lesPkg.sort((a, b) => a.datas.valeur > b.datas.valeur);
for (var liInd=0; liInd<lesPkg.length; liInd++) {
	lesPkg[liInd].datas.rang = liInd;
	for (var liCol=0; liCol<lesPkg.length; liCol++) {
	   lesPkg[liInd].datas.listeappelles[liCol]="";
	}
}
for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
	var leVal1 = datadepend.lesdatas[liInd].start;
	var leVal2 = datadepend.lesdatas[liInd].end  ;
	doAffecter(leVal1, leVal2);
}
lsStr+="<table border='1'>";
	lsStr+="<tr><td></td>";
	for (var liCol=0; liCol<lesPkg.length; liCol++) {
		lsStr+="<td>"+liCol+"</td>";
	}
	lsStr+="</tr>";
for (var liInd=0; liInd<lesPkg.length; liInd++) {
	lsStr+="<tr><td>"+liInd+"&nbsp;"+lesPkg[liInd].datas.valeur+"</td>";
	lesPkg[liInd].datas.rang = liInd;
	for (var liCol=0; liCol<lesPkg.length; liCol++) {
	   var lsBg = "";
	   if (liInd == liCol) { lsBg = " style='background-color:skyblue'"; }
	   lsStr+="<td"+lsBg+">"+lesPkg[liInd].datas.listeappelles[liCol]+"</td>";
	}
  lsStr+="</tr>";
}
lsStr+="</table>";
//console.log("main02 lsStr "+lsStr);
var theDivBloc = document.getElementById("maDiv");  
theDivBloc.innerHTML = lsStr;
for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
   console.log("main07 cycle "+liInd1);
   for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
      console.log("main08    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
   }
}
console.log("main99 fin");
//]]>
