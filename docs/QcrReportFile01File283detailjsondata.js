console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/data/DataPoint.java.html" 
 , "texte" : "File src/jcckit/data/DataPoint.java 4 rule violations " 
 , "fic2"  : "./qc/src/jcckit/data/DataPoint.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "PointDataElement"
 , "c2" : "jcckit.data.DataPoint"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.data.DataPoint" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00008"
 , "c5link" : "././qc/src/jcckit/data/DataPoint.java.html#8"
 , "c1" : "DataPoint"
 , "c2" : "DataPoint(double;double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/src/jcckit/data/DataPoint.java.html#13"
 , "c1" : "DataContainer"
 , "c2" : "getContainer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/src/jcckit/data/DataPoint.java.html#18"
 , "c1" : "void"
 , "c2" : "setContainer(DataContainer)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/data/DataPoint.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/data/DataPoint.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/jcckit/data/DataPoint.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method jcckit.data.DataPoint.getContainer@POLYN142697 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/jcckit/data/DataPoint.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method setContainer arguments DataContainer  container"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/jcckit/data/DataPoint.java.html#18"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00018] Void method setContainer is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/jcckit/data/DataPoint.java.html#18"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00018] Void method setContainer is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
