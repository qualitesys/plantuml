console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/jsondiagram/Mirror.java 10 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.jsondiagram.Mirror"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.jsondiagram.Mirror" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00010"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#10"
 , "c1" : "Mirror"
 , "c2" : "Mirror(double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00014"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#14"
 , "c1" : "double"
 , "c2" : "inv(double)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#21"
 , "c1" : "XPoint2D"
 , "c2" : "invAndXYSwitch(XPoint2D)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#27"
 , "c1" : "XPoint2D"
 , "c2" : "invGit(XPoint2D)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "2"
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
 , "c1" : "00006"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class Mirror contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method inv arguments double  v"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.jsondiagram.Mirror.inv@POLYN148137 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.jsondiagram.Mirror.inv@POLYN148137 the MagicNumber/String  'BAD VALUE IN Mirror' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method invAndXYSwitch arguments XPoint2D  pt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument pt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method invGit arguments XPoint2D  pt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument pt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#21"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00021] Public method invAndXYSwitch is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00027] Public method invGit is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/jsondiagram/Mirror.java.svg" }

};
console.log('leListeStr 99 main end');
