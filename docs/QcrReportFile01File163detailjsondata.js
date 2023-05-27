console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/label/node__c.java.html" 
 , "texte" : "File src/gen/lib/label/node__c.java 90 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.label.node__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.label.node__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/src/gen/lib/label/node__c.java.html#69"
 , "c1" : "ST_Node_t___"
 , "c2" : "RTreeNewNode(ST_RTree)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/src/gen/lib/label/node__c.java.html#90"
 , "c1" : "void"
 , "c2" : "InitNode(ST_Node_t___)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/src/gen/lib/label/node__c.java.html#111"
 , "c1" : "void"
 , "c2" : "InitBranch(ST_Branch_t)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/src/gen/lib/label/node__c.java.html#128"
 , "c1" : "ST_Rect_t"
 , "c2" : "NodeCover(ST_Node_t___)"
 , "c3" : "5"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/src/gen/lib/label/node__c.java.html#157"
 , "c1" : "int"
 , "c2" : "PickBranch(ST_Rect_t;ST_Node_t___)"
 , "c3" : "6"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00197"
 , "c5link" : "././qc/src/gen/lib/label/node__c.java.html#197"
 , "c1" : "int"
 , "c2" : "AddBranch(ST_RTree;ST_Branch_t;ST_Node_t___;ST_Node_t___[])"
 , "c3" : "8"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00240"
 , "c5link" : "././qc/src/gen/lib/label/node__c.java.html#240"
 , "c1" : "void"
 , "c2" : "DisconBranch(ST_Node_t___;int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/gen/lib/label/node__c.java.svg" }

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
 , "c4" : "5"
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "69"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method RTreeNewNode arguments ST_RTree  rtp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method gen.lib.label.node__c.RTreeNewNode@POLYN186541 the MagicNumber/String  '9uj7ni1m6q6drtoh56w82d6m4' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method gen.lib.label.node__c.RTreeNewNode@POLYN186541 the MagicNumber/String  'RTreeNewNode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method gen.lib.label.node__c.RTreeNewNode@POLYN186541 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method gen.lib.label.node__c.RTreeNewNode@POLYN186541 the MagicNumber/String  '9uj7ni1m6q6drtoh56w82d6m4' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method gen.lib.label.node__c.RTreeNewNode@POLYN186541 the MagicNumber/String  'RTreeNewNode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method InitNode arguments ST_Node_t___  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method gen.lib.label.node__c.InitNode@POLYN187342 the MagicNumber/String  '4qk9wkm05q2pwf20ud6g2tufg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method gen.lib.label.node__c.InitNode@POLYN187342 the MagicNumber/String  'InitNode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method gen.lib.label.node__c.InitNode@POLYN187342 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method gen.lib.label.node__c.InitNode@POLYN187342 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method gen.lib.label.node__c.InitNode@POLYN187342 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method gen.lib.label.node__c.InitNode@POLYN187342 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method gen.lib.label.node__c.InitNode@POLYN187342 the MagicNumber/String  '4qk9wkm05q2pwf20ud6g2tufg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method gen.lib.label.node__c.InitNode@POLYN187342 the MagicNumber/String  'InitNode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method InitBranch arguments ST_Branch_t  b"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String  'ruhxixxei7au9z1iaj0zggwo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String  'InitBranch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String  'ruhxixxei7au9z1iaj0zggwo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String  'InitBranch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method NodeCover arguments ST_Node_t___  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00142] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  '42vjqe8n5yeq2jjby00xzrotk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  'NodeCover' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  '42vjqe8n5yeq2jjby00xzrotk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method gen.lib.label.node__c.NodeCover@POLYN188904 the MagicNumber/String  'NodeCover' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method PickBranch arguments ST_Rect_t  r|ST_Node_t___  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00167] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00168] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00171] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  'bek56v2skz6jfvw4uggy2h5w3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  'PickBranch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  'bek56v2skz6jfvw4uggy2h5w3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method gen.lib.label.node__c.PickBranch@POLYN190410 the MagicNumber/String  'PickBranch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00197] For method AddBranch arguments ST_RTree  rtp|ST_Branch_t  b|ST_Node_t___  n|ST_Node_t___[]  new_"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#197"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00197] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  '2njctcrpeff95ysmv9ji34x4s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  'AddBranch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  '2y8kv6b3ysrr61q7tqn76rhhc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  'dn4oynmx9ugizzs5pkxiyptbi' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  '5c97f6vfxny0zz35l2bu4maox' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  '2u8wpa4w1q7rg14t07bny6p8i' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  '6tkfiebspy7ecivrzb3l5y7jd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  '2njctcrpeff95ysmv9ji34x4s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method gen.lib.label.node__c.AddBranch@POLYN192839 the MagicNumber/String  'AddBranch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#240"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00240] For method DisconBranch arguments ST_Node_t___  n|int  i"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method gen.lib.label.node__c.DisconBranch@POLYN194834 the MagicNumber/String  'eqzamflj58f43cflwns9cemnk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method gen.lib.label.node__c.DisconBranch@POLYN194834 the MagicNumber/String  'DisconBranch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method gen.lib.label.node__c.DisconBranch@POLYN194834 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method gen.lib.label.node__c.DisconBranch@POLYN194834 the MagicNumber/String  'eqzamflj58f43cflwns9cemnk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method gen.lib.label.node__c.DisconBranch@POLYN194834 the MagicNumber/String  'DisconBranch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.label.node__c.InitBranch@POLYN188258"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String 'InitBranch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String 'ruhxixxei7au9z1iaj0zggwo' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00115] In the recursive method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String 'InitBranch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/node__c.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method gen.lib.label.node__c.InitBranch@POLYN188258 the MagicNumber/String 'ruhxixxei7au9z1iaj0zggwo' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/label/node__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
