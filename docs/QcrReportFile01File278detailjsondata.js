console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/data/DataEvent.java.html" 
 , "texte" : "File src/jcckit/data/DataEvent.java 8 rule violations " 
 , "fic2"  : "./qc/src/jcckit/data/DataEvent.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "jcckit.data.DataEvent"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.data.DataEvent" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#12"
 , "c1" : "DataEvent"
 , "c2" : "DataEvent(DataContainer;DataEventType;int;DataElement)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#21"
 , "c1" : "DataEvent"
 , "c2" : "createAddEvent(DataContainer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#27"
 , "c1" : "DataEvent"
 , "c2" : "createInsertEvent(DataContainer;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#34"
 , "c1" : "DataEvent"
 , "c2" : "createReplaceEvent(DataContainer;int;DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#41"
 , "c1" : "DataEvent"
 , "c2" : "createRemoveEvent(DataContainer;int;DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#48"
 , "c1" : "DataContainer"
 , "c2" : "getContainer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#53"
 , "c1" : "DataEventType"
 , "c2" : "getType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#58"
 , "c1" : "int"
 , "c2" : "getIndex()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#63"
 , "c1" : "DataElement"
 , "c2" : "getDeletedElement()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/data/DataEvent.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/data/DataEvent.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method createAddEvent arguments DataContainer  container"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument container is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method jcckit.data.DataEvent.createAddEvent@POLYN158208 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method jcckit.data.DataEvent.createAddEvent@POLYN158208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method createInsertEvent arguments DataContainer  container|int  index"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method jcckit.data.DataEvent.createInsertEvent@POLYN158681 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method createReplaceEvent arguments DataContainer  container|int  index|DataElement  replacedElement"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method createRemoveEvent arguments DataContainer  container|int  index|DataElement  removedElement"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/data/DataEvent.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
