console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/bpm/Cell.java 8 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.bpm.Cell"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.bpm.Cell" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#13"
 , "c1" : "Placeable"
 , "c2" : "getData()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#17"
 , "c1" : "void"
 , "c2" : "setData(Placeable)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#22"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#29"
 , "c1" : "void"
 , "c2" : "addConnectionTo2(Placeable)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#37"
 , "c1" : "List<Placeable>"
 , "c2" : "getDestinations2()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.svg" }

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
 , "c4" : "2"
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
 , "c4" : "3"
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
 , "c1" : "00008"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class Cell contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00017] For method setData arguments Placeable  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.bpm.Cell.toString@POLYN148556 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method net.sourceforge.plantuml.bpm.Cell.toString@POLYN148556 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method addConnectionTo2 arguments Placeable  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.bpm.Cell.addConnectionTo2@POLYN148825 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00037] Public method getDestinations2 is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.html#29"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00029] Public method addConnectionTo2 is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/bpm/Cell.java.svg" }

};
console.log('leListeStr 99 main end');
