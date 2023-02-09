console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java 8 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.activitydiagram3.ftile.Genealogy"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.activitydiagram3.ftile.Genealogy" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#50"
 , "c1" : "Genealogy"
 , "c2" : "Genealogy(Ftile)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#56"
 , "c1" : "void"
 , "c2" : "process(Ftile)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#66"
 , "c1" : "Ftile"
 , "c2" : "getMyFather(Ftile)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#70"
 , "c1" : "void"
 , "c2" : "setMyFather(Ftile;Ftile)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#77"
 , "c1" : "UTranslate"
 , "c2" : "getTranslate(Ftile;StringBounder)"
 , "c3" : "2"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method process arguments Ftile  current"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument current is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method getMyFather arguments Ftile  me"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method setMyFather arguments Ftile  child|Ftile  father"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method getTranslate arguments Ftile  child|StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00081] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00082] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00066] Public method getMyFather is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
