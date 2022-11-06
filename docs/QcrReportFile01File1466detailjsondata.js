console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java 11 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "PSystemAbstractFactory"
 , "c2" : "net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#21"
 , "c1" : "JsonDiagramFactory"
 , "c2" : "JsonDiagramFactory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#26"
 , "c1" : "Diagram"
 , "c2" : "createSystem(UmlSource;Map<String,String>)"
 , "c3" : "7"
 , "c4" : "18"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
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
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method createSystem arguments UmlSource  source|Map&lt;String ,String &gt;  skinParam"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00036] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory.createSystem@POLYN154289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory.createSystem@POLYN154289 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory.createSystem@POLYN154289 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory.createSystem@POLYN154289 the MagicNumber/String  '#' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory.createSystem@POLYN154289 the MagicNumber/String  '#highlight ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory.createSystem@POLYN154289 the MagicNumber/String  '#highlight ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory.createSystem@POLYN154289 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method net.sourceforge.plantuml.jsondiagram.JsonDiagramFactory.createSystem@POLYN154289 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/jsondiagram/JsonDiagramFactory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
