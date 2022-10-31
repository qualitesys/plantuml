console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/tim/stdlib/Getenv.java 14 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SimpleReturnFunction"
 , "c2" : "net.sourceforge.plantuml.tim.stdlib.Getenv"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.tim.stdlib.Getenv" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#20"
 , "c1" : "TFunctionSignature"
 , "c2" : "getSignature()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#24"
 , "c1" : "boolean"
 , "c2" : "canCover(int;Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#28"
 , "c1" : "TValue"
 , "c2" : "executeReturnFunction(TContext;TMemory;LineLocation;List<TValue>;Map<String,TValue>)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#41"
 , "c1" : "String"
 , "c2" : "getenv(String)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.tim.stdlib.Getenv.getSignature@POLYN152187 the MagicNumber/String  '%getenv' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.tim.stdlib.Getenv.getSignature@POLYN152187 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method canCover arguments int  nbArg|Set&lt;String &gt;  namedArgument"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.tim.stdlib.Getenv.canCover@POLYN152337 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method executeReturnFunction arguments TContext  context|TMemory  memory|LineLocation  location|List&lt;TValue &gt;  values|Map&lt;String ,TValue &gt;  named"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument values is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.tim.stdlib.Getenv.executeReturnFunction@POLYN152515 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.tim.stdlib.Getenv.executeReturnFunction@POLYN152515 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method net.sourceforge.plantuml.tim.stdlib.Getenv.executeReturnFunction@POLYN152515 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.tim.stdlib.Getenv.executeReturnFunction@POLYN152515 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method net.sourceforge.plantuml.tim.stdlib.Getenv.executeReturnFunction@POLYN152515 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method getenv arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method net.sourceforge.plantuml.tim.stdlib.Getenv.getenv@POLYN153344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/Getenv.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method net.sourceforge.plantuml.tim.stdlib.Getenv.getenv@POLYN153344 the MagicNumber/String  null should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
