console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/pathplan/util__c.java.html" 
 , "texte" : "File src/gen/lib/pathplan/util__c.java 20 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/pathplan/util__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.pathplan.util__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.pathplan.util__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/gen/lib/pathplan/util__c.java.html#20"
 , "c1" : "void"
 , "c2" : "make_polyline(ST_Ppoly_t;ST_Ppoly_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/src/gen/lib/pathplan/util__c.java.html#25"
 , "c1" : "void"
 , "c2" : "make_polyline_(ST_Ppoly_t;ST_Ppoly_t)"
 , "c3" : "3"
 , "c4" : "21"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/pathplan/util__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/pathplan/util__c.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "15"
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
 , "c1" : "00020"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method make_polyline arguments ST_Ppoly_t  line|ST_Ppoly_t  sline"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method make_polyline_ arguments ST_Ppoly_t  line|ST_Ppoly_t  sline"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#25"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00025] The argument sline is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  'ct6tszngugakbl42zkaqrt7p1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  'make_polyline_' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  'ct6tszngugakbl42zkaqrt7p1' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/gen/lib/pathplan/util__c.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method gen.lib.pathplan.util__c.make_polyline_@POLYN162617 the MagicNumber/String  'make_polyline_' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/gen/lib/pathplan/util__c.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
