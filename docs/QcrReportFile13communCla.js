
//<![CDATA[
var gbCyclesSeulsCla = true;
var lesPkgCla=[];
// HashMap nom -> indice dans le tableau
var lesPkgClaHashMap=new Map();
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
	//console.log("doTraiterCla02 resul "+resul);
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkgCla.push(laVar);
	   // Stock indice dans le tableau
	   lesPkgClaHashMap.set(aeVal, lesPkgCla.length-1);
}
function doAffecterCla(aeValStart, aeValEnd) {
   const resul1 = lesPkgClaHashMap.get(aeValStart);
   const resul2 = lesPkgClaHashMap.get(aeValEnd);
   if (null!=resul1 && null!=resul2) {
      //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
      //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
      lesPkgCla[lesPkgCla[resul1].datas.rang].datas.listeappelles[lesPkgCla[resul2].datas.rang] = "X";
      lesPkgCla[lesPkgCla[resul1].datas.rang].datas.listetitle   [lesPkgCla[resul2].datas.rang] = "<a title='"+lesPkgCla[resul1].datas.valeur+" -> "+lesPkgCla[resul2].datas.valeur+"'>";
   }
}
function doInitCla() {
   console.log("doInitCla01 Debut");
   // Init avec les packages
   var datadepend = datadependCla;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitCla02 "+liInd);
      var leVal1 = datadepend.lesnoeuds[liInd].noeud; doTraiterCla(leVal1);
   }
   console.log("doInitCla04");
   lesPkgCla.sort((a, b) => a.datas.valeur > b.datas.valeur);
   console.log("doInitCla05");
   //Modif D.C. 2023 02 18 en comm
   for (var liInd=0; liInd<lesPkgCla.length; liInd++) {
      lesPkgCla[liInd].datas.rang = liInd;
   //  for (var liCol=0; liCol<lesPkgCla.length; liCol++) {
   //     lesPkgCla[liInd].datas.listeappelles[liCol]="";
   //  }
   }
   //Modif D.C. 2023 02 19 update hashmap
   lesPkgClaHashMap.clear();
   for (var liInd=0; liInd<lesPkgCla.length; liInd++) {
      lesPkgClaHashMap.set(lesPkgCla[liInd].datas.valeur, liInd);
   }
   console.log("doInitCla06");
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
      var leVal1 = datadepend.lesdatas[liInd].start;
      var leVal2 = datadepend.lesdatas[liInd].end  ;
      doAffecterCla(leVal1, leVal2);
   }
   console.log("doInitCla07");
   for (var liCol=0; liCol<lesPkgCla.length; liCol++) {
      lesPkgCla[liCol].datas.listecouleurs[liCol] = "skyblue";
   }
   console.log("doInitCla08");
   for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
      console.log("doInitCla09 cycle "+liInd1);
      //for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
      //   console.log("doInitCla10    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
      //}
      var leEtapeZero = datadepend.lescycles[liInd1].uncycle[0].etape;
      var leEtapePrec = leEtapeZero;
      var liTaille    = datadepend.lescycles[liInd1].uncycle.length;
      // Boucle sur un element de plus pour le bouclage
      for (var liInd2=1; liInd2<=liTaille; liInd2++) {
          if (liInd2<liTaille) { var leEtapeCour = datadepend.lescycles[liInd1].uncycle[liInd2].etape; }
          else                 { var leEtapeCour = leEtapeZero; }
         //console.log("doInitCla11    entre "+leEtapePrec+" et "+leEtapeCour);
         const resul1 = lesPkgClaHashMap.get(leEtapePrec);
         const resul2 = lesPkgClaHashMap.get(leEtapeCour);
         //console.log("doInitCla11a   entre "+leEtapePrec+" et "+leEtapeCour+" resul1 "+resul1+" resul2 "+resul2);
         if (null!=resul1 && null!=resul2) {
            const rangEtapePrec = resul1;
            const rangEtapeCour = resul2;
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
            if (undefined===lesPkgCla[rangEtapePrec].datas.listeappelles[rangEtapeCour]) lesPkgCla[rangEtapePrec].datas.listeappelles[rangEtapeCour] ="";
            lesPkgCla[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "\nC"+liInd1+":"+liInd2+"/"+liTaille;
            lesPkgCla[rangEtapePrec].datas.dansuncycle                  = "true";
            lesPkgCla[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
            leEtapePrec = leEtapeCour;
         }
      }
   }
   console.log("doInitCla99 fin");
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
         //lesPkgCla[liInd].datas.rang = liInd;
         for (var liCol=0; liCol<lesPkgCla.length; liCol++) {
            if ( (gbCyclesSeulsCla==false && giSTEP*(giTrancheCla-1)<=liCol && liCol<giSTEP*giTrancheCla)  || (gbCyclesSeulsCla==true && lesPkgCla[liCol].datas.dansuncycle=="true")) {
               var lsBg = " align='center'";
               var couleur = lesPkgCla[liInd].datas.listecouleurs[liCol];
               if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
               var title = lesPkgCla[liInd].datas.listetitle[liCol];
               if (title===undefined) title="";
               var appelles = lesPkgCla[liInd].datas.listeappelles[liCol];
               if (appelles===undefined) appelles="";
               lsStr+="<td"+lsBg+">"+title+appelles+"</td>";
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
