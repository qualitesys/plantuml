console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java 4 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.xmi.CucaDiagramXmiMaker"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.xmi.CucaDiagramXmiMaker" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#58"
 , "c1" : "CucaDiagramXmiMaker"
 , "c2" : "CucaDiagramXmiMaker(CucaDiagram;FileFormat)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#63"
 , "c1" : "String"
 , "c2" : "getModel(UmlDiagram)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#67"
 , "c1" : "void"
 , "c2" : "createFiles(OutputStream)"
 , "c3" : "11"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method getModel arguments UmlDiagram  classDiagram"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.xmi.CucaDiagramXmiMaker.getModel@POLYN161652 the MagicNumber/String  'model1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method createFiles arguments OutputStream  fos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00063] Public method getModel is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
