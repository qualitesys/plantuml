
//<![CDATA[
var lesPkgXRef=[];
// HashMap nom -> indice dans le tableau
var lesPkgXRefHashMap=new Map();
function doInitXRef() {
   console.log("doInitXRef01 Debut");
   // Init avec les packages
   var datadepend = datadependCallerCalleePkg;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitXRef02 "+liInd);
      var leVal1 = datadepend.lesdatas[liInd];
      // On cherche valeur du rang dans lesPkg dans la HashMap
      const resul1 = lesPkgXRefHashMap.get(leVal1.start);
      const resul2 = lesPkgXRefHashMap.get(leVal1.end);
      if (null==resul1) {
         lesPkgXRef.push({'nom' : leVal1.start, 'methodesappellantes' : [], 'methodesappellees' : [leVal1.end]});
         lesPkgXRefHashMap.set(leVal1.start, lesPkgXRef.length-1);
      } else {
         lesPkgXRef[resul1].methodesappellees.push(leVal1.end);
      }
      if (null==resul2) {
         lesPkgXRef.push({'nom' : leVal1.end, 'methodesappellantes' : [leVal1.start], 'methodesappellees' : []});
         lesPkgXRefHashMap.set(leVal1.end, lesPkgXRef.length-1);
      } else {
         lesPkgXRef[resul2].methodesappellantes.push(leVal1.start);
      }
   }
   lesPkgXRef.sort((a, b) => a.nom > b.nom);
   console.log("doInitXRef99 fin");
}
function doDessinerXRef() {
   var lsStr = "";
   lsStr+="<table border='1'>";
   for (liInd=0; liInd<lesPkgXRef.length; liInd++) {
      lsStr+="<tr><td>";
      for (liInd1=0; liInd1<lesPkgXRef[liInd].methodesappellantes.length; liInd1++) {
         lsStr+=lesPkgXRef[liInd].methodesappellantes[liInd1]+"<br />";
      }
      lsStr+="</td><td>");
      for (liInd1=0; liInd1<lesPkgXRef[liInd].methodesappellees.length; liInd1++) {
         lsStr+=lesPkgXRef[liInd].methodesappellees[liInd1]+"<br />";
      }
      lsStr+="</td></tr>";
   }
   lsStr+="</table>";
   var theDivBloc = document.getElementById("maDivXRef");  
   theDivBloc.innerHTML = lsStr;
}
doInitXRef();
doDessinerXRef();
//]]>
