console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/dotgen/class1__c.java.html" 
 , "texte" : "File src/gen/lib/dotgen/class1__c.java 55 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/dotgen/class1__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.dotgen.class1__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.dotgen.class1__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/src/gen/lib/dotgen/class1__c.java.html#44"
 , "c1" : "boolean"
 , "c2" : "nonconstraint_edge(ST_Agedge_s)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/src/gen/lib/dotgen/class1__c.java.html#66"
 , "c1" : "void"
 , "c2" : "interclust1(ST_Agraph_s;ST_Agnode_s;ST_Agnode_s;ST_Agedge_s)"
 , "c3" : "7"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/src/gen/lib/dotgen/class1__c.java.html#106"
 , "c1" : "void"
 , "c2" : "class1_(ST_Agraph_s)"
 , "c3" : "9"
 , "c4" : "18"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/dotgen/class1__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/dotgen/class1__c.java.svg" }

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
 , "c4" : "13"
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
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
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
 , "c4" : "34"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00039] The class class1__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method nonconstraint_edge arguments ST_Agedge_s  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00049] The same method call agxget(e,Z.z().E_constr) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00049] Assigning instead of comparing on constr=agxget(e,Z.z().E_constr) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  '2luyof8ca7ewf9r08z3os3lk7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  'nonconstraint_edge' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  '2luyof8ca7ewf9r08z3os3lk7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN177086 the MagicNumber/String  'nonconstraint_edge' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method interclust1 arguments ST_Agraph_s  g|ST_Agnode_s  t|ST_Agnode_s  h|ST_Agedge_s  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  'dpimuv55sylui7jx8fh3ic1qc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  'interclust1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  'dpimuv55sylui7jx8fh3ic1qc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String  'interclust1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#106"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00106] For method class1_ arguments ST_Agraph_s  g"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00139] Assigning instead of comparing on rep=find_fast_edge(t,h) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  'acy5ct6402jgf0ga5oeeskx5m' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  'class1_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  'acy5ct6402jgf0ga5oeeskx5m' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method gen.lib.dotgen.class1__c.class1_@POLYN181172 the MagicNumber/String  'class1_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.dotgen.class1__c.interclust1@POLYN178151"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 'dpimuv55sylui7jx8fh3ic1qc' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#67"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00067] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 'interclust1' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00072] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#75"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00075] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#79"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00079] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#89"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00089] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 10 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 'dpimuv55sylui7jx8fh3ic1qc' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#97"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00097] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN178151 the MagicNumber/String 'interclust1' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
