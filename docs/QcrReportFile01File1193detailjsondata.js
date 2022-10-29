console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java 12 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "PSystemBasicFactory<PSystemDot>"
 , "c2" : "net.sourceforge.plantuml.directdot.PSystemDotFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.directdot.PSystemDotFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#12"
 , "c1" : "PSystemDotFactory"
 , "c2" : "PSystemDotFactory(DiagramType)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#17"
 , "c1" : "PSystemDot"
 , "c2" : "initDiagram(UmlSource;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#23"
 , "c1" : "PSystemDot"
 , "c2" : "executeLine(UmlSource;PSystemDot;String)"
 , "c3" : "3"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.svg" }

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
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00017] For method initDiagram arguments UmlSource  source|String  startLine"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.initDiagram@POLYN148876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.initDiagram@POLYN148876 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method executeLine arguments UmlSource  source|PSystemDot  system|String  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.executeLine@POLYN149081 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.executeLine@POLYN149081 the MagicNumber/String  '(strict\\s+)?(di)?graph\\s+\'?[-\\w]+\'?\\s*\\{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.executeLine@POLYN149081 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.executeLine@POLYN149081 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.executeLine@POLYN149081 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.executeLine@POLYN149081 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/directdot/PSystemDotFactory.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method net.sourceforge.plantuml.directdot.PSystemDotFactory.executeLine@POLYN149081 the MagicNumber/String  '\n' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
