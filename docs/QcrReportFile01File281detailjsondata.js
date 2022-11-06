console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/data/DataPlot.java.html" 
 , "texte" : "File src/jcckit/data/DataPlot.java 4 rule violations " 
 , "fic2"  : "./qc/src/jcckit/data/DataPlot.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "DataContainer"
 , "c2" : "jcckit.data.DataPlot"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.data.DataPlot" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/src/jcckit/data/DataPlot.java.html#15"
 , "c1" : "DataPlot"
 , "c2" : "DataPlot()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/src/jcckit/data/DataPlot.java.html#18"
 , "c1" : "DataPlot"
 , "c2" : "DataPlot(ConfigParameters)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/jcckit/data/DataPlot.java.html#26"
 , "c1" : "DataPlot"
 , "c2" : "create(ConfigParameters)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/src/jcckit/data/DataPlot.java.html#31"
 , "c1" : "boolean"
 , "c2" : "isValid(DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/data/DataPlot.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/data/DataPlot.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/jcckit/data/DataPlot.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/jcckit/data/DataPlot.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method create arguments ConfigParameters  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/jcckit/data/DataPlot.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/jcckit/data/DataPlot.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method isValid arguments DataElement  element"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/data/DataPlot.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
