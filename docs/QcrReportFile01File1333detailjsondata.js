console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/graphic/CoordinateChange.java 6 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.graphic.CoordinateChange"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.graphic.CoordinateChange" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#53"
 , "c1" : "CoordinateChange"
 , "c2" : "create(XPoint2D;XPoint2D)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#57"
 , "c1" : "CoordinateChange"
 , "c2" : "CoordinateChange(double;double;double;double)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#75"
 , "c1" : "XPoint2D"
 , "c2" : "getTrueCoordinate(double;double)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#81"
 , "c1" : "double"
 , "c2" : "getLength()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
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
 , "c4" : "1"
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
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method create arguments XPoint2D  p1|XPoint2D  p2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument p1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument p2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.graphic.CoordinateChange.CoordinateChange@POLYN163423 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method getTrueCoordinate arguments double  a|double  b"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00053] Public method create is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/graphic/CoordinateChange.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
