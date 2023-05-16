console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "CommandMultilines2<PSystemEbnf>"
 , "c2" : "net.sourceforge.plantuml.ebnf.CommandEbnfMultilines"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.ebnf.CommandEbnfMultilines" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#50"
 , "c1" : "CommandEbnfMultilines"
 , "c2" : "CommandEbnfMultilines()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#54"
 , "c1" : "IRegex"
 , "c2" : "getRegexConcat()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#61"
 , "c1" : "String"
 , "c2" : "getPatternEnd()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#66"
 , "c1" : "CommandExecutionResult"
 , "c2" : "executeNow(PSystemEbnf;BlocLines)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.ebnf.CommandEbnfMultilines.getRegexConcat@POLYN153160 the MagicNumber/String  'LINE' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.ebnf.CommandEbnfMultilines.getRegexConcat@POLYN153160 the MagicNumber/String  '(\\w[-\\w]*[%s]*=.*)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.ebnf.CommandEbnfMultilines.getPatternEnd@POLYN153499 the MagicNumber/String  '^(.*);$' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method executeNow arguments PSystemEbnf  diagram|BlocLines  lines"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.ebnf.CommandEbnfMultilines.executeNow@POLYN153601 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.ebnf.CommandEbnfMultilines.executeNow@POLYN153601 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/ebnf/CommandEbnfMultilines.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
