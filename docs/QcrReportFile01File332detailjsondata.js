console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html" 
 , "texte" : "File src/jcckit/renderer/Graphics2DRenderer.java 52 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "GraphicalCompositeRenderer,PolygonRenderer,OvalRenderer,TextRenderer,RectangleRenderer"
 , "c2" : "jcckit.renderer.Graphics2DRenderer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.renderer.Graphics2DRenderer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#84"
 , "c1" : "Graphics2DRenderer"
 , "c2" : "init(Graphics2D)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#96"
 , "c1" : "void"
 , "c2" : "startRendering(GraphicalComposite)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#111"
 , "c1" : "void"
 , "c2" : "finishRendering(GraphicalComposite)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#116"
 , "c1" : "void"
 , "c2" : "render(Polygon)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#136"
 , "c1" : "void"
 , "c2" : "render(Rectangle)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00149"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#149"
 , "c1" : "void"
 , "c2" : "render(Oval)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00159"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#159"
 , "c1" : "void"
 , "c2" : "drawShape(Shape;BasicGraphicalElement;Color)"
 , "c3" : "8"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00205"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#205"
 , "c1" : "void"
 , "c2" : "render(Text)"
 , "c3" : "5"
 , "c4" : "36"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00287"
 , "c5link" : "././qc/src/jcckit/renderer/Graphics2DRenderer.java.html#287"
 , "c1" : "Font"
 , "c2" : "createFont(TextAttributes;int)"
 , "c3" : "9"
 , "c4" : "10"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.svg" }

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
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "35"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method init arguments Graphics2D  graphics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument graphics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method startRendering arguments GraphicalComposite  composite"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument composite is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method jcckit.renderer.Graphics2DRenderer.startRendering@POLYN207864 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method finishRendering arguments GraphicalComposite  composite"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method jcckit.renderer.Graphics2DRenderer.finishRendering@POLYN208677 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method render arguments Polygon  polygon"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#116"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00116] The argument polygon is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method jcckit.renderer.Graphics2DRenderer.render@POLYN208813 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method jcckit.renderer.Graphics2DRenderer.render@POLYN208813 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method jcckit.renderer.Graphics2DRenderer.render@POLYN208813 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method jcckit.renderer.Graphics2DRenderer.render@POLYN208813 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method render arguments Rectangle  rectangle"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument rectangle is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method jcckit.renderer.Graphics2DRenderer.render@POLYN210205 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method jcckit.renderer.Graphics2DRenderer.render@POLYN210205 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method render arguments Oval  oval"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#149"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00149] The argument oval is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method jcckit.renderer.Graphics2DRenderer.render@POLYN211055 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method jcckit.renderer.Graphics2DRenderer.render@POLYN211055 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method drawShape arguments Shape  shape|BasicGraphicalElement  element|Color  backupColor"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00159] The argument element is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  10f should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  0f should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method jcckit.renderer.Graphics2DRenderer.drawShape@POLYN211834 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method render arguments Text  text"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#205"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00205] The argument text is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  180 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  180 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method jcckit.renderer.Graphics2DRenderer.render@POLYN214654 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method createFont arguments TextAttributes  attributes|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#287"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00287] The argument attributes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method jcckit.renderer.Graphics2DRenderer.createFont@POLYN218989 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method jcckit.renderer.Graphics2DRenderer.createFont@POLYN218989 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method jcckit.renderer.Graphics2DRenderer.createFont@POLYN218989 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/renderer/Graphics2DRenderer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
