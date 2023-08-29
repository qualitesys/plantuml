console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cdt/dtview__c.java.html" 
 , "texte" : "File src/gen/lib/cdt/dtview__c.java 120 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.cdt.dtview__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.cdt.dtview__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/src/gen/lib/cdt/dtview__c.java.html#91"
 , "c1" : "__ptr__"
 , "c2" : "dtvsearch(ST_dt_s;__ptr__;int)"
 , "c3" : "12"
 , "c4" : "59"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00187"
 , "c5link" : "././qc/src/gen/lib/cdt/dtview__c.java.html#187"
 , "c1" : "ST_dt_s"
 , "c2" : "dtview(ST_dt_s;ST_dt_s)"
 , "c3" : "7"
 , "c4" : "17"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/gen/lib/cdt/dtview__c.java.svg" }

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
 , "c4" : "48"
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
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "3"
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "60"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00079] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00079] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method dtvsearch arguments ST_dt_s  dt|__ptr__  obj|int  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#91"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00091] The argument dt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00108] Assigning instead of comparing on o=(__ptr__ )d.meth.searchf.exe(d,obj,type) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00122] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00122] Assigning instead of comparing on o=(__ptr__ )d.meth.searchf.exe(d,obj,type) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '6spidg45w8teb64726drdswaa' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'dtvsearch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '5o3u9aaanyd9yh74sjfkkofmo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '36qdhpbcwst6tc1gvwcyvg91u' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '5p6q7ip4om6y4nrsjz07ua456' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'bx84jj9durkqzcrq4l9h1b0za' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'eh58afn12udc5q8yzr25advls' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'de5yx4s0nsbgshd9seabcy2g9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '1dhrv6aj5eq8ntuvb7qbs8aot' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '66mzv36wy2mflr2u2a5pwa2vg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'd4pllgr7b2ohssrhtxxtd1fbb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'aihzmr4oo3tuh6kkxwtn9tlbd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'flupwh3kosf3fkhkxllllt1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '6he3c07r1xjfepuku37yav920' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'd7hiatjof3gfyx3ab27oq4d74' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '44tdztkynd140cqbaafbbxvqn' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '72t51pabtpfsnn4qrcjvd6gkb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '4an2jpd7xs9lm1jlfrbualsrv' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'bndt77eukkw8dnhl8sce4ts3d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '6ioth986rfbv208dp59shjy15' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '3to5h0rvqxdeqs38mhv47mm3o' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '5bx9ax8tembk4pweu41m5yw43' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '6eq5kf0bj692bokt0bixy1ixh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '3diupilxwbi5nroolxiy7e8b0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'aihzmr4oo3tuh6kkxwtn9tlbd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'esje2igec9cwwteta36lbrdvc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'aeh2pn8gp2xj4lehv52n4hp6b' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '1lfqka4p8e7w15b16wquy0vjx' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'flupwh3kosf3fkhkxllllt1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'c24nfmv9i7o5eoqaymbibp7m7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  '6spidg45w8teb64726drdswaa' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String  'dtvsearch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00187] For method dtview arguments ST_dt_s  dt|ST_dt_s  view"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument dt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00207] Assigning instead of comparing on d=dt.view (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  'dfryioch2xz35w8nq6lxbk5kh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  'dtview' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  'return null;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  'dfryioch2xz35w8nq6lxbk5kh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method gen.lib.cdt.dtview__c.dtview@POLYN199486 the MagicNumber/String  'dtview' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cdt.dtview__c.dtvsearch@POLYN193099"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '6spidg45w8teb64726drdswaa' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'dtvsearch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00115] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00134] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00134] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '5o3u9aaanyd9yh74sjfkkofmo' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00147] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '36qdhpbcwst6tc1gvwcyvg91u' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '5p6q7ip4om6y4nrsjz07ua456' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#149"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00149] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'bx84jj9durkqzcrq4l9h1b0za' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00150] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'eh58afn12udc5q8yzr25advls' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00151] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'de5yx4s0nsbgshd9seabcy2g9' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '1dhrv6aj5eq8ntuvb7qbs8aot' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#153"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00153] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '66mzv36wy2mflr2u2a5pwa2vg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'd4pllgr7b2ohssrhtxxtd1fbb' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'aihzmr4oo3tuh6kkxwtn9tlbd' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'flupwh3kosf3fkhkxllllt1' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00157] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '6he3c07r1xjfepuku37yav920' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'd7hiatjof3gfyx3ab27oq4d74' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00159] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '44tdztkynd140cqbaafbbxvqn' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '72t51pabtpfsnn4qrcjvd6gkb' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '4an2jpd7xs9lm1jlfrbualsrv' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'bndt77eukkw8dnhl8sce4ts3d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '6ioth986rfbv208dp59shjy15' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00164] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '3to5h0rvqxdeqs38mhv47mm3o' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00165] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '5bx9ax8tembk4pweu41m5yw43' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#166"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00166] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '6eq5kf0bj692bokt0bixy1ixh' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00167] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '3diupilxwbi5nroolxiy7e8b0' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00168] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'aihzmr4oo3tuh6kkxwtn9tlbd' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00169] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'esje2igec9cwwteta36lbrdvc' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#170"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00170] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'aeh2pn8gp2xj4lehv52n4hp6b' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00171] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '1lfqka4p8e7w15b16wquy0vjx' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00172] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'flupwh3kosf3fkhkxllllt1' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00173] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'c24nfmv9i7o5eoqaymbibp7m7' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String '6spidg45w8teb64726drdswaa' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN193099 the MagicNumber/String 'dtvsearch' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/cdt/dtview__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
