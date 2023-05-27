console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java 24 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.sequencediagram.DottedNumber"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.sequencediagram.DottedNumber" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#48"
 , "c1" : "DottedNumber"
 , "c2" : "DottedNumber(List&lt;Integer&gt;;List&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#53"
 , "c1" : "DottedNumber"
 , "c2" : "create(String)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#69"
 , "c1" : "boolean"
 , "c2" : "isDigit(char)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#74"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#85"
 , "c1" : "void"
 , "c2" : "incrementMinor(int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#91"
 , "c1" : "void"
 , "c2" : "incrementIntermediate()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00096"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#96"
 , "c1" : "void"
 , "c2" : "incrementIntermediate(int)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#105"
 , "c1" : "String"
 , "c2" : "format(DecimalFormat)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.svg" }

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
 , "c4" : "17"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method create arguments String  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.create@POLYN166216 the MagicNumber/String  '(\\d+)|(\\D+)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.create@POLYN166216 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method isDigit arguments char  c"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.isDigit@POLYN167295 the MagicNumber/String  '0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.isDigit@POLYN167295 the MagicNumber/String  '9' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.toString@POLYN167490 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method incrementMinor arguments int  step"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.incrementMinor@POLYN168167 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.incrementIntermediate@POLYN168552 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.incrementIntermediate@POLYN168552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.incrementIntermediate@POLYN168552 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method incrementIntermediate arguments int  position"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.incrementIntermediate@POLYN168852 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.incrementIntermediate@POLYN168852 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.incrementIntermediate@POLYN168852 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#105"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00105] For method format arguments DecimalFormat  format"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00105] The argument format is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.format@POLYN169504 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.format@POLYN169504 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.format@POLYN169504 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.format@POLYN169504 the MagicNumber/String  '&amp;lt;b&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.sequencediagram.DottedNumber.format@POLYN169504 the MagicNumber/String  '&amp;lt;/b&amp;gt;' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/sequencediagram/DottedNumber.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
