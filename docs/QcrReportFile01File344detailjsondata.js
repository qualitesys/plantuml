console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/util/Format.java.html" 
 , "texte" : "File src/jcckit/util/Format.java 39 rule violations " 
 , "fic2"  : "./qc/src/jcckit/util/Format.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TicLabelFormat"
 , "c2" : "jcckit.util.Format"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.util.Format" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00009"
 , "c5link" : "././qc/src/jcckit/util/Format.java.html#9"
 , "c1" : "Format"
 , "c2" : "create(ConfigParameters;String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/jcckit/util/Format.java.html#26"
 , "c1" : "Format"
 , "c2" : "Format(String)"
 , "c3" : "14"
 , "c4" : "28"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/src/jcckit/util/Format.java.html#76"
 , "c1" : "String"
 , "c2" : "form(long)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/src/jcckit/util/Format.java.html#86"
 , "c1" : "String"
 , "c2" : "form(double)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00095"
 , "c5link" : "././qc/src/jcckit/util/Format.java.html#95"
 , "c1" : "String"
 , "c2" : "appendRest(StringBuffer)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/src/jcckit/util/Format.java.html#103"
 , "c1" : "String"
 , "c2" : "form(double[])"
 , "c3" : "3"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/util/Format.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/util/Format.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "28"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00007"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00007] The class Format contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#9"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00009] For method create arguments ConfigParameters  config|String  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#9"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00009] For method create list of called methods Object monObjet|String config_getN178796"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#9"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00009] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00010"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00010] In method jcckit.util.Format.create@POLYN178617 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00011] In method jcckit.util.Format.create@POLYN178617 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method jcckit.util.Format.create@POLYN178617 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method jcckit.util.Format.create@POLYN178617 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument formatString is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  '%' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  '%' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method jcckit.util.Format.Format@POLYN180887 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method form arguments long  number"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method jcckit.util.Format.form@POLYN184147 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method jcckit.util.Format.form@POLYN184147 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method jcckit.util.Format.form@POLYN184147 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method form arguments double  number"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method jcckit.util.Format.form@POLYN184892 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method jcckit.util.Format.form@POLYN184892 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method jcckit.util.Format.form@POLYN184892 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method appendRest arguments StringBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#95"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00095] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method jcckit.util.Format.appendRest@POLYN185425 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method form arguments double[]  numbers"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/jcckit/util/Format.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method jcckit.util.Format.form@POLYN186133 the MagicNumber/String  0 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/jcckit/util/Format.java.svg" }

};
console.log('leListeStr 99 main end');
