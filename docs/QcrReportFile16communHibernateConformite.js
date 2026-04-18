
//<![CDATA[

	function doRemplirPageHibernateConformite() {
		//console.log("Valeur de la variable"+JSON.stringify(lesdatas));
		var lesdetailsclasses = mesDatas.resultataudit.detailsclasses;
		//console.log("Valeur de detailclasses "+JSON.stringify(lesdetailsclasses));
		var leMaHash = new Map();
		var liIndOk = 0;
		var liIndKo = 1;
		var lsStrTout="";
		lsStrTout+="<table border='1'>";
		var lsStr= "<tr><td>Classe</td><td>Details des conformites</td></tr>";
		lsStrTout+=lsStr;
		lesdetailsclasses.forEach(leItem => {
                  //console.log("item :"+JSON.stringify(leItem));
                  var lsStrDetails = "";
                  lsStrDetails+="<table border='1'>";
                  lssDetailsConformites = leItem.details;
                  var lsStrDetailConformite = "";
                  lsStrDetailConformite+= "<tr><td>Critere</td><td>Valeur</td><td>Commentaire</td></tr>";
                  lssDetailsConformites.forEach(leItemDetail => {
                      var lsStyle='';
                      if (0<=leItemDetail.valeur.indexOf('NonConforme')) lsStyle=' style=\'color:red;\'';
                      lsStrDetails+= "<tr><td>"+leItemDetail.critere+"</td><td"+lsStyle+">"+leItemDetail.valeur+"</td><td>"+leItemDetail.commentaire+"</td></tr>";
                      var lsAno  = leItemDetail.critere;
                      var lsConf = leItemDetail.valeur;
                      var lsOk   = lsConf.indexOf('NonConforme')<0;
                          // On cherche l ano das Hash
                      var leTab = leMaHash.get(lsAno);
                      if (null==leTab) {
                          leTab = []
                      }
                      // On insere Conforme ou NonConforme
                      if (null==leTab[liIndOk]) leTab[liIndOk] = 0
                      if (null==leTab[liIndKo]) leTab[liIndKo] = 0
                      if (lsOk) {
                         leTab[liIndOk]++;
                      }
                      if (!lsOk) {
                         leTab[liIndKo]++;
                      }
                      leMaHash.set(lsAno, leTab);
                  });
                  lsStrDetails+="</table>";
                  var lsStr= "<tr><td>"+leItem.classe+"</td><td>"+lsStrDetails+"</td></tr>";
		        lsStrTout+=lsStr;
                  //console.log("lsStr "+lsStr);
		});
		lsStrTout+="</table>";
		
		lsStrTout+="<br />";
		lsStrTout+="<br />";
		lsStrTout+="Synthese des conformites par classe";

		var lesdetailsclasses = mesDatas.resultataudit.conformitesclasses;
		//console.log("Valeur de detailclasses "+JSON.stringify(lesdetailsclasses));
		lsStrTout+="<table border='1'>";
		var lsStr= "<tr><td>Classe</td><td>Nb de criteres conformes</td><td>Nb de criteres non conformes</td><td>Taux de conformite</td></tr>";
		lsStrTout+=lsStr;
		var liIndNbClasses=0;
		var liIndNbClassesNC=0;
		var liIndNbClassesNC50=0;
		var liIndNbClassesNC75=0;
		var liIndNbClassesNC100=0;
		
		lesdetailsclasses.forEach(leItemDetail => {
			var lsStyle='';
			if (leItemDetail.tauxconformite<75) lsStyle=' style=\'color:red;\'';
			if ("100"!=leItemDetail.tauxconformite) {
				liIndNbClassesNC++;
			}
			var liNC = parseInt(leItemDetail.tauxconformite);
			if (75<=liNC) {
				liIndNbClassesNC75++;
			}
			if (50<=liNC) {
				liIndNbClassesNC50++;
			}
			if (100<=liNC) {
				liIndNbClassesNC100++;
			}
			liIndNbClasses++;
			var lsStr= "<tr><td>"+leItemDetail.classe+"</td><td align='right'>"+leItemDetail.nbconforme+"</td><td align='right'>"+leItemDetail.nbnonconforme+"</td><td align='right'"+lsStyle+">"+leItemDetail.tauxconformite+"%</td></tr>";
			//console.log("lsStr "+lsStr);
			lsStrTout+=lsStr;
		});
		lsStrTout+="</table>";

		lsStrTout+="<br />";
		
		lsStrTout+="<br />";
		lsStrTout+="<br />";
		lsStrTout+="Nb total de classes "+liIndNbClasses;
		lsStrTout+="<br />";
		lsStrTout+="Nb total de classes conformes >=50% "+liIndNbClassesNC50;
		lsStrTout+="<br />";
		lsStrTout+="Nb total de classes conformes >=75% "+liIndNbClassesNC75;
		lsStrTout+="<br />";
		lsStrTout+="Nb total de classes conformes =100% "+liIndNbClassesNC100;
		lsStrTout+="<br />";
		lsStrTout+="Nb total de classes non conformes a 100% "+liIndNbClassesNC;

   var theDivBloc = document.getElementById("maDivHibernateConformite01");  
   theDivBloc.innerHTML = lsStrTout;
   // Tableau des statistiques par ano
   lsStrTout = "";
   lsStrTout+="<table border='1'>";
   lsStrTout+="<tr><td>Anomalie</td><td>Nb de classes / champs</td><td>Nb de classes / champs conformes</td><td>Nb de classes / champs non conformes</td></tr>";
   // Trie par cle croissante
   leHashSort = new Map([...leMaHash.entries()].sort());
   leHashSort.forEach((value, key) => {
      lsStrTout += "<tr><td>"+key+"</td><td align='right'>"+(value[liIndOk]+value[liIndKo])+"</td><td align='right'>"+(value[liIndOk])+"</td><td align='right'>"+(value[liIndKo])+"</td></tr>";
   });
	 lsStrTout+="</table>";
   var theDivBlocAnomalies = document.getElementById("maDivHibernateConformite02");  
   theDivBlocAnomalies.innerHTML = lsStrTout;
}
//]]>
