
//<![CDATA[

	function doRemplirPageCoutsMethodes() {
		//console.log("Valeur de la variable"+JSON.stringify(lesdatas));
		var lesdetailsclasses = mesDatas.coutsmappings;
		var lsStrTout="";
		lsStrTout+="Cout pour chaque EndPoint REST API (nombre d'instructions)";
		lsStrTout+="<br />";
		lsStrTout+="<table border='1'>";
		var lsStr= "<tr><td>Class and method</td><td>Annotations</td><td>Cost</td><td>Return class</td><td>Class depth</td></tr>";
		lsStrTout+=lsStr;
		lesdetailsclasses.forEach(leItemDetail => {
			var lsStrDetails = "";
	                lsStrDetails+= "<tr><td>"+leItemDetail.methode+"</td><td>"+leItemDetail.annotation+"</td><td align='right'>"+leItemDetail.couttotal+"</td><td>"+leItemDetail.classe_retour+"</td><td>"+leItemDetail.profondeurinclude+"</td></tr>";
			lsStrTout+=lsStrDetails;
		});
		lsStrTout+="</table>";
		
		lsStrTout+="<br />";
		lsStrTout+="<br />";
		lsStrTout+="Cout par methode, triee decroissant";

		var lesdetailsclasses = mesDatas.coutsparmethode;
		lsStrTout+="<table border='1'>";
		var lsStr= "<tr><td>Method</td><td>Cost</td></tr>";
		lsStrTout+=lsStr;
		
		lesdetailsclasses.forEach(leItemDetail => {
			var lsStr= "<tr><td>"+leItemDetail.methode+"</td><td align='right'>"+leItemDetail.couttotal+"</td></tr>";
			lsStrTout+=lsStr;
		});
		lsStrTout+="</table>";


   var theDivBloc = document.getElementById("maDivCoutsMethodes");  
   theDivBloc.innerHTML = lsStrTout;
}
doRemplirPageCoutsMethodes();
//]]>
