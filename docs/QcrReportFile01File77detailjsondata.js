console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html" 
 , "texte" : "File src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java 22 rule violations " 
 , "fic2"  : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00011"
 , "c5link" : "././qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#11"
 , "c1" : "DataBlock"
 , "c2" : "DataBlock(int;byte[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#17"
 , "c1" : "DataBlock[]"
 , "c2" : "getDataBlocks(byte[];Version)"
 , "c3" : "10"
 , "c4" : "39"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#81"
 , "c1" : "int"
 , "c2" : "getNumDataCodewords()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#85"
 , "c1" : "byte[]"
 , "c2" : "getCodewords()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.png" 

 , "ligneplantuml" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.svg" }

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
 , "c4" : "1"
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
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00017] For method getDataBlocks arguments byte[]  rawCodewords|Version  version"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#17"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00017] For method getDataBlocks list of called methods Object monObjet|ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock[] version_getVersionNumberN158693"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument version is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00033] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  24 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  7 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method ext.plantuml.com.google.zxing.datamatrix.decoder.DataBlock.getDataBlocks@POLYN156274 the MagicNumber/String  1 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/ext/plantuml/com/google/zxing/datamatrix/decoder/DataBlock.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
