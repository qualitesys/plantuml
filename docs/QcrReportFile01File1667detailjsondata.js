console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/project/command/CommandGroupStart.java 10 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SingleLineCommand2<GanttDiagram>"
 , "c2" : "net.sourceforge.plantuml.project.command.CommandGroupStart"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.project.command.CommandGroupStart" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#15"
 , "c1" : "CommandGroupStart"
 , "c2" : "CommandGroupStart()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#19"
 , "c1" : "IRegex"
 , "c2" : "getRegexConcat()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#31"
 , "c1" : "CommandExecutionResult"
 , "c2" : "executeArg(GanttDiagram;LineLocation;RegexResult)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
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
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.project.command.CommandGroupStart.getRegexConcat@POLYN150257 the MagicNumber/String  'group' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.project.command.CommandGroupStart.getRegexConcat@POLYN150257 the MagicNumber/String  '\\[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.project.command.CommandGroupStart.getRegexConcat@POLYN150257 the MagicNumber/String  'NAME' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.project.command.CommandGroupStart.getRegexConcat@POLYN150257 the MagicNumber/String  '([^\\[\\]]+)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.project.command.CommandGroupStart.getRegexConcat@POLYN150257 the MagicNumber/String  '\\]' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method executeArg arguments GanttDiagram  diagram|LineLocation  location|RegexResult  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument arg is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.project.command.CommandGroupStart.executeArg@POLYN150866 the MagicNumber/String  'NAME' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.project.command.CommandGroupStart.executeArg@POLYN150866 the MagicNumber/String  0 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/project/command/CommandGroupStart.java.svg" }

};
console.log('leListeStr 99 main end');
