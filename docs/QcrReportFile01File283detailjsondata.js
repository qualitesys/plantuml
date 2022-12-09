console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/graphic/Anchor.java.html" 
 , "texte" : "File src/jcckit/graphic/Anchor.java 14 rule violations " 
 , "fic2"  : "./qc/src/jcckit/graphic/Anchor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "jcckit.graphic.Anchor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "jcckit.graphic.Anchor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/jcckit/graphic/Anchor.java.html#20"
 , "c1" : "Anchor"
 , "c2" : "getHorizontalAnchor(ConfigParameters;String;Anchor)"
 , "c3" : "8"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/src/jcckit/graphic/Anchor.java.html#39"
 , "c1" : "Anchor"
 , "c2" : "getVerticalAnchor(ConfigParameters;String;Anchor)"
 , "c3" : "8"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/src/jcckit/graphic/Anchor.java.html#59"
 , "c1" : "Anchor"
 , "c2" : "Anchor(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/src/jcckit/graphic/Anchor.java.html#64"
 , "c1" : "int"
 , "c2" : "getFactor()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/jcckit/graphic/Anchor.java.png" 

 , "ligneplantuml" : "./qc/src/jcckit/graphic/Anchor.java.svg" }

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
 , "c4" : "2"
}}
,
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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
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
 , "c1" : "00020"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method getHorizontalAnchor arguments ConfigParameters  config|String  key|Anchor  defaultValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00020] For method getHorizontalAnchor list of called methods Object monObjet|java.lang.String config_getN163705"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method jcckit.graphic.Anchor.getHorizontalAnchor@POLYN163503 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method jcckit.graphic.Anchor.getHorizontalAnchor@POLYN163503 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method jcckit.graphic.Anchor.getHorizontalAnchor@POLYN163503 the MagicNumber/String  'Invalid horizontal anchor.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method getVerticalAnchor arguments ConfigParameters  config|String  key|Anchor  defaultValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00039] For method getVerticalAnchor list of called methods Object monObjet|java.lang.String config_getN165188"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method jcckit.graphic.Anchor.getVerticalAnchor@POLYN164986 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method jcckit.graphic.Anchor.getVerticalAnchor@POLYN164986 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method jcckit.graphic.Anchor.getVerticalAnchor@POLYN164986 the MagicNumber/String  'Invalid vertcal anchor.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#20"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00020] Public method getHorizontalAnchor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00039] Public method getVerticalAnchor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/graphic/Anchor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
