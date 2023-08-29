console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/graphic/TileText.java 32 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractTextBlock"
 , "c2" : "TextBlock"
 , "c2" : "net.sourceforge.plantuml.graphic.TileText"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.graphic.TileText" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#53"
 , "c1" : "TileText"
 , "c2" : "TileText(String;FontConfiguration;Url)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#59"
 , "c1" : "XDimension2D"
 , "c2" : "calculateDimension(StringBounder)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#72"
 , "c1" : "double"
 , "c2" : "getFontSize2D()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#76"
 , "c1" : "double"
 , "c2" : "getTabSize(StringBounder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#80"
 , "c1" : "void"
 , "c2" : "drawU(UGraphic)"
 , "c3" : "9"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#116"
 , "c1" : "double"
 , "c2" : "getWidth(StringBounder)"
 , "c3" : "4"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.svg" }

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
 , "c4" : "4"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
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
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method calculateDimension arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument stringBounder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN172265 the MagicNumber/String  'g2d=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN172265 the MagicNumber/String  'Size for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN172265 the MagicNumber/String  ' is ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN172265 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN172265 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN172265 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN172265 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method getTabSize arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument stringBounder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.graphic.TileText.getTabSize@POLYN173516 the MagicNumber/String  '        ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method drawU arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00092] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00097] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00098] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN173719 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN173719 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN173719 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN173719 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN173719 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN173719 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN173719 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method getWidth arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#116"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00116] The argument stringBounder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00126] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method net.sourceforge.plantuml.graphic.TileText.getWidth@POLYN175841 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method net.sourceforge.plantuml.graphic.TileText.getWidth@POLYN175841 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.graphic.TileText.getWidth@POLYN175841 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method net.sourceforge.plantuml.graphic.TileText.getWidth@POLYN175841 the MagicNumber/String  '\t' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
