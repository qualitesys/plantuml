console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/graphic/GraphicalComposite.java.html" 
 , "texte" : "File src/jcckit/graphic/GraphicalComposite.java 13 rule violations " 
 , "fic2"  : "./qc/src/jcckit/graphic/GraphicalComposite.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "GraphicalElement"
 , "c2" : "jcckit.graphic.GraphicalComposite"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.graphic.GraphicalComposite" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/src/jcckit/graphic/GraphicalComposite.java.html#12"
 , "c1" : "GraphicalComposite"
 , "c2" : "GraphicalComposite(ClippingShape)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/src/jcckit/graphic/GraphicalComposite.java.html#17"
 , "c1" : "ClippingShape"
 , "c2" : "getClippingShape()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/jcckit/graphic/GraphicalComposite.java.html#22"
 , "c1" : "void"
 , "c2" : "addElement(GraphicalElement)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/src/jcckit/graphic/GraphicalComposite.java.html#31"
 , "c1" : "void"
 , "c2" : "removeAllElements()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/src/jcckit/graphic/GraphicalComposite.java.html#36"
 , "c1" : "void"
 , "c2" : "replaceElementAt(int;GraphicalElement)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/src/jcckit/graphic/GraphicalComposite.java.html#44"
 , "c1" : "void"
 , "c2" : "throwNullPointerException()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/jcckit/graphic/GraphicalComposite.java.html#50"
 , "c1" : "void"
 , "c2" : "renderWith(Renderer)"
 , "c3" : "4"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/graphic/GraphicalComposite.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/graphic/GraphicalComposite.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c1" : "00007"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00007] The class GraphicalComposite contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method addElement arguments GraphicalElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method jcckit.graphic.GraphicalComposite.addElement@POLYN154280 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method replaceElementAt arguments int  index|GraphicalElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method jcckit.graphic.GraphicalComposite.replaceElementAt@POLYN154861 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method jcckit.graphic.GraphicalComposite.throwNullPointerException@POLYN155181 the MagicNumber/String  'A null as an GraphicalElement is not allowed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method renderWith arguments Renderer  renderer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00055] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method jcckit.graphic.GraphicalComposite.renderWith@POLYN155519 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method jcckit.graphic.GraphicalComposite.renderWith@POLYN155519 the MagicNumber/String  ' does not implements GraphicalCompositeRenderer.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for jcckit.graphic.GraphicalComposite.addElement@POLYN154280"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for jcckit.graphic.GraphicalComposite.removeAllElements@POLYN154553"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/jcckit/graphic/GraphicalComposite.java.html#23"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00023] In the recursive method jcckit.graphic.GraphicalComposite.addElement@POLYN154280 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/graphic/GraphicalComposite.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
