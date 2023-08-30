console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java 13 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SimpleReturnFunction"
 , "c2" : ""
 , "c2" : "net.sourceforge.plantuml.tim.stdlib.GetJsonKey"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.tim.stdlib.GetJsonKey" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#54"
 , "c1" : "TFunctionSignature"
 , "c2" : "getSignature()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#58"
 , "c1" : "boolean"
 , "c2" : "canCover(int;Set&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#62"
 , "c1" : "TValue"
 , "c2" : "executeReturnFunction(TContext;TMemory;LineLocation;List&lt;TValue&gt;;Map&lt;String,TValue&gt;)"
 , "c3" : "7"
 , "c4" : "13"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
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
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method net.sourceforge.plantuml.tim.stdlib.GetJsonKey.getSignature@POLYN165940 the MagicNumber/String  '%get_json_keys' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method net.sourceforge.plantuml.tim.stdlib.GetJsonKey.getSignature@POLYN165940 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method canCover arguments int  nbArg|Set&lt;String &gt;  namedArgument"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method net.sourceforge.plantuml.tim.stdlib.GetJsonKey.canCover@POLYN166090 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method executeReturnFunction arguments TContext  context|TMemory  memory|LineLocation  location|List&lt;TValue &gt;  values|Map&lt;String ,TValue &gt;  named"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument values is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00079] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00080] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.tim.stdlib.GetJsonKey.executeReturnFunction@POLYN166268 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.tim.stdlib.GetJsonKey.executeReturnFunction@POLYN166268 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method net.sourceforge.plantuml.tim.stdlib.GetJsonKey.executeReturnFunction@POLYN166268 the MagicNumber/String  'Not JSON data' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method net.sourceforge.plantuml.tim.stdlib.GetJsonKey.executeReturnFunction@POLYN166268 the MagicNumber/String  'Bad JSON type' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/GetJsonKey.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
