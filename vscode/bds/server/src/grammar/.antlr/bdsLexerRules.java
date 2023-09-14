// Generated from /home/oskar/git/bds/oskarissimus/bds/vscode/bds/server/src/grammar/bdsLexerRules.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class bdsLexerRules extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NULL_LITERAL=1, BOOL_LITERAL=2, INT_LITERAL=3, REAL_LITERAL=4, STRING_LITERAL=5, 
		STRING_LITERAL_SINGLE=6, HELP_LITERAL=7, SYS_LITERAL=8, TASK_LITERAL=9, 
		COMMENT=10, COMMENT_LINE=11, COMMENT_LINE_HASH=12, ID=13, WS=14;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"IntegerNumber", "EscapeSequence", "EscapedNewLine", "Exponent", "HexPrefix", 
			"HexDigit", "NonIntegerNumber", "SysMultiLine", "NULL_LITERAL", "BOOL_LITERAL", 
			"INT_LITERAL", "REAL_LITERAL", "STRING_LITERAL", "STRING_LITERAL_SINGLE", 
			"HELP_LITERAL", "SYS_LITERAL", "TASK_LITERAL", "COMMENT", "COMMENT_LINE", 
			"COMMENT_LINE_HASH", "ID", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'null'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NULL_LITERAL", "BOOL_LITERAL", "INT_LITERAL", "REAL_LITERAL", 
			"STRING_LITERAL", "STRING_LITERAL_SINGLE", "HELP_LITERAL", "SYS_LITERAL", 
			"TASK_LITERAL", "COMMENT", "COMMENT_LINE", "COMMENT_LINE_HASH", "ID", 
			"WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public bdsLexerRules(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "bdsLexerRules.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\20\u0112\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\3\2\3\2\3\2\7"+
		"\2\63\n\2\f\2\16\2\66\13\2\3\2\3\2\6\2:\n\2\r\2\16\2;\3\2\3\2\6\2@\n\2"+
		"\r\2\16\2A\5\2D\n\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3N\n\3\3\4\3\4\3"+
		"\4\3\4\5\4T\n\4\3\5\3\5\5\5X\n\5\3\5\6\5[\n\5\r\5\16\5\\\3\6\3\6\3\6\3"+
		"\6\5\6c\n\6\3\7\3\7\3\b\6\bh\n\b\r\b\16\bi\3\b\3\b\7\bn\n\b\f\b\16\bq"+
		"\13\b\3\b\5\bt\n\b\3\b\3\b\6\bx\n\b\r\b\16\by\3\b\5\b}\n\b\3\b\6\b\u0080"+
		"\n\b\r\b\16\b\u0081\3\b\3\b\6\b\u0086\n\b\r\b\16\b\u0087\5\b\u008a\n\b"+
		"\3\t\3\t\7\t\u008e\n\t\f\t\16\t\u0091\13\t\3\n\3\n\3\n\3\n\3\n\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u00a1\n\13\3\f\3\f\3\r\3\r"+
		"\3\16\3\16\3\16\3\16\7\16\u00ab\n\16\f\16\16\16\u00ae\13\16\3\16\3\16"+
		"\3\17\3\17\7\17\u00b4\n\17\f\17\16\17\u00b7\13\17\3\17\3\17\3\20\3\20"+
		"\3\20\3\20\3\20\3\20\6\20\u00c1\n\20\r\20\16\20\u00c2\3\20\3\20\3\21\3"+
		"\21\3\21\3\21\3\21\6\21\u00cc\n\21\r\21\16\21\u00cd\3\21\3\21\3\22\3\22"+
		"\3\22\3\22\3\22\3\22\6\22\u00d8\n\22\r\22\16\22\u00d9\3\22\3\22\3\22\3"+
		"\23\3\23\3\23\3\23\7\23\u00e3\n\23\f\23\16\23\u00e6\13\23\3\23\3\23\3"+
		"\23\3\23\3\23\3\24\3\24\3\24\3\24\7\24\u00f1\n\24\f\24\16\24\u00f4\13"+
		"\24\3\24\3\24\3\25\3\25\7\25\u00fa\n\25\f\25\16\25\u00fd\13\25\3\25\3"+
		"\25\3\26\3\26\7\26\u0103\n\26\f\26\16\26\u0106\13\26\3\27\3\27\3\27\3"+
		"\27\3\27\3\27\3\27\5\27\u010f\n\27\3\27\3\27\3\u00e4\2\30\3\2\5\2\7\2"+
		"\t\2\13\2\r\2\17\2\21\2\23\3\25\4\27\5\31\6\33\7\35\b\37\t!\n#\13%\f\'"+
		"\r)\16+\17-\20\3\2\16\n\2$$))^^ddhhppttvv\4\2\f\f\17\17\4\2GGgg\4\2--"+
		"//\5\2\62;CHch\4\2$$^^\3\2))\4\2\13\13\"\"\6\2\f\f\17\17**}}\5\2C\\aa"+
		"c|\6\2\62;C\\aac|\5\2\13\13\17\17\"\"\2\u0130\2\23\3\2\2\2\2\25\3\2\2"+
		"\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2"+
		"!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3"+
		"\2\2\2\3C\3\2\2\2\5E\3\2\2\2\7O\3\2\2\2\tU\3\2\2\2\13b\3\2\2\2\rd\3\2"+
		"\2\2\17\u0089\3\2\2\2\21\u008f\3\2\2\2\23\u0092\3\2\2\2\25\u00a0\3\2\2"+
		"\2\27\u00a2\3\2\2\2\31\u00a4\3\2\2\2\33\u00a6\3\2\2\2\35\u00b1\3\2\2\2"+
		"\37\u00ba\3\2\2\2!\u00c6\3\2\2\2#\u00d1\3\2\2\2%\u00de\3\2\2\2\'\u00ec"+
		"\3\2\2\2)\u00f7\3\2\2\2+\u0100\3\2\2\2-\u010e\3\2\2\2/D\7\62\2\2\60\64"+
		"\4\63;\2\61\63\4\62;\2\62\61\3\2\2\2\63\66\3\2\2\2\64\62\3\2\2\2\64\65"+
		"\3\2\2\2\65D\3\2\2\2\66\64\3\2\2\2\679\7\62\2\28:\4\629\298\3\2\2\2:;"+
		"\3\2\2\2;9\3\2\2\2;<\3\2\2\2<D\3\2\2\2=?\5\13\6\2>@\5\r\7\2?>\3\2\2\2"+
		"@A\3\2\2\2A?\3\2\2\2AB\3\2\2\2BD\3\2\2\2C/\3\2\2\2C\60\3\2\2\2C\67\3\2"+
		"\2\2C=\3\2\2\2D\4\3\2\2\2EM\7^\2\2FN\t\2\2\2GH\4\62\65\2HI\4\629\2IN\4"+
		"\629\2JK\4\629\2KN\4\629\2LN\4\629\2MF\3\2\2\2MG\3\2\2\2MJ\3\2\2\2ML\3"+
		"\2\2\2N\6\3\2\2\2OS\7^\2\2PT\t\3\2\2QR\7\17\2\2RT\7\f\2\2SP\3\2\2\2SQ"+
		"\3\2\2\2T\b\3\2\2\2UW\t\4\2\2VX\t\5\2\2WV\3\2\2\2WX\3\2\2\2XZ\3\2\2\2"+
		"Y[\4\62;\2ZY\3\2\2\2[\\\3\2\2\2\\Z\3\2\2\2\\]\3\2\2\2]\n\3\2\2\2^_\7\62"+
		"\2\2_c\7z\2\2`a\7\62\2\2ac\7Z\2\2b^\3\2\2\2b`\3\2\2\2c\f\3\2\2\2de\t\6"+
		"\2\2e\16\3\2\2\2fh\4\62;\2gf\3\2\2\2hi\3\2\2\2ig\3\2\2\2ij\3\2\2\2jk\3"+
		"\2\2\2ko\7\60\2\2ln\4\62;\2ml\3\2\2\2nq\3\2\2\2om\3\2\2\2op\3\2\2\2ps"+
		"\3\2\2\2qo\3\2\2\2rt\5\t\5\2sr\3\2\2\2st\3\2\2\2t\u008a\3\2\2\2uw\7\60"+
		"\2\2vx\4\62;\2wv\3\2\2\2xy\3\2\2\2yw\3\2\2\2yz\3\2\2\2z|\3\2\2\2{}\5\t"+
		"\5\2|{\3\2\2\2|}\3\2\2\2}\u008a\3\2\2\2~\u0080\4\62;\2\177~\3\2\2\2\u0080"+
		"\u0081\3\2\2\2\u0081\177\3\2\2\2\u0081\u0082\3\2\2\2\u0082\u0083\3\2\2"+
		"\2\u0083\u008a\5\t\5\2\u0084\u0086\4\62;\2\u0085\u0084\3\2\2\2\u0086\u0087"+
		"\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u008a\3\2\2\2\u0089"+
		"g\3\2\2\2\u0089u\3\2\2\2\u0089\177\3\2\2\2\u0089\u0085\3\2\2\2\u008a\20"+
		"\3\2\2\2\u008b\u008e\5\7\4\2\u008c\u008e\n\3\2\2\u008d\u008b\3\2\2\2\u008d"+
		"\u008c\3\2\2\2\u008e\u0091\3\2\2\2\u008f\u008d\3\2\2\2\u008f\u0090\3\2"+
		"\2\2\u0090\22\3\2\2\2\u0091\u008f\3\2\2\2\u0092\u0093\7p\2\2\u0093\u0094"+
		"\7w\2\2\u0094\u0095\7n\2\2\u0095\u0096\7n\2\2\u0096\24\3\2\2\2\u0097\u0098"+
		"\7v\2\2\u0098\u0099\7t\2\2\u0099\u009a\7w\2\2\u009a\u00a1\7g\2\2\u009b"+
		"\u009c\7h\2\2\u009c\u009d\7c\2\2\u009d\u009e\7n\2\2\u009e\u009f\7u\2\2"+
		"\u009f\u00a1\7g\2\2\u00a0\u0097\3\2\2\2\u00a0\u009b\3\2\2\2\u00a1\26\3"+
		"\2\2\2\u00a2\u00a3\5\3\2\2\u00a3\30\3\2\2\2\u00a4\u00a5\5\17\b\2\u00a5"+
		"\32\3\2\2\2\u00a6\u00ac\7$\2\2\u00a7\u00ab\n\7\2\2\u00a8\u00a9\7^\2\2"+
		"\u00a9\u00ab\13\2\2\2\u00aa\u00a7\3\2\2\2\u00aa\u00a8\3\2\2\2\u00ab\u00ae"+
		"\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\u00af\3\2\2\2\u00ae"+
		"\u00ac\3\2\2\2\u00af\u00b0\7$\2\2\u00b0\34\3\2\2\2\u00b1\u00b5\7)\2\2"+
		"\u00b2\u00b4\n\b\2\2\u00b3\u00b2\3\2\2\2\u00b4\u00b7\3\2\2\2\u00b5\u00b3"+
		"\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b8\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b8"+
		"\u00b9\7)\2\2\u00b9\36\3\2\2\2\u00ba\u00bb\7j\2\2\u00bb\u00bc\7g\2\2\u00bc"+
		"\u00bd\7n\2\2\u00bd\u00be\7r\2\2\u00be\u00c0\3\2\2\2\u00bf\u00c1\t\t\2"+
		"\2\u00c0\u00bf\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c0\3\2\2\2\u00c2\u00c3"+
		"\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c5\5\21\t\2\u00c5 \3\2\2\2\u00c6"+
		"\u00c7\7u\2\2\u00c7\u00c8\7{\2\2\u00c8\u00c9\7u\2\2\u00c9\u00cb\3\2\2"+
		"\2\u00ca\u00cc\t\t\2\2\u00cb\u00ca\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd\u00cb"+
		"\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00cf\3\2\2\2\u00cf\u00d0\5\21\t\2"+
		"\u00d0\"\3\2\2\2\u00d1\u00d2\7v\2\2\u00d2\u00d3\7c\2\2\u00d3\u00d4\7u"+
		"\2\2\u00d4\u00d5\7m\2\2\u00d5\u00d7\3\2\2\2\u00d6\u00d8\t\t\2\2\u00d7"+
		"\u00d6\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00d7\3\2\2\2\u00d9\u00da\3\2"+
		"\2\2\u00da\u00db\3\2\2\2\u00db\u00dc\n\n\2\2\u00dc\u00dd\5\21\t\2\u00dd"+
		"$\3\2\2\2\u00de\u00df\7\61\2\2\u00df\u00e0\7,\2\2\u00e0\u00e4\3\2\2\2"+
		"\u00e1\u00e3\13\2\2\2\u00e2\u00e1\3\2\2\2\u00e3\u00e6\3\2\2\2\u00e4\u00e5"+
		"\3\2\2\2\u00e4\u00e2\3\2\2\2\u00e5\u00e7\3\2\2\2\u00e6\u00e4\3\2\2\2\u00e7"+
		"\u00e8\7,\2\2\u00e8\u00e9\7\61\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00eb\b\23"+
		"\2\2\u00eb&\3\2\2\2\u00ec\u00ed\7\61\2\2\u00ed\u00ee\7\61\2\2\u00ee\u00f2"+
		"\3\2\2\2\u00ef\u00f1\n\3\2\2\u00f0\u00ef\3\2\2\2\u00f1\u00f4\3\2\2\2\u00f2"+
		"\u00f0\3\2\2\2\u00f2\u00f3\3\2\2\2\u00f3\u00f5\3\2\2\2\u00f4\u00f2\3\2"+
		"\2\2\u00f5\u00f6\b\24\2\2\u00f6(\3\2\2\2\u00f7\u00fb\7%\2\2\u00f8\u00fa"+
		"\n\3\2\2\u00f9\u00f8\3\2\2\2\u00fa\u00fd\3\2\2\2\u00fb\u00f9\3\2\2\2\u00fb"+
		"\u00fc\3\2\2\2\u00fc\u00fe\3\2\2\2\u00fd\u00fb\3\2\2\2\u00fe\u00ff\b\25"+
		"\2\2\u00ff*\3\2\2\2\u0100\u0104\t\13\2\2\u0101\u0103\t\f\2\2\u0102\u0101"+
		"\3\2\2\2\u0103\u0106\3\2\2\2\u0104\u0102\3\2\2\2\u0104\u0105\3\2\2\2\u0105"+
		",\3\2\2\2\u0106\u0104\3\2\2\2\u0107\u010f\t\r\2\2\u0108\u0109\7^\2\2\u0109"+
		"\u010f\7\f\2\2\u010a\u010b\7^\2\2\u010b\u010c\7\17\2\2\u010c\u010f\7\f"+
		"\2\2\u010d\u010f\7\16\2\2\u010e\u0107\3\2\2\2\u010e\u0108\3\2\2\2\u010e"+
		"\u010a\3\2\2\2\u010e\u010d\3\2\2\2\u010f\u0110\3\2\2\2\u0110\u0111\b\27"+
		"\2\2\u0111.\3\2\2\2\"\2\64;ACMSW\\biosy|\u0081\u0087\u0089\u008d\u008f"+
		"\u00a0\u00aa\u00ac\u00b5\u00c2\u00cd\u00d9\u00e4\u00f2\u00fb\u0104\u010e"+
		"\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}