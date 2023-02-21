
//<![CDATA[
var gbCyclesSeulsCallerCalleeFct = true;
var lesPkgCallerCalleeFct=[];
// HashMap nom -> indice dans le tableau
var lesPkgCallerCalleeFctHashMap=new Map();
var giSTEP = 500;
var giTrancheCallerCalleeFct = 0;
function lfRadioOnClickCallerCalleeFct() {
   const laForme = document.querySelector("input[name='viewconfigCallerCalleeFct']:checked");
   if (null!=laForme) {
      //console.log("lfRadioOnClick radio id :" + laForme.id);
      if (laForme.id=='trancheCallerCalleeFct0') {
	       gbCyclesSeulsCallerCalleeFct = true;
	       giTrancheCallerCalleeFct     = 0
      } else {
	       gbCyclesSeulsCallerCalleeFct = false;
	       const liValue = laForme.value;
         //console.log("lfRadioOnClick radio value :" + liValue);
	       giTrancheCallerCalleeFct     = liValue
      }
      doDessinerCallerCalleeFct();
   }
   return true;
}
function doTraiterCallerCalleeFct(aeVal) {
	//console.log("doTraiterCallerCalleeFct02 resul "+resul);
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkgCallerCalleeFct.push(laVar);
	   // Stock indice dans le tableau
	   lesPkgCallerCalleeFctHashMap.set(aeVal, lesPkgCallerCalleeFct.length-1);
}
function doAffecterCallerCalleeFct(aeValStart, aeValEnd) {
   const resul1 = lesPkgCallerCalleeFctHashMap.get(aeValStart);
   const resul2 = lesPkgCallerCalleeFctHashMap.get(aeValEnd);
   if (null!=resul1 && null!=resul2) {
      //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
      //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
      lesPkgCallerCalleeFct[lesPkgCallerCalleeFct[resul1].datas.rang].datas.listeappelles[lesPkgCallerCalleeFct[resul2].datas.rang] = "X";
      lesPkgCallerCalleeFct[lesPkgCallerCalleeFct[resul1].datas.rang].datas.listetitle   [lesPkgCallerCalleeFct[resul2].datas.rang] = "<a title='"+lesPkgCallerCalleeFct[resul1].datas.valeur+" -> "+lesPkgCallerCalleeFct[resul2].datas.valeur+"'>";
   }
}
function doInitCallerCalleeFct() {
   console.log("doInitCallerCalleeFct01 Debut");
   // Init avec les packages
   var datadepend = datadependCallerCalleeFct;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitCallerCalleeFct02 "+liInd);
      var leVal1 = datadepend.lesnoeuds[liInd].noeud; doTraiterCallerCalleeFct(leVal1);
   }
   console.log("doInitCallerCalleeFct04");
   lesPkgCallerCalleeFct.sort((a, b) => a.datas.valeur > b.datas.valeur);
   console.log("doInitCallerCalleeFct05");
   //Modif D.C. 2023 02 18 en comm
   for (var liInd=0; liInd<lesPkgCallerCalleeFct.length; liInd++) {
      lesPkgCallerCalleeFct[liInd].datas.rang = liInd;
   //  for (var liCol=0; liCol<lesPkgCallerCalleeFct.length; liCol++) {
   //     lesPkgCallerCalleeFct[liInd].datas.listeappelles[liCol]="";
   //  }
   }
   //Modif D.C. 2023 02 19 update hashmap
   lesPkgCallerCalleeFctHashMap.clear();
   for (var liInd=0; liInd<lesPkgCallerCalleeFct.length; liInd++) {
      lesPkgCallerCalleeFctHashMap.set(lesPkgCallerCalleeFct[liInd].datas.valeur, liInd);
   }
   console.log("doInitCallerCalleeFct06");
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
      var leVal1 = datadepend.lesdatas[liInd].start;
      var leVal2 = datadepend.lesdatas[liInd].end  ;
      doAffecterCallerCalleeFct(leVal1, leVal2);
   }
   console.log("doInitCallerCalleeFct07");
   for (var liCol=0; liCol<lesPkgCallerCalleeFct.length; liCol++) {
      lesPkgCallerCalleeFct[liCol].datas.listecouleurs[liCol] = "skyblue";
   }
   console.log("doInitCallerCalleeFct08");
   for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
      console.log("doInitCallerCalleeFct09 cycle "+liInd1+" taille "+datadepend.lescycles[liInd1].uncycle.length);
      //for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
      //   console.log("doInitCallerCalleeFct10    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
      //}
      var leEtapeZero = datadepend.lescycles[liInd1].uncycle[0].etape;
      var leEtapePrec = leEtapeZero;
      var liTaille    = datadepend.lescycles[liInd1].uncycle.length;
      // Boucle sur un element de plus pour le bouclage
      for (var liInd2=1; liInd2<=liTaille; liInd2++) {
          if (liInd2<liTaille) { var leEtapeCour = datadepend.lescycles[liInd1].uncycle[liInd2].etape; }
          else                 { var leEtapeCour = leEtapeZero; }
         //console.log("doInitCallerCalleeFct11    entre "+leEtapePrec+" et "+leEtapeCour);
         const resul1 = lesPkgCallerCalleeFctHashMap.get(leEtapePrec);
         const resul2 = lesPkgCallerCalleeFctHashMap.get(leEtapeCour);
         //console.log("doInitCallerCalleeFct11a   entre "+leEtapePrec+" et "+leEtapeCour+" resul1 "+resul1+" resul2 "+resul2);
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
               if (lesPkgCallerCalleeFct[liCol]        .datas.listecouleurs[rangEtapeCour]===undefined) lesPkgCallerCalleeFct[liCol]        .datas.listecouleurs[rangEtapeCour] = "red";
               if (lesPkgCallerCalleeFct[rangEtapePrec].datas.listecouleurs[liCol]        ===undefined) lesPkgCallerCalleeFct[rangEtapePrec].datas.listecouleurs[liCol]         = "red";
            }
            // resul1 = ligne
            // resul2 = colonne
            lesPkgCallerCalleeFct[rangEtapePrec].datas.listecouleurs[rangEtapeCour] = "lime"; // vert clair
            if (undefined===lesPkgCallerCalleeFct[rangEtapePrec].datas.listeappelles[rangEtapeCour]) lesPkgCallerCalleeFct[rangEtapePrec].datas.listeappelles[rangEtapeCour] ="";
            lesPkgCallerCalleeFct[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "\nC"+liInd1+":"+liInd2+"/"+liTaille;
            lesPkgCallerCalleeFct[rangEtapePrec].datas.dansuncycle                  = "true";
            lesPkgCallerCalleeFct[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
            leEtapePrec = leEtapeCour;
         }
      }
   }
   console.log("doInitCallerCalleeFct99 fin");
}
function doDessinerCallerCalleeFct() {
   var lsStr = "";
   lsStr+="<table border='1'>";
   lsStr+="<tr><td></td><td>Function calls with view Package . class . function</td>";
   for (var liCol=0; liCol<lesPkgCallerCalleeFct.length; liCol++) {
      if ( (gbCyclesSeulsCallerCalleeFct==false && giSTEP*(giTrancheCallerCalleeFct-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleeFct) || (gbCyclesSeulsCallerCalleeFct==true && lesPkgCallerCalleeFct[liCol].datas.dansuncycle=="true")) {
         lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCallerCalleeFct[liCol].datas.valeur+"'>"+liCol+"</a></td>";
      }
   }
   lsStr+="</tr>";
   for (var liInd=0; liInd<lesPkgCallerCalleeFct.length; liInd++) {
      if ( (gbCyclesSeulsCallerCalleeFct==false && giSTEP*(giTrancheCallerCalleeFct-1)<=liInd && liInd<giSTEP*giTrancheCallerCalleeFct)  || (gbCyclesSeulsCallerCalleeFct==true && lesPkgCallerCalleeFct[liInd].datas.dansuncycle=="true")) {
         lsStr+="<tr><td align='right'>"+liInd+"</td><td>"+lesPkgCallerCalleeFct[liInd].datas.valeur+"</td>";
         //lesPkgCallerCalleeFct[liInd].datas.rang = liInd;
         for (var liCol=0; liCol<lesPkgCallerCalleeFct.length; liCol++) {
            if ( (gbCyclesSeulsCallerCalleeFct==false && giSTEP*(giTrancheCallerCalleeFct-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleeFct)  || (gbCyclesSeulsCallerCalleeFct==true && lesPkgCallerCalleeFct[liCol].datas.dansuncycle=="true")) {
               var lsBg = " align='center'";
               var couleur = lesPkgCallerCalleeFct[liInd].datas.listecouleurs[liCol];
               if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
               var title = lesPkgCallerCalleeFct[liInd].datas.listetitle[liCol];
               if (title===undefined) title="";
               var appelles = lesPkgCallerCalleeFct[liInd].datas.listeappelles[liCol];
               if (appelles===undefined) appelles="";
               lsStr+="<td"+lsBg+">"+title+appelles+"</td>";
            }
         }
      }
      lsStr+="</tr>";
   }
   // on copie la ligne du debut a la fin 
   lsStr+="<tr><td></td><td></td>";
   for (var liCol=0; liCol<lesPkgCallerCalleeFct.length; liCol++) {
      if ( (gbCyclesSeulsCallerCalleeFct==false && giSTEP*(giTrancheCallerCalleeFct-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleeFct)  || (gbCyclesSeulsCallerCalleeFct==true && lesPkgCallerCalleeFct[liCol].datas.dansuncycle=="true")) {
         lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCallerCalleeFct[liCol].datas.valeur+"'>"+liCol+"</a></td>";
      }
   }
   lsStr+="</tr>";
   lsStr+="<br />";
   lsStr+="<br />";
   if (0<datadependCallerCalleeFct.lescycles.length) {
      lsStr+="<div>Detected cycles in the graph</div>";
      lsStr+="<br />";
      lsStr+="<table border='1'>";
      for (var liInd1=0; liInd1<datadependCallerCalleeFct.lescycles.length; liInd1++) {
         //console.log("main07 cycle "+liInd1);
         lsStr+="<tr><td>Cycle "+liInd1+"</td><td>Step</td></tr>";
         for (var liInd2=0; liInd2<datadependCallerCalleeFct.lescycles[liInd1].uncycle.length; liInd2++) {
            //console.log("main08    etape "+liInd2+"  "+datadependCallerCalleeFct.lescycles[liInd1].uncycle[liInd2].etape);
            lsStr+="<tr><td></td><td>"+datadependCallerCalleeFct.lescycles[liInd1].uncycle[liInd2].etape+"</td></tr>";
         }
      }
      lsStr+="</table>";
   } else {
      lsStr+="<div>No cycles have been detected in the graph</div>";
      lsStr+="<br />";
   }
   //console.log("main02 lsStr "+lsStr);
   var theDivBloc = document.getElementById("maDivCallerCalleeFct");  
   theDivBloc.innerHTML = lsStr;
}
doInitCallerCalleeFct();
doDessinerCallerCalleeFct();
//]]>
