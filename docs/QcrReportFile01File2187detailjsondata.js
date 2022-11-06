console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java 52 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.xml" 
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
 , "c5" : "00043"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#43"
 , "c1" : "GraphicsSudoku"
 , "c2" : "GraphicsSudoku(ISudoku)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#47"
 , "c1" : "ImageData"
 , "c2" : "writeImageEps(OutputStream)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#55"
 , "c1" : "ImageData"
 , "c2" : "writeImageSvg(OutputStream)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#64"
 , "c1" : "ImageData"
 , "c2" : "writeImageLatex(OutputStream;FileFormat)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#72"
 , "c1" : "ImageData"
 , "c2" : "writeImagePng(OutputStream)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#102"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00037] The class GraphicsSudoku contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method writeImageEps arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument os is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method writeImageSvg arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  'none' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageSvg@POLYN176083 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method writeImageLatex arguments OutputStream  os|FileFormat  fileFormat"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageLatex@POLYN176920 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageLatex@POLYN176920 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImageLatex@POLYN176920 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method writeImagePng arguments OutputStream  os"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImagePng@POLYN177538 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImagePng@POLYN177538 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.writeImagePng@POLYN177538 the MagicNumber/String  96 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method drawInternal arguments UGraphic  ug"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#102"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00102] The argument ug is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00109] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00109] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  'http://plantuml.com' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  'Seed ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  36 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.sudoku.GraphicsSudoku.drawInternal@POLYN179562 the MagicNumber/String  'Difficulty ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00047] Public method writeImageEps is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00055] Public method writeImageSvg is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00064] Public method writeImageLatex is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00072] Public method writeImagePng is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/sudoku/GraphicsSudoku.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
