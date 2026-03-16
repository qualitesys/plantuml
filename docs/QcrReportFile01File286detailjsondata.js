console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/graphic/ClippingRectangle.java.html" 
 , "texte" : "File src/jcckit/graphic/ClippingRectangle.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "ClippingShape"
 , "c2" : "jcckit.graphic.ClippingRectangle"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.graphic.ClippingRectangle" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/jcckit/graphic/ClippingRectangle.java.html#33"
 , "c1" : "ClippingRectangle"
 , "c2" : "ClippingRectangle(double;double;double;double)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/src/jcckit/graphic/ClippingRectangle.java.html#44"
 , "c1" : "boolean"
 , "c2" : "isInside(GraphPoint)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/src/jcckit/graphic/ClippingRectangle.java.html#51"
 , "c1" : "double"
 , "c2" : "getMinX()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/jcckit/graphic/ClippingRectangle.java.html#56"
 , "c1" : "double"
 , "c2" : "getMaxX()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/src/jcckit/graphic/ClippingRectangle.java.html#61"
 , "c1" : "double"
 , "c2" : "getMinY()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/jcckit/graphic/ClippingRectangle.java.html#66"
 , "c1" : "double"
 , "c2" : "getMaxY()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/src/jcckit/graphic/ClippingRectangle.java.html#71"
 , "c1" : "ClippingRectangle"
 , "c2" : "getBoundingBox()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/src/jcckit/graphic/ClippingRectangle.java.html#76"
 , "c1" : "BasicGraphicalElement"
 , "c2" : "getGraphicalElement()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/jcckit/graphic/ClippingRectangle.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
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
 , "c1" : "00044"
 , "c1link" : "./qc/src/jcckit/graphic/ClippingRectangle.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method isInside arguments GraphPoint  point"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/jcckit/graphic/ClippingRectangle.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument point is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/jcckit/graphic/ClippingRectangle.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method jcckit.graphic.ClippingRectangle.getGraphicalElement@POLYN161172 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/jcckit/graphic/ClippingRectangle.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method jcckit.graphic.ClippingRectangle.getGraphicalElement@POLYN161172 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/jcckit/graphic/ClippingRectangle.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method jcckit.graphic.ClippingRectangle.getGraphicalElement@POLYN161172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/jcckit/graphic/ClippingRectangle.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00027] Valued method _minX is empty or contains only a return. Interface segregation for ClippingShape"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/jcckit/graphic/ClippingRectangle.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00027] In the class ClippingRectangle which implements the interface(s) ClippingShape, the method _minX is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedClippingShape"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/graphic/ClippingRectangle.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
