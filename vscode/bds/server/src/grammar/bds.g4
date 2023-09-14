grammar bds;

import bdsLexerRules;

programUnit: eol* statement+ EOF;
eol: (';' | '\n')+;
includeFile:
	'include' (STRING_LITERAL | STRING_LITERAL_SINGLE) eol;
typeList: type (',' type)*;

type:
	'bool'
	| 'int'
	| 'real'
	| 'string'
	| 'void'
	| type '[' ']'
	| type '{' '}'
	| type '{' type '}'
	| ID;

varDeclaration:
	type variableInit (',' variableInit)*
	| variableInitImplicit;
variableInit: ID ('=' expression)? HELP_LITERAL?;
variableInitImplicit: ID ':=' expression HELP_LITERAL?;

functionDeclaration:
	type ID '(' varDeclaration? (',' varDeclaration)* ')' statement;

field: varDeclaration eol* | functionDeclaration eol*;

classDef:
	'class' ID eol* ('extends' ID)? eol* '{' eol* field* '}';

statement:
	'{' statement* '}'
	| 'break' eol*
	| 'breakpoint' expression? eol*
	| 'checkpoint' expression? eol*
	| 'continue' eol*
	| 'debug' expression? eol*
	| 'exit' expression? eol*
	| 'print' expression? eol*
	| 'println' expression? eol*
	| 'warning' expression? eol*
	| 'error' expression? eol*
	| 'try' statement eol* (
		'catch' '(' type ID ')' statement eol*
	)* ('finally' statement eol*)?
	| 'throw' expression eol*
	| 'for' '(' (forInit)? ';' (forCondition)? ';' (end = forEnd)? ')' statement eol*
	| 'for' '(' varDeclaration ':' expression ')' statement eol*
	| 'if' '(' expression ')' statement eol* (
		'else' statement eol*
	)?
	| 'kill' expression eol*
	| 'return' expression? eol*
	| 'wait' (expression (',' expression)*)? eol*
	| 'switch' '(' expression? ')' '{' eol* (
		'case' expression ':' statement* eol*
	)* ('default' ':' statement*)? (
		'case' expression ':' statement* eol*
	)* '}' eol*
	| 'while' '(' expression? ')' statement eol*
	| functionDeclaration eol*
	| varDeclaration eol*
	| classDef eol*
	| expression eol*
	| includeFile eol*
	| HELP_LITERAL
	| eol;

forInit: varDeclaration | expressionList;
forCondition: expression;
forEnd: expressionList;

expression:
	NULL_LITERAL
	| BOOL_LITERAL
	| INT_LITERAL
	| REAL_LITERAL
	| STRING_LITERAL
	| STRING_LITERAL_SINGLE
	| expression '.' ID '(' (expression (',' expression)*)? ')'
	| '(' ID ')' expression
	| 'new' ID '(' (expression (',' expression)*)? ')'
	| ID '(' (expression (',' expression)*)? ')'
	| expression '.' ID
	| ID
	| expression '[' expression ']'
	| expression '{' expression '}'
	| op = ('++' | '--') expression
	| expression op = ('++' | '--')
	| '~' expression
	| '!' expression
	| expression op = ('*' | '/' | '%') expression
	| expression op = ('+' | '-') expression
	| expression op = ('<' | '<=' | '==' | '!=' | '>=' | '>') expression
	| op = ('+' | '-') expression
	| expression op = ('&' | '|' | '^') expression
	| expression op = ('&&' | '||') expression
	| '(' expression ')'
	| expression '?' expression ':' expression
	| expression '<-' expression
	| '[' ']'
	| '[' expression (',' expression)* ']'
	| '{' '}'
	| '{' expression '=>' expression (
		',' expression '=>' expression
	)* '}'
	| SYS_LITERAL
	| TASK_LITERAL
	| 'task' ('(' expression (',' expression)* ')')? statement
	| 'dep' '(' expression (',' expression)* ')' statement
	| 'goal' expression
	| ('par' | 'parallel') ('(' expression (',' expression)* ')')? statement
	| expression '|=' expression
	| expression '&=' expression
	| expression '/=' expression
	| expression '*=' expression
	| expression '-=' expression
	| expression '+=' expression
	| '(' expression (',' expression)+ ')' '=' expression
	| expression '=' expression
	| ID ':=' expression;

expressionList: expression ( ',' expression)*;
