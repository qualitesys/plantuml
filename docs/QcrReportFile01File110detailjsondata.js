console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cdt/dtview__c.java.html" 
 , "texte" : "File src/gen/lib/cdt/dtview__c.java 121 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/cdt/dtview__c.java.xml" 
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
 , "c5" : "00044"
 , "c5link" : "././qc/src/gen/lib/cdt/dtview__c.java.html#44"
 , "c1" : "__ptr__"
 , "c2" : "dtvsearch(ST_dt_s;__ptr__;int)"
 , "c3" : "12"
 , "c4" : "59"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/src/gen/lib/cdt/dtview__c.java.html#140"
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
   {"ligne" : "./qc/src/gen/lib/cdt/dtview__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/cdt/dtview__c.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00033] The class dtview__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00035] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00035] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method dtvsearch arguments ST_dt_s  dt|__ptr__  obj|int  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument dt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00061] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00061] Assigning instead of comparing on o=(__ptr__ )d.meth.searchf.exe(d,obj,type) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00075] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00075] Assigning instead of comparing on o=(__ptr__ )d.meth.searchf.exe(d,obj,type) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '6spidg45w8teb64726drdswaa' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'dtvsearch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '5o3u9aaanyd9yh74sjfkkofmo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '36qdhpbcwst6tc1gvwcyvg91u' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '5p6q7ip4om6y4nrsjz07ua456' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'bx84jj9durkqzcrq4l9h1b0za' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'eh58afn12udc5q8yzr25advls' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'de5yx4s0nsbgshd9seabcy2g9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '1dhrv6aj5eq8ntuvb7qbs8aot' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '66mzv36wy2mflr2u2a5pwa2vg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'd4pllgr7b2ohssrhtxxtd1fbb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'aihzmr4oo3tuh6kkxwtn9tlbd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'flupwh3kosf3fkhkxllllt1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '6he3c07r1xjfepuku37yav920' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'd7hiatjof3gfyx3ab27oq4d74' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '44tdztkynd140cqbaafbbxvqn' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '72t51pabtpfsnn4qrcjvd6gkb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '4an2jpd7xs9lm1jlfrbualsrv' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'bndt77eukkw8dnhl8sce4ts3d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '6ioth986rfbv208dp59shjy15' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '3to5h0rvqxdeqs38mhv47mm3o' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '5bx9ax8tembk4pweu41m5yw43' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '6eq5kf0bj692bokt0bixy1ixh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '3diupilxwbi5nroolxiy7e8b0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'aihzmr4oo3tuh6kkxwtn9tlbd' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'esje2igec9cwwteta36lbrdvc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'aeh2pn8gp2xj4lehv52n4hp6b' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '1lfqka4p8e7w15b16wquy0vjx' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'flupwh3kosf3fkhkxllllt1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'c24nfmv9i7o5eoqaymbibp7m7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  '6spidg45w8teb64726drdswaa' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String  'dtvsearch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method dtview arguments ST_dt_s  dt|ST_dt_s  view"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument dt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00160] Assigning instead of comparing on d=dt.view (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  'dfryioch2xz35w8nq6lxbk5kh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  'dtview' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  'return null;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  'dfryioch2xz35w8nq6lxbk5kh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method gen.lib.cdt.dtview__c.dtview@POLYN187738 the MagicNumber/String  'dtview' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cdt.dtview__c.dtvsearch@POLYN181361"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '6spidg45w8teb64726drdswaa' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'dtvsearch' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00048] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00054] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00068] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#74"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00074] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#88"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00088] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '5o3u9aaanyd9yh74sjfkkofmo' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '36qdhpbcwst6tc1gvwcyvg91u' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#101"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00101] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '5p6q7ip4om6y4nrsjz07ua456' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'bx84jj9durkqzcrq4l9h1b0za' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#103"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00103] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'eh58afn12udc5q8yzr25advls' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#104"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00104] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'de5yx4s0nsbgshd9seabcy2g9' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#105"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00105] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '1dhrv6aj5eq8ntuvb7qbs8aot' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#106"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00106] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '66mzv36wy2mflr2u2a5pwa2vg' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00107] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'd4pllgr7b2ohssrhtxxtd1fbb' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#108"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00108] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'aihzmr4oo3tuh6kkxwtn9tlbd' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#109"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00109] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'flupwh3kosf3fkhkxllllt1' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#110"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00110] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '6he3c07r1xjfepuku37yav920' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'd7hiatjof3gfyx3ab27oq4d74' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '44tdztkynd140cqbaafbbxvqn' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '72t51pabtpfsnn4qrcjvd6gkb' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00114] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '4an2jpd7xs9lm1jlfrbualsrv' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00115] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'bndt77eukkw8dnhl8sce4ts3d' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#116"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00116] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '6ioth986rfbv208dp59shjy15' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00117] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '3to5h0rvqxdeqs38mhv47mm3o' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '5bx9ax8tembk4pweu41m5yw43' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '6eq5kf0bj692bokt0bixy1ixh' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00120] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '3diupilxwbi5nroolxiy7e8b0' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'aihzmr4oo3tuh6kkxwtn9tlbd' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'esje2igec9cwwteta36lbrdvc' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'aeh2pn8gp2xj4lehv52n4hp6b' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '1lfqka4p8e7w15b16wquy0vjx' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'flupwh3kosf3fkhkxllllt1' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'c24nfmv9i7o5eoqaymbibp7m7' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String '6spidg45w8teb64726drdswaa' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/cdt/dtview__c.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method gen.lib.cdt.dtview__c.dtvsearch@POLYN181361 the MagicNumber/String 'dtvsearch' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/cdt/dtview__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
