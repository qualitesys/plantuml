console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/real/RealMax.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractReal"
 , "c2" : "Real"
 , "c2" : "net.sourceforge.plantuml.real.RealMax"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.real.RealMax" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMax.java.html#49"
 , "c1" : "RealMax"
 , "c2" : "RealMax(Collection&lt;Real&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMax.java.html#56"
 , "c1" : "RealLine"
 , "c2" : "line(Collection&lt;Real&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMax.java.html#60"
 , "c1" : "String"
 , "c2" : "getName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMax.java.html#65"
 , "c1" : "double"
 , "c2" : "getCurrentValueInternal()"
 , "c3" : "4"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMax.java.html#85"
 , "c1" : "Real"
 , "c2" : "addFixed(double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMax.java.html#89"
 , "c1" : "Real"
 , "c2" : "addAtLeast(double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMax.java.html#93"
 , "c1" : "void"
 , "c2" : "ensureBiggerThan(Real)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/real/RealMax.java.html#97"
 , "c1" : "void"
 , "c2" : "printCreationStackTrace()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
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
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method line arguments Collection&lt;Real &gt;  reals"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument reals is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method net.sourceforge.plantuml.real.RealMax.getName@POLYN165630 the MagicNumber/String  'max ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00068] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method net.sourceforge.plantuml.real.RealMax.getCurrentValueInternal@POLYN165749 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method net.sourceforge.plantuml.real.RealMax.getCurrentValueInternal@POLYN165749 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method net.sourceforge.plantuml.real.RealMax.getCurrentValueInternal@POLYN165749 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method net.sourceforge.plantuml.real.RealMax.getCurrentValueInternal@POLYN165749 the MagicNumber/String  'The faulty RealMax ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method net.sourceforge.plantuml.real.RealMax.getCurrentValueInternal@POLYN165749 the MagicNumber/String  'has been created here:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.real.RealMax.getCurrentValueInternal@POLYN165749 the MagicNumber/String  'Infinite recursion?' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method addFixed arguments double  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method addAtLeast arguments double  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method ensureBiggerThan arguments Real  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00093] Valued method ensureBiggerThan is empty or contains only a return. Interface segregation for Real"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00093] In the class RealMax which implements the interface(s) Real, the method ensureBiggerThan is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedReal"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/real/RealMax.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
