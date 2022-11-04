console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/anim/Animation.java 15 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.anim.Animation"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.anim.Animation" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/anim/Animation.java.html#16"
 , "c1" : "Animation"
 , "c2" : "Animation(List<AffineTransformation>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/anim/Animation.java.html#23"
 , "c1" : "Animation"
 , "c2" : "singleton(AffineTransformation)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/anim/Animation.java.html#30"
 , "c1" : "Animation"
 , "c2" : "create(List<String>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/anim/Animation.java.html#41"
 , "c1" : "Collection<AffineTransformation>"
 , "c2" : "getAll()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/anim/Animation.java.html#45"
 , "c1" : "void"
 , "c2" : "setDimension(XDimension2D)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/anim/Animation.java.html#52"
 , "c1" : "AffineTransformation"
 , "c2" : "getFirst()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/anim/Animation.java.html#56"
 , "c1" : "MinMax"
 , "c2" : "getMinMax(XDimension2D)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.svg" }

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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class Animation contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument all is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method net.sourceforge.plantuml.anim.Animation.Animation@POLYN152114 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method singleton arguments AffineTransformation  affineTransformation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.anim.Animation.singleton@POLYN152423 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.anim.Animation.singleton@POLYN152423 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method create arguments List&lt;String &gt;  descriptions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00033] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.anim.Animation.create@POLYN152724 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method setDimension arguments XDimension2D  dim"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.anim.Animation.getFirst@POLYN153681 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method getMinMax arguments XDimension2D  dim"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.anim.Animation.getMinMax@POLYN153808 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.html#23"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00023] Public method singleton is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/anim/Animation.java.svg" }

};
console.log('leListeStr 99 main end');
