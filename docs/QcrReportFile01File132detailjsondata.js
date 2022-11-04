console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/common/labels__c.java.html" 
 , "texte" : "File src/gen/lib/common/labels__c.java 196 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/common/labels__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.common.labels__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.common.labels__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/src/gen/lib/common/labels__c.java.html#63"
 , "c1" : "void"
 , "c2" : "storeline(ST_GVC_s;ST_textlabel_t;CString;char)"
 , "c3" : "1"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/src/gen/lib/common/labels__c.java.html#101"
 , "c1" : "void"
 , "c2" : "make_simple_label(ST_GVC_s;ST_textlabel_t)"
 , "c3" : "14"
 , "c4" : "36"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00174"
 , "c5link" : "././qc/src/gen/lib/common/labels__c.java.html#174"
 , "c1" : "ST_textlabel_t"
 , "c2" : "make_label(ST_Agobj_s;CString;int;double;CString;CString)"
 , "c3" : "14"
 , "c4" : "39"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00255"
 , "c5link" : "././qc/src/gen/lib/common/labels__c.java.html#255"
 , "c1" : "CString"
 , "c2" : "strdup_and_subst_obj0(CString;ST_Agobj_s;int)"
 , "c3" : "39"
 , "c4" : "104"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00429"
 , "c5link" : "././qc/src/gen/lib/common/labels__c.java.html#429"
 , "c1" : "CString"
 , "c2" : "strdup_and_subst_obj(CString;__ptr__)"
 , "c3" : "1"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/common/labels__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/common/labels__c.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
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
 , "c4" : "181"
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
 , "c1" : "00054"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00054] The class labels__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method storeline arguments ST_GVC_s  gvc|ST_textlabel_t  lp|CString  line|char  terminator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument lp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  '4wkeqik2dt7ecr64ej6ltbnvb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  'storeline' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  1.20 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  'storeline line.getContent()=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  ' size=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  'storeline ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  '4wkeqik2dt7ecr64ej6ltbnvb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method gen.lib.common.labels__c.storeline@POLYN228335 the MagicNumber/String  'storeline' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method make_simple_label arguments ST_GVC_s  gvc|ST_textlabel_t  lp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument lp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00116] Assigning instead of comparing on c=p.charAt(0) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00137] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '22ar72ye93a8ntj8pagnt5b5k' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  'make_simple_label' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0x00 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0xA1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0xFE should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '6la63t1mnqv30shyyp3yfroxb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  'ebmmarxykvf76hmfmjuk0ssjz' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '6la63t1mnqv30shyyp3yfroxb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '1kri3b36twfj4t7bvjbrt6dhs' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '9ekmvj13iaml5ndszqyxa8eq' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  'n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  'l' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  'r' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  'n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  'n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  '22ar72ye93a8ntj8pagnt5b5k' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method gen.lib.common.labels__c.make_simple_label@POLYN230844 the MagicNumber/String  'make_simple_label' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method make_label arguments ST_Agobj_s  obj|CString  str|int  kind|double  fontsize|CString  fontname|CString  fontcolor"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#174"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00174] The argument str is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  'ecq5lydlrjrlaz8o6vm6svc8i' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  'make_label' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  'agerr(AGPREV, in label of graph %s\n,agnameof(sg));' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  'agerr(AGPREV, in label of node %s\n, agnameof(n));' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  'agerr(AGPREV, in label of edge %s %s %s\n,' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  's = latin1ToUTF8(rv-&amp;gt;text);' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  'ecq5lydlrjrlaz8o6vm6svc8i' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method gen.lib.common.labels__c.make_label@POLYN235640 the MagicNumber/String  'make_label' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#255"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00255] For method strdup_and_subst_obj0 arguments CString  str|ST_Agobj_s  obj|int  escBackslash"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00300] Assigning instead of comparing on tp_str=pt.name (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00305] Assigning instead of comparing on hp_str=pt.name (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#353"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00353] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'ajohywvjbrvkc7zca2uew6ghm' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'strdup_and_subst_obj0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\G' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\N' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\E' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\H' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\T' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\L' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00266] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00279"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '-&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '--' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00323"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00323] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00324"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'G' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'N' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'E' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00338"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'H' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'T' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'L' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00354] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00371"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'G' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00375"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'for (t = g_str; (*p = *t++); p++);' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'N' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'E' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'if (isEdge) {' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'T' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'for (t = t_str; (*p = *t++); p++);' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'H' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'for (t = h_str; (*p = *t++); p++);' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'L' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'for (t = l_str; (*p = *t++); p++);' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'if (escBackslash) {' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\\' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00415] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'ajohywvjbrvkc7zca2uew6ghm' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00418"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method gen.lib.common.labels__c.strdup_and_subst_obj0@POLYN240015 the MagicNumber/String  'strdup_and_subst_obj0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00429"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#429"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00429] For method strdup_and_subst_obj arguments CString  str|__ptr__  obj"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method gen.lib.common.labels__c.strdup_and_subst_obj@POLYN251176 the MagicNumber/String  'af2a0cdl8ld7bbq0qu0rt1d8z' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method gen.lib.common.labels__c.strdup_and_subst_obj@POLYN251176 the MagicNumber/String  'strdup_and_subst_obj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00432] In method gen.lib.common.labels__c.strdup_and_subst_obj@POLYN251176 the MagicNumber/String  '7eeocxzl6qhtvcv7gnh73o7d1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00433"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method gen.lib.common.labels__c.strdup_and_subst_obj@POLYN251176 the MagicNumber/String  'erg9i1970wdri39osu8hx2a6e' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method gen.lib.common.labels__c.strdup_and_subst_obj@POLYN251176 the MagicNumber/String  '67419rdrhawe7vudn882sohkd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00435"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method gen.lib.common.labels__c.strdup_and_subst_obj@POLYN251176 the MagicNumber/String  'c24nfmv9i7o5eoqaymbibp7m7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method gen.lib.common.labels__c.strdup_and_subst_obj@POLYN251176 the MagicNumber/String  'af2a0cdl8ld7bbq0qu0rt1d8z' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00439"
 , "c1link" : "./qc/src/gen/lib/common/labels__c.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method gen.lib.common.labels__c.strdup_and_subst_obj@POLYN251176 the MagicNumber/String  'strdup_and_subst_obj' should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/gen/lib/common/labels__c.java.svg" }

};
console.log('leListeStr 99 main end');
