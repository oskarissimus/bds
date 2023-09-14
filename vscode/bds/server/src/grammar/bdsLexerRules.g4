lexer grammar bdsLexerRules;

fragment IntegerNumber:
	'0'
	| '1' ..'9' ('0' ..'9')*
	| '0' ('0' ..'7')+
	| HexPrefix HexDigit+;

fragment EscapeSequence:
	'\\' (
		'b'
		| 't'
		| 'n'
		| 'f'
		| 'r'
		| '"'
		| '\''
		| '\\'
		| ('0' ..'3') ('0' ..'7') ('0' ..'7')
		| ('0' ..'7') ('0' ..'7')
		| ('0' ..'7')
	);

fragment EscapedNewLine: '\\' ( '\r' | '\n' | '\r\n');

fragment Exponent: ( 'e' | 'E') ( '+' | '-')? ( '0' .. '9')+;

fragment HexPrefix: '0x' | '0X';

fragment HexDigit: ('0' ..'9' | 'a' ..'f' | 'A' ..'F');

fragment NonIntegerNumber: ('0' .. '9')+ '.' ('0' .. '9')* Exponent?
	| '.' ( '0' .. '9')+ Exponent?
	| ('0' .. '9')+ Exponent
	| ('0' .. '9')+;

fragment SysMultiLine: ( EscapedNewLine | ~( '\r' | '\n'))*;

NULL_LITERAL: 'null';
BOOL_LITERAL: 'true' | 'false';
INT_LITERAL: IntegerNumber;
REAL_LITERAL: NonIntegerNumber;
STRING_LITERAL: '"' ( (~( '"' | '\\') | ('\\' .))*) '"';
STRING_LITERAL_SINGLE: '\'' (~( '\''))* '\'';
HELP_LITERAL: 'help' ( ' ' | '\t')+ SysMultiLine;
SYS_LITERAL: 'sys' ( ' ' | '\t')+ SysMultiLine;
TASK_LITERAL:
	'task' (' ' | '\t')+ ~('(' | '{' | '\r' | '\n') SysMultiLine;
COMMENT: '/*' .*? '*/' -> skip;
COMMENT_LINE: '//' ~('\n' | '\r')* -> skip;
COMMENT_LINE_HASH: '#' ~('\n' | '\r')* -> skip;
ID: ('a' ..'z' | 'A' ..'Z' | '_') (
		'a' ..'z'
		| 'A' ..'Z'
		| '0' ..'9'
		| '_'
	)*;
WS: ( ' ' | '\t' | '\r' | '\\\n' | '\\\r\n' | '\u000C') -> skip;
