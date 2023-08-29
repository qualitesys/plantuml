console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java 35 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "UDriver<UText,Graphics2D>"
 , "c2" : "net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#70"
 , "c1" : "DriverTextG2d"
 , "c2" : "DriverTextG2d(EnsureVisible;StringBounder)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#75"
 , "c1" : "void"
 , "c2" : "draw(UText;double;double;ColorMapper;UParam;Graphics2D)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#92"
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
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.svg" }

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
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method draw arguments UText  shape|double  x|double  y|ColorMapper  mapper|UParam  param|Graphics2D  g2d"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument shape is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00086] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method printSingleText arguments Graphics2D  g2d|FontConfiguration  fontConfiguration|String  text|double  x|double  y|ColorMapper  mapper"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument g2d is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument fontConfiguration is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  90 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  1.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  1.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  1.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  2.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  2.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method net.sourceforge.plantuml.ugraphic.g2d.DriverTextG2d.printSingleText@POLYN186208 the MagicNumber/String  1.5 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/ugraphic/g2d/DriverTextG2d.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
