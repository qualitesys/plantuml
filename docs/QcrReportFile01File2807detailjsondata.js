console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/zopfli/Katajainen.java 51 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.zopfli.Katajainen"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.zopfli.Katajainen" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00009"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#9"
 , "c1" : "void"
 , "c2" : "lengthLimitedCodeLengths(Cookie;int[];int;int[])"
 , "c3" : "9"
 , "c4" : "32"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#58"
 , "c1" : "void"
 , "c2" : "boundaryPm(Cookie;Node[];Node[];Node[];int;int;boolean)"
 , "c3" : "7"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#84"
 , "c1" : "void"
 , "c2" : "sort(Node[];Node[];int;int)"
 , "c3" : "7"
 , "c4" : "16"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.svg" }

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
 , "c4" : "43"
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
 , "c1" : "00007"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00007] The class Katajainen contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#9"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00009] For method lengthLimitedCodeLengths arguments Cookie  cookie|int[]  frequencies|int  maxBits|int[]  bitLengths"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#9"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00009] The argument cookie is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00013"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00013] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.zopfli.Katajainen.lengthLimitedCodeLengths@POLYN159643 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method boundaryPm arguments Cookie  cookie|Node[]  leaves|Node[]  list0|Node[]  list1|int  numSymbols|int  index|boolean  last"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument cookie is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method net.sourceforge.plantuml.zopfli.Katajainen.boundaryPm@POLYN163191 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method sort arguments Node[]  src|Node[]  dest|int  low|int  high"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00090] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00090] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.zopfli.Katajainen.sort@POLYN165476 the MagicNumber/String  7 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.zopfli.Katajainen.sort@POLYN165476 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.zopfli.Katajainen.sort@POLYN165476 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method net.sourceforge.plantuml.zopfli.Katajainen.sort@POLYN165476 the MagicNumber/String  1 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/zopfli/Katajainen.java.svg" }

};
console.log('leListeStr 99 main end');
