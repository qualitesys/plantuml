console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java 14 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.xml" 
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
 , "c5" : "00008"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#8"
 , "c1" : "void"
 , "c2" : "putInSquare(List<O>;SquareLinker<O>)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#26"
 , "c1" : "int"
 , "c2" : "computeBranch(int)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#35"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c1" : "00006"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class SquareMaker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#8"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00008] For method putInSquare arguments List&lt;O &gt;  data|SquareLinker&lt;O &gt;  linker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#8"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00008] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#8"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00008] The argument linker is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00013] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00015] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00019] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00010"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00010] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.putInSquare@POLYN149886 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00011] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.putInSquare@POLYN149886 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.putInSquare@POLYN149886 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method computeBranch arguments int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.computeBranch@POLYN151112 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method getBottomLeft arguments int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.cucadiagram.SquareMaker.getBottomLeft@POLYN151554 the MagicNumber/String  1 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/cucadiagram/SquareMaker.java.svg" }

};
console.log('leListeStr 99 main end');
