console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/wbs/WBSTextBlock.java 11 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractTextBlock"
 , "c2" : "net.sourceforge.plantuml.wbs.WBSTextBlock"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.wbs.WBSTextBlock" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#27"
 , "c1" : "WBSTextBlock"
 , "c2" : "WBSTextBlock(ISkinParam;StyleBuilder;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#33"
 , "c1" : "void"
 , "c2" : "drawLine(UGraphic;XPoint2D;XPoint2D)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#38"
 , "c1" : "Style"
 , "c2" : "getStyleUsed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#42"
 , "c1" : "void"
 , "c2" : "drawLine(UGraphic;double;double;double;double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#46"
 , "c1" : "StyleSignatureBasic"
 , "c2" : "getDefaultStyleDefinitionArrow()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#50"
 , "c1" : "TextBlock"
 , "c2" : "buildMain(WElement)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
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
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method drawLine arguments UGraphic  ug|XPoint2D  p1|XPoint2D  p2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method drawLine arguments UGraphic  ug|double  x1|double  y1|double  x2|double  y2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method buildMain arguments WElement  idea"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument idea is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.wbs.WBSTextBlock.buildMain@POLYN159532 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.wbs.WBSTextBlock.buildMain@POLYN159532 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.wbs.WBSTextBlock.buildMain@POLYN159532 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.wbs.WBSTextBlock.buildMain@POLYN159532 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.wbs.WBSTextBlock.buildMain@POLYN159532 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.wbs.WBSTextBlock.buildMain@POLYN159532 the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/wbs/WBSTextBlock.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
