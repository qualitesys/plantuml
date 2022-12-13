console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cgraph/rec__c.java.html" 
 , "texte" : "File src/gen/lib/cgraph/rec__c.java 49 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/cgraph/rec__c.java.xml" 
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
 , "c5" : "00037"
 , "c5link" : "././qc/src/gen/lib/cgraph/rec__c.java.html#37"
 , "c1" : "void"
 , "c2" : "set_data(ST_Agobj_s;ST_Agrec_s;int)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/gen/lib/cgraph/rec__c.java.html#58"
 , "c1" : "ST_Agrec_s"
 , "c2" : "aggetrec(__ptr__;CString;boolean)"
 , "c3" : "9"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/src/gen/lib/cgraph/rec__c.java.html#94"
 , "c1" : "void"
 , "c2" : "objputrec(ST_Agraph_s;ST_Agobj_s;ST_Agrec_s)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/src/gen/lib/cgraph/rec__c.java.html#123"
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
   {"ligne" : "./qc/src/gen/lib/cgraph/rec__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/cgraph/rec__c.java.svg" }

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
 , "c4" : "11"
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
 , "c4" : "2"
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
 , "c1" : "00037"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method set_data arguments ST_Agobj_s  obj|ST_Agrec_s  data|int  mtflock"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument obj is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00043] The same method call AGTYPE(obj) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method gen.lib.cgraph.rec__c.set_data@POLYN177018 the MagicNumber/String  '62z9z5vraa2as0c9t108j9xaf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method gen.lib.cgraph.rec__c.set_data@POLYN177018 the MagicNumber/String  'set_data' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method gen.lib.cgraph.rec__c.set_data@POLYN177018 the MagicNumber/String  '62z9z5vraa2as0c9t108j9xaf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method gen.lib.cgraph.rec__c.set_data@POLYN177018 the MagicNumber/String  'set_data' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method aggetrec arguments __ptr__  obj|CString  name|boolean  mtf"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00068] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  '7p2ne3oknmyclvsw4lh3axtd8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  'aggetrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  'move to front lock inconsistency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  '7p2ne3oknmyclvsw4lh3axtd8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method gen.lib.cgraph.rec__c.aggetrec@POLYN178324 the MagicNumber/String  'aggetrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method objputrec arguments ST_Agraph_s  g|ST_Agobj_s  obj|ST_Agrec_s  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument obj is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method gen.lib.cgraph.rec__c.objputrec@POLYN180523 the MagicNumber/String  '7sk4k5ipm2jnd244556g1kr6' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method gen.lib.cgraph.rec__c.objputrec@POLYN180523 the MagicNumber/String  'objputrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method gen.lib.cgraph.rec__c.objputrec@POLYN180523 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.rec__c.objputrec@POLYN180523 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.cgraph.rec__c.objputrec@POLYN180523 the MagicNumber/String  '7sk4k5ipm2jnd244556g1kr6' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.cgraph.rec__c.objputrec@POLYN180523 the MagicNumber/String  'objputrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method agbindrec arguments __ptr__  arg_obj|CString  recname|size_t  recsize|boolean  mtf"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument recsize is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String  'dmh5i83l15mnn1pnu6f5dfv8l' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String  'agbindrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String  'dmh5i83l15mnn1pnu6f5dfv8l' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String  'agbindrec' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.rec__c.set_data@POLYN177018"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.rec__c.agbindrec@POLYN182066"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00038] In the recursive method gen.lib.cgraph.rec__c.set_data@POLYN177018 the MagicNumber/String '62z9z5vraa2as0c9t108j9xaf' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00038] In the recursive method gen.lib.cgraph.rec__c.set_data@POLYN177018 the MagicNumber/String 'set_data' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method gen.lib.cgraph.rec__c.set_data@POLYN177018 the MagicNumber/String '62z9z5vraa2as0c9t108j9xaf' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method gen.lib.cgraph.rec__c.set_data@POLYN177018 the MagicNumber/String 'set_data' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String 'agbindrec' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String 'dmh5i83l15mnn1pnu6f5dfv8l' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00151] In the recursive method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String 'agbindrec' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cgraph/rec__c.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method gen.lib.cgraph.rec__c.agbindrec@POLYN182066 the MagicNumber/String 'dmh5i83l15mnn1pnu6f5dfv8l' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/cgraph/rec__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
