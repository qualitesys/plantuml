console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/h/ST_dtlink_s.java.html" 
 , "texte" : "File src/h/ST_dtlink_s.java 17 rule violations " 
 , "fic2"  : "./qc/src/h/ST_dtlink_s.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "UnsupportedStarStruct"
 , "c2" : "h.ST_dtlink_s"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "h.ST_dtlink_s" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00016"
 , "c5link" : "././qc/src/h/ST_dtlink_s.java.html#16"
 , "c1" : "void"
 , "c2" : "___(__struct__)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/h/ST_dtlink_s.java.html#22"
 , "c1" : "ST_dtlink_s"
 , "c2" : "ST_dtlink_s()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/h/ST_dtlink_s.java.html#26"
 , "c1" : "ST_dtlink_s"
 , "c2" : "ST_dtlink_s(__ptr__)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/h/ST_dtlink_s.java.html#30"
 , "c1" : "__ptr__"
 , "c2" : "getParent()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/src/h/ST_dtlink_s.java.html#35"
 , "c1" : "__ptr__"
 , "c2" : "castTo(Class)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/h/ST_dtlink_s.java.html#50"
 , "c1" : "Object"
 , "c2" : "getTheField(OFFSET)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/h/ST_dtlink_s.java.png" 

 , "ligneplantuml" : "./qc/src/h/ST_dtlink_s.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
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
 , "c1" : "00011"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00011] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00012] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method ___ arguments __struct__  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method h.ST_dtlink_s.ST_dtlink_s@POLYN157542 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method castTo arguments Class  dest"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method h.ST_dtlink_s.castTo@POLYN157874 the MagicNumber/String  'dest=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method getTheField arguments OFFSET  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00050] For method getTheField list of called methods Object monObjet|smetana.core.OFFSET offset_negativeN158955"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method h.ST_dtlink_s.getTheField@POLYN158449 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method h.ST_dtlink_s.getTheField@POLYN158449 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method h.ST_dtlink_s.getTheField@POLYN158449 the MagicNumber/String  's' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for h.ST_dtlink_s.castTo@POLYN157874"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for h.ST_dtlink_s.getTheField@POLYN158449"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method h.ST_dtlink_s.castTo@POLYN157874 the MagicNumber/String 'dest=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method h.ST_dtlink_s.getTheField@POLYN158449 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method h.ST_dtlink_s.getTheField@POLYN158449 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/h/ST_dtlink_s.java.html#54"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00054] In the recursive method h.ST_dtlink_s.getTheField@POLYN158449 the MagicNumber/String 's' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/h/ST_dtlink_s.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
