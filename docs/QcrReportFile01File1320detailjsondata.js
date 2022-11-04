console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/golem/MinMaxGolem.java 6 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.golem.MinMaxGolem"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.golem.MinMaxGolem" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00011"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#11"
 , "c1" : "void"
 , "c2" : "manage(int;int)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#26"
 , "c1" : "void"
 , "c2" : "manage(Position)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#31"
 , "c1" : "int"
 , "c2" : "getMinX()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#35"
 , "c1" : "int"
 , "c2" : "getMinY()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#39"
 , "c1" : "int"
 , "c2" : "getWidth()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#43"
 , "c1" : "int"
 , "c2" : "getHeight()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.svg" }

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
 , "c4" : "2"
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
 , "c1" : "00004"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class MinMaxGolem contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#11"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00011] For method manage arguments int  x|int  y"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method manage arguments Position  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.golem.MinMaxGolem.getWidth@POLYN150094 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.golem.MinMaxGolem.getHeight@POLYN150226 the MagicNumber/String  1 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/golem/MinMaxGolem.java.svg" }

};
console.log('leListeStr 99 main end');
