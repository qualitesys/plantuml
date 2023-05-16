console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/dotgen/class1__c.java.html" 
 , "texte" : "File src/gen/lib/dotgen/class1__c.java 54 rule violations " 
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
 , "c5" : "00088"
 , "c5link" : "././qc/src/gen/lib/dotgen/class1__c.java.html#88"
 , "c1" : "boolean"
 , "c2" : "nonconstraint_edge(ST_Agedge_s)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/src/gen/lib/dotgen/class1__c.java.html#110"
 , "c1" : "void"
 , "c2" : "interclust1(ST_Agraph_s;ST_Agnode_s;ST_Agnode_s;ST_Agedge_s)"
 , "c3" : "7"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/src/gen/lib/dotgen/class1__c.java.html#150"
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
   {

 "ligneplantuml" : "./qc/src/gen/lib/dotgen/class1__c.java.svg" }

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
 , "c1" : "00088"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method nonconstraint_edge arguments ST_Agedge_s  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00093] The same method call agxget(e,Z.z().E_constr) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00093] Assigning instead of comparing on constr=agxget(e,Z.z().E_constr) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  '2luyof8ca7ewf9r08z3os3lk7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  'nonconstraint_edge' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  '2luyof8ca7ewf9r08z3os3lk7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method gen.lib.dotgen.class1__c.nonconstraint_edge@POLYN180166 the MagicNumber/String  'nonconstraint_edge' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method interclust1 arguments ST_Agraph_s  g|ST_Agnode_s  t|ST_Agnode_s  h|ST_Agedge_s  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  'dpimuv55sylui7jx8fh3ic1qc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  'interclust1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  'dpimuv55sylui7jx8fh3ic1qc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String  'interclust1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method class1_ arguments ST_Agraph_s  g"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00183] Assigning instead of comparing on rep=find_fast_edge(t,h) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  'acy5ct6402jgf0ga5oeeskx5m' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  'class1_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  'acy5ct6402jgf0ga5oeeskx5m' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method gen.lib.dotgen.class1__c.class1_@POLYN184252 the MagicNumber/String  'class1_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.dotgen.class1__c.interclust1@POLYN181231"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 'dpimuv55sylui7jx8fh3ic1qc' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 'interclust1' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00136] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 10 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 'dpimuv55sylui7jx8fh3ic1qc' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/dotgen/class1__c.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method gen.lib.dotgen.class1__c.interclust1@POLYN181231 the MagicNumber/String 'interclust1' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/dotgen/class1__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
