console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java 5 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.xml" 
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
 , "c5" : "00024"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#24"
 , "c1" : "CucaDiagramXmiMaker"
 , "c2" : "CucaDiagramXmiMaker(CucaDiagram;FileFormat)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#29"
 , "c1" : "String"
 , "c2" : "getModel(UmlDiagram)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#33"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
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
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class CucaDiagramXmiMaker contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method getModel arguments UmlDiagram  classDiagram"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.xmi.CucaDiagramXmiMaker.getModel@POLYN153976 the MagicNumber/String  'model1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method createFiles arguments OutputStream  fos"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.html#29"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00029] Public method getModel is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/xmi/CucaDiagramXmiMaker.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
