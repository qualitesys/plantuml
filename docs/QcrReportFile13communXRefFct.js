
//<![CDATA[
var lesPkgXRefFct=[];
// HashMap nom -> indice dans le tableau
var lesPkgXRefFctHashMap=new Map();
function doInitXRefFct() {
   console.log("doInitXRefFct01 start");
   // Init avec les packages
   var datadepend = datadependCallerCalleeFct;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitXRefFct02 "+liInd);
      var leVal1 = datadepend.lesdatas[liInd];
      // On cherche valeur du rang dans lesPkg dans la HashMap
      const resul1 = lesPkgXRefFctHashMap.get(leVal1.start);
      const resul2 = lesPkgXRefFctHashMap.get(leVal1.end);
      if (null==resul1) {
         lesPkgXRefFct.push({'nom' : leVal1.start, 'methodesappellantes' : [], 'methodesappellees' : [leVal1.end]});
         lesPkgXRefFctHashMap.set(leVal1.start, lesPkgXRefFct.length-1);
      } else {
         lesPkgXRefFct[resul1].methodesappellees.push(leVal1.end);
      }
      if (null==resul2) {
         lesPkgXRefFct.push({'nom' : leVal1.end, 'methodesappellantes' : [leVal1.start], 'methodesappellees' : []});
         lesPkgXRefFctHashMap.set(leVal1.end, lesPkgXRefFct.length-1);
      } else {
         lesPkgXRefFct[resul2].methodesappellantes.push(leVal1.start);
      }
   }
   lesPkgXRefFct.sort((a, b) => a.nom > b.nom);
   console.log("doInitXRefFct99 end");
}
function doDessinerXRefFct() {
   console.log("doDessinerXRefFct01 start");
   var lsStr = "";
   lsStr+="<table border='1'>";
   lsStr+="<tr><td>Caller functions</td><td>function</td><td>Called functions</td></tr>";
   for (liInd=0; liInd<lesPkgXRefFct.length; liInd++) {
      lsStr+="<tr><td>";
      lesPkgXRefFct[liInd].methodesappellantes.sort();
      for (liInd1=0; liInd1<lesPkgXRefFct[liInd].methodesappellantes.length; liInd1++) {
         lsStr+="<a href='#"+lesPkgXRefFct[liInd].methodesappellantes[liInd1]+"'>"+lesPkgXRefFct[liInd].methodesappellantes[liInd1]+"<a/><br />";
      }
      lsStr+="</td><td><a name='"+lesPkgXRefFct[liInd].nom+"'></a>"+lesPkgXRefFct[liInd].nom+"</td><td>";
      lesPkgXRefFct[liInd].methodesappellees.sort();
      for (liInd1=0; liInd1<lesPkgXRefFct[liInd].methodesappellees.length; liInd1++) {
         lsStr+="<a href='#"+lesPkgXRefFct[liInd].methodesappellees[liInd1]+"'>"+lesPkgXRefFct[liInd].methodesappellees[liInd1]+"<a/><br />";
      }
      lsStr+="</td></tr>";
   }
   lsStr+="</table>";
   var theDivBloc = document.getElementById("maDivXRefFct");  
   theDivBloc.innerHTML = lsStr;
   console.log("doDessinerXRefFct99 end");
}
doInitXRefFct();
doDessinerXRefFct();
//]]>
