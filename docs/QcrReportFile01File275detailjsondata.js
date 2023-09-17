console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/data/DataContainer.java.html" 
 , "texte" : "File src/jcckit/data/DataContainer.java 26 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "jcckit.data.DataContainer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.data.DataContainer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#55"
 , "c1" : "void"
 , "c2" : "addDataListener(DataListener)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#62"
 , "c1" : "void"
 , "c2" : "removeDataListener(DataListener)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#66"
 , "c1" : "void"
 , "c2" : "notifyListeners(DataEvent)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#80"
 , "c1" : "int"
 , "c2" : "getNumberOfElements()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#85"
 , "c1" : "DataElement"
 , "c2" : "getElement(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#94"
 , "c1" : "int"
 , "c2" : "getIndexOf(DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#105"
 , "c1" : "void"
 , "c2" : "addElement(DataElement)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#125"
 , "c1" : "void"
 , "c2" : "insertElementAt(int;DataElement)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#142"
 , "c1" : "void"
 , "c2" : "removeElementAt(int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00159"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#159"
 , "c1" : "void"
 , "c2" : "replaceElementAt(int;DataElement)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00171"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#171"
 , "c1" : "void"
 , "c2" : "throwException(String;DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00181"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#181"
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
   {

 "ligneplantuml" : "./qc/src/jcckit/data/DataContainer.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method addDataListener arguments DataListener  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method removeDataListener arguments DataListener  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method notifyListeners arguments DataEvent  event"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00068] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method jcckit.data.DataContainer.notifyListeners@POLYN185317 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method jcckit.data.DataContainer.notifyListeners@POLYN185317 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method getElement arguments int  index"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method getIndexOf arguments DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method addElement arguments DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method insertElementAt arguments int  index|DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method removeElementAt arguments int  index"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method jcckit.data.DataContainer.removeElementAt@POLYN188506 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method replaceElementAt arguments int  index|DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method jcckit.data.DataContainer.replaceElementAt@POLYN189322 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method throwException arguments String  operation|DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#181"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00181] For method isValid arguments DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for jcckit.data.DataContainer.removeElementAt@POLYN188506"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for jcckit.data.DataContainer.notifyListeners@POLYN185317"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for jcckit.data.DataContainer.addElement@POLYN186847"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for jcckit.data.DataContainer.getElement@POLYN186196"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00144] In the recursive method jcckit.data.DataContainer.removeElementAt@POLYN188506 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method jcckit.data.DataContainer.notifyListeners@POLYN185317 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method jcckit.data.DataContainer.notifyListeners@POLYN185317 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/data/DataContainer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
