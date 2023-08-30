console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/jasic/Jasic.java 93 rule violations " 
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
 , "c5" : "00001"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c1" : "List&lt;Token&gt;"
 , "c2" : "tokenize(String)"
 , "c3" : "25"
 , "c4" : "39"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c1" : "Jasic"
 , "c2" : "Jasic()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
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
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.svg" }

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
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method tokenize arguments String  source"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  '\n=+-*/&amp;lt;&amp;gt;()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN277691 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.Parser@POLYN283562 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method parse arguments Map&lt;String ,Integer &gt;  labels"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00001] The argument labels is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN284046 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN284046 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN284046 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN284046 the MagicNumber/String  'print' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN284046 the MagicNumber/String  'input' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN284046 the MagicNumber/String  'goto' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN284046 the MagicNumber/String  'if' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN284046 the MagicNumber/String  'then' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.operator@POLYN287213 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.operator@POLYN287213 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN288008 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN288008 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN288008 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN288008 the MagicNumber/String  'Couldn't parse :(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method match arguments TokenType  type1|TokenType  type2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289261 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289261 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289261 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289261 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289261 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289261 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method match arguments TokenType  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289858 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289858 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN289858 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method match arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN290290 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN290290 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN290290 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN290290 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN290290 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method consume arguments TokenType  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN290982 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN290982 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN290982 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method consume arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN291512 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN291512 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN291512 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method last arguments int  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method get arguments int  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.Parser.get@POLYN292436 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00001] Public method parse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00001] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.IfThenStatement.execute@POLYN296377 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.VariableExpression.evaluate@POLYN297125 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  '&amp;lt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  '&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN297878 the MagicNumber/String  'Unknown operator.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method interpret arguments String  source"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method net.sourceforge.plantuml.jasic.Jasic.interpret@POLYN303682 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
