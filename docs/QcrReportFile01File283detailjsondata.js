console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/jcckit/graphic/Anchor.java.html" 
 , "texte" : "File src/jcckit/graphic/Anchor.java 14 rule violations " 
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
 , "c5" : "00068"
 , "c5link" : "././qc/src/jcckit/graphic/Anchor.java.html#68"
 , "c1" : "Anchor"
 , "c2" : "getHorizontalAnchor(ConfigParameters;String;Anchor)"
 , "c3" : "8"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/src/jcckit/graphic/Anchor.java.html#100"
 , "c1" : "Anchor"
 , "c2" : "getVerticalAnchor(ConfigParameters;String;Anchor)"
 , "c3" : "8"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/src/jcckit/graphic/Anchor.java.html#120"
 , "c1" : "Anchor"
 , "c2" : "Anchor(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/src/jcckit/graphic/Anchor.java.html#125"
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
   {

 "ligneplantuml" : "./qc/src/jcckit/graphic/Anchor.java.svg" }

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
 , "c1" : "00068"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method getHorizontalAnchor arguments ConfigParameters  config|String  key|Anchor  defaultValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00068] For method getHorizontalAnchor list of called methods Object monObjet|java.lang.String config_getN168519"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method jcckit.graphic.Anchor.getHorizontalAnchor@POLYN168317 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method jcckit.graphic.Anchor.getHorizontalAnchor@POLYN168317 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method jcckit.graphic.Anchor.getHorizontalAnchor@POLYN168317 the MagicNumber/String  'Invalid horizontal anchor.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method getVerticalAnchor arguments ConfigParameters  config|String  key|Anchor  defaultValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00100] For method getVerticalAnchor list of called methods Object monObjet|java.lang.String config_getN170002"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method jcckit.graphic.Anchor.getVerticalAnchor@POLYN169800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method jcckit.graphic.Anchor.getVerticalAnchor@POLYN169800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method jcckit.graphic.Anchor.getVerticalAnchor@POLYN169800 the MagicNumber/String  'Invalid vertcal anchor.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#68"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00068] Public method getHorizontalAnchor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/jcckit/graphic/Anchor.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00100] Public method getVerticalAnchor is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/jcckit/graphic/Anchor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
