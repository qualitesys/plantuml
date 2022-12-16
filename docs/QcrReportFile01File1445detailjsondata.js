console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/jasic/Jasic.java 93 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.jasic.Jasic"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.jasic.Jasic" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#111"
 , "c1" : "List<Token>"
 , "c2" : "tokenize(String)"
 , "c3" : "25"
 , "c4" : "39"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00763"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#763"
 , "c1" : "Jasic"
 , "c2" : "Jasic()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00782"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#782"
 , "c1" : "void"
 , "c2" : "interpret(String)"
 , "c3" : "2"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "74"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method tokenize arguments String  source"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  '\n=+-*/&amp;lt;&amp;gt;()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN269933 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method net.sourceforge.plantuml.jasic.Jasic.Parser.Parser@POLYN275790 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#261"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00261] For method parse arguments Map&lt;String ,Integer &gt;  labels"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#261"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00261] The argument labels is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00273] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00274] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00283] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00285] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN276274 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN276274 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN276274 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN276274 the MagicNumber/String  'print' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00278"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#278"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00278] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN276274 the MagicNumber/String  'input' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN276274 the MagicNumber/String  'goto' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN276274 the MagicNumber/String  'if' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN276274 the MagicNumber/String  'then' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00328"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#328"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00328] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method net.sourceforge.plantuml.jasic.Jasic.Parser.operator@POLYN279431 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method net.sourceforge.plantuml.jasic.Jasic.Parser.operator@POLYN279431 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN280220 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00346"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN280220 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN280220 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN280220 the MagicNumber/String  'Couldn't parse :(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#374"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00374] For method match arguments TokenType  type1|TokenType  type2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00375"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN281471 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN281471 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN281471 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN281471 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN281471 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN281471 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#390"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00390] For method match arguments TokenType  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00391] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN282068 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00392"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN282068 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN282068 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#404"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00404] For method match arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN282500 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN282500 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN282500 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN282500 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN282500 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#421"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00421] For method consume arguments TokenType  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN283192 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN283192 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN283192 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#434"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00434] For method consume arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN283722 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#436"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00436] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN283722 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN283722 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00448] For method last arguments int  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00460"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#460"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00460] For method get arguments int  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00462"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#462"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00462] In method net.sourceforge.plantuml.jasic.Jasic.Parser.get@POLYN284646 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00261] Public method parse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00541"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00541] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00596"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method net.sourceforge.plantuml.jasic.Jasic.IfThenStatement.execute@POLYN288583 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00618"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#618"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00618] In method net.sourceforge.plantuml.jasic.Jasic.VariableExpression.evaluate@POLYN289329 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00639"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00639] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00642"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#642"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00642] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00642"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#642"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00642] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00644"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00644] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00644"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#644"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00644] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00646"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00646] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00654"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#654"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00654] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00656"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00658"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#658"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00658] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00660"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  '&amp;lt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00663"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#663"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00663] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00663"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#663"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00663] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00665"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00665"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00665"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00667"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00667] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  '&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00670"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00670"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00672"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00672"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00672"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN290082 the MagicNumber/String  'Unknown operator.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00782"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#782"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00782] For method interpret arguments String  source"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00791"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00791] In method net.sourceforge.plantuml.jasic.Jasic.interpret@POLYN295878 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
