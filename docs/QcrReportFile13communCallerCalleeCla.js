
//<![CDATA[
var gbCyclesSeulsCallerCalleeCla = true;
var lesPkgCallerCalleeCla=[];
// HashMap nom -> indice dans le tableau
var lesPkgCallerCalleeClaHashMap=new Map();
var giSTEP = 500;
var giTrancheCallerCalleeCla = 0;
function lfRadioOnClickCallerCalleeCla() {
   const laForme = document.querySelector("input[name='viewconfigCallerCalleeCla']:checked");
   if (null!=laForme) {
      //console.log("lfRadioOnClick radio id :" + laForme.id);
      if (laForme.id=='trancheCallerCalleeCla0') {
	       gbCyclesSeulsCallerCalleeCla = true;
	       giTrancheCallerCalleeCla     = 0
      } else {
	       gbCyclesSeulsCallerCalleeCla = false;
	       const liValue = laForme.value;
         //console.log("lfRadioOnClick radio value :" + liValue);
	       giTrancheCallerCalleeCla     = liValue
      }
      doDessinerCallerCalleeCla();
   }
   return true;
}
function doTraiterCallerCalleeCla(aeVal) {
	//console.log("doTraiterCallerCalleeCla02 resul "+resul);
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkgCallerCalleeCla.push(laVar);
	   // Stock indice dans le tableau
	   lesPkgCallerCalleeClaHashMap.set(aeVal, lesPkgCallerCalleeCla.length-1);
}
function doAffecterCallerCalleeCla(aeValStart, aeValEnd) {
   const resul1 = lesPkgCallerCalleeClaHashMap.get(aeValStart);
   const resul2 = lesPkgCallerCalleeClaHashMap.get(aeValEnd);
   if (null!=resul1 && null!=resul2) {
      //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
      //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
      lesPkgCallerCalleeCla[lesPkgCallerCalleeCla[resul1].datas.rang].datas.listeappelles[lesPkgCallerCalleeCla[resul2].datas.rang] = "X";
      lesPkgCallerCalleeCla[lesPkgCallerCalleeCla[resul1].datas.rang].datas.listetitle   [lesPkgCallerCalleeCla[resul2].datas.rang] = "<a title='"+lesPkgCallerCalleeCla[resul1].datas.valeur+" -> "+lesPkgCallerCalleeCla[resul2].datas.valeur+"'>";
   }
}
function doInitCallerCalleeCla() {
   console.log("doInitCallerCalleeCla01 Debut");
   // Init avec les packages
   var datadepend = datadependCallerCalleeCla;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitCallerCalleeCla02 "+liInd);
      var leVal1 = datadepend.lesnoeuds[liInd].noeud; doTraiterCallerCalleeCla(leVal1);
   }
   console.log("doInitCallerCalleeCla04");
   lesPkgCallerCalleeCla.sort((a, b) => a.datas.valeur > b.datas.valeur);
   console.log("doInitCallerCalleeCla05");
   //Modif D.C. 2023 02 18 en comm
   for (var liInd=0; liInd<lesPkgCallerCalleeCla.length; liInd++) {
      lesPkgCallerCalleeCla[liInd].datas.rang = liInd;
   //  for (var liCol=0; liCol<lesPkgCallerCalleeCla.length; liCol++) {
   //     lesPkgCallerCalleeCla[liInd].datas.listeappelles[liCol]="";
   //  }
   }
   //Modif D.C. 2023 02 19 update hashmap
   lesPkgCallerCalleeClaHashMap.clear();
   for (var liInd=0; liInd<lesPkgCallerCalleeCla.length; liInd++) {
      lesPkgCallerCalleeClaHashMap.set(lesPkgCallerCalleeCla[liInd].datas.valeur, liInd);
   }
   console.log("doInitCallerCalleeCla06");
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
      var leVal1 = datadepend.lesdatas[liInd].start;
      var leVal2 = datadepend.lesdatas[liInd].end  ;
      doAffecterCallerCalleeCla(leVal1, leVal2);
   }
   console.log("doInitCallerCalleeCla07");
   for (var liCol=0; liCol<lesPkgCallerCalleeCla.length; liCol++) {
      lesPkgCallerCalleeCla[liCol].datas.listecouleurs[liCol] = "skyblue";
   }
   console.log("doInitCallerCalleeCla08");
   for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
      console.log("doInitCallerCalleeCla09 cycle "+liInd1+" taille "+datadepend.lescycles[liInd1].uncycle.length);
      //for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
      //   console.log("doInitCallerCalleeCla10    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
      //}
      var leEtapeZero = datadepend.lescycles[liInd1].uncycle[0].etape;
      var leEtapePrec = leEtapeZero;
      var liTaille    = datadepend.lescycles[liInd1].uncycle.length;
      // Boucle sur un element de plus pour le bouclage
      for (var liInd2=1; liInd2<=liTaille; liInd2++) {
          if (liInd2<liTaille) { var leEtapeCour = datadepend.lescycles[liInd1].uncycle[liInd2].etape; }
          else                 { var leEtapeCour = leEtapeZero; }
         //console.log("doInitCallerCalleeCla11    entre "+leEtapePrec+" et "+leEtapeCour);
         const resul1 = lesPkgCallerCalleeClaHashMap.get(leEtapePrec);
         const resul2 = lesPkgCallerCalleeClaHashMap.get(leEtapeCour);
         //console.log("doInitCallerCalleeCla11a   entre "+leEtapePrec+" et "+leEtapeCour+" resul1 "+resul1+" resul2 "+resul2);
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
               if (lesPkgCallerCalleeCla[liCol]        .datas.listecouleurs[rangEtapeCour]===undefined) lesPkgCallerCalleeCla[liCol]        .datas.listecouleurs[rangEtapeCour] = "red";
               if (lesPkgCallerCalleeCla[rangEtapePrec].datas.listecouleurs[liCol]        ===undefined) lesPkgCallerCalleeCla[rangEtapePrec].datas.listecouleurs[liCol]         = "red";
            }
            // resul1 = ligne
            // resul2 = colonne
            lesPkgCallerCalleeCla[rangEtapePrec].datas.listecouleurs[rangEtapeCour] = "lime"; // vert clair
            if (undefined===lesPkgCallerCalleeCla[rangEtapePrec].datas.listeappelles[rangEtapeCour]) lesPkgCallerCalleeCla[rangEtapePrec].datas.listeappelles[rangEtapeCour] ="";
            lesPkgCallerCalleeCla[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "\nC"+liInd1+":"+liInd2+"/"+liTaille;
            lesPkgCallerCalleeCla[rangEtapePrec].datas.dansuncycle                  = "true";
            lesPkgCallerCalleeCla[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
            leEtapePrec = leEtapeCour;
         }
      }
   }
   console.log("doInitCallerCalleeCla99 fin");
}
function doDessinerCallerCalleeCla() {
   var lsStr = "";
   lsStr+="<table border='1'>";
   lsStr+="<tr><td></td><td>Function calls with view Package . class</td>";
   for (var liCol=0; liCol<lesPkgCallerCalleeCla.length; liCol++) {
      if ( (gbCyclesSeulsCallerCalleeCla==false && giSTEP*(giTrancheCallerCalleeCla-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleeCla) || (gbCyclesSeulsCallerCalleeCla==true && lesPkgCallerCalleeCla[liCol].datas.dansuncycle=="true")) {
         lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCallerCalleeCla[liCol].datas.valeur+"'>"+liCol+"</a></td>";
      }
   }
   lsStr+="</tr>";
   for (var liInd=0; liInd<lesPkgCallerCalleeCla.length; liInd++) {
      if ( (gbCyclesSeulsCallerCalleeCla==false && giSTEP*(giTrancheCallerCalleeCla-1)<=liInd && liInd<giSTEP*giTrancheCallerCalleeCla)  || (gbCyclesSeulsCallerCalleeCla==true && lesPkgCallerCalleeCla[liInd].datas.dansuncycle=="true")) {
         lsStr+="<tr><td align='right'>"+liInd+"</td><td>"+lesPkgCallerCalleeCla[liInd].datas.valeur+"</td>";
         //lesPkgCallerCalleeCla[liInd].datas.rang = liInd;
         for (var liCol=0; liCol<lesPkgCallerCalleeCla.length; liCol++) {
            if ( (gbCyclesSeulsCallerCalleeCla==false && giSTEP*(giTrancheCallerCalleeCla-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleeCla)  || (gbCyclesSeulsCallerCalleeCla==true && lesPkgCallerCalleeCla[liCol].datas.dansuncycle=="true")) {
               var lsBg = " align='center'";
               var couleur = lesPkgCallerCalleeCla[liInd].datas.listecouleurs[liCol];
               if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
               var title = lesPkgCallerCalleeCla[liInd].datas.listetitle[liCol];
               if (title===undefined) title="";
               var appelles = lesPkgCallerCalleeCla[liInd].datas.listeappelles[liCol];
               if (appelles===undefined) appelles="";
               lsStr+="<td"+lsBg+">"+title+appelles+"</td>";
            }
         }
      }
      lsStr+="</tr>";
   }
   // on copie la ligne du debut a la fin 
   lsStr+="<tr><td></td><td></td>";
   for (var liCol=0; liCol<lesPkgCallerCalleeCla.length; liCol++) {
      if ( (gbCyclesSeulsCallerCalleeCla==false && giSTEP*(giTrancheCallerCalleeCla-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleeCla)  || (gbCyclesSeulsCallerCalleeCla==true && lesPkgCallerCalleeCla[liCol].datas.dansuncycle=="true")) {
         lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCallerCalleeCla[liCol].datas.valeur+"'>"+liCol+"</a></td>";
      }
   }
   lsStr+="</tr>";
   lsStr+="<br />";
   lsStr+="<br />";
   if (0<datadependCallerCalleeCla.lescycles.length) {
      lsStr+="<div>Detected cycles in the graph</div>";
      lsStr+="<br />";
      lsStr+="<table border='1'>";
      for (var liInd1=0; liInd1<datadependCallerCalleeCla.lescycles.length; liInd1++) {
         //console.log("main07 cycle "+liInd1);
         lsStr+="<tr><td>Cycle "+liInd1+"</td><td>Step</td></tr>";
         for (var liInd2=0; liInd2<datadependCallerCalleeCla.lescycles[liInd1].uncycle.length; liInd2++) {
            //console.log("main08    etape "+liInd2+"  "+datadependCallerCalleeCla.lescycles[liInd1].uncycle[liInd2].etape);
            lsStr+="<tr><td></td><td>"+datadependCallerCalleeCla.lescycles[liInd1].uncycle[liInd2].etape+"</td></tr>";
         }
      }
      lsStr+="</table>";
   } else {
      lsStr+="<div>No cycles have been detected in the graph</div>";
      lsStr+="<br />";
   }
   //console.log("main02 lsStr "+lsStr);
   var theDivBloc = document.getElementById("maDivCallerCalleeCla");  
   theDivBloc.innerHTML = lsStr;
}
doInitCallerCalleeCla();
doDessinerCallerCalleeCla();
//]]>
