console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cgraph/utils__c.java.html" 
 , "texte" : "File src/gen/lib/cgraph/utils__c.java 48 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.cgraph.utils__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.cgraph.utils__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/src/gen/lib/cgraph/utils__c.java.html#78"
 , "c1" : "Object"
 , "c2" : "agdictobjmem(ST_dt_s;Object;size_t;ST_dtdisc_s)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/src/gen/lib/cgraph/utils__c.java.html#111"
 , "c1" : "Object"
 , "c2" : "agdictobjfree(Object...)"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/src/gen/lib/cgraph/utils__c.java.html#131"
 , "c1" : "ST_dt_s"
 , "c2" : "agdtopen(ST_Agraph_s;ST_dtdisc_s;ST_dtmethod_s)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00153"
 , "c5link" : "././qc/src/gen/lib/cgraph/utils__c.java.html#153"
 , "c1" : "__ptr__"
 , "c2" : "agdtdelete(ST_Agraph_s;ST_dt_s;__ptr__)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00167"
 , "c5link" : "././qc/src/gen/lib/cgraph/utils__c.java.html#167"
 , "c1" : "void"
 , "c2" : "agdtdisc(ST_Agraph_s;ST_dt_s;ST_dtdisc_s)"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/gen/lib/cgraph/utils__c.java.svg" }

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
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "32"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAVCWE500"
 , "c3" : "Static public field not marked final"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00070] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00070] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method agdictobjmem arguments ST_dt_s  dict|Object  p|size_t  size|ST_dtdisc_s  disc"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument size is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method gen.lib.cgraph.utils__c.agdictobjmem@POLYN176472 the MagicNumber/String  '7dkudp41c9byhicatk2sxtxqk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method gen.lib.cgraph.utils__c.agdictobjmem@POLYN176472 the MagicNumber/String  'agdictobjmem' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.cgraph.utils__c.agdictobjmem@POLYN176472 the MagicNumber/String  '7dkudp41c9byhicatk2sxtxqk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method gen.lib.cgraph.utils__c.agdictobjmem@POLYN176472 the MagicNumber/String  'agdictobjmem' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00103] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00103] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method agdictobjfree arguments Object  ...arg_"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  'bsemnw6m2qx5a4hk13xep80nh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  'erg9i1970wdri39osu8hx2a6e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  '1dbyk58q3r4fyfxxo7ovemkpu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  'nzl57bfl5onx7q9ge19n2k9i' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  '8l8wg6vltx6d7vc9dzqb6n3wi' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  'ah8bddgh4pyntvi4o9xx91fkm' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  '5skdegxoz3mwfvm59pbtvqtiq' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  'akbizhd9c9w4syt1qpirn7xjy' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  'div10atae09n36x269sl208r1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  'cy5x5dma0v4hiepir7lrfuo17' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method gen.lib.cgraph.utils__c.agdictobjfree@POLYN177378 the MagicNumber/String  'c24nfmv9i7o5eoqaymbibp7m7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method agdtopen arguments ST_Agraph_s  g|ST_dtdisc_s  disc|ST_dtmethod_s  method"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#131"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00131] The argument disc is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method gen.lib.cgraph.utils__c.agdtopen@POLYN178435 the MagicNumber/String  '48ox0bg1qmasrer8np51uwsyk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method gen.lib.cgraph.utils__c.agdtopen@POLYN178435 the MagicNumber/String  'agdtopen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method gen.lib.cgraph.utils__c.agdtopen@POLYN178435 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method gen.lib.cgraph.utils__c.agdtopen@POLYN178435 the MagicNumber/String  '48ox0bg1qmasrer8np51uwsyk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method gen.lib.cgraph.utils__c.agdtopen@POLYN178435 the MagicNumber/String  'agdtopen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#153"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00153] For method agdtdelete arguments ST_Agraph_s  g|ST_dt_s  dict|__ptr__  obj"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method gen.lib.cgraph.utils__c.agdtdelete@POLYN179585 the MagicNumber/String  '6pbz2fsmebq8iy7if4way3ct2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method gen.lib.cgraph.utils__c.agdtdelete@POLYN179585 the MagicNumber/String  'agdtdelete' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method gen.lib.cgraph.utils__c.agdtdelete@POLYN179585 the MagicNumber/String  '6pbz2fsmebq8iy7if4way3ct2' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method gen.lib.cgraph.utils__c.agdtdelete@POLYN179585 the MagicNumber/String  'agdtdelete' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#167"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00167] For method agdtdisc arguments ST_Agraph_s  g|ST_dt_s  dict|ST_dtdisc_s  disc"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method gen.lib.cgraph.utils__c.agdtdisc@POLYN180319 the MagicNumber/String  'cym72wvu6zffc0vzoa93zha8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method gen.lib.cgraph.utils__c.agdtdisc@POLYN180319 the MagicNumber/String  'agdtdisc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method gen.lib.cgraph.utils__c.agdtdisc@POLYN180319 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method gen.lib.cgraph.utils__c.agdtdisc@POLYN180319 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method gen.lib.cgraph.utils__c.agdtdisc@POLYN180319 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method gen.lib.cgraph.utils__c.agdtdisc@POLYN180319 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method gen.lib.cgraph.utils__c.agdtdisc@POLYN180319 the MagicNumber/String  'cym72wvu6zffc0vzoa93zha8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method gen.lib.cgraph.utils__c.agdtdisc@POLYN180319 the MagicNumber/String  'agdtdisc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.utils__c.agdtdelete@POLYN179585"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method gen.lib.cgraph.utils__c.agdtdelete@POLYN179585 the MagicNumber/String '6pbz2fsmebq8iy7if4way3ct2' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method gen.lib.cgraph.utils__c.agdtdelete@POLYN179585 the MagicNumber/String 'agdtdelete' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00159] In the recursive method gen.lib.cgraph.utils__c.agdtdelete@POLYN179585 the MagicNumber/String '6pbz2fsmebq8iy7if4way3ct2' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/gen/lib/cgraph/utils__c.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00159] In the recursive method gen.lib.cgraph.utils__c.agdtdelete@POLYN179585 the MagicNumber/String 'agdtdelete' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/cgraph/utils__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
