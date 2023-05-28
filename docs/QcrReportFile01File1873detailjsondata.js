console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java 11 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SecurityAccessInterceptor"
 , "c2" : "net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#61"
 , "c1" : "void"
 , "c2" : "apply(SecurityAuthentication;URLConnection)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#68"
 , "c1" : "String"
 , "c2" : "getAuth(SecurityAuthentication)"
 , "c3" : "3"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.svg" }

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
 , "c4" : "2"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method apply arguments SecurityAuthentication  authentication|URLConnection  connection"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument connection is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor.apply@POLYN161980 the MagicNumber/String  'Basic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor.apply@POLYN161980 the MagicNumber/String  'Authorization' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method getAuth arguments SecurityAuthentication  authentication"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument authentication is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor.getAuth@POLYN162436 the MagicNumber/String  'identifier' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor.getAuth@POLYN162436 the MagicNumber/String  'secret' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor.getAuth@POLYN162436 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor.getAuth@POLYN162436 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method net.sourceforge.plantuml.security.authentication.basicauth.BasicAuthAccessInterceptor.getAuth@POLYN162436 the MagicNumber/String  ':' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/security/authentication/basicauth/BasicAuthAccessInterceptor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
