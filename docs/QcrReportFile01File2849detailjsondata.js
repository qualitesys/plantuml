console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/smetana/core/Memory.java.html" 
 , "texte" : "File src/smetana/core/Memory.java 19 rule violations " 
 , "fic2"  : "./qc/src/smetana/core/Memory.java.xml" 
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
 , "c5" : "00006"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#6"
 , "c1" : "__ptr__"
 , "c2" : "malloc(Class)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00011"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#11"
 , "c1" : "__ptr__"
 , "c2" : "malloc(size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#15"
 , "c1" : "__ptr__"
 , "c2" : "realloc(__ptr__;size_t)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#19"
 , "c1" : "void"
 , "c2" : "free(Object)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#22"
 , "c1" : "int"
 , "c2" : "identityHashCode(CString)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/src/smetana/core/Memory.java.html#34"
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
   {"ligne" : "./qc/src/smetana/core/Memory.java.png" 

 , "ligneplantuml" : "./qc/src/smetana/core/Memory.java.svg" }

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
 , "c1" : "00006"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#6"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00006] For method malloc arguments Class  theClass"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00007"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00007] In method smetana.core.Memory.malloc@POLYN149155 the MagicNumber/String  'MEMORY::malloc ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00008] In method smetana.core.Memory.malloc@POLYN149155 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#11"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00011] For method malloc arguments size_t  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#11"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00011] The argument size is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method realloc arguments __ptr__  old|size_t  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument old is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method smetana.core.Memory.realloc@POLYN149578 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method free arguments Object  arg"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method identityHashCode arguments CString  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00022] For method identityHashCode list of called methods Object monObjet|int data_getUidN150074"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method smetana.core.Memory.identityHashCode@POLYN149866 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method smetana.core.Memory.identityHashCode@POLYN149866 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method fromIdentityHashCode arguments int  hash"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00034] For method fromIdentityHashCode list of called methods Object monObjet|smetana.core.Z Z_zN150539"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method smetana.core.Memory.fromIdentityHashCode@POLYN150290 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method smetana.core.Memory.fromIdentityHashCode@POLYN150290 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method smetana.core.Memory.fromIdentityHashCode@POLYN150290 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/smetana/core/Memory.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for smetana.core.Memory.malloc@POLYN149426"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/smetana/core/Memory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
