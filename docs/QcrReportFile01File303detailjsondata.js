console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/graphic/ShapeAttributes.java.html" 
 , "texte" : "File src/jcckit/graphic/ShapeAttributes.java 7 rule violations " 
 , "fic2"  : "./qc/src/jcckit/graphic/ShapeAttributes.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "LineAttributes"
 , "c2" : "jcckit.graphic.ShapeAttributes"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.graphic.ShapeAttributes" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/jcckit/graphic/ShapeAttributes.java.html#22"
 , "c1" : "ShapeAttributes"
 , "c2" : "ShapeAttributes(ConfigParameters)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/jcckit/graphic/ShapeAttributes.java.html#30"
 , "c1" : "ShapeAttributes"
 , "c2" : "ShapeAttributes(Color;Color;double;double[])"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/src/jcckit/graphic/ShapeAttributes.java.html#38"
 , "c1" : "Color"
 , "c2" : "getFillColor()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/src/jcckit/graphic/ShapeAttributes.java.html#42"
 , "c1" : "Color"
 , "c2" : "getLineColor()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/src/jcckit/graphic/ShapeAttributes.java.html#46"
 , "c1" : "double"
 , "c2" : "getLineThickness()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/jcckit/graphic/ShapeAttributes.java.html#50"
 , "c1" : "double[]"
 , "c2" : "getLinePattern()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/graphic/ShapeAttributes.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/graphic/ShapeAttributes.java.svg" }

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
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/src/jcckit/graphic/ShapeAttributes.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class ShapeAttributes contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/jcckit/graphic/ShapeAttributes.java.html#22"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00022] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/jcckit/graphic/ShapeAttributes.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method jcckit.graphic.ShapeAttributes.ShapeAttributes@POLYN161173 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/jcckit/graphic/ShapeAttributes.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method jcckit.graphic.ShapeAttributes.ShapeAttributes@POLYN161173 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/jcckit/graphic/ShapeAttributes.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method jcckit.graphic.ShapeAttributes.ShapeAttributes@POLYN161173 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/jcckit/graphic/ShapeAttributes.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method jcckit.graphic.ShapeAttributes.ShapeAttributes@POLYN161173 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/jcckit/graphic/ShapeAttributes.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method jcckit.graphic.ShapeAttributes.ShapeAttributes@POLYN161880 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/graphic/ShapeAttributes.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
