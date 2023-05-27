console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/util/Factory.java.html" 
 , "texte" : "File src/jcckit/util/Factory.java 17 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "jcckit.util.Factory"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.util.Factory" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/src/jcckit/util/Factory.java.html#34"
 , "c1" : "Factory"
 , "c2" : "Factory()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/src/jcckit/util/Factory.java.html#43"
 , "c1" : "Object"
 , "c2" : "create(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/src/jcckit/util/Factory.java.html#67"
 , "c1" : "Object"
 , "c2" : "create(ConfigParameters)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/src/jcckit/util/Factory.java.html#83"
 , "c1" : "Object"
 , "c2" : "create(ConfigParameters;String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/src/jcckit/util/Factory.java.html#96"
 , "c1" : "Object"
 , "c2" : "createOrGet(ConfigParameters;Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/src/jcckit/util/Factory.java.html#103"
 , "c1" : "Object"
 , "c2" : "createObject(ConfigParameters;String)"
 , "c3" : "1"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/jcckit/util/Factory.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method create arguments String  className"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method jcckit.util.Factory.create@POLYN167861 the MagicNumber/String  'Could not create an instance of ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method jcckit.util.Factory.create@POLYN167861 the MagicNumber/String  ' because of ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method create arguments ConfigParameters  configParameters"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00067] For method create list of called methods Object monObjet|java.lang.String configParameters_getN168820"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument configParameters is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method create arguments ConfigParameters  configParameters|String  defaultClassName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00083] For method create list of called methods Object monObjet|java.lang.String configParameters_getN169463"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument configParameters is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method createOrGet arguments ConfigParameters  configParameters|Object  defaultObject"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00096] For method createOrGet list of called methods Object monObjet|java.lang.String configParameters_getN170032"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument configParameters is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method jcckit.util.Factory.createOrGet@POLYN169908 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method jcckit.util.Factory.createOrGet@POLYN169908 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method createObject arguments ConfigParameters  configParameters|String  className"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method jcckit.util.Factory.createObject@POLYN170287 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/jcckit/util/Factory.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method jcckit.util.Factory.createObject@POLYN170287 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/util/Factory.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
