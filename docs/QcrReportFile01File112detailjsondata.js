console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cgraph/apply__c.java.html" 
 , "texte" : "File src/gen/lib/cgraph/apply__c.java 47 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/cgraph/apply__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.cgraph.apply__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.cgraph.apply__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/gen/lib/cgraph/apply__c.java.html#35"
 , "c1" : "ST_Agobj_s"
 , "c2" : "subgraph_search(ST_Agraph_s;ST_Agobj_s)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c1" : "void"
 , "c2" : "rec_apply(ST_Agraph_s;ST_Agobj_s;CFunction;__ptr__;CFunction;boolean)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c1" : "int"
 , "c2" : "agapply(ST_Agraph_s;ST_Agobj_s;CFunction;__ptr__;boolean)"
 , "c3" : "7"
 , "c4" : "18"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/cgraph/apply__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/cgraph/apply__c.java.svg" }

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
 , "c4" : "10"
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
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "23"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAVCWE500"
 , "c3" : "Static public field not marked final"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class apply__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00028] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00028] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method subgraph_search arguments ST_Agraph_s  sub|ST_Agobj_s  g"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#35"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00035] The argument sub is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method gen.lib.cgraph.apply__c.subgraph_search@POLYN167375 the MagicNumber/String  '95y4aknoddh42lieikrb72vxw' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method gen.lib.cgraph.apply__c.subgraph_search@POLYN167375 the MagicNumber/String  'subgraph_search' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method gen.lib.cgraph.apply__c.subgraph_search@POLYN167375 the MagicNumber/String  '95y4aknoddh42lieikrb72vxw' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method gen.lib.cgraph.apply__c.subgraph_search@POLYN167375 the MagicNumber/String  'subgraph_search' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method rec_apply arguments ST_Agraph_s  g|ST_Agobj_s  obj|CFunction  fn|__ptr__  arg|CFunction  objsearch|boolean  preorder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00112] The argument fn is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00112] The argument objsearch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00112] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00112] Assigning instead of comparing on subobj=(ST_Agobj_s )objsearch.exe(sub,obj) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String  '8s9l15wqucf1glmbeb6fmya8e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String  'rec_apply' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String  '8s9l15wqucf1glmbeb6fmya8e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String  'rec_apply' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method agapply arguments ST_Agraph_s  g|ST_Agobj_s  obj|CFunction  fn|__ptr__  arg|boolean  preorder"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00112] Assigning instead of comparing on subobj=(ST_Agobj_s )objsearch.exe(g,obj) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  '9hqql178zpl8iudlf6sgnv7aj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  'agapply' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  'arkoj4niyfqe213zut6szzeji' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  '3h8kzrrsobdp839772gupdrbf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  '2pc67byzirrkhe1cmdoguh6i1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  '8d9xfgejx5vgd6shva5wk5k06' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  '8d9xfgejx5vgd6shva5wk5k06' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  'c24nfmv9i7o5eoqaymbibp7m7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  '9hqql178zpl8iudlf6sgnv7aj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.apply__c.agapply@POLYN169585 the MagicNumber/String  'agapply' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.apply__c.rec_apply@POLYN167967"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.apply__c.subgraph_search@POLYN167375"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String '8s9l15wqucf1glmbeb6fmya8e' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String '8s9l15wqucf1glmbeb6fmya8e' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String 'rec_apply' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String 'rec_apply' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.cgraph.apply__c.rec_apply@POLYN167967 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00036] In the recursive method gen.lib.cgraph.apply__c.subgraph_search@POLYN167375 the MagicNumber/String '95y4aknoddh42lieikrb72vxw' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00036] In the recursive method gen.lib.cgraph.apply__c.subgraph_search@POLYN167375 the MagicNumber/String 'subgraph_search' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method gen.lib.cgraph.apply__c.subgraph_search@POLYN167375 the MagicNumber/String '95y4aknoddh42lieikrb72vxw' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/gen/lib/cgraph/apply__c.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method gen.lib.cgraph.apply__c.subgraph_search@POLYN167375 the MagicNumber/String 'subgraph_search' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
