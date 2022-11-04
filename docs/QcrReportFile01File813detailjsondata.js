console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java 35 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "GridCleaner"
 , "c2" : "net.sourceforge.plantuml.bpm.CleanerMoveBlock"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.bpm.CleanerMoveBlock" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00007"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#7"
 , "c1" : "boolean"
 , "c2" : "clean(Grid)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#15"
 , "c1" : "void"
 , "c2" : "tryGrid(Grid;Line)"
 , "c3" : "11"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#57"
 , "c1" : "void"
 , "c2" : "tryBridge(Line;Col;Col)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "15"
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
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00005"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#5"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00005] The class CleanerMoveBlock contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00007"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#7"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00007] For method clean arguments Grid  grid"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00007"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#7"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00007] The argument grid is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.clean@POLYN151229 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method tryGrid arguments Grid  grid|Line  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument grid is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00018] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00019] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00022] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00022] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00026] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00029] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00037] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00041] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00029] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00037] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00041] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00044] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  'NS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  'NS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN151533 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method tryBridge arguments Line  line|Col  col1|Col  col2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00057] Void method tryBridge is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00057] Void method tryBridge is empty or contains only a return. Interface segregation"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.svg" }

};
console.log('leListeStr 99 main end');
