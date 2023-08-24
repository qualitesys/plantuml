console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/preproc/DefineSignature.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.preproc.DefineSignature"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.preproc.DefineSignature" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#50"
 , "c1" : "DefineSignature"
 , "c2" : "DefineSignature(String;String)"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#70"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#74"
 , "c1" : "boolean"
 , "c2" : "isMethod()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#78"
 , "c1" : "String"
 , "c2" : "getKey()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#82"
 , "c1" : "List&lt;Variables&gt;"
 , "c2" : "getVariationVariables()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#86"
 , "c1" : "String"
 , "c2" : "getFonctionName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method net.sourceforge.plantuml.preproc.DefineSignature.DefineSignature@POLYN161556 the MagicNumber/String  '(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.preproc.DefineSignature.DefineSignature@POLYN161556 the MagicNumber/String  '(),' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.preproc.DefineSignature.DefineSignature@POLYN161556 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.preproc.DefineSignature.toString@POLYN162824 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00082] Public method getVariationVariables is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/preproc/DefineSignature.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
