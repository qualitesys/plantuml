console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/plot/PlotCanvas.java.html" 
 , "texte" : "File src/jcckit/plot/PlotCanvas.java 14 rule violations " 
 , "fic2"  : "./qc/src/jcckit/plot/PlotCanvas.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "PlotListener"
 , "c2" : "jcckit.plot.PlotCanvas"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.plot.PlotCanvas" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/jcckit/plot/PlotCanvas.java.html#20"
 , "c1" : "PlotCanvas"
 , "c2" : "PlotCanvas(ConfigParameters)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/jcckit/plot/PlotCanvas.java.html#30"
 , "c1" : "ClippingRectangle"
 , "c2" : "getPaper()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/jcckit/plot/PlotCanvas.java.html#35"
 , "c1" : "Anchor"
 , "c2" : "getHorizontalAnchor()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/src/jcckit/plot/PlotCanvas.java.html#40"
 , "c1" : "Anchor"
 , "c2" : "getVerticalAnchor()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/src/jcckit/plot/PlotCanvas.java.html#45"
 , "c1" : "Plot"
 , "c2" : "getPlot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/jcckit/plot/PlotCanvas.java.html#50"
 , "c1" : "void"
 , "c2" : "connect(DataPlot)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/src/jcckit/plot/PlotCanvas.java.html#55"
 , "c1" : "void"
 , "c2" : "plotChanged(PlotEvent)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/plot/PlotCanvas.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/plot/PlotCanvas.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00010"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class PlotCanvas contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method jcckit.plot.PlotCanvas.PlotCanvas@POLYN166373 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method jcckit.plot.PlotCanvas.PlotCanvas@POLYN166373 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method jcckit.plot.PlotCanvas.PlotCanvas@POLYN166373 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method jcckit.plot.PlotCanvas.PlotCanvas@POLYN166373 the MagicNumber/String  0.6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method jcckit.plot.PlotCanvas.PlotCanvas@POLYN166373 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method jcckit.plot.PlotCanvas.PlotCanvas@POLYN166373 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method jcckit.plot.PlotCanvas.PlotCanvas@POLYN166373 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method jcckit.plot.PlotCanvas.PlotCanvas@POLYN166373 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method connect arguments DataPlot  dataPlot"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method plotChanged arguments PlotEvent  event"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00055] Void method plotChanged is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/jcckit/plot/PlotCanvas.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00055] Void method plotChanged is empty or contains only a return. Interface segregation"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/jcckit/plot/PlotCanvas.java.svg" }

};
console.log('leListeStr 99 main end');
