console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/label/split_q__c.java.html" 
 , "texte" : "File src/gen/lib/label/split_q__c.java 206 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/label/split_q__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.label.split_q__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.label.split_q__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/src/gen/lib/label/split_q__c.java.html#33"
 , "c1" : "void"
 , "c2" : "SplitNode(ST_RTree;ST_Node_t___;ST_Branch_t;ST_Node_t___[])"
 , "c3" : "3"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/src/gen/lib/label/split_q__c.java.html#75"
 , "c1" : "void"
 , "c2" : "GetBranches(ST_RTree;ST_Node_t___;ST_Branch_t)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/src/gen/lib/label/split_q__c.java.html#108"
 , "c1" : "void"
 , "c2" : "MethodZero(ST_RTree)"
 , "c3" : "10"
 , "c4" : "34"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00183"
 , "c5link" : "././qc/src/gen/lib/label/split_q__c.java.html#183"
 , "c1" : "void"
 , "c2" : "PickSeeds(ST_RTree)"
 , "c3" : "5"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00223"
 , "c5link" : "././qc/src/gen/lib/label/split_q__c.java.html#223"
 , "c1" : "void"
 , "c2" : "Classify(ST_RTree;int;int)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00301"
 , "c5link" : "././qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c1" : "void"
 , "c2" : "LoadNodes(ST_RTree;ST_Node_t___;ST_Node_t___;ST_PartitionVars)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00301"
 , "c5link" : "././qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c1" : "void"
 , "c2" : "InitPVars(ST_RTree)"
 , "c3" : "2"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/label/split_q__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/label/split_q__c.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "23"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "163"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "6"
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
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method SplitNode arguments ST_RTree  rtp|ST_Node_t___  n|ST_Branch_t  b|ST_Node_t___[]  nn"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  '6vl3snxd6k95gamfkwfsfdguc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  'SplitNode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  'akhni40ndam0u9c6i7raxw4mp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  '4g80zdlbvunm838x8g3ic9tex' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  '9352ql3e58qs4fzapgjfrms2s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  '2cjo6wz1rmxfm5k7u7rw5dqpj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  'z7xk6s3hzi3qcoiq2exj9hpv' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  '6vl3snxd6k95gamfkwfsfdguc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method gen.lib.label.split_q__c.SplitNode@POLYN208179 the MagicNumber/String  'SplitNode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method GetBranches arguments ST_RTree  rtp|ST_Node_t___  n|ST_Branch_t  b"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00092] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  'al7lyin008m7kvrvuxhcuvn61' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  'GetBranches' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  'al7lyin008m7kvrvuxhcuvn61' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.label.split_q__c.GetBranches@POLYN210454 the MagicNumber/String  'GetBranches' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method MethodZero arguments ST_RTree  rtp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00116] The same method call rtp.split.Partitions[0]rtp.split.Partitions[0]rtp.split.Partitions[0] is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00117] The same method call rtp.split.Partitions[0]rtp.split.Partitions[0] is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00118] The same method call rtp.split.Partitions[0] is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00130] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00146] The same method call rtp.split.Partitions[0] is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00156] The same method call rtp.split.Partitions[0] is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  '4woz5xy4gjlahoj7no3ljxmex' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  'MethodZero' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  '4edp65b21liyii0fj1ikco7o0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  '20lpsuiyepr2ujozaf6gp4cc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  '9qtt6i40h8vtjp2cvqyb8ycaz' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  '2x1nx9nsne4x3ygmcywl1m3og' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  'jdepsnmrs3ghh78ql301sfvu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  'gqfhorilvtlogp6f2ozx5akf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  'flupwh3kosf3fkhkxllllt1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  '4woz5xy4gjlahoj7no3ljxmex' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method gen.lib.label.split_q__c.MethodZero@POLYN212253 the MagicNumber/String  'MethodZero' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#183"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00183] For method PickSeeds arguments ST_RTree  rtp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#183"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00183] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00196] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00199] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00200] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00201] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00196] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00199] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00200] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00201] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  '8rui4cun4tvq5xy6ke6r3p55e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  'PickSeeds' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  '8rui4cun4tvq5xy6ke6r3p55e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method gen.lib.label.split_q__c.PickSeeds@POLYN217466 the MagicNumber/String  'PickSeeds' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#223"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00223] For method Classify arguments ST_RTree  rtp|int  i|int  group"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#223"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00223] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  '4qyy2dpbkziuubssvfwb8u1sh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  'Classify' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  '4qyy2dpbkziuubssvfwb8u1sh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method gen.lib.label.split_q__c.Classify@POLYN220213 the MagicNumber/String  'Classify' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#280"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00280] For method LoadNodes arguments ST_RTree  rtp|ST_Node_t___  n|ST_Node_t___  q|ST_PartitionVars  p"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00301] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00301] The same method call rtp.split.Partitions[0] is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  'ay7l4setwyl3hbx4o2jpa7vyz' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  'LoadNodes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  'ay7l4setwyl3hbx4o2jpa7vyz' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.LoadNodes@POLYN222675 the MagicNumber/String  'LoadNodes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00301] For method InitPVars arguments ST_RTree  rtp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00301] The argument rtp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  'dvgjc83sogjhzf5kxpir405rh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  'InitPVars' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  64 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  'dvgjc83sogjhzf5kxpir405rh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/src/gen/lib/label/split_q__c.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method gen.lib.label.split_q__c.InitPVars@POLYN224646 the MagicNumber/String  'InitPVars' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/label/split_q__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
