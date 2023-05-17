console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java 88 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#66"
 , "c1" : "CommandExoArrowAny"
 , "c2" : "CommandExoArrowAny(IRegex)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#71"
 , "c1" : "CommandExecutionResult"
 , "c2" : "executeArg(SequenceDiagram;LineLocation;RegexResult)"
 , "c3" : "27"
 , "c4" : "48"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00186"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#186"
 , "c1" : "ArrowPart"
 , "c2" : "getArrowPart(String;MessageExoType)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00202"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#202"
 , "c1" : "MessageExoType"
 , "c2" : "getMessageExoType(RegexResult)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00204"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#204"
 , "c1" : "boolean"
 , "c2" : "isShortArrow(RegexResult)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00212"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#212"
 , "c1" : "boolean"
 , "c2" : "containsSymbol(String;RegexResult;String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "76"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method executeArg arguments SequenceDiagram  diagram|LineLocation  location|RegexResult  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument arg is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00175] The same method call config.getHead() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'ARROW_BODYA' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'ARROW_BODYB' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'ARROW_DRESSING' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'PARTICIPANT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  '--' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'LABEL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'LABEL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'ARROW_BOTHDRESSING' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'ARROW_STYLE' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'ACTIVATION' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'o' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'x' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'o' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'x' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'o' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'x' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'o' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'x' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'URL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'topurl' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'URL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'PARALLEL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'ANCHOR' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'PART1ANCHOR' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'PART2ANCHOR' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  'LIFECOLOR' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  '!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.executeArg@POLYN182592 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method getArrowPart arguments String  dressing|MessageExoType  messageExoType"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#186"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00186] The argument dressing is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#186"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00186] The argument messageExoType is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.getArrowPart@POLYN190487 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.getArrowPart@POLYN190487 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.getArrowPart@POLYN190487 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.getArrowPart@POLYN190487 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#202"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00202] For method getMessageExoType arguments RegexResult  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method isShortArrow arguments RegexResult  arg2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#204"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00204] The argument arg2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.isShortArrow@POLYN191200 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.isShortArrow@POLYN191200 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.isShortArrow@POLYN191200 the MagicNumber/String  '?' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.isShortArrow@POLYN191200 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.isShortArrow@POLYN191200 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00212] For method containsSymbol arguments String  suppCircle|RegexResult  arg2|String  symbol"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#212"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00212] The argument arg2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.containsSymbol@POLYN191589 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.containsSymbol@POLYN191589 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.containsSymbol@POLYN191589 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method net.sourceforge.plantuml.sequencediagram.command.CommandExoArrowAny.containsSymbol@POLYN191589 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/sequencediagram/command/CommandExoArrowAny.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
