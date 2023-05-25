console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Instruction"
 , "c2" : "net.sourceforge.plantuml.activitydiagram3.InstructionSpot"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.activitydiagram3.InstructionSpot" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#62"
 , "c1" : "boolean"
 , "c2" : "containsBreak()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#66"
 , "c1" : "InstructionSpot"
 , "c2" : "InstructionSpot(String;HColor;LinkRendering;Swimlane)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#74"
 , "c1" : "Ftile"
 , "c2" : "createFtile(FtileFactory)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#84"
 , "c1" : "Gtile"
 , "c2" : "createGtile(ISkinParam;StringBounder)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#91"
 , "c1" : "CommandExecutionResult"
 , "c2" : "add(Instruction)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#96"
 , "c1" : "boolean"
 , "c2" : "kill()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#102"
 , "c1" : "LinkRendering"
 , "c2" : "getInLinkRendering()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
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
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.activitydiagram3.InstructionSpot.containsBreak@POLYN162712 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method createFtile arguments FtileFactory  factory"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument factory is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method createGtile arguments ISkinParam  skinParam|StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument skinParam is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.activitydiagram3.InstructionSpot.createGtile@POLYN163799 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.activitydiagram3.InstructionSpot.createGtile@POLYN163799 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method add arguments Instruction  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method net.sourceforge.plantuml.activitydiagram3.InstructionSpot.kill@POLYN164409 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.activitydiagram3.InstructionSpot.kill@POLYN164409 the MagicNumber/String  true should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/InstructionSpot.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
