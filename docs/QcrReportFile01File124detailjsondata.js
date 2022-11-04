console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/gen/lib/cgraph/refstr__c.java.html" 
 , "texte" : "File src/gen/lib/cgraph/refstr__c.java 64 rule violations " 
 , "fic2"  : "./qc/src/gen/lib/cgraph/refstr__c.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "gen.lib.cgraph.refstr__c"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "gen.lib.cgraph.refstr__c" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/src/gen/lib/cgraph/refstr__c.java.html#27"
 , "c1" : "ST_dt_s"
 , "c2" : "refdict(ST_Agraph_s)"
 , "c3" : "4"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/src/gen/lib/cgraph/refstr__c.java.html#67"
 , "c1" : "ST_refstr_t"
 , "c2" : "refsymbind(ST_dt_s;CString)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/src/gen/lib/cgraph/refstr__c.java.html#86"
 , "c1" : "CString"
 , "c2" : "refstrbind(ST_dt_s;CString)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/src/gen/lib/cgraph/refstr__c.java.html#104"
 , "c1" : "CString"
 , "c2" : "agstrbind(ST_Agraph_s;CString)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/src/gen/lib/cgraph/refstr__c.java.html#118"
 , "c1" : "CString"
 , "c2" : "agstrdup(ST_Agraph_s;CString)"
 , "c3" : "4"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00152"
 , "c5link" : "././qc/src/gen/lib/cgraph/refstr__c.java.html#152"
 , "c1" : "int"
 , "c2" : "agstrfree(ST_Agraph_s;CString)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00180"
 , "c5link" : "././qc/src/gen/lib/cgraph/refstr__c.java.html#180"
 , "c1" : "int"
 , "c2" : "aghtmlstr(CString)"
 , "c3" : "2"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/gen/lib/cgraph/refstr__c.java.png" 

 , "ligneplantuml" : "./qc/src/gen/lib/cgraph/refstr__c.java.svg" }

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
 , "c4" : "6"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "49"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class refstr__c contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method refdict arguments ST_Agraph_s  g"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method gen.lib.cgraph.refstr__c.refdict@POLYN178213 the MagicNumber/String  'f1nwss2xoaub1hyord232ugoj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method gen.lib.cgraph.refstr__c.refdict@POLYN178213 the MagicNumber/String  'refdict' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method gen.lib.cgraph.refstr__c.refdict@POLYN178213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method gen.lib.cgraph.refstr__c.refdict@POLYN178213 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method gen.lib.cgraph.refstr__c.refdict@POLYN178213 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method gen.lib.cgraph.refstr__c.refdict@POLYN178213 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method gen.lib.cgraph.refstr__c.refdict@POLYN178213 the MagicNumber/String  'f1nwss2xoaub1hyord232ugoj' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method gen.lib.cgraph.refstr__c.refdict@POLYN178213 the MagicNumber/String  'refdict' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method refsymbind arguments ST_dt_s  strdict|CString  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method gen.lib.cgraph.refstr__c.refsymbind@POLYN180337 the MagicNumber/String  '9ts4wqhw2xafdv3tlcilneewq' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method gen.lib.cgraph.refstr__c.refsymbind@POLYN180337 the MagicNumber/String  'refsymbind' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method gen.lib.cgraph.refstr__c.refsymbind@POLYN180337 the MagicNumber/String  '9ts4wqhw2xafdv3tlcilneewq' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method gen.lib.cgraph.refstr__c.refsymbind@POLYN180337 the MagicNumber/String  'refsymbind' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method refstrbind arguments ST_dt_s  strdict|CString  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method gen.lib.cgraph.refstr__c.refstrbind@POLYN181201 the MagicNumber/String  '1scntgo71z7c2v15zapiyw59w' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method gen.lib.cgraph.refstr__c.refstrbind@POLYN181201 the MagicNumber/String  'refstrbind' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method gen.lib.cgraph.refstr__c.refstrbind@POLYN181201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method gen.lib.cgraph.refstr__c.refstrbind@POLYN181201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method gen.lib.cgraph.refstr__c.refstrbind@POLYN181201 the MagicNumber/String  '1scntgo71z7c2v15zapiyw59w' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method gen.lib.cgraph.refstr__c.refstrbind@POLYN181201 the MagicNumber/String  'refstrbind' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method agstrbind arguments ST_Agraph_s  g|CString  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method gen.lib.cgraph.refstr__c.agstrbind@POLYN181998 the MagicNumber/String  'bb8aqjshw3ecae2lsmhigd0mc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method gen.lib.cgraph.refstr__c.agstrbind@POLYN181998 the MagicNumber/String  'agstrbind' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.cgraph.refstr__c.agstrbind@POLYN181998 the MagicNumber/String  'bb8aqjshw3ecae2lsmhigd0mc' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method gen.lib.cgraph.refstr__c.agstrbind@POLYN181998 the MagicNumber/String  'agstrbind' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method agstrdup arguments ST_Agraph_s  g|CString  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method gen.lib.cgraph.refstr__c.agstrdup@POLYN182696 the MagicNumber/String  '86oznromwhn9qeym0k7pih73q' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method gen.lib.cgraph.refstr__c.agstrdup@POLYN182696 the MagicNumber/String  'agstrdup' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method gen.lib.cgraph.refstr__c.agstrdup@POLYN182696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method gen.lib.cgraph.refstr__c.agstrdup@POLYN182696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method gen.lib.cgraph.refstr__c.agstrdup@POLYN182696 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method gen.lib.cgraph.refstr__c.agstrdup@POLYN182696 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method gen.lib.cgraph.refstr__c.agstrdup@POLYN182696 the MagicNumber/String  '86oznromwhn9qeym0k7pih73q' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method gen.lib.cgraph.refstr__c.agstrdup@POLYN182696 the MagicNumber/String  'agstrdup' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method agstrfree arguments ST_Agraph_s  g|CString  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  'enhn1ajfo86a19dgm4b8lduz7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  'agstrfree' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  'enhn1ajfo86a19dgm4b8lduz7' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method gen.lib.cgraph.refstr__c.agstrfree@POLYN184060 the MagicNumber/String  'agstrfree' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method aghtmlstr arguments CString  s"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String  '3em4wzjnpajd5d3igb90l3rml' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String  'aghtmlstr' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String  '3em4wzjnpajd5d3igb90l3rml' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String  'aghtmlstr' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String '3em4wzjnpajd5d3igb90l3rml' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String 'aghtmlstr' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00189] In the recursive method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String '3em4wzjnpajd5d3igb90l3rml' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/gen/lib/cgraph/refstr__c.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00189] In the recursive method gen.lib.cgraph.refstr__c.aghtmlstr@POLYN185764 the MagicNumber/String 'aghtmlstr' MUST BE CONVERTED to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/gen/lib/cgraph/refstr__c.java.svg" }

};
console.log('leListeStr 99 main end');
