console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/logo/TinyJavaLogo.java 36 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "net.sourceforge.plantuml.logo.TinyJavaLogo"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.logo.TinyJavaLogo" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#18"
 , "c1" : "TinyJavaLogo"
 , "c2" : "TinyJavaLogo(TurtleGraphicsPane)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#22"
 , "c1" : "void"
 , "c2" : "message(String)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#26"
 , "c1" : "void"
 , "c2" : "error(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#30"
 , "c1" : "void"
 , "c2" : "parseCommandBlock(int)"
 , "c3" : "34"
 , "c4" : "93"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00190"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#190"
 , "c1" : "void"
 , "c2" : "doCommandLine(String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c4" : "27"
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
 , "c1" : "00010"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class TinyJavaLogo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method message arguments String  messageText"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method error arguments String  messageText"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method net.sourceforge.plantuml.logo.TinyJavaLogo.error@POLYN169231 the MagicNumber/String  'Error: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method parseCommandBlock arguments int  nestLevel"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00149] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00160] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00161] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'FORWARD requires distance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'BACK requires distance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'LEFT requires turn angle' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'RIGHT requires turn angle' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'REPEAT requires positive integer count' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'REPEAT requires block in []' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'TO requires name for new definition' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'Defining new command ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'Redefining command ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'Undefined command ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'Unrecognized color name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  '[' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  '] without matching [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method net.sourceforge.plantuml.logo.TinyJavaLogo.parseCommandBlock@POLYN169389 the MagicNumber/String  'Unrecognized symbol in input' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method doCommandLine arguments String  commandLine"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method net.sourceforge.plantuml.logo.TinyJavaLogo.doCommandLine@POLYN176872 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00190] Public method doCommandLine is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/logo/TinyJavaLogo.java.svg" }

};
console.log('leListeStr 99 main end');
