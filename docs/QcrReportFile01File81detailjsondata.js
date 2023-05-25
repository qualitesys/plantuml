console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html" 
 , "texte" : "File src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java 33 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#31"
 , "c1" : "DataBlock"
 , "c2" : "DataBlock(int;byte[])"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#47"
 , "c1" : "DataBlock[]"
 , "c2" : "getDataBlocks(byte[];Version;ErrorCorrectionLevel)"
 , "c3" : "12"
 , "c4" : "41"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#115"
 , "c1" : "int"
 , "c2" : "getNumDataCodewords()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#119"
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
   {

 "ligneplantuml" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.svg" }

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
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c4" : "14"
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
 , "c1" : "00047"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method getDataBlocks arguments byte[]  rawCodewords|Version  version|ErrorCorrectionLevel  ecLevel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00047] For method getDataBlocks list of called methods Object monObjet|ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock[] version_getECBlocksForLevelN164618"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument version is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00070] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#80"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00080] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00096] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method ext.plantuml.com.google.zxing.qrcode.decoder.DataBlock.getDataBlocks@POLYN164301 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/ext/plantuml/com/google/zxing/qrcode/decoder/DataBlock.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
