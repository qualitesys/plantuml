console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/api/MagicArray.java 15 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.api.MagicArray"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.api.MagicArray" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#13"
 , "c1" : "MagicArray"
 , "c2" : "MagicArray(int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#18"
 , "c1" : "void"
 , "c2" : "incKey(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#22"
 , "c1" : "void"
 , "c2" : "incKey(long;int)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#39"
 , "c1" : "void"
 , "c2" : "setValue(long;int)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#48"
 , "c1" : "long"
 , "c2" : "getSum()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#52"
 , "c1" : "long"
 , "c2" : "getMaxSum()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#56"
 , "c1" : "long"
 , "c2" : "getSumSlow()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00004"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class MagicArray contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#18"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00018] Lock statement on synchronized method incKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method incKey arguments long  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.api.MagicArray.incKey@POLYN151284 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#22"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00022] Lock statement on synchronized method incKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method incKey arguments long  key|int  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method net.sourceforge.plantuml.api.MagicArray.incKey@POLYN151439 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.api.MagicArray.incKey@POLYN151439 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.api.MagicArray.incKey@POLYN151439 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method net.sourceforge.plantuml.api.MagicArray.incKey@POLYN151439 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method setValue arguments long  key|int  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#48"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00048] Lock statement on synchronized method getSum"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#52"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00052] Lock statement on synchronized method getMaxSum"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.api.MagicArray.getSumSlow@POLYN153013 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.html#18"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00018] Public method incKey is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/api/MagicArray.java.svg" }

};
console.log('leListeStr 99 main end');
