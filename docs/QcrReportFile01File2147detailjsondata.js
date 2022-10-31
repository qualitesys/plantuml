console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java 5 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "PSystemSingleLineFactory"
 , "c2" : "net.sourceforge.plantuml.stats.PSystemStatsFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.stats.PSystemStatsFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.html#14"
 , "c1" : "AbstractPSystem"
 , "c2" : "executeLine(UmlSource;String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.svg" }

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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method executeLine arguments UmlSource  source|String  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.stats.PSystemStatsFactory.executeLine@POLYN146970 the MagicNumber/String  '(?i)^stats\\s*$' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method net.sourceforge.plantuml.stats.PSystemStatsFactory.executeLine@POLYN146970 the MagicNumber/String  'Error ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/stats/PSystemStatsFactory.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method net.sourceforge.plantuml.stats.PSystemStatsFactory.executeLine@POLYN146970 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
