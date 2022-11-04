console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java 22 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.jsondiagram.StyleExtractor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.jsondiagram.StyleExtractor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#21"
 , "c1" : "StyleExtractor"
 , "c2" : "StyleExtractor(Iterator<StringLocated>)"
 , "c3" : "19"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#53"
 , "c1" : "boolean"
 , "c2" : "startStyle(StringLocated)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#57"
 , "c1" : "boolean"
 , "c2" : "endStyle(StringLocated)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#61"
 , "c1" : "void"
 , "c2" : "applyStyles(ISkinParam)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#71"
 , "c1" : "Iterator<String>"
 , "c2" : "getIterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#75"
 , "c1" : "String"
 , "c2" : "getTitle()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.svg" }

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
 , "c4" : "4"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
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
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class StyleExtractor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00023] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.StyleExtractor@POLYN158275 the MagicNumber/String  '!assume ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.StyleExtractor@POLYN158275 the MagicNumber/String  '!pragma ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.StyleExtractor@POLYN158275 the MagicNumber/String  'hide ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.StyleExtractor@POLYN158275 the MagicNumber/String  'title ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.StyleExtractor@POLYN158275 the MagicNumber/String  'title ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.StyleExtractor@POLYN158275 the MagicNumber/String  'skinparam ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.StyleExtractor@POLYN158275 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.StyleExtractor@POLYN158275 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method startStyle arguments StringLocated  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.startStyle@POLYN160285 the MagicNumber/String  '&amp;lt;style&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method endStyle arguments StringLocated  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument line is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.endStyle@POLYN160474 the MagicNumber/String  '&amp;lt;/style&amp;gt;' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method applyStyles arguments ISkinParam  skinParam"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument skinParam is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.applyStyles@POLYN160655 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.applyStyles@POLYN160655 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.jsondiagram.StyleExtractor.applyStyles@POLYN160655 the MagicNumber/String  1 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/jsondiagram/StyleExtractor.java.svg" }

};
console.log('leListeStr 99 main end');
