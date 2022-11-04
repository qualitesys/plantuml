console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/command/PSystemBasicFactory.java 18 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "PSystemAbstractFactory"
 , "c2" : "net.sourceforge.plantuml.command.PSystemBasicFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.command.PSystemBasicFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#20"
 , "c1" : "PSystemBasicFactory"
 , "c2" : "PSystemBasicFactory(DiagramType)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#25"
 , "c1" : "PSystemBasicFactory"
 , "c2" : "PSystemBasicFactory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#29"
 , "c1" : "P"
 , "c2" : "executeLine(UmlSource;P;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#31"
 , "c1" : "P"
 , "c2" : "initDiagram(UmlSource;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#33"
 , "c1" : "boolean"
 , "c2" : "isEmptyLine(StringLocated)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#38"
 , "c1" : "Diagram"
 , "c2" : "createSystem(UmlSource;Map<String,String>)"
 , "c3" : "6"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method executeLine arguments UmlSource  source|P  system|String  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method initDiagram arguments UmlSource  source|String  startLine"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method isEmptyLine arguments StringLocated  result"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument result is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.command.PSystemBasicFactory.isEmptyLine@POLYN156054 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method createSystem arguments UmlSource  source|Map&lt;String ,String &gt;  skinParam"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00045] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  'Syntax Error?' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.command.PSystemBasicFactory.createSystem@POLYN156265 the MagicNumber/String  null should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/command/PSystemBasicFactory.java.svg" }

};
console.log('leListeStr 99 main end');
