console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/PSystemBuilder.java 20 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.PSystemBuilder"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.PSystemBuilder" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#110"
 , "c1" : "Diagram"
 , "c2" : "createPSystem(List&lt;StringLocated&gt;;List&lt;StringLocated&gt;;Map&lt;String,String&gt;)"
 , "c3" : "7"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00232"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#232"
 , "c1" : "boolean"
 , "c2" : "isOk(Diagram)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
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
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method createPSystem arguments List&lt;StringLocated &gt;  source|List&lt;StringLocated &gt;  rawSource|Map&lt;String ,String &gt;  skinParam"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00127] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00142] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN195332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN195332 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN195332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN195332 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN195332 the MagicNumber/String  'Preprocessor Error: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN195332 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN195332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN195332 the MagicNumber/String  'Compilation duration ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00189] The same method call License.getCurrent() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00211] The same method call License.getCurrent() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#232"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00232] For method isOk arguments Diagram  ps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method net.sourceforge.plantuml.PSystemBuilder.isOk@POLYN204191 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method net.sourceforge.plantuml.PSystemBuilder.isOk@POLYN204191 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method net.sourceforge.plantuml.PSystemBuilder.isOk@POLYN204191 the MagicNumber/String  true should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
