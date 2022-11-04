console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/PSystemBuilder.java 21 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.xml" 
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
 , "c5" : "00076"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#76"
 , "c1" : "Diagram"
 , "c2" : "createPSystem(List<StringLocated>;List<StringLocated>;Map<String,String>)"
 , "c3" : "7"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00198"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#198"
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
   {"ligne" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
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
 , "c1" : "00072"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00072] The class PSystemBuilder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method createPSystem arguments List&lt;StringLocated &gt;  source|List&lt;StringLocated &gt;  rawSource|Map&lt;String ,String &gt;  skinParam"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#76"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00076] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00093] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN190680 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN190680 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN190680 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN190680 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN190680 the MagicNumber/String  'Preprocessor Error: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN190680 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN190680 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method net.sourceforge.plantuml.PSystemBuilder.createPSystem@POLYN190680 the MagicNumber/String  'Compilation duration ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00155] The same method call License.getCurrent() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00177] The same method call License.getCurrent() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method isOk arguments Diagram  ps"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method net.sourceforge.plantuml.PSystemBuilder.isOk@POLYN199539 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method net.sourceforge.plantuml.PSystemBuilder.isOk@POLYN199539 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method net.sourceforge.plantuml.PSystemBuilder.isOk@POLYN199539 the MagicNumber/String  true should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/PSystemBuilder.java.svg" }

};
console.log('leListeStr 99 main end');
