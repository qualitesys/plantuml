console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cdt/dtextract__c.java.html" 
 , "texte" : "File src/gen/lib/cdt/dtextract__c.java 16 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/cdt/dtextract__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.cdt.dtextract__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.cdt.dtextract__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/src/gen/lib/cdt/dtextract__c.java.html#24"
 , "c1" : "ST_dtlink_s"
 , "c2" : "dtextract(ST_dt_s)"
 , "c3" : "5"
 , "c4" : "14"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/cdt/dtextract__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/cdt/dtextract__c.java.svg" }

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
 , "c4" : "13"
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
 , "c1" : "00017"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class dtextract__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method dtextract arguments ST_dt_s  dt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument dt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  'ar89jjwhuitmbhut1o3ft3zpb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  'dtextract' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  'list = dtflatten(dt)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  '8i2mufw9f604gvj48u8nbdazp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  '4sml4zdr938yth6x815jt1dlm' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  'ar89jjwhuitmbhut1o3ft3zpb' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/gen/lib/cdt/dtextract__c.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method gen.lib.cdt.dtextract__c.dtextract@POLYN159571 the MagicNumber/String  'dtextract' should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/gen/lib/cdt/dtextract__c.java.svg" }

};
console.log('leListeStr 99 main end');
