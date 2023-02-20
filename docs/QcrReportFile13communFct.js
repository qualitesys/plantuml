
//<![CDATA[
var gbCyclesSeulsFct = true;
var lesPkgFct=[];
// HashMap nom -> indice dans le tableau
var lesPkgFctHashMap=new Map();
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
	//console.log("doTraiterFct02 resul "+resul);
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkgFct.push(laVar);
	   // Stock indice dans le tableau
	   lesPkgFctHashMap.set(aeVal, lesPkgFct.length-1);
}
function doAffecterFct(aeValStart, aeValEnd) {
   const resul1 = lesPkgFctHashMap.get(aeValStart);
   const resul2 = lesPkgFctHashMap.get(aeValEnd);
   if (null!=resul1 && null!=resul2) {
      //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
      //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
      lesPkgFct[lesPkgFct[resul1].datas.rang].datas.listeappelles[lesPkgFct[resul2].datas.rang] = "X";
      lesPkgFct[lesPkgFct[resul1].datas.rang].datas.listetitle   [lesPkgFct[resul2].datas.rang] = "<a title='"+lesPkgFct[resul1].datas.valeur+" -> "+lesPkgFct[resul2].datas.valeur+"'>";
   }
}
function doInitFct() {
   console.log("doInitFct01 Debut");
   // Init avec les packages
   var datadepend = datadependFct;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitFct02 "+liInd);
      var leVal1 = datadepend.lesnoeuds[liInd].noeud; doTraiterFct(leVal1);
   }
   console.log("doInitFct04");
   lesPkgFct.sort((a, b) => a.datas.valeur > b.datas.valeur);
   console.log("doInitFct05");
   //Modif D.C. 2023 02 18 en comm
   for (var liInd=0; liInd<lesPkgFct.length; liInd++) {
      lesPkgFct[liInd].datas.rang = liInd;
   //  for (var liCol=0; liCol<lesPkgFct.length; liCol++) {
   //     lesPkgFct[liInd].datas.listeappelles[liCol]="";
   //  }
   }
   //Modif D.C. 2023 02 19 update hashmap
   lesPkgFctHashMap.clear();
   for (var liInd=0; liInd<lesPkgFct.length; liInd++) {
      lesPkgFctHashMap.set(lesPkgFct[liInd].datas.valeur, liInd);
   }
   console.log("doInitFct06");
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
      var leVal1 = datadepend.lesdatas[liInd].start;
      var leVal2 = datadepend.lesdatas[liInd].end  ;
      doAffecterFct(leVal1, leVal2);
   }
   console.log("doInitFct07");
   for (var liCol=0; liCol<lesPkgFct.length; liCol++) {
      lesPkgFct[liCol].datas.listecouleurs[liCol] = "skyblue";
   }
   console.log("doInitFct08");
   for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
      console.log("doInitFct09 cycle "+liInd1);
      //for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
      //   console.log("doInitFct10    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
      //}
      var leEtapeZero = datadepend.lescycles[liInd1].uncycle[0].etape;
      var leEtapePrec = leEtapeZero;
      var liTaille    = datadepend.lescycles[liInd1].uncycle.length;
      // Boucle sur un element de plus pour le bouclage
      for (var liInd2=1; liInd2<=liTaille; liInd2++) {
          if (liInd2<liTaille) { var leEtapeCour = datadepend.lescycles[liInd1].uncycle[liInd2].etape; }
          else                 { var leEtapeCour = leEtapeZero; }
         //console.log("doInitFct11    entre "+leEtapePrec+" et "+leEtapeCour);
         const resul1 = lesPkgFctHashMap.get(leEtapePrec);
         const resul2 = lesPkgFctHashMap.get(leEtapeCour);
         //console.log("doInitFct11a   entre "+leEtapePrec+" et "+leEtapeCour+" resul1 "+resul1+" resul2 "+resul2);
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
               if (lesPkgFct[liCol]        .datas.listecouleurs[rangEtapeCour]===undefined) lesPkgFct[liCol]        .datas.listecouleurs[rangEtapeCour] = "red";
               if (lesPkgFct[rangEtapePrec].datas.listecouleurs[liCol]        ===undefined) lesPkgFct[rangEtapePrec].datas.listecouleurs[liCol]         = "red";
            }
            // resul1 = ligne
            // resul2 = colonne
            lesPkgFct[rangEtapePrec].datas.listecouleurs[rangEtapeCour] = "lime"; // vert clair
            if (undefined===lesPkgFct[rangEtapePrec].datas.listeappelles[rangEtapeCour]) lesPkgFct[rangEtapePrec].datas.listeappelles[rangEtapeCour] ="";
            lesPkgFct[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "\nC"+liInd1+":"+liInd2+"/"+liTaille;
            lesPkgFct[rangEtapePrec].datas.dansuncycle                  = "true";
            lesPkgFct[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
            leEtapePrec = leEtapeCour;
         }
      }
   }
   console.log("doInitFct99 fin");
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
         //lesPkgFct[liInd].datas.rang = liInd;
         for (var liCol=0; liCol<lesPkgFct.length; liCol++) {
            if ( (gbCyclesSeulsFct==false && giSTEP*(giTrancheFct-1)<=liCol && liCol<giSTEP*giTrancheFct)  || (gbCyclesSeulsFct==true && lesPkgFct[liCol].datas.dansuncycle=="true")) {
               var lsBg = " align='center'";
               var couleur = lesPkgFct[liInd].datas.listecouleurs[liCol];
               if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
               var title = lesPkgFct[liInd].datas.listetitle[liCol];
               if (title===undefined) title="";
               var appelles = lesPkgFct[liInd].datas.listeappelles[liCol];
               if (appelles===undefined) appelles="";
               lsStr+="<td"+lsBg+">"+title+appelles+"</td>";
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
