console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java 14 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.ugraphic.ULayoutGroup"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.ugraphic.ULayoutGroup" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#18"
 , "c1" : "ULayoutGroup"
 , "c2" : "ULayoutGroup(PlacementStrategy)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#22"
 , "c1" : "void"
 , "c2" : "drawU(UGraphic;double;double)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#30"
 , "c1" : "void"
 , "c2" : "add(TextBlock)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#35"
 , "c1" : "XRectangle2D"
 , "c2" : "getInnerPosition(String;double;double;StringBounder)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#44"
 , "c1" : "XRectangle2D"
 , "c2" : "tryOne(Set<Entry<TextBlock,XPoint2D>>;String;StringBounder;InnerStrategy)"
 , "c3" : "3"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class ULayoutGroup contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method drawU arguments UGraphic  ug|double  width|double  height"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#22"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00022] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00024] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00025] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method add arguments TextBlock  block"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method getInnerPosition arguments String  member|double  width|double  height|StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.ugraphic.ULayoutGroup.getInnerPosition@POLYN154818 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method tryOne arguments Set&lt;Entry&lt;TextBlock ,XPoint2D &gt; &gt;  all|String  member|StringBounder  stringBounder|InnerStrategy  mode"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00048] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00050] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.ugraphic.ULayoutGroup.tryOne@POLYN155577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.ugraphic.ULayoutGroup.tryOne@POLYN155577 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/ugraphic/ULayoutGroup.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
