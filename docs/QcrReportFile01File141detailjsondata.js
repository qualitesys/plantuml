console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/dotgen/acyclic__c.java.html" 
 , "texte" : "File src/gen/lib/dotgen/acyclic__c.java 42 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/dotgen/acyclic__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.dotgen.acyclic__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.dotgen.acyclic__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/src/gen/lib/dotgen/acyclic__c.java.html#32"
 , "c1" : "void"
 , "c2" : "reverse_edge(ST_Agedge_s)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/src/gen/lib/dotgen/acyclic__c.java.html#51"
 , "c1" : "void"
 , "c2" : "dfs(ST_Agnode_s)"
 , "c3" : "6"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/src/gen/lib/dotgen/acyclic__c.java.html#83"
 , "c1" : "void"
 , "c2" : "acyclic_(ST_Agraph_s)"
 , "c3" : "4"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/dotgen/acyclic__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/dotgen/acyclic__c.java.svg" }

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
 , "c4" : "24"
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
 , "c1" : "00025"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00025] The class acyclic__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method reverse_edge arguments ST_Agedge_s  e"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00037] Assigning instead of comparing on f=find_fast_edge(aghead(e),agtail(e)) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method gen.lib.dotgen.acyclic__c.reverse_edge@POLYN167397 the MagicNumber/String  '9hm902ya6q6bq246ewuh67h38' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method gen.lib.dotgen.acyclic__c.reverse_edge@POLYN167397 the MagicNumber/String  'reverse_edge' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method gen.lib.dotgen.acyclic__c.reverse_edge@POLYN167397 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method gen.lib.dotgen.acyclic__c.reverse_edge@POLYN167397 the MagicNumber/String  '9hm902ya6q6bq246ewuh67h38' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method gen.lib.dotgen.acyclic__c.reverse_edge@POLYN167397 the MagicNumber/String  'reverse_edge' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method dfs arguments ST_Agnode_s  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00062] Assigning instead of comparing on e=(ST_Agedge_s )ND_out(n).list.get_(i) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  'e9h7n52fs8rucrug9tr0zebe2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  'dfs' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  'e9h7n52fs8rucrug9tr0zebe2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String  'dfs' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method acyclic_ arguments ST_Agraph_s  g"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method gen.lib.dotgen.acyclic__c.acyclic_@POLYN170247 the MagicNumber/String  '1ejgnwd7ek344caegjwg46n6h' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method gen.lib.dotgen.acyclic__c.acyclic_@POLYN170247 the MagicNumber/String  'acyclic_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.dotgen.acyclic__c.acyclic_@POLYN170247 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method gen.lib.dotgen.acyclic__c.acyclic_@POLYN170247 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method gen.lib.dotgen.acyclic__c.acyclic_@POLYN170247 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method gen.lib.dotgen.acyclic__c.acyclic_@POLYN170247 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.dotgen.acyclic__c.acyclic_@POLYN170247 the MagicNumber/String  '1ejgnwd7ek344caegjwg46n6h' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.dotgen.acyclic__c.acyclic_@POLYN170247 the MagicNumber/String  'acyclic_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.dotgen.acyclic__c.dfs@POLYN168505"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 'dfs' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 'e9h7n52fs8rucrug9tr0zebe2' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00072] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 'dfs' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/dotgen/acyclic__c.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method gen.lib.dotgen.acyclic__c.dfs@POLYN168505 the MagicNumber/String 'e9h7n52fs8rucrug9tr0zebe2' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/dotgen/acyclic__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
