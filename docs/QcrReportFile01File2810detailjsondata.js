console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/zopfli/Squeeze.java 111 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.zopfli.Squeeze"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.zopfli.Squeeze" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00007"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#7"
 , "c1" : "LzStore"
 , "c2" : "optimal(Cookie;int;LongestMatchCache;byte[];int;int)"
 , "c3" : "5"
 , "c4" : "33"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#52"
 , "c1" : "void"
 , "c2" : "optimalRun(Cookie;LongestMatchCache;byte[];int;int;char[];LzStore)"
 , "c3" : "8"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#87"
 , "c1" : "long"
 , "c2" : "fixedCost(int;int)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#103"
 , "c1" : "void"
 , "c2" : "bestLengths(Cookie;LongestMatchCache;int;byte[];int;int;long;SymbolStats;char[];long[])"
 , "c3" : "10"
 , "c4" : "40"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00173"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#173"
 , "c1" : "void"
 , "c2" : "bestFixedLengths(Cookie;LongestMatchCache;byte[];int;int;char[];long[])"
 , "c3" : "9"
 , "c4" : "30"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.svg" }

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
 , "c4" : "6"
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
 , "c4" : "99"
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
 , "c1" : "00005"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#5"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00005] The class Squeeze contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00007"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#7"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00007] For method optimal arguments Cookie  cookie|int  numIterations|LongestMatchCache  lmc|byte[]  input|int  from|int  to"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00007"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#7"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00007] The argument cookie is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method net.sourceforge.plantuml.zopfli.Squeeze.optimal@POLYN179572 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method net.sourceforge.plantuml.zopfli.Squeeze.optimal@POLYN179572 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.zopfli.Squeeze.optimal@POLYN179572 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method net.sourceforge.plantuml.zopfli.Squeeze.optimal@POLYN179572 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.zopfli.Squeeze.optimal@POLYN179572 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method net.sourceforge.plantuml.zopfli.Squeeze.optimal@POLYN179572 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method optimalRun arguments Cookie  cookie|LongestMatchCache  lmc|byte[]  input|int  from|int  to|char[]  lengthArray|LzStore  store"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument cookie is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument store is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  0x8000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  0xFF should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method net.sourceforge.plantuml.zopfli.Squeeze.optimalRun@POLYN182754 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method fixedCost arguments int  litLen|int  dist"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  143 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  9 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  12 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  4097 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  16385 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  8193 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  11 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  12 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  13 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  279 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method net.sourceforge.plantuml.zopfli.Squeeze.fixedCost@POLYN185296 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method bestLengths arguments Cookie  cookie|LongestMatchCache  lmc|int  blockStart|byte[]  input|int  from|int  to|long  minCost|SymbolStats  stats|char[]  lengthArray|long[]  costs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#103"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00103] The argument cookie is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument stats is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0x8000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  259 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0x7FFF should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  516 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  259 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  517 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0x7FFF should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  0xFF should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.zopfli.Squeeze.bestLengths@POLYN186244 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#173"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00173] For method bestFixedLengths arguments Cookie  cookie|LongestMatchCache  lmc|byte[]  input|int  from|int  to|char[]  lengthArray|long[]  costs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#173"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00173] The argument cookie is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0x8000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0x7FFF should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0x7FFF should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  258 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0xFF should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method net.sourceforge.plantuml.zopfli.Squeeze.bestFixedLengths@POLYN191466 the MagicNumber/String  12.0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/zopfli/Squeeze.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
