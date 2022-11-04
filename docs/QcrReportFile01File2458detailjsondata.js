console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/tim/stdlib/FileExists.java 10 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SimpleReturnFunction"
 , "c2" : "net.sourceforge.plantuml.tim.stdlib.FileExists"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.tim.stdlib.FileExists" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#20"
 , "c1" : "TFunctionSignature"
 , "c2" : "getSignature()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#24"
 , "c1" : "boolean"
 , "c2" : "canCover(int;Set<String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#28"
 , "c1" : "TValue"
 , "c2" : "executeReturnFunction(TContext;TMemory;LineLocation;List<TValue>;Map<String,TValue>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#37"
 , "c1" : "boolean"
 , "c2" : "fileExists(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.svg" }

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
 , "c4" : "6"
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
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.tim.stdlib.FileExists.getSignature@POLYN151107 the MagicNumber/String  '%file_exists' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.tim.stdlib.FileExists.getSignature@POLYN151107 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method canCover arguments int  nbArg|Set&lt;String &gt;  namedArgument"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.tim.stdlib.FileExists.canCover@POLYN151257 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method executeReturnFunction arguments TContext  context|TMemory  memory|LineLocation  location|List&lt;TValue &gt;  values|Map&lt;String ,TValue &gt;  named"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#28"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00028] The argument values is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method net.sourceforge.plantuml.tim.stdlib.FileExists.executeReturnFunction@POLYN151435 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.tim.stdlib.FileExists.executeReturnFunction@POLYN151435 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method net.sourceforge.plantuml.tim.stdlib.FileExists.executeReturnFunction@POLYN151435 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method fileExists arguments String  path"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/tim/stdlib/FileExists.java.svg" }

};
console.log('leListeStr 99 main end');
