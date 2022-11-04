console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/braille/BrailleChar.java 206 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.braille.BrailleChar"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.braille.BrailleChar" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00008"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#8"
 , "c1" : "BrailleChar"
 , "c2" : "BrailleChar(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#12"
 , "c1" : "void"
 , "c2" : "draw(BrailleGrid;double;double)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#23"
 , "c1" : "void"
 , "c2" : "drawOneSpot(BrailleGrid;int;int;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#30"
 , "c1" : "BrailleChar"
 , "c2" : "fromChar(char)"
 , "c3" : "36"
 , "c4" : "36"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.svg" }

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
 , "c4" : "198"
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
 , "c1" : "00004"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class BrailleChar contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#12"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00012] For method draw arguments BrailleGrid  grid|double  xv|double  yv"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#12"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00012] The argument grid is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method net.sourceforge.plantuml.braille.BrailleChar.draw@POLYN169640 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method drawOneSpot arguments BrailleGrid  grid|int  x|int  y|int  check"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument grid is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method net.sourceforge.plantuml.braille.BrailleChar.drawOneSpot@POLYN171025 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.braille.BrailleChar.drawOneSpot@POLYN171025 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method fromChar arguments char  c"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'a' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'A' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'b' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'B' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'c' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'C' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'D' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '4' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'E' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '5' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'f' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'F' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '6' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'g' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'G' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'h' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'H' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'i' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'I' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'j' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'J' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'k' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'K' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'l' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'L' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'm' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'M' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'N' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'o' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'O' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'p' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'P' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'q' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'Q' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'r' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'R' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  's' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'S' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  't' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'T' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'u' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'U' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'v' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'V' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'w' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'W' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'x' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'X' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'y' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'Y' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'z' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  'Z' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  ';' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '?' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method net.sourceforge.plantuml.braille.BrailleChar.fromChar@POLYN171413 the MagicNumber/String  63 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00030] Public method fromChar is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.html#12"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00012] Public method draw is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/braille/BrailleChar.java.svg" }

};
console.log('leListeStr 99 main end');
