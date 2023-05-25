console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/data/DataEvent.java.html" 
 , "texte" : "File src/jcckit/data/DataEvent.java 8 rule violations " 
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
 , "c5" : "00040"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#40"
 , "c1" : "DataEvent"
 , "c2" : "DataEvent(DataContainer;DataEventType;int;DataElement)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#54"
 , "c1" : "DataEvent"
 , "c2" : "createAddEvent(DataContainer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#66"
 , "c1" : "DataEvent"
 , "c2" : "createInsertEvent(DataContainer;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#80"
 , "c1" : "DataEvent"
 , "c2" : "createReplaceEvent(DataContainer;int;DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#94"
 , "c1" : "DataEvent"
 , "c2" : "createRemoveEvent(DataContainer;int;DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#101"
 , "c1" : "DataContainer"
 , "c2" : "getContainer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#112"
 , "c1" : "DataEventType"
 , "c2" : "getType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#117"
 , "c1" : "int"
 , "c2" : "getIndex()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/src/jcckit/data/DataEvent.java.html#125"
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
   {

 "ligneplantuml" : "./qc/src/jcckit/data/DataEvent.java.svg" }

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
 , "c1" : "00054"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method createAddEvent arguments DataContainer  container"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument container is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method jcckit.data.DataEvent.createAddEvent@POLYN166052 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method jcckit.data.DataEvent.createAddEvent@POLYN166052 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method createInsertEvent arguments DataContainer  container|int  index"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method jcckit.data.DataEvent.createInsertEvent@POLYN166525 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method createReplaceEvent arguments DataContainer  container|int  index|DataElement  replacedElement"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/jcckit/data/DataEvent.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method createRemoveEvent arguments DataContainer  container|int  index|DataElement  removedElement"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/data/DataEvent.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
