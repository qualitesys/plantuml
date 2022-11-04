console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/graphic/FontStyle.java.html" 
 , "texte" : "File src/jcckit/graphic/FontStyle.java 9 rule violations " 
 , "fic2"  : "./qc/src/jcckit/graphic/FontStyle.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "jcckit.graphic.FontStyle"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.graphic.FontStyle" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00025"
 , "c5link" : "././qc/src/jcckit/graphic/FontStyle.java.html#25"
 , "c1" : "FontStyle"
 , "c2" : "FontStyle(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/src/jcckit/graphic/FontStyle.java.html#31"
 , "c1" : "FontStyle"
 , "c2" : "getFontStyle(ConfigParameters;String;FontStyle)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/src/jcckit/graphic/FontStyle.java.html#45"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/graphic/FontStyle.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/graphic/FontStyle.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
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
 , "c1" : "00010"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class FontStyle contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method getFontStyle arguments ConfigParameters  config|String  key|FontStyle  defaultValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00031] For method getFontStyle list of called methods Object monObjet|String config_getN152017"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#31"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00031] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method jcckit.graphic.FontStyle.getFontStyle@POLYN151815 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method jcckit.graphic.FontStyle.getFontStyle@POLYN151815 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method jcckit.graphic.FontStyle.getFontStyle@POLYN151815 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method jcckit.graphic.FontStyle.getFontStyle@POLYN151815 the MagicNumber/String  'Invalid font style.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/jcckit/graphic/FontStyle.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00031] Public method getFontStyle is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/jcckit/graphic/FontStyle.java.svg" }

};
console.log('leListeStr 99 main end');
