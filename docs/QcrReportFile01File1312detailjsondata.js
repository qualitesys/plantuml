console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/gitlog/GitDiagram.java 9 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "UmlDiagram"
 , "c2" : "net.sourceforge.plantuml.gitlog.GitDiagram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.gitlog.GitDiagram" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#27"
 , "c1" : "GitDiagram"
 , "c2" : "GitDiagram(UmlSource;GitTextArea)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#33"
 , "c1" : "DiagramDescription"
 , "c2" : "getDescription()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#38"
 , "c1" : "ImageData"
 , "c2" : "exportDiagramInternal(OutputStream;int;FileFormatOption)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#44"
 , "c1" : "void"
 , "c2" : "drawInternal(UGraphic)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#56"
 , "c1" : "TextBlockBackcolored"
 , "c2" : "getTextBlock()"
 , "c3" : "1"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.svg" }

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
 , "c4" : "6"
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
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument textArea is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method net.sourceforge.plantuml.gitlog.GitDiagram.GitDiagram@POLYN154645 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.gitlog.GitDiagram.getDescription@POLYN155088 the MagicNumber/String  '(Git)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method exportDiagramInternal arguments OutputStream  os|int  index|FileFormatOption  fileFormatOption"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method drawInternal arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.gitlog.GitDiagram.getTextBlock@POLYN155725 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.gitlog.GitDiagram.getTextBlock@POLYN155725 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method net.sourceforge.plantuml.gitlog.GitDiagram.getTextBlock@POLYN155725 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/gitlog/GitDiagram.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.gitlog.GitDiagram.getTextBlock@POLYN155725 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
