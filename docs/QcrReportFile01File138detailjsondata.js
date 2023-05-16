console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/common/strcasecmp__c.java.html" 
 , "texte" : "File src/gen/lib/common/strcasecmp__c.java 16 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.common.strcasecmp__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.common.strcasecmp__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/src/gen/lib/common/strcasecmp__c.java.html#60"
 , "c1" : "int"
 , "c2" : "strcasecmp(CString;CString)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/gen/lib/common/strcasecmp__c.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method strcasecmp arguments CString  s1|CString  s2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument s1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument s2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00063] The same method call tolower(s1.charAt(0))tolower(s2.charAt(0)) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  '22n1uekxezky6gx3cn22ansew' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  'strcasecmp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  '22n1uekxezky6gx3cn22ansew' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN159211 the MagicNumber/String  'strcasecmp' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/common/strcasecmp__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
