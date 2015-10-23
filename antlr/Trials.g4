/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

grammar Trials;

fusionTablesSql
 : (select_stmt ';' )+
 ;

select_stmt
 : 'SELECT' 
 ;


string_literal : STRING;

STRING : [a-zA-Z_0-9]+
	   ;
	   
WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newline
	   
