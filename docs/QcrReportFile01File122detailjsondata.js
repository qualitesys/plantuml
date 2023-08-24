console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cgraph/rec__c.java.html" 
 , "texte" : "File src/gen/lib/cgraph/rec__c.java 41 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.cgraph.rec__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.cgraph.rec__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/src/gen/lib/cgraph/rec__c.java.html#81"
 , "c1" : "void"
 , "c2" : "set_data(ST_Agobj_s;ST_Agrec_s;int)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/src/gen/lib/cgraph/rec__c.java.html#102"
 , "c1" : "ST_Agrec_s"
 , "c2" : "aggetrec(__ptr__;CString;boolean)"
 , "c3" : "9"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00138"
 , "c5link" : "././qc/src/gen/lib/cgraph/rec__c.java.html#138"
 , "c1" : "void"
 , "c2" : "objputrec(ST_Agraph_s;ST_Agobj_s;ST_Agrec_s)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00167"
 , "c5link" : "././qc/src/gen/lib/cgraph/rec__c.java.html#167"
 , "c1" : "__ptr__"
 , "c2" : "agbindrec(__ptr__;CString;size_t;boolean)"
 , "c3" : "7"
 , "c4" : "18"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/gen/lib/cgraph/rec__c.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
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
 , "c4" : "27"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
 , "c1" : "00081"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method set_data arguments ST_Agobj_s  obj|ST_Agrec_s  data|int  mtflock"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument obj is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00087] The same method call AGTYPE(obj) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method gen.lib.cgraph.rec__c.set_data@POLYN187538 the MagicNumber/String  '62z9z5vraa2as0c9t108j9xaf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method gen.lib.cgraph.rec__c.set_data@POLYN187538 the MagicNumber/String  'set_data' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method gen.lib.cgraph.rec__c.set_data@POLYN187538 the MagicNumber/String  '62z9z5vraa2as0c9t108j9xaf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method gen.lib.cgraph.rec__c.set_data@POLYN187538 the MagicNumber/String  'set_data' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method aggetrec arguments __ptr__  obj|CString  name|boolean  mtf"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00112] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  '7p2ne3oknmyclvsw4lh3axtd8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  'aggetrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  'move to front lock inconsistency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  '7p2ne3oknmyclvsw4lh3axtd8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method gen.lib.cgraph.rec__c.aggetrec@POLYN188846 the MagicNumber/String  'aggetrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method objputrec arguments ST_Agraph_s  g|ST_Agobj_s  obj|ST_Agrec_s  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#138"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00138] The argument obj is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method gen.lib.cgraph.rec__c.objputrec@POLYN191049 the MagicNumber/String  '7sk4k5ipm2jnd244556g1kr6' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method gen.lib.cgraph.rec__c.objputrec@POLYN191049 the MagicNumber/String  'objputrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method gen.lib.cgraph.rec__c.objputrec@POLYN191049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method gen.lib.cgraph.rec__c.objputrec@POLYN191049 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.cgraph.rec__c.objputrec@POLYN191049 the MagicNumber/String  '7sk4k5ipm2jnd244556g1kr6' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.cgraph.rec__c.objputrec@POLYN191049 the MagicNumber/String  'objputrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method agbindrec arguments __ptr__  arg_obj|CString  recname|size_t  recsize|boolean  mtf"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#167"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00167] The argument recsize is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method gen.lib.cgraph.rec__c.agbindrec@POLYN192594 the MagicNumber/String  'dmh5i83l15mnn1pnu6f5dfv8l' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method gen.lib.cgraph.rec__c.agbindrec@POLYN192594 the MagicNumber/String  'agbindrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method gen.lib.cgraph.rec__c.agbindrec@POLYN192594 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method gen.lib.cgraph.rec__c.agbindrec@POLYN192594 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method gen.lib.cgraph.rec__c.agbindrec@POLYN192594 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method gen.lib.cgraph.rec__c.agbindrec@POLYN192594 the MagicNumber/String  'dmh5i83l15mnn1pnu6f5dfv8l' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method gen.lib.cgraph.rec__c.agbindrec@POLYN192594 the MagicNumber/String  'agbindrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.rec__c.set_data@POLYN187538"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method gen.lib.cgraph.rec__c.set_data@POLYN187538 the MagicNumber/String '62z9z5vraa2as0c9t108j9xaf' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method gen.lib.cgraph.rec__c.set_data@POLYN187538 the MagicNumber/String 'set_data' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method gen.lib.cgraph.rec__c.set_data@POLYN187538 the MagicNumber/String '62z9z5vraa2as0c9t108j9xaf' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00093] In the recursive method gen.lib.cgraph.rec__c.set_data@POLYN187538 the MagicNumber/String 'set_data' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/cgraph/rec__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
