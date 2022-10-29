'use strict';

console.log('main start js des instructions');

function traiter () {

   var lsStr ='';

   var liCompteur = 0;
   if (typeof(maDataBlocs)!='undefined'&& typeof(maDataBlocs.data00)!='undefined') {

      lsStr+='<table border="1" class="bodyTable"><tr class="a"><th>Ancestor</th><th>Children</th></tr>';

      for (var liInd=0; liInd<maDataBlocs.data00.length; liInd++) {

         var monBloc = maDataBlocs.data00[liInd];

         lsStr+='<tr class="b"><td>'+monBloc.ligne.classe+'</td><td></td></tr>';

         liCompteur = 0;

         for (var liInd2=0; liInd2<monBloc.ligne.children.length; liInd2++) {

            if (0==(liCompteur%2)) lsStr+='<tr class="b">';

            if (1==(liCompteur%2)) lsStr+='<tr class="a">';

            lsStr+='<td></td><td>'+monBloc.ligne.children[liInd2].child+'</td></tr>';

            liCompteur++;

         }

      }

      lsStr+='</table>';

      var theDivBloc00 = document.getElementById("theDivBloc00");  

      theDivBloc00.innerHTML = lsStr;

   } else {

   }

}

function chargerGraphe(){

var monObj = JSON.parse(mavar);



// On cherche tous les namespaces

var maListe = [];

for (var i =0; i<monObj.monTableau.length; i++) {

  var laRoutine = "root";

  // On cherche si existe deja

  var monNameSpace = monObj.monTableau[i].namespace;

  var lsCh;

   lsCh = monNameSpace;

  var lsChEnfant       = monObj.monTableau[i].namespaceenfant;

  var lsChClasse       = monObj.monTableau[i].classe;

  var lsChnbMethodes   = monObj.monTableau[i].nbMethodes;

  var lsChnbComplexite = monObj.monTableau[i].nbComplexite;

   if (undefined!=lsChClasse) {

      creerClasse(lsCh, lsChClasse, lsChnbMethodes, lsChnbComplexite);

   }

}//fin for

}// fin chargerGraphe

function creerNameSpaceEnfant(leNameSpace, lsCh, lsChEnfant) {

  var laRoutine = "creerNameSpaceEnfant";

   // On cherche si l'id n existe pas

   var leId  = lsCh+"."+lsChEnfant;

   var leId2 = "tr."+leId;

   if (undefined==document.getElementById(leId)) {

      var dTable    = document.createElement('table');

      var dTBody    = document.createElement('tbody');

      var dTr       = document.createElement('tr');

      var dTd       = document.createElement('td');



      var dTr3      = document.createElement('tr');

      var dTd3      = document.createElement('td');



      var dTable2   = document.createElement('table');

      var dTBody2   = document.createElement('tbody');

      var dTr2      = document.createElement('tr');

      

      dTr2.id       = leId2;

      

      dTBody2.appendChild(dTr2);

      dTable2.border="1";

      dTable2.appendChild(dTBody2);

      

      dTd.id        = leId;

      dTd.className = "csspackage";

      dTd.innerHTML = leId.replace("qcr.","")+" (start)";

      dTd.appendChild(dTable2);

      dTr.appendChild(dTd);

      dTBody.appendChild(dTr);

      

      dTd3.id       = "";

      dTd3.className = "csspackage";

      dTd3.innerHTML = leId.replace("qcr.","")+" (end)";

      dTr3.appendChild(dTd3);

      dTBody.appendChild(dTr3);

      

      dTable.border="1";

      dTable.appendChild(dTBody);

      

      leNameSpace.appendChild(dTable);

   } else {

   }

   

}

function creerClasse(lsCh, lsChClasse, lsChnbMethodes, lsChnbComplexite) {

   var laRoutine = "creerClasse";

   

   // on cree les namespace

   var ltTab = lsCh.split(".");

   var lsCh = "qcr";

   for (var lsStr in ltTab) {

      var lsStrLocale = ltTab[lsStr];

      var lsChPrec    = lsCh;

      var leNameSpace = document.getElementById(lsChPrec);

      creerNameSpaceEnfant(leNameSpace, lsChPrec, lsStrLocale);

      lsCh        += "."+lsStrLocale;

   }

   

   // On cherche si l'id n existe pas

   var leId   = lsCh+"."+lsChClasse;

   var leId2  = "tr."+lsCh;

   var leHook  = document.getElementById(leId);

   var leHook2 = document.getElementById(leId2);

   if (undefined==leHook2) {

   } else {

      if (undefined==leHook) {

         var dTd       = document.createElement('td');

         var dTable    = document.createElement('table');

         var dTBody    = document.createElement('tbody');

         var dTr       = document.createElement('tr');

         var dTd1      = document.createElement('td');

         var dTd2      = document.createElement('td');

         

                       dTd2.className = "csscompl";

         dTd2.innerHTML    = lsChnbComplexite+" c";

                       dTd1.className = "cssmeth";

         dTd1.innerHTML    = lsChnbMethodes+" m";

         dTr.appendChild(dTd1);

         dTr.appendChild(dTd2);

         

         dTBody.appendChild(dTr);

         

         dTable.border     = "1";

         dTable.appendChild(dTBody);

         

         dTd.id               = leId;

         dTd.className        = "cssclasse";

         dTd.innerHTML        = lsChClasse;

         dTd.appendChild(dTable);

         

         leHook2.appendChild(dTd);

         

      } else {

      }

   }

}



