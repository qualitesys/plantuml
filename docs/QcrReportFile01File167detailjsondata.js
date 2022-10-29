console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/pack/pack__c.java.html" 
 , "texte" : "File src/gen/lib/pack/pack__c.java 69 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/pack/pack__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.pack.pack__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.pack.pack__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/gen/lib/pack/pack__c.java.html#22"
 , "c1" : "EN_pack_mode"
 , "c2" : "parsePackModeInfo(CString;EN_pack_mode;ST_pack_info)"
 , "c3" : "2"
 , "c4" : "39"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/src/gen/lib/pack/pack__c.java.html#84"
 , "c1" : "EN_pack_mode"
 , "c2" : "getPackModeInfo(ST_Agraph_s;EN_pack_mode;ST_pack_info)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/src/gen/lib/pack/pack__c.java.html#100"
 , "c1" : "int"
 , "c2" : "getPack(ST_Agraph_s;int;int)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00123"
 , "c5link" : "././qc/src/gen/lib/pack/pack__c.java.html#123"
 , "c1" : "EN_pack_mode"
 , "c2" : "getPackInfo(ST_Agraph_s;EN_pack_mode;int;ST_pack_info)"
 , "c3" : "1"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/pack/pack__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/pack/pack__c.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
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
 , "c4" : "61"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class pack__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method parsePackModeInfo arguments CString  p|EN_pack_mode  dflt|ST_pack_info  pinfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#22"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00022] The argument pinfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'dyb1n3lhbi0wnr9kvmu6onux9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'parsePackModeInfo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '2ybrtqq8efxouph8wjbrnowxz' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '2v5u3irq50r1n2ccuna0y09lk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '4o68zbwd6291pxryyntjh2432' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '3cxht114gc0fn4wl8xjy515bv' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'edkaa80od81ojkn7d4h0q1zbu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '106zhcf9a6frvafctbbgrbws3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'epac8gmlq3r1q3g6lh3fb9nzh' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '2e563kaxakuuou2t5kqvv33w5' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '6t98dcecgbvbvtpycwiq2ynnj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '38dve3snq2grkwui6y1tpc6r1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'ems4wqj0nbd0vi3sttf36tnir' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '3ckdfsy55ba8os2xhymh002al' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '1i6xlg2sfqvjqjdu811xm5398' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '7e1uy5mzei37p66t8jp01r3mk' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'b3tzhasiwa1p83l47nhl6k5x8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '6t98dcecgbvbvtpycwiq2ynnj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'ai3czg6gaaxspsmndknpyvuiu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'f3lyz2cejs6yn5fyckhn7ba1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'd6yjom2gtqleeq1vf5l72eazl' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '2xe2y3s32q27l74dshw3831hu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'ai3czg6gaaxspsmndknpyvuiu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'e00kor2k58i044hvvxytt9dhg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  '8vzhimdinzz48u15tcx34gzgs' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'coafx7pn3ah1ulp0o7a0z119r' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'ai3czg6gaaxspsmndknpyvuiu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'f187wptsr73liavtlyoyfovp3' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'aqi1ed010xc3cj8xoye8vqkqe' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'epewq8yin5pr1meeofxvntjes' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'ai3czg6gaaxspsmndknpyvuiu' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'flupwh3kosf3fkhkxllllt1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'dyb1n3lhbi0wnr9kvmu6onux9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method gen.lib.pack.pack__c.parsePackModeInfo@POLYN170035 the MagicNumber/String  'parsePackModeInfo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method getPackModeInfo arguments ST_Agraph_s  g|EN_pack_mode  dflt|ST_pack_info  pinfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method gen.lib.pack.pack__c.getPackModeInfo@POLYN173178 the MagicNumber/String  'bnxqpsmvz6tyekstfjte4pzwj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method gen.lib.pack.pack__c.getPackModeInfo@POLYN173178 the MagicNumber/String  'getPackModeInfo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method gen.lib.pack.pack__c.getPackModeInfo@POLYN173178 the MagicNumber/String  'packmode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.pack.pack__c.getPackModeInfo@POLYN173178 the MagicNumber/String  'bnxqpsmvz6tyekstfjte4pzwj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method gen.lib.pack.pack__c.getPackModeInfo@POLYN173178 the MagicNumber/String  'getPackModeInfo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method getPack arguments ST_Agraph_s  g|int  not_def|int  dflt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00106] Assigning instead of comparing on p=agget(g,new CString('pack')) (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  'ata97fmix5q1oikrmk5pezvrf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  'getPack' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  'pack' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  'enpqar7c7okvibe7xhe0vjtfn' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  '3puzxwczcmpxvlw8cvmeyio74' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  '65w8fxtw319slbg2c6nvtmow8' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  '5lifdir9mxnvpi8ur34qo0jej' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  'ata97fmix5q1oikrmk5pezvrf' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method gen.lib.pack.pack__c.getPack@POLYN174092 the MagicNumber/String  'getPack' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method getPackInfo arguments ST_Agraph_s  g|EN_pack_mode  dflt|int  dfltMargin|ST_pack_info  pinfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument pinfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method gen.lib.pack.pack__c.getPackInfo@POLYN175317 the MagicNumber/String  'ce4a70w8ddkj4l9efi74h61s6' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method gen.lib.pack.pack__c.getPackInfo@POLYN175317 the MagicNumber/String  'getPackInfo' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method gen.lib.pack.pack__c.getPackInfo@POLYN175317 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method gen.lib.pack.pack__c.getPackInfo@POLYN175317 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method gen.lib.pack.pack__c.getPackInfo@POLYN175317 the MagicNumber/String  'ce4a70w8ddkj4l9efi74h61s6' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/gen/lib/pack/pack__c.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method gen.lib.pack.pack__c.getPackInfo@POLYN175317 the MagicNumber/String  'getPackInfo' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
