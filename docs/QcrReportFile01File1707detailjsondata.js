console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java 20 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TimeHeader"
 , "c2" : "net.sourceforge.plantuml.project.draw.TimeHeaderCalendar"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.project.draw.TimeHeaderCalendar" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#16"
 , "c1" : "TimeHeaderCalendar"
 , "c2" : "TimeHeaderCalendar(TimeHeaderParameters;TimeScale)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#22"
 , "c1" : "Locale"
 , "c2" : "locale()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#26"
 , "c1" : "int"
 , "c2" : "getLoadAt(Day)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#47"
 , "c1" : "void"
 , "c2" : "drawTextsBackground(UGraphic;double)"
 , "c3" : "10"
 , "c4" : "16"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.svg" }

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
 , "c4" : "12"
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
 , "c1" : "00016"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument thParam is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method getLoadAt arguments Day  instant"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00031] The class Pending contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method draw arguments UGraphic  ug|double  height"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method drawTextsBackground arguments UGraphic  ug|double  totalHeightWithoutFooter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00055] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00057] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.project.draw.TimeHeaderCalendar.drawTextsBackground@POLYN157517 the MagicNumber/String  null should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/project/draw/TimeHeaderCalendar.java.svg" }

};
console.log('leListeStr 99 main end');
