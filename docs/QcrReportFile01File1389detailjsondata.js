console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/graphic/TileText.java 32 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractTextBlockTextBlock"
 , "c2" : "net.sourceforge.plantuml.graphic.TileText"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.graphic.TileText" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#19"
 , "c1" : "TileText"
 , "c2" : "TileText(String;FontConfiguration;Url)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#25"
 , "c1" : "XDimension2D"
 , "c2" : "calculateDimension(StringBounder)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#38"
 , "c1" : "double"
 , "c2" : "getFontSize2D()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#42"
 , "c1" : "double"
 , "c2" : "getTabSize(StringBounder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#46"
 , "c1" : "void"
 , "c2" : "drawU(UGraphic)"
 , "c3" : "9"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#82"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.svg" }

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
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method calculateDimension arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument stringBounder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN160603 the MagicNumber/String  'g2d=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN160603 the MagicNumber/String  'Size for ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN160603 the MagicNumber/String  ' is ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN160603 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN160603 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN160603 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method net.sourceforge.plantuml.graphic.TileText.calculateDimension@POLYN160603 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method getTabSize arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#42"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00042] The argument stringBounder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method net.sourceforge.plantuml.graphic.TileText.getTabSize@POLYN161846 the MagicNumber/String  '        ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method drawU arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN162049 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN162049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN162049 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN162049 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN162049 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN162049 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.graphic.TileText.drawU@POLYN162049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method getWidth arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument stringBounder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00087] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.graphic.TileText.getWidth@POLYN164153 the MagicNumber/String  '\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.graphic.TileText.getWidth@POLYN164153 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method net.sourceforge.plantuml.graphic.TileText.getWidth@POLYN164153 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.graphic.TileText.getWidth@POLYN164153 the MagicNumber/String  '\t' should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/graphic/TileText.java.svg" }

};
console.log('leListeStr 99 main end');
