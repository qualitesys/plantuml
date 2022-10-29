console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/real/RealMiddle2.java 10 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RealMoveable"
 , "c2" : "net.sourceforge.plantuml.real.RealMiddle2"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.real.RealMiddle2" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00009"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#9"
 , "c1" : "RealMiddle2"
 , "c2" : "RealMiddle2(RealMoveable;RealMoveable)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#17"
 , "c1" : "double"
 , "c2" : "getCurrentValueInternal()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#25"
 , "c1" : "Real"
 , "c2" : "addAtLeast(double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#29"
 , "c1" : "void"
 , "c2" : "ensureBiggerThan(Real)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#34"
 , "c1" : "void"
 , "c2" : "move(double)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.svg" }

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
 , "c1" : "00009"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#9"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00009] The argument p1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#9"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00009] The argument p2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00010"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00010] In method net.sourceforge.plantuml.real.RealMiddle2.RealMiddle2@POLYN148062 the MagicNumber/String  'middle' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method net.sourceforge.plantuml.real.RealMiddle2.getCurrentValueInternal@POLYN148495 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method addAtLeast arguments double  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method ensureBiggerThan arguments Real  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.real.RealMiddle2.ensureBiggerThan@POLYN148808 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method move arguments double  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.real.RealMiddle2.move@POLYN149045 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMiddle2.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method net.sourceforge.plantuml.real.RealMiddle2.move@POLYN149045 the MagicNumber/String  2 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
