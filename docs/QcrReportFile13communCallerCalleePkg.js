
//<![CDATA[
var gbCyclesSeulsCallerCalleePkg = true;
var lesPkgCallerCalleePkg=[];
// HashMap nom -> indice dans le tableau
var lesPkgCallerCalleePkgHashMap=new Map();
var giSTEP = 500;
var giTrancheCallerCalleePkg = 0;
function lfRadioOnClickCallerCalleePkg() {
   const laForme = document.querySelector("input[name='viewconfigCallerCalleePkg']:checked");
   if (null!=laForme) {
      //console.log("lfRadioOnClick radio id :" + laForme.id);
      if (laForme.id=='trancheCallerCalleePkg0') {
	       gbCyclesSeulsCallerCalleePkg = true;
	       giTrancheCallerCalleePkg     = 0
      } else {
	       gbCyclesSeulsCallerCalleePkg = false;
	       const liValue = laForme.value;
         //console.log("lfRadioOnClick radio value :" + liValue);
	       giTrancheCallerCalleePkg     = liValue
      }
      doDessinerCallerCalleePkg();
   }
   return true;
}
function doTraiterCallerCalleePkg(aeVal) {
	//console.log("doTraiterCallerCalleePkg02 resul "+resul);
	   var laVar = { "datas" : { "valeur" : aeVal , "rang" : "0" , "listeappelles" : [] , "listecouleurs" : [] , "listetitle" : [] , "dansuncycle" : "false"} } ;
	   lesPkgCallerCalleePkg.push(laVar);
	   // Stock indice dans le tableau
	   lesPkgCallerCalleePkgHashMap.set(aeVal, lesPkgCallerCalleePkg.length-1);
}
function doAffecterCallerCalleePkg(aeValStart, aeValEnd) {
   const resul1 = lesPkgCallerCalleePkgHashMap.get(aeValStart);
   const resul2 = lesPkgCallerCalleePkgHashMap.get(aeValEnd);
   if (null!=resul1 && null!=resul2) {
      //console.log("main05 resul "+resul1.datas.valeur + " " + resul1.datas.rang);
      //console.log("main06 resul "+resul2.datas.valeur + " " + resul2.datas.rang);
      lesPkgCallerCalleePkg[lesPkgCallerCalleePkg[resul1].datas.rang].datas.listeappelles[lesPkgCallerCalleePkg[resul2].datas.rang] = "X";
      lesPkgCallerCalleePkg[lesPkgCallerCalleePkg[resul1].datas.rang].datas.listetitle   [lesPkgCallerCalleePkg[resul2].datas.rang] = "<a title='"+lesPkgCallerCalleePkg[resul1].datas.valeur+" -> "+lesPkgCallerCalleePkg[resul2].datas.valeur+"'>";
   }
}
function doInitCallerCalleePkg() {
   console.log("doInitCallerCalleePkg01 Debut");
   // Init avec les packages
   var datadepend = datadependCallerCalleePkg;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitCallerCalleePkg02 "+liInd);
      var leVal1 = datadepend.lesnoeuds[liInd].noeud; doTraiterCallerCalleePkg(leVal1);
   }
   console.log("doInitCallerCalleePkg04");
   lesPkgCallerCalleePkg.sort((a, b) => a.datas.valeur > b.datas.valeur);
   console.log("doInitCallerCalleePkg05");
   //Modif D.C. 2023 02 18 en comm
   for (var liInd=0; liInd<lesPkgCallerCalleePkg.length; liInd++) {
      lesPkgCallerCalleePkg[liInd].datas.rang = liInd;
   //  for (var liCol=0; liCol<lesPkgCallerCalleePkg.length; liCol++) {
   //     lesPkgCallerCalleePkg[liInd].datas.listeappelles[liCol]="";
   //  }
   }
   //Modif D.C. 2023 02 19 update hashmap
   lesPkgCallerCalleePkgHashMap.clear();
   for (var liInd=0; liInd<lesPkgCallerCalleePkg.length; liInd++) {
      lesPkgCallerCalleePkgHashMap.set(lesPkgCallerCalleePkg[liInd].datas.valeur, liInd);
   }
   console.log("doInitCallerCalleePkg06");
   for (var liInd=0; liInd<datadepend.lesdatas.length; liInd++) {
      var leVal1 = datadepend.lesdatas[liInd].start;
      var leVal2 = datadepend.lesdatas[liInd].end  ;
      doAffecterCallerCalleePkg(leVal1, leVal2);
   }
   console.log("doInitCallerCalleePkg07");
   for (var liCol=0; liCol<lesPkgCallerCalleePkg.length; liCol++) {
      lesPkgCallerCalleePkg[liCol].datas.listecouleurs[liCol] = "skyblue";
   }
   console.log("doInitCallerCalleePkg08");
   for (var liInd1=0; liInd1<datadepend.lescycles.length; liInd1++) {
      console.log("doInitCallerCalleePkg09 cycle "+liInd1+" taille "+datadepend.lescycles[liInd1].uncycle.length);
      //for (var liInd2=0; liInd2<datadepend.lescycles[liInd1].uncycle.length; liInd2++) {
      //   console.log("doInitCallerCalleePkg10    etape "+liInd2+"  "+datadepend.lescycles[liInd1].uncycle[liInd2].etape);
      //}
      var leEtapeZero = datadepend.lescycles[liInd1].uncycle[0].etape;
      var leEtapePrec = leEtapeZero;
      var liTaille    = datadepend.lescycles[liInd1].uncycle.length;
      // Boucle sur un element de plus pour le bouclage
      for (var liInd2=1; liInd2<=liTaille; liInd2++) {
          if (liInd2<liTaille) { var leEtapeCour = datadepend.lescycles[liInd1].uncycle[liInd2].etape; }
          else                 { var leEtapeCour = leEtapeZero; }
         //console.log("doInitCallerCalleePkg11    entre "+leEtapePrec+" et "+leEtapeCour);
         const resul1 = lesPkgCallerCalleePkgHashMap.get(leEtapePrec);
         const resul2 = lesPkgCallerCalleePkgHashMap.get(leEtapeCour);
         //console.log("doInitCallerCalleePkg11a   entre "+leEtapePrec+" et "+leEtapeCour+" resul1 "+resul1+" resul2 "+resul2);
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
               if (lesPkgCallerCalleePkg[liCol]        .datas.listecouleurs[rangEtapeCour]===undefined) lesPkgCallerCalleePkg[liCol]        .datas.listecouleurs[rangEtapeCour] = "red";
               if (lesPkgCallerCalleePkg[rangEtapePrec].datas.listecouleurs[liCol]        ===undefined) lesPkgCallerCalleePkg[rangEtapePrec].datas.listecouleurs[liCol]         = "red";
            }
            // resul1 = ligne
            // resul2 = colonne
            lesPkgCallerCalleePkg[rangEtapePrec].datas.listecouleurs[rangEtapeCour] = "lime"; // vert clair
            if (undefined===lesPkgCallerCalleePkg[rangEtapePrec].datas.listeappelles[rangEtapeCour]) lesPkgCallerCalleePkg[rangEtapePrec].datas.listeappelles[rangEtapeCour] ="";
            lesPkgCallerCalleePkg[rangEtapePrec].datas.listeappelles[rangEtapeCour] += "\nC"+liInd1+":"+liInd2+"/"+liTaille;
            lesPkgCallerCalleePkg[rangEtapePrec].datas.dansuncycle                  = "true";
            lesPkgCallerCalleePkg[rangEtapePrec].datas.listetitle   [rangEtapeCour] = "<a title='Cycle "+liInd1+" Etape "+liInd2+"/"+liTaille+": \n"+leEtapePrec+" -> "+leEtapeCour+"'>";
            leEtapePrec = leEtapeCour;
         }
      }
   }
   console.log("doInitCallerCalleePkg99 fin");
}
function doDessinerCallerCalleePkg() {
   var lsStr = "";
   lsStr+="<table border='1'>";
   lsStr+="<tr><td></td><td>Function calls with view Package</td>";
   for (var liCol=0; liCol<lesPkgCallerCalleePkg.length; liCol++) {
      if ( (gbCyclesSeulsCallerCalleePkg==false && giSTEP*(giTrancheCallerCalleePkg-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleePkg) || (gbCyclesSeulsCallerCalleePkg==true && lesPkgCallerCalleePkg[liCol].datas.dansuncycle=="true")) {
         lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCallerCalleePkg[liCol].datas.valeur+"'>"+liCol+"</a></td>";
      }
   }
   lsStr+="</tr>";
   for (var liInd=0; liInd<lesPkgCallerCalleePkg.length; liInd++) {
      if ( (gbCyclesSeulsCallerCalleePkg==false && giSTEP*(giTrancheCallerCalleePkg-1)<=liInd && liInd<giSTEP*giTrancheCallerCalleePkg)  || (gbCyclesSeulsCallerCalleePkg==true && lesPkgCallerCalleePkg[liInd].datas.dansuncycle=="true")) {
         lsStr+="<tr><td align='right'>"+liInd+"</td><td>"+lesPkgCallerCalleePkg[liInd].datas.valeur+"</td>";
         //lesPkgCallerCalleePkg[liInd].datas.rang = liInd;
         for (var liCol=0; liCol<lesPkgCallerCalleePkg.length; liCol++) {
            if ( (gbCyclesSeulsCallerCalleePkg==false && giSTEP*(giTrancheCallerCalleePkg-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleePkg)  || (gbCyclesSeulsCallerCalleePkg==true && lesPkgCallerCalleePkg[liCol].datas.dansuncycle=="true")) {
               var lsBg = " align='center'";
               var couleur = lesPkgCallerCalleePkg[liInd].datas.listecouleurs[liCol];
               if (couleur!='' && couleur!==undefined) { lsBg += " style='background-color:"+couleur+"'"; }
               var title = lesPkgCallerCalleePkg[liInd].datas.listetitle[liCol];
               if (title===undefined) title="";
               var appelles = lesPkgCallerCalleePkg[liInd].datas.listeappelles[liCol];
               if (appelles===undefined) appelles="";
               lsStr+="<td"+lsBg+">"+title+appelles+"</td>";
            }
         }
      }
      lsStr+="</tr>";
   }
   // on copie la ligne du debut a la fin 
   lsStr+="<tr><td></td><td></td>";
   for (var liCol=0; liCol<lesPkgCallerCalleePkg.length; liCol++) {
      if ( (gbCyclesSeulsCallerCalleePkg==false && giSTEP*(giTrancheCallerCalleePkg-1)<=liCol && liCol<giSTEP*giTrancheCallerCalleePkg)  || (gbCyclesSeulsCallerCalleePkg==true && lesPkgCallerCalleePkg[liCol].datas.dansuncycle=="true")) {
         lsStr+="<td align='center'><a title='"+liCol+":"+lesPkgCallerCalleePkg[liCol].datas.valeur+"'>"+liCol+"</a></td>";
      }
   }
   lsStr+="</tr>";
   lsStr+="<br />";
   lsStr+="<br />";
   if (0<datadependCallerCalleePkg.lescycles.length) {
      lsStr+="<div>Detected cycles in the graph</div>";
      lsStr+="<br />";
      lsStr+="<table border='1'>";
      for (var liInd1=0; liInd1<datadependCallerCalleePkg.lescycles.length; liInd1++) {
         //console.log("main07 cycle "+liInd1);
         lsStr+="<tr><td>Cycle "+liInd1+"</td><td>Step</td></tr>";
         for (var liInd2=0; liInd2<datadependCallerCalleePkg.lescycles[liInd1].uncycle.length; liInd2++) {
            //console.log("main08    etape "+liInd2+"  "+datadependCallerCalleePkg.lescycles[liInd1].uncycle[liInd2].etape);
            lsStr+="<tr><td></td><td>"+datadependCallerCalleePkg.lescycles[liInd1].uncycle[liInd2].etape+"</td></tr>";
         }
      }
      lsStr+="</table>";
   } else {
      lsStr+="<div>No cycles have been detected in the graph</div>";
      lsStr+="<br />";
   }
   //console.log("main02 lsStr "+lsStr);
   var theDivBloc = document.getElementById("maDivCallerCalleePkg");  
   theDivBloc.innerHTML = lsStr;
}
doInitCallerCalleePkg();
doDessinerCallerCalleePkg();
//]]>
