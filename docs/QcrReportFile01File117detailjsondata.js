console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cgraph/id__c.java.html" 
 , "texte" : "File src/gen/lib/cgraph/id__c.java 120 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/cgraph/id__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.cgraph.id__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.cgraph.id__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#48"
 , "c1" : "Object"
 , "c2" : "idopen(ST_Agraph_s;ST_Agdisc_s)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#70"
 , "c1" : "int"
 , "c2" : "idmap(Object;int;CString;int[];boolean)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#104"
 , "c1" : "Object"
 , "c2" : "idalloc(Object...)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#128"
 , "c1" : "Object"
 , "c2" : "idfree(Object...)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#150"
 , "c1" : "CString"
 , "c2" : "idprint(__ptr__;int;int)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00174"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#174"
 , "c1" : "Object"
 , "c2" : "idclose(Object...)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00196"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#196"
 , "c1" : "void"
 , "c2" : "idregister(Object;int;Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00294"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c1" : "int"
 , "c2" : "agmapnametoid(ST_Agraph_s;int;CString;int[];boolean)"
 , "c3" : "8"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00294"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c1" : "CString"
 , "c2" : "agnameof(ST_Agobj_s)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00294"
 , "c5link" : "././qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c1" : "void"
 , "c2" : "agregister(ST_Agraph_s;int;Object)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/cgraph/id__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/cgraph/id__c.java.svg" }

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
 , "c4" : "22"
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
 , "c4" : "69"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAVCWE500"
 , "c3" : "Static public field not marked final"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00035] The class id__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00037] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00037] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method idopen arguments ST_Agraph_s  g|ST_Agdisc_s  disc"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method gen.lib.cgraph.id__c.idopen@POLYN194746 the MagicNumber/String  'a0a2zxsu8n019hzm1rwf1jc7f' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method gen.lib.cgraph.id__c.idopen@POLYN194746 the MagicNumber/String  'idopen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method gen.lib.cgraph.id__c.idopen@POLYN194746 the MagicNumber/String  'a0a2zxsu8n019hzm1rwf1jc7f' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method gen.lib.cgraph.id__c.idopen@POLYN194746 the MagicNumber/String  'idopen' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00059] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00059] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method idmap arguments Object  state|int  objtype|CString  str|int[]  id|boolean  createflag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  'lsl0c1gejls1wv04ga6xy2cf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  'idmap' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  'lsl0c1gejls1wv04ga6xy2cf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method gen.lib.cgraph.id__c.idmap@POLYN195926 the MagicNumber/String  'idmap' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00094] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00094] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method idalloc arguments Object  ...arg_"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method gen.lib.cgraph.id__c.idalloc@POLYN197711 the MagicNumber/String  '1z2o91qjhxg0zcs8vgzyl9bf1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method gen.lib.cgraph.id__c.idalloc@POLYN197711 the MagicNumber/String  'erg9i1970wdri39osu8hx2a6e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method gen.lib.cgraph.id__c.idalloc@POLYN197711 the MagicNumber/String  '2s0qc9g3dasd7eqa3rhtlxrae' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method gen.lib.cgraph.id__c.idalloc@POLYN197711 the MagicNumber/String  'x0ltcg0hfp8jlgbjde43bdwj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.cgraph.id__c.idalloc@POLYN197711 the MagicNumber/String  '6xs9bwnce34njm5w424uwon6d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method gen.lib.cgraph.id__c.idalloc@POLYN197711 the MagicNumber/String  '297p5iu8oro94tdg9v29bbgiw' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method gen.lib.cgraph.id__c.idalloc@POLYN197711 the MagicNumber/String  'c24nfmv9i7o5eoqaymbibp7m7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00118] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00118] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method idfree arguments Object  ...arg_"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method gen.lib.cgraph.id__c.idfree@POLYN198785 the MagicNumber/String  'adq5fviqjzpkxrjt37qxo1ywh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.cgraph.id__c.idfree@POLYN198785 the MagicNumber/String  'erg9i1970wdri39osu8hx2a6e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method gen.lib.cgraph.id__c.idfree@POLYN198785 the MagicNumber/String  'x0ltcg0hfp8jlgbjde43bdwj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method gen.lib.cgraph.id__c.idfree@POLYN198785 the MagicNumber/String  'e3dd233viwus8xrkad68a1qhr' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.cgraph.id__c.idfree@POLYN198785 the MagicNumber/String  '69x6bjndheh46syz632mlu192' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method gen.lib.cgraph.id__c.idfree@POLYN198785 the MagicNumber/String  'c24nfmv9i7o5eoqaymbibp7m7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00141] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00141] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method idprint arguments __ptr__  state|int  objtype|int  id"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String  '8143j507ej7uqqjzw5i32xej5' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String  'idprint' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String  '8143j507ej7uqqjzw5i32xej5' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String  'idprint' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00164] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00164] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method idclose arguments Object  ...arg_"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method gen.lib.cgraph.id__c.idclose@POLYN201274 the MagicNumber/String  '18oh21h7t6fg06ozg64u87nyu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method gen.lib.cgraph.id__c.idclose@POLYN201274 the MagicNumber/String  'erg9i1970wdri39osu8hx2a6e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method gen.lib.cgraph.id__c.idclose@POLYN201274 the MagicNumber/String  '2s0qc9g3dasd7eqa3rhtlxrae' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method gen.lib.cgraph.id__c.idclose@POLYN201274 the MagicNumber/String  'c24nfmv9i7o5eoqaymbibp7m7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00185] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00185] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method idregister arguments Object  state|int  objtype|Object  obj"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method gen.lib.cgraph.id__c.idregister@POLYN202373 the MagicNumber/String  '5bjqo0ihl0x25vaspoiehmwzk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method gen.lib.cgraph.id__c.idregister@POLYN202373 the MagicNumber/String  'idregister' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method gen.lib.cgraph.id__c.idregister@POLYN202373 the MagicNumber/String  '5bjqo0ihl0x25vaspoiehmwzk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method gen.lib.cgraph.id__c.idregister@POLYN202373 the MagicNumber/String  'idregister' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00294] For method agmapnametoid arguments ST_Agraph_s  g|int  objtype|CString  str|int[]  result|boolean  createflag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  'aq30wwcj4ugatsgx0zdtdmeed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  'agmapnametoid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  '%' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  'aq30wwcj4ugatsgx0zdtdmeed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String  'agmapnametoid' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00294] For method agnameof arguments ST_Agobj_s  obj"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00294] Assigning instead of comparing on rv=aginternalmapprint(g,AGTYPE(obj),AGID(obj)) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00294] Assigning instead of comparing on rv=(CString )AGDISC_id(g).print.exe(AGCLOS_id(g),AGTYPE(obj),AGID(obj)) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  'cctsybrl54fy799aynfej4iiy' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  'agnameof' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  '%' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  'cctsybrl54fy799aynfej4iiy' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agnameof@POLYN205336 the MagicNumber/String  'agnameof' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00294] For method agregister arguments ST_Agraph_s  g|int  objtype|Object  obj"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agregister@POLYN207133 the MagicNumber/String  'emt63ldde99jnwe2vvjal9kt9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agregister@POLYN207133 the MagicNumber/String  'agregister' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agregister@POLYN207133 the MagicNumber/String  'emt63ldde99jnwe2vvjal9kt9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.cgraph.id__c.agregister@POLYN207133 the MagicNumber/String  'agregister' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.id__c.agmapnametoid@POLYN202934"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.id__c.idprint@POLYN200043"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 'agmapnametoid' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 'agmapnametoid' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 'aq30wwcj4ugatsgx0zdtdmeed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 'aq30wwcj4ugatsgx0zdtdmeed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String '%' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#294"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00294] In the recursive method gen.lib.cgraph.id__c.agmapnametoid@POLYN202934 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00151] In the recursive method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String '8143j507ej7uqqjzw5i32xej5' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00151] In the recursive method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String 'idprint' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00153] In the recursive method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00153] In the recursive method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String '8143j507ej7uqqjzw5i32xej5' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cgraph/id__c.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method gen.lib.cgraph.id__c.idprint@POLYN200043 the MagicNumber/String 'idprint' MUST BE CONVERTED to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/gen/lib/cgraph/id__c.java.svg" }

};
console.log('leListeStr 99 main end');
