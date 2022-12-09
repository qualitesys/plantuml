console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/data/DataContainer.java.html" 
 , "texte" : "File src/jcckit/data/DataContainer.java 23 rule violations " 
 , "fic2"  : "./qc/src/jcckit/data/DataContainer.java.xml" 
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
 , "c5" : "00019"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#19"
 , "c1" : "void"
 , "c2" : "addDataListener(DataListener)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#26"
 , "c1" : "void"
 , "c2" : "removeDataListener(DataListener)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#30"
 , "c1" : "void"
 , "c2" : "notifyListeners(DataEvent)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#44"
 , "c1" : "int"
 , "c2" : "getNumberOfElements()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#49"
 , "c1" : "DataElement"
 , "c2" : "getElement(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#54"
 , "c1" : "int"
 , "c2" : "getIndexOf(DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#59"
 , "c1" : "void"
 , "c2" : "addElement(DataElement)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#70"
 , "c1" : "void"
 , "c2" : "insertElementAt(int;DataElement)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#81"
 , "c1" : "void"
 , "c2" : "removeElementAt(int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#89"
 , "c1" : "void"
 , "c2" : "replaceElementAt(int;DataElement)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#101"
 , "c1" : "void"
 , "c2" : "throwException(String;DataElement)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/src/jcckit/data/DataContainer.java.html#107"
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
   {"ligne" : "./qc/src/jcckit/data/DataContainer.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/data/DataContainer.java.svg" }

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
 , "c4" : "2"
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
 , "c1" : "00019"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method addDataListener arguments DataListener  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method removeDataListener arguments DataListener  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method notifyListeners arguments DataEvent  event"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00032] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method jcckit.data.DataContainer.notifyListeners@POLYN173161 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method jcckit.data.DataContainer.notifyListeners@POLYN173161 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method getElement arguments int  index"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method getIndexOf arguments DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method addElement arguments DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method insertElementAt arguments int  index|DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#70"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00070] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method removeElementAt arguments int  index"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method jcckit.data.DataContainer.removeElementAt@POLYN176348 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method replaceElementAt arguments int  index|DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method jcckit.data.DataContainer.replaceElementAt@POLYN177162 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method throwException arguments String  operation|DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method isValid arguments DataElement  element"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for jcckit.data.DataContainer.notifyListeners@POLYN173161"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for jcckit.data.DataContainer.getElement@POLYN174038"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00031] In the recursive method jcckit.data.DataContainer.notifyListeners@POLYN173161 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/jcckit/data/DataContainer.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00037] In the recursive method jcckit.data.DataContainer.notifyListeners@POLYN173161 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/data/DataContainer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
