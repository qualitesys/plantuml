console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/PlainDiagram.java 5 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractPSystem"
 , "c2" : "net.sourceforge.plantuml.PlainDiagram"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.PlainDiagram" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#15"
 , "c1" : "PlainDiagram"
 , "c2" : "PlainDiagram(UmlSource)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#20"
 , "c1" : "ImageBuilder"
 , "c2" : "createImageBuilder(FileFormatOption)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#28"
 , "c1" : "ImageData"
 , "c2" : "exportDiagramNow(OutputStream;int;FileFormatOption)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#36"
 , "c1" : "UDrawable"
 , "c2" : "getRootDrawable(FileFormatOption)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.svg" }

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
 , "c4" : "1"
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
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method createImageBuilder arguments FileFormatOption  fileFormatOption"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument fileFormatOption is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.PlainDiagram.createImageBuilder@POLYN148789 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method exportDiagramNow arguments OutputStream  os|int  index|FileFormatOption  fileFormatOption"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PlainDiagram.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method getRootDrawable arguments FileFormatOption  fileFormatOption"
}} 
]
};
console.log('leListeStr 99 main end');
