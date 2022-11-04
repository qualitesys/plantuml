console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/common/strcasecmp__c.java.html" 
 , "texte" : "File src/gen/lib/common/strcasecmp__c.java 17 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/common/strcasecmp__c.java.xml" 
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
 , "c5" : "00016"
 , "c5link" : "././qc/src/gen/lib/common/strcasecmp__c.java.html#16"
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
   {"ligne" : "./qc/src/gen/lib/common/strcasecmp__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/common/strcasecmp__c.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00011"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class strcasecmp__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method strcasecmp arguments CString  s1|CString  s2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument s1 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument s2 is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00019] The same method call tolower(s1.charAt(0))tolower(s2.charAt(0)) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  '22n1uekxezky6gx3cn22ansew' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00017"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  'strcasecmp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  '\0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  '22n1uekxezky6gx3cn22ansew' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/gen/lib/common/strcasecmp__c.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method gen.lib.common.strcasecmp__c.strcasecmp@POLYN156131 the MagicNumber/String  'strcasecmp' should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/gen/lib/common/strcasecmp__c.java.svg" }

};
console.log('leListeStr 99 main end');
