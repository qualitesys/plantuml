console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/smetana/core/Memory.java.html" 
 , "texte" : "File src/smetana/core/Memory.java 19 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "smetana.core.Memory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "smetana.core.Memory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#40"
 , "c1" : "__ptr__"
 , "c2" : "malloc(Class)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#45"
 , "c1" : "__ptr__"
 , "c2" : "malloc(size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#49"
 , "c1" : "__ptr__"
 , "c2" : "realloc(__ptr__;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#53"
 , "c1" : "void"
 , "c2" : "free(Object)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#56"
 , "c1" : "int"
 , "c2" : "identityHashCode(CString)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#68"
 , "c1" : "Object"
 , "c2" : "fromIdentityHashCode(int)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/smetana/core/Memory.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method malloc arguments Class  theClass"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method smetana.core.Memory.malloc@POLYN152175 the MagicNumber/String  'MEMORY::malloc ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method smetana.core.Memory.malloc@POLYN152175 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method malloc arguments size_t  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument size is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method realloc arguments __ptr__  old|size_t  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument old is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method smetana.core.Memory.realloc@POLYN152598 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method free arguments Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method identityHashCode arguments CString  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00056] For method identityHashCode list of called methods Object monObjet|int data_getUidN153094"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method smetana.core.Memory.identityHashCode@POLYN152886 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method smetana.core.Memory.identityHashCode@POLYN152886 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method fromIdentityHashCode arguments int  hash"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00068] For method fromIdentityHashCode list of called methods Object monObjet|smetana.core.Z Z_zN153559"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method smetana.core.Memory.fromIdentityHashCode@POLYN153310 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method smetana.core.Memory.fromIdentityHashCode@POLYN153310 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method smetana.core.Memory.fromIdentityHashCode@POLYN153310 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for smetana.core.Memory.malloc@POLYN152446"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/smetana/core/Memory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
