
//<![CDATA[
var gbCyclesSeulsCla = true;
var lesPkgCla=[];
var giSTEP = 500;
var giTrancheCla = 0;
function lfRadioOnClickCla() {
   const laForme = document.querySelector("input[name='viewconfigCla']:checked");
   if (null!=laForme) {
      //console.log("lfRadioOnClick radio id :" + laForme.id);
      if (laForme.id=='trancheCla0') {
	       gbCyclesSeulsCla = true;
	       giTrancheCla     = 0
      } else {
	       gbCyclesSeulsCla = false;
	       const liValue = laForme.value;
         //console.log("lfRadioOnClick radio value :" + liValue);
	       giTrancheCla     = liValue
      }
      doDessinerCla();
   }
   return true;
}
function doTraiterCla(aeVal) {
	const resul = lesPkgCla.find(({datas}) => datas.valeur === aeVal);
	//console.log("main02 resul "+resul);
	if (resul===undefined) {
	   //console.log("main03 pas trouve "+aeVal+" ajoute");
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkgCla.push(laVar);
	} else {
	   //console.log("main04 "+aeVal+" deja trouve");
	}
}
function doAffecterCla(aeValStart, aeValEnd) {
   const resul1 = lesPkgCla.find(({datas}) => datas.valeur === aeValStart);
   const resul2 = lesPkgCla.find(({datas}) => datas.valeur === aeValEnd);
   //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
   //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
   lesPkgCla[resul1.datas.rang].datas.listeappelles[resul2.datas.rang] = "X";
   lesPkgCla[resul1.datas.rang].datas.listetitle   [resul2.datas.rang] = "<a title='"+resul1.datas.valeur+" -> "+resul2.datas.valeur+"'>";
}
function doInitCla() {
   console.log("main01 Debut");
   // Init avec les packages
   var datadepend = datadependCla;
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
      //console.log("main01 "+liInd);
      var leVal1 = datadepend.lesdatas[liInd].start; doTraiterCla(leVal1);
      var leVal2 = datadepend.lesdatas[liInd].end  ; doTraiterCla(leVal2);
      //console.log("main03 taille "+lesPkgCla.length);
   }
   lesPkgCla.sort((a, b) => a.datas.valeur > b.datas.valeur);
   for (var liInd=0; liInd<lesPkgCla.length; liInd++) {
	   lesPkgCla[liInd].datas.rang = liInd;
	   for (var liCol=0; liCol<lesPkgCla.length; liCol++) {
	      lesPkgCla[liInd].datas.listeappelles[liCol]="";
	   }
   }
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
	   var leVal1 = datadepend.lesdatas[liInd].start;
	   var leVal2 = datadepend.lesdatas[liInd].end  ;
	   doAffecterCla(leVal1, leVal2);
   }
   for (var liCol=0; liCol<lesPkgCla.length; liCol++) {
	   lesPkgCla[liCol].datas.listecouleurs[liCol] = "skyblue";
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
         const resul1 = lesPkgCla.find(({datas}) => datas.valeur === leEtapePrec);
         const resul2 = lesPkgCla.find(({datas}) => datas.valeur === leEtapeCour);
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
            if (lesPkgCla[liCol]        .datas.listecouleurs[rangEtapeCour]===undefined) lesPkgCla[liCol]        .datas.listecouleurs[rangEtapeCour] = "red";
            if (lesPkgCla[rangEtapePrec].datas.listecouleurs[liCol]        ===undefined) lesPkgCla[rangEtapePrec].datas.listecouleurs[liCol]         = "red";
         }
	       // resul1 = ligne
	       // resul2 = colonne
	       lesPkgCla[rangEtapePrec].datas.listecouleurs[rangEtapeCour] = "lime"; // vert clair
         lesPkgCla[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "\nC"+liInd1+":"+liInd2+"/"+liTaille;
	       lesPkgCla[rangEtapePrec].datas.dansuncycle                  = "true";
	       lesPkgCla[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
         leEtapePrec = leEtapeCour;
      }
   }
   console.log("main99 fin");
}
function doDessinerCla() {
  var lsStr = "";
  lsStr+="<table border='1'>";
	lsStr+="<tr><td></td><td>Class</td>";
	for (var liCol=0; liCol<lesPkgCla.length; liCol++) {
	   if ( (gbCyclesSeulsCla==false && giSTEP*(giTrancheCla-1)<=liCol && liCol<giSTEP*giTrancheCla) || (gbCyclesSeulsCla==true && lesPkgCla[liCol].datas.dansuncycle=="true")) {
	      lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCla[liCol].datas.valeur+"'>"+liCol+"</a></td>";
	   }
	}
	lsStr+="</tr>";
  for (var liInd=0; liInd<lesPkgCla.length; liInd++) {
	   if ( (gbCyclesSeulsCla==false && giSTEP*(giTrancheCla-1)<=liInd && liInd<giSTEP*giTrancheCla)  || (gbCyclesSeulsCla==true && lesPkgCla[liInd].datas.dansuncycle=="true")) {
	      lsStr+="<tr><td align='right'>"+liInd+"</td><td>"+lesPkgCla[liInd].datas.valeur+"</td>";
	      lesPkgCla[liInd].datas.rang = liInd;
	      for (var liCol=0; liCol<lesPkgCla.length; liCol++) {
	         if ( (gbCyclesSeulsCla==false && giSTEP*(giTrancheCla-1)<=liCol && liCol<giSTEP*giTrancheCla)  || (gbCyclesSeulsCla==true && lesPkgCla[liCol].datas.dansuncycle=="true")) {
	            var lsBg = " align='center'";
	            var couleur = lesPkgCla[liInd].datas.listecouleurs[liCol];
	            if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
	            var title = lesPkgCla[liInd].datas.listetitle[liCol];
	            if (title===undefined) title="";
	            lsStr+="<td"+lsBg+">"+title+lesPkgCla[liInd].datas.listeappelles[liCol]+"</td>";
	         }
	      }
	   }
     lsStr+="</tr>";
  }
  // on copie la ligne du debut a la fin 
	lsStr+="<tr><td></td><td></td>";
	for (var liCol=0; liCol<lesPkgCla.length; liCol++) {
	   if ( (gbCyclesSeulsCla==false && giSTEP*(giTrancheCla-1)<=liCol && liCol<giSTEP*giTrancheCla)  || (gbCyclesSeulsCla==true && lesPkgCla[liCol].datas.dansuncycle=="true")) {
	      lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCla[liCol].datas.valeur+"'>"+liCol+"</a></td>";
	   }
	}
	lsStr+="</tr>";
  lsStr+="<br />";
  lsStr+="<br />";
  if (0<datadependCla.lescycles.length) {
     lsStr+="<div>Detected cycles in the graph</div>";
     lsStr+="<br />";
     lsStr+="<table border='1'>";
     for (var liInd1=0; liInd1<datadependCla.lescycles.length; liInd1++) {
        //console.log("main07 cycle "+liInd1);
        lsStr+="<tr><td>Cycle "+liInd1+"</td><td>Step</td></tr>";
        for (var liInd2=0; liInd2<datadependCla.lescycles[liInd1].uncycle.length; liInd2++) {
           //console.log("main08    etape "+liInd2+"  "+datadependCla.lescycles[liInd1].uncycle[liInd2].etape);
           lsStr+="<tr><td></td><td>"+datadependCla.lescycles[liInd1].uncycle[liInd2].etape+"</td></tr>";
        }
     }
     lsStr+="</table>";
  } else {
     lsStr+="<div>No cycles have been detected in the graph</div>";
     lsStr+="<br />";
  }
  //console.log("main02 lsStr "+lsStr);
  var theDivBloc = document.getElementById("maDivCla");  
  theDivBloc.innerHTML = lsStr;
}
doInitCla();
doDessinerCla();
//]]>
