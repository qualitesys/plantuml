console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html" 
 , "texte" : "File src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RenderTarget"
 , "c2" : "ext.plantuml.com.ctreber.acearth.gui.PixelCanvas"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "ext.plantuml.com.ctreber.acearth.gui.PixelCanvas" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#34"
 , "c1" : "PixelCanvas"
 , "c2" : "PixelCanvas(int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#40"
 , "c1" : "Graphics2D"
 , "c2" : "getGraphics2D()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#44"
 , "c1" : "void"
 , "c2" : "setPixel(int;int;int;int;int;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#48"
 , "c1" : "void"
 , "c2" : "setPixel(int;int;Color)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#52"
 , "c1" : "int"
 , "c2" : "getImageWidth()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#56"
 , "c1" : "int"
 , "c2" : "getImageHeight()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#60"
 , "c1" : "void"
 , "c2" : "saveToImage(OutputStream)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.svg" }

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
 , "c4" : "1"
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
 , "c1" : "00044"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method setPixel arguments int  pX|int  pY|int  pA|int  pR|int  pG|int  pB"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method setPixel arguments int  pX|int  pY|Color  pColor"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument pColor is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method saveToImage arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method ext.plantuml.com.ctreber.acearth.gui.PixelCanvas.saveToImage@POLYN155167 the MagicNumber/String  'png' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/ext/plantuml/com/ctreber/acearth/gui/PixelCanvas.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
