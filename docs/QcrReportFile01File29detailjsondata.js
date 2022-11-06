console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html" 
 , "texte" : "File src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java 9 rule violations " 
 , "fic2"  : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Comparable"
 , "c2" : "ext.plantuml.com.ctreber.acearth.scandot.ScanDot"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "ext.plantuml.com.ctreber.acearth.scandot.ScanDot" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#16"
 , "c1" : "ScanDot"
 , "c2" : "ScanDot(int;int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#23"
 , "c1" : "ScanDot"
 , "c2" : "ScanDot(int;Point2D)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#30"
 , "c1" : "int"
 , "c2" : "compareTo(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#42"
 , "c1" : "int"
 , "c2" : "getType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#47"
 , "c1" : "int"
 , "c2" : "getX()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#52"
 , "c1" : "int"
 , "c2" : "getY()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#57"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.png" 

 , "ligneplantuml" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00006"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class ScanDot contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument pPoint is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method compareTo arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method ext.plantuml.com.ctreber.acearth.scandot.ScanDot.compareTo@POLYN143107 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method ext.plantuml.com.ctreber.acearth.scandot.ScanDot.compareTo@POLYN143107 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method ext.plantuml.com.ctreber.acearth.scandot.ScanDot.compareTo@POLYN143107 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method ext.plantuml.com.ctreber.acearth.scandot.ScanDot.compareTo@POLYN143107 the MagicNumber/String  'Can't compare to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method ext.plantuml.com.ctreber.acearth.scandot.ScanDot.toString@POLYN143915 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method ext.plantuml.com.ctreber.acearth.scandot.ScanDot.toString@POLYN143915 the MagicNumber/String  ': ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/ext/plantuml/com/ctreber/acearth/scandot/ScanDot.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
