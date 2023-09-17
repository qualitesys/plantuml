console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/plot/BarFactory.java.html" 
 , "texte" : "File src/jcckit/plot/BarFactory.java 16 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractSymbolFactory"
 , "c2" : ""
 , "c2" : "jcckit.plot.BarFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.plot.BarFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/src/jcckit/plot/BarFactory.java.html#69"
 , "c1" : "BarFactory"
 , "c2" : "BarFactory(ConfigParameters)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/src/jcckit/plot/BarFactory.java.html#83"
 , "c1" : "Symbol"
 , "c2" : "createSymbol(GraphPoint;GraphicAttributes;Hint;Hint)"
 , "c3" : "4"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/src/jcckit/plot/BarFactory.java.html#118"
 , "c1" : "GraphicalElement"
 , "c2" : "createLegendSymbol(GraphPoint;double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/src/jcckit/plot/BarFactory.java.html#127"
 , "c1" : "GraphicalElement"
 , "c2" : "createPlainSymbol(GraphPoint;double;GraphicAttributes)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/jcckit/plot/BarFactory.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method jcckit.plot.BarFactory.BarFactory@POLYN178186 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method jcckit.plot.BarFactory.BarFactory@POLYN178186 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method createSymbol arguments GraphPoint  point|GraphicAttributes  attributes|Hint  hintForNextPoint|Hint  hintFromPreviousCurve"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00083] For method createSymbol list of called methods Object monObjet|double position_getXN179417|double position_getYN179494|double point_getXN179571|double point_getYN179690"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument point is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method jcckit.plot.BarFactory.createSymbol@POLYN178791 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method jcckit.plot.BarFactory.createSymbol@POLYN178791 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method jcckit.plot.BarFactory.createSymbol@POLYN178791 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method jcckit.plot.BarFactory.createSymbol@POLYN178791 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method jcckit.plot.BarFactory.createSymbol@POLYN178791 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method jcckit.plot.BarFactory.createSymbol@POLYN178791 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method jcckit.plot.BarFactory.createSymbol@POLYN178791 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method createLegendSymbol arguments GraphPoint  centerPosition|double  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method createPlainSymbol arguments GraphPoint  centerPosition|double  size|GraphicAttributes  attributes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/jcckit/plot/BarFactory.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method jcckit.plot.BarFactory.createPlainSymbol@POLYN181687 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/plot/BarFactory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
