
//<![CDATA[
var lesPkgXRefPkg=[];
// HashMap nom -> indice dans le tableau
var lesPkgXRefPkgHashMap=new Map();
function doInitXRefPkg() {
   console.log("doInitXRefPkg01 start");
   // Init avec les packages
   var datadepend = datadependCallerCalleePkg;
   var liInd=0;
   for (var liInd=0; liInd<datadepend.lesnoeuds.length; liInd++) {
      if (0==liInd%1000) console.log("doInitXRefPkg02 "+liInd);
      var leVal1 = datadepend.lesdatas[liInd];
      // On cherche valeur du rang dans lesPkg dans la HashMap
      const resul1 = lesPkgXRefPkgHashMap.get(leVal1.start);
      const resul2 = lesPkgXRefPkgHashMap.get(leVal1.end);
      if (null==resul1) {
         lesPkgXRefPkg.push({'nom' : leVal1.start, 'methodesappellantes' : [], 'methodesappellees' : [leVal1.end]});
         lesPkgXRefPkgHashMap.set(leVal1.start, lesPkgXRefPkg.length-1);
      } else {
         lesPkgXRefPkg[resul1].methodesappellees.push(leVal1.end);
      }
      if (null==resul2) {
         lesPkgXRefPkg.push({'nom' : leVal1.end, 'methodesappellantes' : [leVal1.start], 'methodesappellees' : []});
         lesPkgXRefPkgHashMap.set(leVal1.end, lesPkgXRefPkg.length-1);
      } else {
         lesPkgXRefPkg[resul2].methodesappellantes.push(leVal1.start);
      }
   }
   lesPkgXRefPkg.sort((a, b) => a.nom > b.nom);
   console.log("doInitXRefPkg99 end");
}
function doDessinerXRefPkg() {
   console.log("doDessinerXRefPkg01 start");
   var lsStr = "";
   lsStr+="<table border='1'>";
   lsStr+="<tr><td>Caller packages</td><td>package</td><td>Called packages</td></tr>";
   for (liInd=0; liInd<lesPkgXRefPkg.length; liInd++) {
      lsStr+="<tr><td>";
      lesPkgXRefPkg[liInd].methodesappellantes.sort();
      for (liInd1=0; liInd1<lesPkgXRefPkg[liInd].methodesappellantes.length; liInd1++) {
         lsStr+="<a href='#"+lesPkgXRefPkg[liInd].methodesappellantes[liInd1]+"'>"+lesPkgXRefPkg[liInd].methodesappellantes[liInd1]+"<a/><br />";
      }
      lsStr+="</td><td><a name='"+lesPkgXRefPkg[liInd].nom+"'></a>"+lesPkgXRefPkg[liInd].nom+"</td><td>";
      lesPkgXRefPkg[liInd].methodesappellees.sort();
      for (liInd1=0; liInd1<lesPkgXRefPkg[liInd].methodesappellees.length; liInd1++) {
         lsStr+="<a href='#"+lesPkgXRefPkg[liInd].methodesappellees[liInd1]+"'>"+lesPkgXRefPkg[liInd].methodesappellees[liInd1]+"<a/><br />";
      }
      lsStr+="</td></tr>";
   }
   lsStr+="</table>";
   var theDivBloc = document.getElementById("maDivXRefPkg");  
   theDivBloc.innerHTML = lsStr;
   console.log("doDessinerXRefPkg99 end");
}
doInitXRefPkg();
doDessinerXRefPkg();
//]]>
