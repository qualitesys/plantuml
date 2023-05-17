console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ClipContainer"
 , "c2" : "net.sourceforge.plantuml.ugraphic.tikz.UGraphicTikz"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.ugraphic.tikz.UGraphicTikz" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#62"
 , "c1" : "UGraphicTikz"
 , "c2" : "UGraphicTikz(HColor;ColorMapper;StringBounder;double;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#68"
 , "c1" : "AbstractCommonUGraphic"
 , "c2" : "copyUGraphic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#72"
 , "c1" : "UGraphicTikz"
 , "c2" : "UGraphicTikz(UGraphicTikz)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#77"
 , "c1" : "void"
 , "c2" : "register()"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#93"
 , "c1" : "void"
 , "c2" : "startUrl(Url)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#98"
 , "c1" : "void"
 , "c2" : "closeUrl()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#103"
 , "c1" : "void"
 , "c2" : "writeToStream(OutputStream;String;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#108"
 , "c1" : "boolean"
 , "c2" : "matchesProperty(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.svg" }

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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method startUrl arguments Url  url"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#93"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00093] The argument url is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method writeToStream arguments OutputStream  os|String  metadata|int  dpi"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method matchesProperty arguments String  propertyName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.ugraphic.tikz.UGraphicTikz.matchesProperty@POLYN166052 the MagicNumber/String  'SPECIALTXT' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method net.sourceforge.plantuml.ugraphic.tikz.UGraphicTikz.matchesProperty@POLYN166052 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.ugraphic.tikz.UGraphicTikz.matchesProperty@POLYN166052 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/ugraphic/tikz/UGraphicTikz.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
