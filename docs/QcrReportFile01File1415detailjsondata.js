console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/graphic/USymbolRectangle.java 23 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "USymbol"
 , "c2" : "net.sourceforge.plantuml.graphic.USymbolRectangle"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.graphic.USymbolRectangle" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#16"
 , "c1" : "USymbolRectangle"
 , "c2" : "USymbolRectangle(SName)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#21"
 , "c1" : "SName"
 , "c2" : "getSName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#25"
 , "c1" : "void"
 , "c2" : "drawRect(UGraphic;double;double;double;double;double)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#33"
 , "c1" : "Margin"
 , "c2" : "getMargin()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#38"
 , "c1" : "TextBlock"
 , "c2" : "asSmall(TextBlock;TextBlock;TextBlock;SymbolContext;HorizontalAlignment)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#62"
 , "c1" : "TextBlock"
 , "c2" : "asBig(TextBlock;HorizontalAlignment;TextBlock;double;double;SymbolContext;HorizontalAlignment)"
 , "c3" : "7"
 , "c4" : "19"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method drawRect arguments UGraphic  ug|double  width|double  height|double  shadowing|double  roundCorner|double  diagonalCorner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method net.sourceforge.plantuml.graphic.USymbolRectangle.drawRect@POLYN162936 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.graphic.USymbolRectangle.getMargin@POLYN163600 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.graphic.USymbolRectangle.getMargin@POLYN163600 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.graphic.USymbolRectangle.getMargin@POLYN163600 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.graphic.USymbolRectangle.getMargin@POLYN163600 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method asSmall arguments TextBlock  name|TextBlock  label|TextBlock  stereotype|SymbolContext  symbolContext|HorizontalAlignment  stereoAlignment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument label is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument stereotype is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument symbolContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method asBig arguments TextBlock  title|HorizontalAlignment  labelAlignment|TextBlock  stereotype|double  width|double  height|SymbolContext  symbolContext|HorizontalAlignment  stereoAlignment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument title is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument stereotype is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument symbolContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.graphic.USymbolRectangle.asBig@POLYN165573 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.graphic.USymbolRectangle.asBig@POLYN165573 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.graphic.USymbolRectangle.asBig@POLYN165573 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.graphic.USymbolRectangle.asBig@POLYN165573 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.graphic.USymbolRectangle.asBig@POLYN165573 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.graphic.USymbolRectangle.asBig@POLYN165573 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.graphic.USymbolRectangle.asBig@POLYN165573 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.graphic.USymbolRectangle.asBig@POLYN165573 the MagicNumber/String  2 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/graphic/USymbolRectangle.java.svg" }

};
console.log('leListeStr 99 main end');
