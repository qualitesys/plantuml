
//<![CDATA[
var gbCyclesSeulsFct = true;
var lesPkgFct=[];
var giSTEP = 500;
var giTrancheFct = 0;
function lfRadioOnClickFct() {
   const laForme = document.querySelector("input[name='viewconfigFct']:checked");
   if (null!=laForme) {
      //console.log("lfRadioOnClick radio id :" + laForme.id);
      if (laForme.id=='trancheFct0') {
	       gbCyclesSeulsFct = true;
	       giTrancheFct     = 0
      } else {
	       gbCyclesSeulsFct = false;
	       const liValue = laForme.value;
         //console.log("lfRadioOnClick radio value :" + liValue);
	       giTrancheFct     = liValue
      }
      doDessinerFct();
   }
   return true;
}
function doTraiterFct(aeVal) {
	const resul = lesPkgFct.find(({datas}) => datas.valeur === aeVal);
	//console.log("main02 resul "+resul);
	if (resul===undefined) {
	   //console.log("main03 pas trouve "+aeVal+" ajoute");
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkgFct.push(laVar);
	} else {
	   //console.log("main04 "+aeVal+" deja trouve");
	}
}
function doAffecterFct(aeValStart, aeValEnd) {
   const resul1 = lesPkgFct.find(({datas}) => datas.valeur === aeValStart);
   const resul2 = lesPkgFct.find(({datas}) => datas.valeur === aeValEnd);
   //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
   //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
   lesPkgFct[resul1.datas.rang].datas.listeappelles[resul2.datas.rang] = "X";
   lesPkgFct[resul1.datas.rang].datas.listetitle   [resul2.datas.rang] = "<a title='"+resul1.datas.valeur+" -> "+resul2.datas.valeur+"'>";
}
function doInitFct() {
   console.log("main01 Debut");
   // Init avec les packages
   var datadepend = datadependFct;
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
      //console.log("main01 "+liInd);
      var leVal1 = datadepend.lesdatas[liInd].start; doTraiterFct(leVal1);
      var leVal2 = datadepend.lesdatas[liInd].end  ; doTraiterFct(leVal2);
      //console.log("main03 taille "+lesPkgFct.length);
   }
   lesPkgFct.sort((a, b) => a.datas.valeur > b.datas.valeur);
   for (var liInd=0; liInd<lesPkgFct.length; liInd++) {
	   lesPkgFct[liInd].datas.rang = liInd;
	   for (var liCol=0; liCol<lesPkgFct.length; liCol++) {
	      lesPkgFct[liInd].datas.listeappelles[liCol]="";
	   }
   }
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
	   var leVal1 = datadepend.lesdatas[liInd].start;
	   var leVal2 = datadepend.lesdatas[liInd].end  ;
	   doAffecterFct(leVal1, leVal2);
   }
   for (var liCol=0; liCol<lesPkgFct.length; liCol++) {
	   lesPkgFct[liCol].datas.listecouleurs[liCol] = "skyblue";
   }
   for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
      //console.log("main07 cycle "+liInd1);
      //for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
      //   console.log("main08    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
      //}
      var leEtapeZero = datadepend.lescycles[liInd1].uncycle[0].etape;
      var leEtapePrec = leEtapeZero;
      var liTaille    = datadepend.lescycles[liInd1].uncycle.length;
      // Boucle sur un element de plus pour le bouclage
      for (var liInd2=1; liInd2<=liTaille; liInd2++) {
	       if (liInd2<liTaille) { var leEtapeCour = datadepend.lescycles[liInd1].uncycle[liInd2].etape; }
	       else                 { var leEtapeCour = leEtapeZero; }
         //console.log("main09    entre "+leEtapePrec+" et "+leEtapeCour);
         const resul1 = lesPkgFct.find(({datas}) => datas.valeur === leEtapePrec);
         const resul2 = lesPkgFct.find(({datas}) => datas.valeur === leEtapeCour);
	       const rangEtapePrec = resul1.datas.rang;
	       const rangEtapeCour = resul2.datas.rang;
         //console.log("main10 resul "+resul1.datas.valeur + " " + rangEtapePrec);
         //console.log("main11 resul "+resul2.datas.valeur + " " + rangEtapeCour);
	       var rangMin = rangEtapePrec;
	       var rangMax = rangEtapeCour;
	       if (rangMin>rangMax) {
	          var poub = rangMax;
	          rangMax = rangMin;
	          rangMin = poub;
	       }
         for (var liCol=rangMin; liCol<rangMax; liCol++) {
            if (lesPkgFct[liCol]        .datas.listecouleurs[rangEtapeCour]===undefined) lesPkgFct[liCol]        .datas.listecouleurs[rangEtapeCour] = "red";
            if (lesPkgFct[rangEtapePrec].datas.listecouleurs[liCol]        ===undefined) lesPkgFct[rangEtapePrec].datas.listecouleurs[liCol]         = "red";
         }
	       // resul1 = ligne
	       // resul2 = colonne
	       lesPkgFct[rangEtapePrec].datas.listecouleurs[rangEtapeCour] = "lime"; // vert clair
         lesPkgFct[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "\nC"+liInd1+":"+liInd2+"/"+liTaille;
	       lesPkgFct[rangEtapePrec].datas.dansuncycle                  = "true";
	       lesPkgFct[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
         leEtapePrec = leEtapeCour;
      }
   }
   console.log("main99 fin");
}
function doDessinerFct() {
  var lsStr = "";
  lsStr+="<table border='1'>";
	lsStr+="<tr><td></td><td>Package . class . function</td>";
	for (var liCol=0; liCol<lesPkgFct.length; liCol++) {
	   if ( (gbCyclesSeulsFct==false && giSTEP*(giTrancheFct-1)<=liCol && liCol<giSTEP*giTrancheFct) || (gbCyclesSeulsFct==true && lesPkgFct[liCol].datas.dansuncycle=="true")) {
	      lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgFct[liCol].datas.valeur+"'>"+liCol+"</a></td>";
	   }
	}
	lsStr+="</tr>";
  for (var liInd=0; liInd<lesPkgFct.length; liInd++) {
	   if ( (gbCyclesSeulsFct==false && giSTEP*(giTrancheFct-1)<=liInd && liInd<giSTEP*giTrancheFct)  || (gbCyclesSeulsFct==true && lesPkgFct[liInd].datas.dansuncycle=="true")) {
	      lsStr+="<tr><td align='right'>"+liInd+"</td><td>"+lesPkgFct[liInd].datas.valeur+"</td>";
	      lesPkgFct[liInd].datas.rang = liInd;
	      for (var liCol=0; liCol<lesPkgFct.length; liCol++) {
	         if ( (gbCyclesSeulsFct==false && giSTEP*(giTrancheFct-1)<=liCol && liCol<giSTEP*giTrancheFct)  || (gbCyclesSeulsFct==true && lesPkgFct[liCol].datas.dansuncycle=="true")) {
	            var lsBg = " align='center'";
	            var couleur = lesPkgFct[liInd].datas.listecouleurs[liCol];
	            if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
	            var title = lesPkgFct[liInd].datas.listetitle[liCol];
	            if (title===undefined) title="";
	            lsStr+="<td"+lsBg+">"+title+lesPkgFct[liInd].datas.listeappelles[liCol]+"</td>";
	         }
	      }
	   }
     lsStr+="</tr>";
  }
  // on copie la ligne du debut a la fin 
	lsStr+="<tr><td></td><td></td>";
	for (var liCol=0; liCol<lesPkgFct.length; liCol++) {
	   if ( (gbCyclesSeulsFct==false && giSTEP*(giTrancheFct-1)<=liCol && liCol<giSTEP*giTrancheFct)  || (gbCyclesSeulsFct==true && lesPkgFct[liCol].datas.dansuncycle=="true")) {
	      lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgFct[liCol].datas.valeur+"'>"+liCol+"</a></td>";
	   }
	}
	lsStr+="</tr>";
  lsStr+="<br />";
  lsStr+="<br />";
  if (0<datadependFct.lescycles.length) {
     lsStr+="<div>Detected cycles in the graph</div>";
     lsStr+="<br />";
     lsStr+="<table border='1'>";
     for (var liInd1=0; liInd1<datadependFct.lescycles.length; liInd1++) {
        //console.log("main07 cycle "+liInd1);
        lsStr+="<tr><td>Cycle "+liInd1+"</td><td>Step</td></tr>";
        for (var liInd2=0; liInd2<datadependFct.lescycles[liInd1].uncycle.length; liInd2++) {
           //console.log("main08    etape "+liInd2+"  "+datadependFct.lescycles[liInd1].uncycle[liInd2].etape);
           lsStr+="<tr><td></td><td>"+datadependFct.lescycles[liInd1].uncycle[liInd2].etape+"</td></tr>";
        }
     }
     lsStr+="</table>";
  } else {
     lsStr+="<div>No cycles have been detected in the graph</div>";
     lsStr+="<br />";
  }
  //console.log("main02 lsStr "+lsStr);
  var theDivBloc = document.getElementById("maDivFct");  
  theDivBloc.innerHTML = lsStr;
}
doInitFct();
doDessinerFct();
//]]>
