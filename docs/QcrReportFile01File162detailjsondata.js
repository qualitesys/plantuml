console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/label/index__c.java.html" 
 , "texte" : "File src/gen/lib/label/index__c.java 172 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.label.index__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.label.index__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00077"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#77"
 , "c1" : "ST_LeafList_t"
 , "c2" : "RTreeNewLeafList(ST_Branch_t)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#105"
 , "c1" : "ST_LeafList_t"
 , "c2" : "RTreeLeafListAdd(ST_LeafList_t;ST_Branch_t)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#126"
 , "c1" : "void"
 , "c2" : "RTreeLeafListFree(ST_LeafList_t)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00170"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#170"
 , "c1" : "ST_RTree"
 , "c2" : "RTreeOpen()"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00188"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#188"
 , "c1" : "ST_Node_t___"
 , "c2" : "RTreeNewIndex(ST_RTree)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00205"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#205"
 , "c1" : "int"
 , "c2" : "RTreeClose2(ST_RTree;ST_Node_t___)"
 , "c3" : "10"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00244"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#244"
 , "c1" : "int"
 , "c2" : "RTreeClose(ST_RTree)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00266"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#266"
 , "c1" : "ST_LeafList_t"
 , "c2" : "RTreeSearch(ST_RTree;ST_Node_t___;ST_Rect_t)"
 , "c3" : "10"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00323"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#323"
 , "c1" : "int"
 , "c2" : "RTreeInsert(ST_RTree;ST_Rect_t;__ptr__;ST_Node_t___[];int)"
 , "c3" : "5"
 , "c4" : "29"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00431"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#431"
 , "c1" : "int"
 , "c2" : "RTreeInsert2(ST_RTree;ST_Rect_t;__ptr__;ST_Node_t___;ST_Node_t___[];int)"
 , "c3" : "8"
 , "c4" : "24"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/gen/lib/label/index__c.java.svg" }

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
 , "c4" : "33"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "110"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
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
 , "c1" : "00077"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method RTreeNewLeafList arguments ST_Branch_t  lp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument lp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN207833 the MagicNumber/String  '1rfaqe5urty5uyp5xb2r0idce' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN207833 the MagicNumber/String  'RTreeNewLeafList' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN207833 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN207833 the MagicNumber/String  '1rfaqe5urty5uyp5xb2r0idce' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN207833 the MagicNumber/String  'RTreeNewLeafList' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method RTreeLeafListAdd arguments ST_LeafList_t  llp|ST_Branch_t  lp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument lp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method gen.lib.label.index__c.RTreeLeafListAdd@POLYN208611 the MagicNumber/String  '6pvstz7axi8a7saeqe3nrrmg5' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method gen.lib.label.index__c.RTreeLeafListAdd@POLYN208611 the MagicNumber/String  'RTreeLeafListAdd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method gen.lib.label.index__c.RTreeLeafListAdd@POLYN208611 the MagicNumber/String  '6pvstz7axi8a7saeqe3nrrmg5' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method gen.lib.label.index__c.RTreeLeafListAdd@POLYN208611 the MagicNumber/String  'RTreeLeafListAdd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method RTreeLeafListFree arguments ST_LeafList_t  llp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#126"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00126] The argument llp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN209452 the MagicNumber/String  '6zraor7x44vrnm19d2igkvow2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN209452 the MagicNumber/String  'RTreeLeafListFree' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN209452 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN209452 the MagicNumber/String  '6zraor7x44vrnm19d2igkvow2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN209452 the MagicNumber/String  'RTreeLeafListFree' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method gen.lib.label.index__c.RTreeOpen@POLYN210355 the MagicNumber/String  'aa29m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method gen.lib.label.index__c.RTreeOpen@POLYN210355 the MagicNumber/String  'RTreeOpen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method gen.lib.label.index__c.RTreeOpen@POLYN210355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method gen.lib.label.index__c.RTreeOpen@POLYN210355 the MagicNumber/String  'aa29m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method gen.lib.label.index__c.RTreeOpen@POLYN210355 the MagicNumber/String  'RTreeOpen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#188"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00188] For method RTreeNewIndex arguments ST_RTree  rtp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#188"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00188] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method gen.lib.label.index__c.RTreeNewIndex@POLYN211136 the MagicNumber/String  'aa39m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method gen.lib.label.index__c.RTreeNewIndex@POLYN211136 the MagicNumber/String  'RTreeNewIndex' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method gen.lib.label.index__c.RTreeNewIndex@POLYN211136 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method gen.lib.label.index__c.RTreeNewIndex@POLYN211136 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method gen.lib.label.index__c.RTreeNewIndex@POLYN211136 the MagicNumber/String  'aa39m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method gen.lib.label.index__c.RTreeNewIndex@POLYN211136 the MagicNumber/String  'RTreeNewIndex' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method RTreeClose2 arguments ST_RTree  rtp|ST_Node_t___  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#205"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00205] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00214] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  'aa49m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  'RTreeClose2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  'aa49m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method gen.lib.label.index__c.RTreeClose2@POLYN211958 the MagicNumber/String  'RTreeClose2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#244"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00244] For method RTreeClose arguments ST_RTree  rtp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#244"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00244] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method gen.lib.label.index__c.RTreeClose@POLYN214251 the MagicNumber/String  'aa59m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method gen.lib.label.index__c.RTreeClose@POLYN214251 the MagicNumber/String  'RTreeClose' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method gen.lib.label.index__c.RTreeClose@POLYN214251 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method gen.lib.label.index__c.RTreeClose@POLYN214251 the MagicNumber/String  'aa59m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method gen.lib.label.index__c.RTreeClose@POLYN214251 the MagicNumber/String  'RTreeClose' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#266"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00266] For method RTreeSearch arguments ST_RTree  rtp|ST_Node_t___  n|ST_Rect_t  r"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#266"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00266] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00282] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00282] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00284] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00286] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00280] The same method call Overlap(r,n.branch[i].rect) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00286] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00293] The same method call Overlap(r,n.branch[i].rect) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  'aa69m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  'RTreeSearch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  'aa69m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String  'RTreeSearch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#323"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00323] For method RTreeInsert arguments ST_RTree  rtp|ST_Rect_t  r|__ptr__  data|ST_Node_t___[]  n|int  level"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#323"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00323] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  '3wss9r0zgt5k06j8ovjv7hq0d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  'RTreeInsert' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00328] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  'akhni40ndam0u9c6i7raxw4mp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00337] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  'bzb1oqc35evr96528iv16glb0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00338"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  '9352ql3e58qs4fzapgjfrms2s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00339] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  '3kxquse3qg2crme5dzybg9jxe' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00342"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  '2y8kv6b3ysrr61q7tqn76rhhc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  'dn4oynmx9ugizzs5pkxiyptbi' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  '5c97f6vfxny0zz35l2bu4maox' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  '2u8wpa4w1q7rg14t07bny6p8i' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00355"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00359"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00359] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  '3wss9r0zgt5k06j8ovjv7hq0d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method gen.lib.label.index__c.RTreeInsert@POLYN217599 the MagicNumber/String  'RTreeInsert' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00431] For method RTreeInsert2 arguments ST_RTree  rtp|ST_Rect_t  r|__ptr__  data|ST_Node_t___  n|ST_Node_t___[]  new_|int  level"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00431] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  'bsc9m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  'RTreeInsert2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  'akhni40ndam0u9c6i7raxw4mp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  '8k1kgaoa4b2mcye1xthc3f1kf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  '9352ql3e58qs4fzapgjfrms2s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  '1um729vqiy3529kbsrzyl9u3y' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  '22oqraxnqrjall7fj6pooexmi' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  'c9ckhc8veujmwcw0ar3u3zld4' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  'bsc9m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String  'RTreeInsert2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.label.index__c.RTreeSearch@POLYN215167"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.label.index__c.RTreeInsert2@POLYN220932"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 'RTreeSearch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#267"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00267] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 'aa69m7d7qc06m8id896e60lkg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#270"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00270] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#278"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00278] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#279"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00279] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 64 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00280] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#283"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00283] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00285] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00292] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#292"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00292] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 64 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00293"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#293"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00293] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00300] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 'RTreeSearch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00300] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN215167 the MagicNumber/String 'aa69m7d7qc06m8id896e60lkg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String '1um729vqiy3529kbsrzyl9u3y' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String '22oqraxnqrjall7fj6pooexmi' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String '8k1kgaoa4b2mcye1xthc3f1kf' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String '9352ql3e58qs4fzapgjfrms2s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 'RTreeInsert2' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 'RTreeInsert2' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 'akhni40ndam0u9c6i7raxw4mp' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 'bsc9m7d7qc06m8id896e60lkg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 'bsc9m7d7qc06m8id896e60lkg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 'c9ckhc8veujmwcw0ar3u3zld4' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00431] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN220932 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/label/index__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
