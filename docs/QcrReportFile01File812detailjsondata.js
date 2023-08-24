console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java 34 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "GridCleaner"
 , "c2" : "net.sourceforge.plantuml.bpm.CleanerMoveBlock"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.bpm.CleanerMoveBlock" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#41"
 , "c1" : "boolean"
 , "c2" : "clean(Grid)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#49"
 , "c1" : "void"
 , "c2" : "tryGrid(Grid;Line)"
 , "c3" : "11"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#91"
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
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.svg" }

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
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method clean arguments Grid  grid"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument grid is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.clean@POLYN161689 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method tryGrid arguments Grid  grid|Line  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument grid is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00053] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00056] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00056] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00060] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  'NS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  'NS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.bpm.CleanerMoveBlock.tryGrid@POLYN161993 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method tryBridge arguments Line  line|Col  col1|Col  col2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00091] Void method tryBridge is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00091] Void method tryBridge is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/bpm/CleanerMoveBlock.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
