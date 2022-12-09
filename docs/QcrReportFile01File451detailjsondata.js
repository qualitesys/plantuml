console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/StdrptNull.java 12 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Stdrpt"
 , "c2" : "net.sourceforge.plantuml.StdrptNull"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.StdrptNull" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00011"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/StdrptNull.java.html#11"
 , "c1" : "void"
 , "c2" : "printInfo(PrintStream;Diagram)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/StdrptNull.java.html#14"
 , "c1" : "void"
 , "c2" : "finalMessage(ErrorStatus)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/StdrptNull.java.html#23"
 , "c1" : "void"
 , "c2" : "errorLine(int;File)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.svg" }

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
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#11"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00011] For method printInfo arguments PrintStream  output|Diagram  sys"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method finalMessage arguments ErrorStatus  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.StdrptNull.finalMessage@POLYN147264 the MagicNumber/String  'Some diagram description contains errors' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.StdrptNull.finalMessage@POLYN147264 the MagicNumber/String  'No diagram found' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method errorLine arguments int  lineError|File  file"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.StdrptNull.errorLine@POLYN147617 the MagicNumber/String  'Error line ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.StdrptNull.errorLine@POLYN147617 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.StdrptNull.errorLine@POLYN147617 the MagicNumber/String  ' in file: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#11"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00011] Void method printInfo is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.html#11"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00011] Void method printInfo is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/StdrptNull.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
