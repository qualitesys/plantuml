console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java 51 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.sudoku.GraphicsSudoku"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.sudoku.GraphicsSudoku" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#77"
 , "c1" : "GraphicsSudoku"
 , "c2" : "GraphicsSudoku(ISudoku)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#81"
 , "c1" : "ImageData"
 , "c2" : "writeImageEps(OutputStream)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#89"
 , "c1" : "ImageData"
 , "c2" : "writeImageSvg(OutputStream)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00098"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#98"
 , "c1" : "ImageData"
 , "c2" : "writeImageLatex(OutputStream;FileFormat)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#106"
 , "c1" : "ImageData"
 , "c2" : "writeImagePng(OutputStream)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#136"
 , "c1" : "void"
 , "c2" : "drawInternal(UGraphic)"
 , "c3" : "6"
 , "c4" : "26"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
}}
,
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "38"
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
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method writeImageEps arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument os is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method writeImageSvg arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  'none' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN185073 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method writeImageLatex arguments OutputStream  os|FileFormat  fileFormat"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageLatex@POLYN185912 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageLatex@POLYN185912 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageLatex@POLYN185912 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method writeImagePng arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImagePng@POLYN186532 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImagePng@POLYN186532 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImagePng@POLYN186532 the MagicNumber/String  96 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#136"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00136] For method drawInternal arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00143] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  'http://plantuml.com' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  'Seed ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  36 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN188566 the MagicNumber/String  'Difficulty ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00081] Public method writeImageEps is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00089] Public method writeImageSvg is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00098] Public method writeImageLatex is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00106] Public method writeImagePng is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
