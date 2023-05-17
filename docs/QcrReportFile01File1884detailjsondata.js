console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java 19 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.sequencediagram.AutoNumber"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.sequencediagram.AutoNumber" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#48"
 , "c1" : "void"
 , "c2" : "go(DottedNumber;int;DecimalFormat)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#55"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#59"
 , "c1" : "void"
 , "c2" : "resume(DecimalFormat)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#66"
 , "c1" : "void"
 , "c2" : "resume(int;DecimalFormat)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#74"
 , "c1" : "void"
 , "c2" : "incrementIntermediate()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#78"
 , "c1" : "void"
 , "c2" : "incrementIntermediate(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#82"
 , "c1" : "String"
 , "c2" : "getNextMessageNumber()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#91"
 , "c1" : "String"
 , "c2" : "getCurrentMessageNumber(boolean)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method go arguments DottedNumber  startingNumber|int  increment|DecimalFormat  format"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.go@POLYN155495 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.stop@POLYN155871 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method resume arguments DecimalFormat  format"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.resume@POLYN155983 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.resume@POLYN155983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method resume arguments int  increment|DecimalFormat  format"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.resume@POLYN156257 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.resume@POLYN156257 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method incrementIntermediate arguments int  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.getNextMessageNumber@POLYN156850 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.getNextMessageNumber@POLYN156850 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method getCurrentMessageNumber arguments boolean  formatted"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.getCurrentMessageNumber@POLYN157211 the MagicNumber/String  '&amp;lt;b&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.getCurrentMessageNumber@POLYN157211 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.getCurrentMessageNumber@POLYN157211 the MagicNumber/String  '&amp;lt;/b&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.sequencediagram.AutoNumber.getCurrentMessageNumber@POLYN157211 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00091] Public method getCurrentMessageNumber is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00055] Public method stop is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/sequencediagram/AutoNumber.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
