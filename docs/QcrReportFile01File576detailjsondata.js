console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java 4 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractFtile"
 , "c2" : "net.sourceforge.plantuml.activitydiagram3.ftile.FtileKilled"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.activitydiagram3.ftile.FtileKilled" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#14"
 , "c1" : "FtileKilled"
 , "c2" : "FtileKilled(Ftile)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#20"
 , "c1" : "Collection<Ftile>"
 , "c2" : "getMyChildren()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#24"
 , "c1" : "Set<Swimlane>"
 , "c2" : "getSwimlanes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#28"
 , "c1" : "Swimlane"
 , "c2" : "getSwimlaneIn()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#32"
 , "c1" : "Swimlane"
 , "c2" : "getSwimlaneOut()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#37"
 , "c1" : "FtileGeometry"
 , "c2" : "calculateDimensionFtile(StringBounder)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#42"
 , "c1" : "void"
 , "c2" : "drawU(UGraphic)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#14"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00014] The argument tileToKill is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method calculateDimensionFtile arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method drawU arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/FtileKilled.java.svg" }

};
console.log('leListeStr 99 main end');
