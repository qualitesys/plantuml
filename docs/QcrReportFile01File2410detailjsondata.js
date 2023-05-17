console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/tim/TFunctionSignature.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.tim.TFunctionSignature"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.tim.TFunctionSignature" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#47"
 , "c1" : "TFunctionSignature"
 , "c2" : "TFunctionSignature(String;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#51"
 , "c1" : "TFunctionSignature"
 , "c2" : "TFunctionSignature(String;int;Set&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#57"
 , "c1" : "boolean"
 , "c2" : "sameFunctionNameAs(TFunctionSignature)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#62"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#67"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#76"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#81"
 , "c1" : "String"
 , "c2" : "getFunctionName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#85"
 , "c1" : "int"
 , "c2" : "getNbArg()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#89"
 , "c1" : "Set&lt;String&gt;"
 , "c2" : "getNamedArguments()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method sameFunctionNameAs arguments TFunctionSignature  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.tim.TFunctionSignature.toString@POLYN156428 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method net.sourceforge.plantuml.tim.TFunctionSignature.toString@POLYN156428 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method net.sourceforge.plantuml.tim.TFunctionSignature.hashCode@POLYN156620 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.tim.TFunctionSignature.hashCode@POLYN156620 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00057] Public method sameFunctionNameAs is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/tim/TFunctionSignature.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
