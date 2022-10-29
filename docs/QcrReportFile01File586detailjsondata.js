console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java 9 rule violations " 
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
 , "c5" : "00016"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#16"
 , "c1" : "Genealogy"
 , "c2" : "Genealogy(Ftile)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#22"
 , "c1" : "void"
 , "c2" : "process(Ftile)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#32"
 , "c1" : "Ftile"
 , "c2" : "getMyFather(Ftile)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#36"
 , "c1" : "void"
 , "c2" : "setMyFather(Ftile;Ftile)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#43"
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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class Genealogy contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method process arguments Ftile  current"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#22"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00022] The argument current is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method getMyFather arguments Ftile  me"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method setMyFather arguments Ftile  child|Ftile  father"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method getTranslate arguments Ftile  child|StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00048] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/activitydiagram3/ftile/Genealogy.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00032] Public method getMyFather is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
