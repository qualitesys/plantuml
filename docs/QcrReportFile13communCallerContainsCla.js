
//<![CDATA[
var gbCyclesSeulsCallerContainsCla = true;
var lesPkgCallerContainsCla=[];
// HashMap nom -> indice dans le tableau
var lesPkgCallerContainsClaHashMap=new Map();
var giSTEP = 500;
var giTrancheCallerContainsCla = 0;
function lfRadioOnClickCallerContainsCla() {
   const laForme = document.querySelector("input[name='viewconfigCallerContainsCla']:checked");
   if (null!=laForme) {
      //console.log("lfRadioOnClick radio id :" + laForme.id);
      if (laForme.id=='trancheCallerContainsCla0') {
	       gbCyclesSeulsCallerContainsCla = true;
	       giTrancheCallerContainsCla     = 0
      } else {
	       gbCyclesSeulsCallerContainsCla = false;
	       const liValue = laForme.value;
         //console.log("lfRadioOnClick radio value :" + liValue);
	       giTrancheCallerContainsCla     = liValue
      }
      doDessinerCallerContainsCla();
   }
   return true;
}
function doTraiterCallerContainsCla(aeVal) {
	//console.log("doTraiterCallerContainsCla02 resul "+resul);
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkgCallerContainsCla.push(laVar);
	   // Stock indice dans le tableau
	   lesPkgCallerContainsClaHashMap.set(aeVal, lesPkgCallerContainsCla.length-1);
}
function doAffecterCallerContainsCla(aeValStart, aeValEnd) {
   const resul1 = lesPkgCallerContainsClaHashMap.get(aeValStart);
   const resul2 = lesPkgCallerContainsClaHashMap.get(aeValEnd);
   if (null!=resul1 && null!=resul2) {
      //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
      //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
      lesPkgCallerContainsCla[lesPkgCallerContainsCla[resul1].datas.rang].datas.listeappelles[lesPkgCallerContainsCla[resul2].datas.rang] = "X";
      lesPkgCallerContainsCla[lesPkgCallerContainsCla[resul1].datas.rang].datas.listetitle   [lesPkgCallerContainsCla[resul2].datas.rang] = "<a title='"+lesPkgCallerContainsCla[resul1].datas.valeur+" -> "+lesPkgCallerContainsCla[resul2].datas.valeur+"'>";
   }
}
function doInitCallerContainsCla() {
   console.log("doInitCallerContainsCla01 Debut");
   // Init avec les packages
   var datadepend = datadependCallerContainsCla;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitCallerContainsCla02 "+liInd);
      var leVal1 = datadepend.lesnoeuds[liInd].noeud; doTraiterCallerContainsCla(leVal1);
   }
   console.log("doInitCallerContainsCla04");
   lesPkgCallerContainsCla.sort((a, b) => a.datas.valeur > b.datas.valeur);
   console.log("doInitCallerContainsCla05");
   //Modif D.C. 2023 02 18 en comm
   for (var liInd=0; liInd<lesPkgCallerContainsCla.length; liInd++) {
      lesPkgCallerContainsCla[liInd].datas.rang = liInd;
   //  for (var liCol=0; liCol<lesPkgCallerContainsCla.length; liCol++) {
   //     lesPkgCallerContainsCla[liInd].datas.listeappelles[liCol]="";
   //  }
   }
   //Modif D.C. 2023 02 19 update hashmap
   lesPkgCallerContainsClaHashMap.clear();
   for (var liInd=0; liInd<lesPkgCallerContainsCla.length; liInd++) {
      lesPkgCallerContainsClaHashMap.set(lesPkgCallerContainsCla[liInd].datas.valeur, liInd);
   }
   console.log("doInitCallerContainsCla06");
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
      var leVal1 = datadepend.lesdatas[liInd].start;
      var leVal2 = datadepend.lesdatas[liInd].end  ;
      doAffecterCallerContainsCla(leVal1, leVal2);
   }
   console.log("doInitCallerContainsCla07");
   for (var liCol=0; liCol<lesPkgCallerContainsCla.length; liCol++) {
      lesPkgCallerContainsCla[liCol].datas.listecouleurs[liCol] = "skyblue";
   }
   console.log("doInitCallerContainsCla08");
   for (var liInd1=0; liInd1<0; liInd1++) {
      console.log("doInitCallerContainsCla09 cycle "+liInd1+" taille "+datadepend.lescycles[liInd1].uncycle.length);
      //for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
      //   console.log("doInitCallerContainsCla10    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
      //}
      var leEtapeZero = datadepend.lescycles[liInd1].uncycle[0].etape;
      var leEtapePrec = leEtapeZero;
      var liTaille    = datadepend.lescycles[liInd1].uncycle.length;
      // Boucle sur un element de plus pour le bouclage
      for (var liInd2=1; liInd2<=liTaille; liInd2++) {
          if (liInd2<liTaille) { var leEtapeCour = datadepend.lescycles[liInd1].uncycle[liInd2].etape; }
          else                 { var leEtapeCour = leEtapeZero; }
         //console.log("doInitCallerContainsCla11    entre "+leEtapePrec+" et "+leEtapeCour);
         const resul1 = lesPkgCallerContainsClaHashMap.get(leEtapePrec);
         const resul2 = lesPkgCallerContainsClaHashMap.get(leEtapeCour);
         //console.log("doInitCallerContainsCla11a   entre "+leEtapePrec+" et "+leEtapeCour+" resul1 "+resul1+" resul2 "+resul2);
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
               if (lesPkgCallerContainsCla[liCol]        .datas.listecouleurs[rangEtapeCour]===undefined) lesPkgCallerContainsCla[liCol]        .datas.listecouleurs[rangEtapeCour] = "red";
               if (lesPkgCallerContainsCla[rangEtapePrec].datas.listecouleurs[liCol]        ===undefined) lesPkgCallerContainsCla[rangEtapePrec].datas.listecouleurs[liCol]         = "red";
            }
            // resul1 = ligne
            // resul2 = colonne
            lesPkgCallerContainsCla[rangEtapePrec].datas.listecouleurs[rangEtapeCour] = "lime"; // vert clair
            if (undefined===lesPkgCallerContainsCla[rangEtapePrec].datas.listeappelles[rangEtapeCour]) lesPkgCallerContainsCla[rangEtapePrec].datas.listeappelles[rangEtapeCour] ="";
            lesPkgCallerContainsCla[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "\nC"+liInd1+":"+liInd2+"/"+liTaille;
            lesPkgCallerContainsCla[rangEtapePrec].datas.dansuncycle                  = "true";
            lesPkgCallerContainsCla[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
            leEtapePrec = leEtapeCour;
         }
      }
   }
   console.log("doInitCallerContainsCla99 fin");
}
function doDessinerCallerContainsCla() {
   var lsStr = "";
   lsStr+="<table border='1'>";
   lsStr+="<tr><td></td><td>Class inclusions with view Class</td>";
   for (var liCol=0; liCol<lesPkgCallerContainsCla.length; liCol++) {
      if ( (gbCyclesSeulsCallerContainsCla==false && giSTEP*(giTrancheCallerContainsCla-1)<=liCol && liCol<giSTEP*giTrancheCallerContainsCla) || (gbCyclesSeulsCallerContainsCla==true && lesPkgCallerContainsCla[liCol].datas.dansuncycle=="true")) {
         lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCallerContainsCla[liCol].datas.valeur+"'>"+liCol+"</a></td>";
      }
   }
   lsStr+="</tr>";
   for (var liInd=0; liInd<lesPkgCallerContainsCla.length; liInd++) {
      if ( (gbCyclesSeulsCallerContainsCla==false && giSTEP*(giTrancheCallerContainsCla-1)<=liInd && liInd<giSTEP*giTrancheCallerContainsCla)  || (gbCyclesSeulsCallerContainsCla==true && lesPkgCallerContainsCla[liInd].datas.dansuncycle=="true")) {
         lsStr+="<tr><td align='right'>"+liInd+"</td><td>"+lesPkgCallerContainsCla[liInd].datas.valeur+"</td>";
         //lesPkgCallerContainsCla[liInd].datas.rang = liInd;
         for (var liCol=0; liCol<lesPkgCallerContainsCla.length; liCol++) {
            if ( (gbCyclesSeulsCallerContainsCla==false && giSTEP*(giTrancheCallerContainsCla-1)<=liCol && liCol<giSTEP*giTrancheCallerContainsCla)  || (gbCyclesSeulsCallerContainsCla==true && lesPkgCallerContainsCla[liCol].datas.dansuncycle=="true")) {
               var lsBg = " align='center'";
               var couleur = lesPkgCallerContainsCla[liInd].datas.listecouleurs[liCol];
               if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
               var title = lesPkgCallerContainsCla[liInd].datas.listetitle[liCol];
               if (title===undefined) title="";
               var appelles = lesPkgCallerContainsCla[liInd].datas.listeappelles[liCol];
               if (appelles===undefined) appelles="";
               lsStr+="<td"+lsBg+">"+title+appelles+"</td>";
            }
         }
      }
      lsStr+="</tr>";
   }
   // on copie la ligne du debut a la fin 
   lsStr+="<tr><td></td><td></td>";
   for (var liCol=0; liCol<lesPkgCallerContainsCla.length; liCol++) {
      if ( (gbCyclesSeulsCallerContainsCla==false && giSTEP*(giTrancheCallerContainsCla-1)<=liCol && liCol<giSTEP*giTrancheCallerContainsCla)  || (gbCyclesSeulsCallerContainsCla==true && lesPkgCallerContainsCla[liCol].datas.dansuncycle=="true")) {
         lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCallerContainsCla[liCol].datas.valeur+"'>"+liCol+"</a></td>";
      }
   }
   lsStr+="</tr>";
   lsStr+="<br />";
   lsStr+="<br />";
   if (0<datadependCallerContainsCla.lescycles.length) {
      lsStr+="<div>Detected cycles in the graph</div>";
      lsStr+="<br />";
      lsStr+="<table border='1'>";
      for (var liInd1=0; liInd1<datadependCallerContainsCla.lescycles.length; liInd1++) {
         //console.log("main07 cycle "+liInd1);
         lsStr+="<tr><td>Cycle "+liInd1+"</td><td>Step</td></tr>";
         for (var liInd2=0; liInd2<datadependCallerContainsCla.lescycles[liInd1].uncycle.length; liInd2++) {
            //console.log("main08    etape "+liInd2+"  "+datadependCallerContainsCla.lescycles[liInd1].uncycle[liInd2].etape);
            lsStr+="<tr><td></td><td>"+datadependCallerContainsCla.lescycles[liInd1].uncycle[liInd2].etape+"</td></tr>";
         }
      }
      lsStr+="</table>";
   } else {
      lsStr+="<div>No cycles have been detected in the graph</div>";
      lsStr+="<br />";
   }
   var theDivBloc = document.getElementById("maDivCallerContainsCla");  
   theDivBloc.innerHTML = lsStr;
}
doInitCallerContainsCla();
doDessinerCallerContainsCla();
//]]>
