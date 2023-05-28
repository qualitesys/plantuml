console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html" 
 , "texte" : "File src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java 140 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.stathissideris.ascii2image.graphics.BitmapRenderer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.stathissideris.ascii2image.graphics.BitmapRenderer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#58"
 , "c1" : "RenderedImage"
 , "c2" : "renderToImage(Diagram;RenderingOptions)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#74"
 , "c1" : "RenderedImage"
 , "c2" : "render(Diagram;BufferedImage;RenderingOptions)"
 , "c3" : "34"
 , "c4" : "110"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00332"
 , "c5link" : "././qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#332"
 , "c1" : "RenderedImage"
 , "c2" : "renderTextLayer(ArrayList;int;int)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00366"
 , "c5link" : "././qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#366"
 , "c1" : "void"
 , "c2" : "renderCustomShape(DiagramShape;Graphics2D)"
 , "c3" : "7"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00412"
 , "c5link" : "././qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#412"
 , "c1" : "void"
 , "c2" : "renderCustomPNGShape(DiagramShape;Graphics2D)"
 , "c3" : "5"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00440"
 , "c5link" : "././qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#440"
 , "c1" : "boolean"
 , "c2" : "isColorDark(Color)"
 , "c3" : "4"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "36"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "60"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method renderToImage arguments Diagram  diagram|RenderingOptions  options"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method render arguments Diagram  diagram|BufferedImage  image|RenderingOptions  options"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method render list of called methods Object monObjet|java.util.ArrayList diagram_getAllDiagramShapesN217197|java.awt.geom.GeneralPath shape_makeIntoRenderPathN217910|float diagram_getMinimumOfCellDimensionN218006|float diagram_getMinimumOfCellDimensionN220574|java.awt.geom.GeneralPath shape_makeIntoRenderPathN222052|java.util.ArrayList shape_getPointsN223818|java.awt.geom.GeneralPath shape_makeIntoRenderPathN223943|java.awt.geom.GeneralPath shape_makeIntoRenderPathN225330|java.util.ArrayList diagram_getTextObjectsN225741|int diagram_getCellWidthN228007|int diagram_getCellHeightN228369"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument diagram is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument image is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument options is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00105] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00115] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00189] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00189] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00208] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00208] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00210] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00234] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00234] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00251] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00279] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00279] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00282] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00297] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00297] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  'Rendering ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  ' shapes (groups flattened)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  3.333f should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  150 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  150 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  150 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  6 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  1.0f should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  170 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  170 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00318] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  170 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#332"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00332] For method renderTextLayer arguments ArrayList  textObjects|int  width|int  height"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00347] For method paint arguments Graphics  g"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00351] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00351] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.TextCanvas.paint@POLYN229402 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.TextCanvas.paint@POLYN229402 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.TextCanvas.paint@POLYN229402 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.TextCanvas.paint@POLYN229402 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00366] For method renderCustomShape arguments DiagramShape  shape|Graphics2D  g2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00366] For method renderCustomShape list of called methods Object monObjet|org.stathissideris.ascii2image.graphics.CustomShapeDefinition shape_getDefinitionN231225|java.awt.Rectangle shape_getBoundsN231302"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#366"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00366] The argument shape is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#366"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00366] The argument g2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomShape@POLYN231105 the MagicNumber/String  '.png' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomShape@POLYN231105 the MagicNumber/String  '.svg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#394"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00394] For method renderCustomPNGShape arguments DiagramShape  shape|Graphics2D  g2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#394"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00394] For method renderCustomPNGShape list of called methods Object monObjet|org.stathissideris.ascii2image.graphics.CustomShapeDefinition shape_getDefinitionN233103|java.awt.Rectangle shape_getBoundsN233180|org.stathissideris.ascii2image.graphics.ImageHandler ImageHandler_instanceN233257"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#412"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00412] The argument shape is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#412"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00412] The argument g2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00432] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00432] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00432] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.renderCustomPNGShape@POLYN232983 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#440"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00440] For method isColorDark arguments Color  color"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#440"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00440] The argument color is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#443"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00443] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.isColorDark@POLYN235151 the MagicNumber/String  200 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.isColorDark@POLYN235151 the MagicNumber/String  'Color ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.isColorDark@POLYN235151 the MagicNumber/String  ' is dark' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.isColorDark@POLYN235151 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00447"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.isColorDark@POLYN235151 the MagicNumber/String  'Color ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00447"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.isColorDark@POLYN235151 the MagicNumber/String  ' is not dark' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.stathissideris.ascii2image.graphics.BitmapRenderer.isColorDark@POLYN235151 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00058] Public method renderToImage is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#440"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00440] Public method isColorDark is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.stathissideris.ascii2image.graphics.BitmapRenderer.renderTextLayer@POLYN228667"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 10 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 10 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#90"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00090] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String ' shapes -groups flattened-' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 'Rendering ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 3.333f MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 150 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 150 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 150 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 6 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 1.0f MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00159] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 10 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00179] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#255"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00255] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#256"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00256] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#301"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00301] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00302] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00303] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00304] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#313"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00313] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00318] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 170 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00318] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 170 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00318"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#318"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00318] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 170 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00320"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#320"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00320] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#322"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00322] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.html#323"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00323] In the recursive method org.stathissideris.ascii2image.graphics.BitmapRenderer.render@POLYN216019 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/org/stathissideris/ascii2image/graphics/BitmapRenderer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
