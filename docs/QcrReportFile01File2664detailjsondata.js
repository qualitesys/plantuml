console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java 35 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "UDriver<UText,Graphics2D>"
 , "c2" : "net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#36"
 , "c1" : "DriverTextG2d"
 , "c2" : "DriverTextG2d(EnsureVisible;StringBounder)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#41"
 , "c1" : "void"
 , "c2" : "draw(UText;double;double;ColorMapper;UParam;Graphics2D)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#58"
 , "c1" : "double"
 , "c2" : "printSingleText(Graphics2D;FontConfiguration;String;double;double;ColorMapper)"
 , "c3" : "16"
 , "c4" : "47"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "29"
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
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method draw arguments UText  shape|double  x|double  y|ColorMapper  mapper|UParam  param|Graphics2D  g2d"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument shape is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00052] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method printSingleText arguments Graphics2D  g2d|FontConfiguration  fontConfiguration|String  text|double  x|double  y|ColorMapper  mapper"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument g2d is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument fontConfiguration is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  90 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  1.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  1.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  1.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  2.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  2.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN174540 the MagicNumber/String  1.5 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
