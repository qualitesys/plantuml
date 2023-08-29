console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java 13 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.cucadiagram.SquareMaker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.cucadiagram.SquareMaker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#42"
 , "c1" : "void"
 , "c2" : "putInSquare(List&lt;O&gt;;SquareLinker&lt;O&gt;)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#60"
 , "c1" : "int"
 , "c2" : "computeBranch(int)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#69"
 , "c1" : "int"
 , "c2" : "getBottomLeft(int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
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
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method putInSquare arguments List&lt;O &gt;  data|SquareLinker&lt;O &gt;  linker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument linker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00049] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.putInSquare@POLYN161546 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.putInSquare@POLYN161546 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.putInSquare@POLYN161546 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method computeBranch arguments int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.computeBranch@POLYN162784 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method getBottomLeft arguments int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.getBottomLeft@POLYN163230 the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
