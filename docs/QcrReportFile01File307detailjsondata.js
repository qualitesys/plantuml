console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.html" 
 , "texte" : "File src/jcckit/plot/AbstractSymbolFactory.java 7 rule violations " 
 , "fic2"  : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SymbolFactory"
 , "c2" : "jcckit.plot.AbstractSymbolFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.plot.AbstractSymbolFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/src/jcckit/plot/AbstractSymbolFactory.java.html#19"
 , "c1" : "AbstractSymbolFactory"
 , "c2" : "AbstractSymbolFactory(ConfigParameters)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/jcckit/plot/AbstractSymbolFactory.java.html#26"
 , "c1" : "Symbol"
 , "c2" : "createSymbol(GraphPoint;Hint;Hint)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/src/jcckit/plot/AbstractSymbolFactory.java.html#40"
 , "c1" : "Symbol"
 , "c2" : "createSymbol(GraphPoint;GraphicAttributes;Hint;Hint)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/src/jcckit/plot/AbstractSymbolFactory.java.html#48"
 , "c1" : "GraphicalElement"
 , "c2" : "createLegendSymbol(GraphPoint;double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/jcckit/plot/AbstractSymbolFactory.java.html#54"
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
   {"ligne" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class AbstractSymbolFactory contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.html#19"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00019] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method jcckit.plot.AbstractSymbolFactory.AbstractSymbolFactory@POLYN161508 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method createSymbol arguments GraphPoint  point|Hint  hintFromPreviousPoint|Hint  hintFromPreviousCurve"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method createSymbol arguments GraphPoint  point|GraphicAttributes  attributes|Hint  hintForNextPoint|Hint  hintFromPreviousCurve"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method createLegendSymbol arguments GraphPoint  centerPosition|double  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method createPlainSymbol arguments GraphPoint  centerPosition|double  size|GraphicAttributes  attributes"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/plot/AbstractSymbolFactory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
