console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/tim/EaterLog.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/tim/EaterLog.java 4 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/tim/EaterLog.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Eater"
 , "c2" : "net.sourceforge.plantuml.tim.EaterLog"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.tim.EaterLog" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00009"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/EaterLog.java.html#9"
 , "c1" : "EaterLog"
 , "c2" : "EaterLog(StringLocated)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/EaterLog.java.html#14"
 , "c1" : "void"
 , "c2" : "analyze(TContext;TMemory)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/tim/EaterLog.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/tim/EaterLog.java.svg" }

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
 , "c4" : "2"
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
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/EaterLog.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method analyze arguments TContext  context|TMemory  memory"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/EaterLog.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/EaterLog.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.tim.EaterLog.analyze@POLYN146706 the MagicNumber/String  '!log' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/EaterLog.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.tim.EaterLog.analyze@POLYN146706 the MagicNumber/String  '[Log] ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
