console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/board/CommandBoardPlus.java 12 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SingleLineCommand2<BoardDiagram>"
 , "c2" : "net.sourceforge.plantuml.board.CommandBoardPlus"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.board.CommandBoardPlus" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#14"
 , "c1" : "CommandBoardPlus"
 , "c2" : "CommandBoardPlus()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#18"
 , "c1" : "IRegex"
 , "c2" : "getRegexConcat()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#26"
 , "c1" : "CommandExecutionResult"
 , "c2" : "executeArg(BoardDiagram;LineLocation;RegexResult)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.svg" }

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
 , "c4" : "9"
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
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.board.CommandBoardPlus.CommandBoardPlus@POLYN149770 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method net.sourceforge.plantuml.board.CommandBoardPlus.getRegexConcat@POLYN149916 the MagicNumber/String  'PLUS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method net.sourceforge.plantuml.board.CommandBoardPlus.getRegexConcat@POLYN149916 the MagicNumber/String  '([+]*)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method net.sourceforge.plantuml.board.CommandBoardPlus.getRegexConcat@POLYN149916 the MagicNumber/String  'LABEL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method net.sourceforge.plantuml.board.CommandBoardPlus.getRegexConcat@POLYN149916 the MagicNumber/String  '([^%s].*)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method executeArg arguments BoardDiagram  diagram|LineLocation  location|RegexResult  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument arg is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method net.sourceforge.plantuml.board.CommandBoardPlus.executeArg@POLYN150383 the MagicNumber/String  'PLUS' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method net.sourceforge.plantuml.board.CommandBoardPlus.executeArg@POLYN150383 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method net.sourceforge.plantuml.board.CommandBoardPlus.executeArg@POLYN150383 the MagicNumber/String  'LABEL' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/board/CommandBoardPlus.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method net.sourceforge.plantuml.board.CommandBoardPlus.executeArg@POLYN150383 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
