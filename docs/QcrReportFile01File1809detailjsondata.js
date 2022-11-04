console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/salt/element/AbstractElementText.java 12 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractElement"
 , "c2" : "net.sourceforge.plantuml.salt.element.AbstractElementText"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.salt.element.AbstractElementText" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#23"
 , "c1" : "AbstractElementText"
 , "c2" : "AbstractElementText(String;UFont;boolean;ISkinSimple)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#34"
 , "c1" : "int"
 , "c2" : "getCharNumber(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#40"
 , "c1" : "void"
 , "c2" : "drawText(UGraphic;double;double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#44"
 , "c1" : "XDimension2D"
 , "c2" : "getPureTextDimension(StringBounder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#48"
 , "c1" : "XDimension2D"
 , "c2" : "getTextDimensionAt(StringBounder;double)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#61"
 , "c1" : "double"
 , "c2" : "getSingleSpace(StringBounder)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#77"
 , "c1" : "FontConfiguration"
 , "c2" : "getConfig()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.salt.element.AbstractElementText.AbstractElementText@POLYN154945 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method getCharNumber arguments String  text"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument text is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.salt.element.AbstractElementText.getCharNumber@POLYN155695 the MagicNumber/String  '&amp;lt;&amp;[-\\w]+&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.salt.element.AbstractElementText.getCharNumber@POLYN155695 the MagicNumber/String  '00' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method drawText arguments UGraphic  ug|double  x|double  y"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method getPureTextDimension arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method getTextDimensionAt arguments StringBounder  stringBounder|double  x"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method net.sourceforge.plantuml.salt.element.AbstractElementText.getTextDimensionAt@POLYN156465 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method getSingleSpace arguments StringBounder  stringBounder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.salt.element.AbstractElementText.getSingleSpace@POLYN157080 the MagicNumber/String  8 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/salt/element/AbstractElementText.java.svg" }

};
console.log('leListeStr 99 main end');
