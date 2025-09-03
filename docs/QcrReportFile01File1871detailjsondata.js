console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/src/net/sourceforge/plantuml/security/authentication/SecurityDefaultNoopAccessInterceptor.java.html" 
 , "texte" : "File src/net/sourceforge/plantuml/security/authentication/SecurityDefaultNoopAccessInterceptor.java 3 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "SecurityAccessInterceptor"
 , "c2" : "net.sourceforge.plantuml.security.authentication.SecurityDefaultNoopAccessInterceptor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "net.sourceforge.plantuml.security.authentication.SecurityDefaultNoopAccessInterceptor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/src/net/sourceforge/plantuml/security/authentication/SecurityDefaultNoopAccessInterceptor.java.html#47"
 , "c1" : "void"
 , "c2" : "apply(SecurityAuthentication;URLConnection)"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/src/net/sourceforge/plantuml/security/authentication/SecurityDefaultNoopAccessInterceptor.java.svg" }

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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/SecurityDefaultNoopAccessInterceptor.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method apply arguments SecurityAuthentication  authentication|URLConnection  connection"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/SecurityDefaultNoopAccessInterceptor.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00047] Valued method apply is empty or contains only a return. Interface segregation for SecurityAccessInterceptor"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/src/net/sourceforge/plantuml/security/authentication/SecurityDefaultNoopAccessInterceptor.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00047] In the class SecurityDefaultNoopAccessInterceptor which implements the interface(s) SecurityAccessInterceptor, the method apply is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedSecurityAccessInterceptor"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/src/net/sourceforge/plantuml/security/authentication/SecurityDefaultNoopAccessInterceptor.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
