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
 , "c5" : "00018"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#18"
 , "c1" : "List<Token>"
 , "c2" : "tokenize(String)"
 , "c3" : "25"
 , "c4" : "39"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00518"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#518"
 , "c1" : "Jasic"
 , "c2" : "Jasic()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00527"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#527"
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
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#18"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00018] For method tokenize arguments String  source"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#18"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00018] The argument source is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  '\n=+-*/&amp;lt;&amp;gt;()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method net.sourceforge.plantuml.jasic.Jasic.tokenize@POLYN268403 the MagicNumber/String  '\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.jasic.Jasic.Parser.Parser@POLYN274260 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method parse arguments Map&lt;String ,Integer &gt;  labels"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument labels is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00150] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00161] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN274744 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN274744 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN274744 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN274744 the MagicNumber/String  'print' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN274744 the MagicNumber/String  'input' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN274744 the MagicNumber/String  'goto' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN274744 the MagicNumber/String  'if' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method net.sourceforge.plantuml.jasic.Jasic.Parser.parse@POLYN274744 the MagicNumber/String  'then' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method net.sourceforge.plantuml.jasic.Jasic.Parser.operator@POLYN277901 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method net.sourceforge.plantuml.jasic.Jasic.Parser.operator@POLYN277901 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN278690 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN278690 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN278690 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method net.sourceforge.plantuml.jasic.Jasic.Parser.atomic@POLYN278690 the MagicNumber/String  'Couldn't parse :(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method match arguments TokenType  type1|TokenType  type2"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN279941 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN279941 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN279941 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN279941 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN279941 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN279941 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#229"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00229] For method match arguments TokenType  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN280538 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN280538 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN280538 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method match arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN280970 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN280970 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00240"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN280970 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN280970 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method net.sourceforge.plantuml.jasic.Jasic.Parser.match@POLYN280970 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#247"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00247] For method consume arguments TokenType  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN281662 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN281662 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN281662 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#254"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00254] For method consume arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN282192 the MagicNumber/String  'Expected ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN282192 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method net.sourceforge.plantuml.jasic.Jasic.Parser.consume@POLYN282192 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#261"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00261] For method last arguments int  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00266"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#266"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00266] For method get arguments int  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method net.sourceforge.plantuml.jasic.Jasic.Parser.get@POLYN283116 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#137"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00137] Public method parse is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00329] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method net.sourceforge.plantuml.jasic.Jasic.IfThenStatement.execute@POLYN287053 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method net.sourceforge.plantuml.jasic.Jasic.VariableExpression.evaluate@POLYN287799 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00431"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#431"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00431] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  '-' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00433"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00435"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  '&amp;lt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  '&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00447"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00447"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00449] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00452"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method net.sourceforge.plantuml.jasic.Jasic.OperatorExpression.evaluate@POLYN288552 the MagicNumber/String  'Unknown operator.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00527"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#527"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00527] For method interpret arguments String  source"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00536"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.html#536"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00536] In method net.sourceforge.plantuml.jasic.Jasic.interpret@POLYN294348 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/jasic/Jasic.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
