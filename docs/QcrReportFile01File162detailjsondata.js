console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/label/index__c.java.html" 
 , "texte" : "File src/gen/lib/label/index__c.java 173 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/label/index__c.java.xml" 
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
 , "c5" : "00033"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#33"
 , "c1" : "ST_LeafList_t"
 , "c2" : "RTreeNewLeafList(ST_Branch_t)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#61"
 , "c1" : "ST_LeafList_t"
 , "c2" : "RTreeLeafListAdd(ST_LeafList_t;ST_Branch_t)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#82"
 , "c1" : "void"
 , "c2" : "RTreeLeafListFree(ST_LeafList_t)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#126"
 , "c1" : "ST_RTree"
 , "c2" : "RTreeOpen()"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00144"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#144"
 , "c1" : "ST_Node_t___"
 , "c2" : "RTreeNewIndex(ST_RTree)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00161"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#161"
 , "c1" : "int"
 , "c2" : "RTreeClose2(ST_RTree;ST_Node_t___)"
 , "c3" : "10"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00200"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#200"
 , "c1" : "int"
 , "c2" : "RTreeClose(ST_RTree)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00219"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#219"
 , "c1" : "ST_LeafList_t"
 , "c2" : "RTreeSearch(ST_RTree;ST_Node_t___;ST_Rect_t)"
 , "c3" : "10"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00276"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#276"
 , "c1" : "int"
 , "c2" : "RTreeInsert(ST_RTree;ST_Rect_t;__ptr__;ST_Node_t___[];int)"
 , "c3" : "5"
 , "c4" : "29"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00384"
 , "c5link" : "././qc/src/gen/lib/label/index__c.java.html#384"
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
   {"ligne" : "./qc/src/gen/lib/label/index__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/label/index__c.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00026"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00026] The class index__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method RTreeNewLeafList arguments ST_Branch_t  lp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument lp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN200079 the MagicNumber/String  '1rfaqe5urty5uyp5xb2r0idce' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN200079 the MagicNumber/String  'RTreeNewLeafList' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN200079 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN200079 the MagicNumber/String  '1rfaqe5urty5uyp5xb2r0idce' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method gen.lib.label.index__c.RTreeNewLeafList@POLYN200079 the MagicNumber/String  'RTreeNewLeafList' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method RTreeLeafListAdd arguments ST_LeafList_t  llp|ST_Branch_t  lp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument lp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method gen.lib.label.index__c.RTreeLeafListAdd@POLYN200855 the MagicNumber/String  '6pvstz7axi8a7saeqe3nrrmg5' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method gen.lib.label.index__c.RTreeLeafListAdd@POLYN200855 the MagicNumber/String  'RTreeLeafListAdd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method gen.lib.label.index__c.RTreeLeafListAdd@POLYN200855 the MagicNumber/String  '6pvstz7axi8a7saeqe3nrrmg5' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method gen.lib.label.index__c.RTreeLeafListAdd@POLYN200855 the MagicNumber/String  'RTreeLeafListAdd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method RTreeLeafListFree arguments ST_LeafList_t  llp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#82"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00082] The argument llp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00087] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN201694 the MagicNumber/String  '6zraor7x44vrnm19d2igkvow2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN201694 the MagicNumber/String  'RTreeLeafListFree' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN201694 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN201694 the MagicNumber/String  '6zraor7x44vrnm19d2igkvow2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method gen.lib.label.index__c.RTreeLeafListFree@POLYN201694 the MagicNumber/String  'RTreeLeafListFree' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method gen.lib.label.index__c.RTreeOpen@POLYN202595 the MagicNumber/String  'aa29m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method gen.lib.label.index__c.RTreeOpen@POLYN202595 the MagicNumber/String  'RTreeOpen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method gen.lib.label.index__c.RTreeOpen@POLYN202595 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method gen.lib.label.index__c.RTreeOpen@POLYN202595 the MagicNumber/String  'aa29m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method gen.lib.label.index__c.RTreeOpen@POLYN202595 the MagicNumber/String  'RTreeOpen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#144"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00144] For method RTreeNewIndex arguments ST_RTree  rtp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#144"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00144] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method gen.lib.label.index__c.RTreeNewIndex@POLYN203374 the MagicNumber/String  'aa39m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method gen.lib.label.index__c.RTreeNewIndex@POLYN203374 the MagicNumber/String  'RTreeNewIndex' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method gen.lib.label.index__c.RTreeNewIndex@POLYN203374 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method gen.lib.label.index__c.RTreeNewIndex@POLYN203374 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method gen.lib.label.index__c.RTreeNewIndex@POLYN203374 the MagicNumber/String  'aa39m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method gen.lib.label.index__c.RTreeNewIndex@POLYN203374 the MagicNumber/String  'RTreeNewIndex' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method RTreeClose2 arguments ST_RTree  rtp|ST_Node_t___  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#161"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00161] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  'aa49m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  'RTreeClose2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  'aa49m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method gen.lib.label.index__c.RTreeClose2@POLYN204194 the MagicNumber/String  'RTreeClose2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#200"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00200] For method RTreeClose arguments ST_RTree  rtp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#200"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00200] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method gen.lib.label.index__c.RTreeClose@POLYN206485 the MagicNumber/String  'aa59m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method gen.lib.label.index__c.RTreeClose@POLYN206485 the MagicNumber/String  'RTreeClose' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method gen.lib.label.index__c.RTreeClose@POLYN206485 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method gen.lib.label.index__c.RTreeClose@POLYN206485 the MagicNumber/String  'aa59m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method gen.lib.label.index__c.RTreeClose@POLYN206485 the MagicNumber/String  'RTreeClose' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method RTreeSearch arguments ST_RTree  rtp|ST_Node_t___  n|ST_Rect_t  r"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00219] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00235] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00235] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00237] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00239] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00233] The same method call Overlap(r,n.branch[i].rect) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00239] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00246] The same method call Overlap(r,n.branch[i].rect) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  'aa69m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  'RTreeSearch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  'aa69m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String  'RTreeSearch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#276"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00276] For method RTreeInsert arguments ST_RTree  rtp|ST_Rect_t  r|__ptr__  data|ST_Node_t___[]  n|int  level"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#276"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00276] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  '3wss9r0zgt5k06j8ovjv7hq0d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  'RTreeInsert' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00289"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  'akhni40ndam0u9c6i7raxw4mp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  'bzb1oqc35evr96528iv16glb0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  '9352ql3e58qs4fzapgjfrms2s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  '3kxquse3qg2crme5dzybg9jxe' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00295"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00296"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  '2y8kv6b3ysrr61q7tqn76rhhc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00299"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00299] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  'dn4oynmx9ugizzs5pkxiyptbi' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  '5c97f6vfxny0zz35l2bu4maox' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  '2u8wpa4w1q7rg14t07bny6p8i' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00308"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  '3wss9r0zgt5k06j8ovjv7hq0d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method gen.lib.label.index__c.RTreeInsert@POLYN209825 the MagicNumber/String  'RTreeInsert' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00384] For method RTreeInsert2 arguments ST_RTree  rtp|ST_Rect_t  r|__ptr__  data|ST_Node_t___  n|ST_Node_t___[]  new_|int  level"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00384] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  'bsc9m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  'RTreeInsert2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  'akhni40ndam0u9c6i7raxw4mp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  '8k1kgaoa4b2mcye1xthc3f1kf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  '9352ql3e58qs4fzapgjfrms2s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  '1um729vqiy3529kbsrzyl9u3y' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  '22oqraxnqrjall7fj6pooexmi' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  'c9ckhc8veujmwcw0ar3u3zld4' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  'bsc9m7d7qc06m8id896e60lkg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String  'RTreeInsert2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.label.index__c.RTreeSearch@POLYN207401"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.label.index__c.RTreeInsert2@POLYN213148"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00220] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 'RTreeSearch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#220"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00220] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 'aa69m7d7qc06m8id896e60lkg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00223] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#229"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00229] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#231"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00231] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00232] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#232"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00232] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 64 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#233"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00233] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#236"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00236] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#245"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00245] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 64 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#246"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00246] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 'RTreeSearch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#253"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00253] In the recursive method gen.lib.label.index__c.RTreeSearch@POLYN207401 the MagicNumber/String 'aa69m7d7qc06m8id896e60lkg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String '1um729vqiy3529kbsrzyl9u3y' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String '22oqraxnqrjall7fj6pooexmi' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String '8k1kgaoa4b2mcye1xthc3f1kf' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String '9352ql3e58qs4fzapgjfrms2s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 'RTreeInsert2' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 'RTreeInsert2' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 'akhni40ndam0u9c6i7raxw4mp' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 'bsc9m7d7qc06m8id896e60lkg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 'bsc9m7d7qc06m8id896e60lkg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 'c9ckhc8veujmwcw0ar3u3zld4' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/src/gen/lib/label/index__c.java.html#384"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00384] In the recursive method gen.lib.label.index__c.RTreeInsert2@POLYN213148 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/label/index__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
