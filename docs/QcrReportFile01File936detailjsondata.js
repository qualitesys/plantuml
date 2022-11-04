console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java 23 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Command<S>"
 , "c2" : "net.sourceforge.plantuml.command.CommandMultilinesBracket"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.command.CommandMultilinesBracket" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#14"
 , "c1" : "CommandMultilinesBracket"
 , "c2" : "CommandMultilinesBracket(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#21"
 , "c1" : "boolean"
 , "c2" : "isCommandForbidden()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#25"
 , "c1" : "String[]"
 , "c2" : "getDescription()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#29"
 , "c1" : "CommandControl"
 , "c2" : "finalVerification()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#33"
 , "c1" : "Pattern2"
 , "c2" : "getStartingPattern()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#37"
 , "c1" : "CommandControl"
 , "c2" : "isValid(BlocLines)"
 , "c3" : "10"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#71"
 , "c1" : "boolean"
 , "c2" : "isLineConsistent(String;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "17"
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
 , "c1" : "00010"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class CommandMultilinesBracket contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument patternStart is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.CommandMultilinesBracket@POLYN153677 the MagicNumber/String  '^' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.CommandMultilinesBracket@POLYN153677 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.CommandMultilinesBracket@POLYN153677 the MagicNumber/String  '$' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.CommandMultilinesBracket@POLYN153677 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.CommandMultilinesBracket@POLYN153677 the MagicNumber/String  'Bad pattern ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isCommandForbidden@POLYN154132 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.getDescription@POLYN154226 the MagicNumber/String  'BRACKET: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method isValid arguments BlocLines  lines"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument lines is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.command.CommandMultilinesBracket.isValid@POLYN154594 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method isLineConsistent arguments String  line|int  level"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/command/CommandMultilinesBracket.java.svg" }

};
console.log('leListeStr 99 main end');
