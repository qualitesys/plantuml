console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java 9 rule violations " 
 , "fic2"  : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SecurityAccessInterceptor"
 , "c2" : "net.sourceforge.plantuml.security.authentication.token.TokenAuthAccessInterceptor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.security.authentication.token.TokenAuthAccessInterceptor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#15"
 , "c1" : "void"
 , "c2" : "apply(SecurityAuthentication;URLConnection)"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.png" 

 , "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class TokenAuthAccessInterceptor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method apply arguments SecurityAuthentication  authentication|URLConnection  connection"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument authentication is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument connection is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00021] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00022] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method net.sourceforge.plantuml.security.authentication.token.TokenAuthAccessInterceptor.apply@POLYN150966 the MagicNumber/String  'headers.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00018"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method net.sourceforge.plantuml.security.authentication.token.TokenAuthAccessInterceptor.apply@POLYN150966 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/token/TokenAuthAccessInterceptor.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method net.sourceforge.plantuml.security.authentication.token.TokenAuthAccessInterceptor.apply@POLYN150966 the MagicNumber/String  8 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
