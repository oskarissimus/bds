// Generated from server/src/grammar/bds.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import bdsListener from "./bdsListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class bdsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly NULL_LITERAL = 81;
	public static readonly BOOL_LITERAL = 82;
	public static readonly INT_LITERAL = 83;
	public static readonly REAL_LITERAL = 84;
	public static readonly STRING_LITERAL = 85;
	public static readonly STRING_LITERAL_SINGLE = 86;
	public static readonly HELP_LITERAL = 87;
	public static readonly SYS_LITERAL = 88;
	public static readonly TASK_LITERAL = 89;
	public static readonly COMMENT = 90;
	public static readonly COMMENT_LINE = 91;
	public static readonly COMMENT_LINE_HASH = 92;
	public static readonly ID = 93;
	public static readonly WS = 94;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_programUnit = 0;
	public static readonly RULE_eol = 1;
	public static readonly RULE_includeFile = 2;
	public static readonly RULE_typeList = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_varDeclaration = 5;
	public static readonly RULE_variableInit = 6;
	public static readonly RULE_variableInitImplicit = 7;
	public static readonly RULE_functionDeclaration = 8;
	public static readonly RULE_field = 9;
	public static readonly RULE_classDef = 10;
	public static readonly RULE_statement = 11;
	public static readonly RULE_forInit = 12;
	public static readonly RULE_forCondition = 13;
	public static readonly RULE_forEnd = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_expressionList = 16;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'\\n'", "'include'", 
                                                            "','", "'bool'", 
                                                            "'int'", "'real'", 
                                                            "'string'", 
                                                            "'void'", "'['", 
                                                            "']'", "'{'", 
                                                            "'}'", "'='", 
                                                            "':='", "'('", 
                                                            "')'", "'class'", 
                                                            "'extends'", 
                                                            "'break'", "'breakpoint'", 
                                                            "'checkpoint'", 
                                                            "'continue'", 
                                                            "'debug'", "'exit'", 
                                                            "'print'", "'println'", 
                                                            "'warning'", 
                                                            "'error'", "'try'", 
                                                            "'catch'", "'finally'", 
                                                            "'throw'", "'for'", 
                                                            "':'", "'if'", 
                                                            "'else'", "'kill'", 
                                                            "'return'", 
                                                            "'wait'", "'switch'", 
                                                            "'case'", "'default'", 
                                                            "'while'", "'.'", 
                                                            "'new'", "'++'", 
                                                            "'--'", "'~'", 
                                                            "'!'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'+'", "'-'", 
                                                            "'<'", "'<='", 
                                                            "'=='", "'!='", 
                                                            "'>='", "'>'", 
                                                            "'&'", "'|'", 
                                                            "'^'", "'&&'", 
                                                            "'||'", "'?'", 
                                                            "'<-'", "'=>'", 
                                                            "'task'", "'dep'", 
                                                            "'goal'", "'par'", 
                                                            "'parallel'", 
                                                            "'|='", "'&='", 
                                                            "'/='", "'*='", 
                                                            "'-='", "'+='", 
                                                            "'null'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "NULL_LITERAL", 
                                                             "BOOL_LITERAL", 
                                                             "INT_LITERAL", 
                                                             "REAL_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "STRING_LITERAL_SINGLE", 
                                                             "HELP_LITERAL", 
                                                             "SYS_LITERAL", 
                                                             "TASK_LITERAL", 
                                                             "COMMENT", 
                                                             "COMMENT_LINE", 
                                                             "COMMENT_LINE_HASH", 
                                                             "ID", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programUnit", "eol", "includeFile", "typeList", "type", "varDeclaration", 
		"variableInit", "variableInitImplicit", "functionDeclaration", "field", 
		"classDef", "statement", "forInit", "forCondition", "forEnd", "expression", 
		"expressionList",
	];
	public get grammarFileName(): string { return "bds.g4"; }
	public get literalNames(): (string | null)[] { return bdsParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return bdsParser.symbolicNames; }
	public get ruleNames(): string[] { return bdsParser.ruleNames; }
	public get serializedATN(): number[] { return bdsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, bdsParser._ATN, bdsParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public programUnit(): ProgramUnitContext {
		let localctx: ProgramUnitContext = new ProgramUnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, bdsParser.RULE_programUnit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 34;
					this.eol();
					}
					}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 40;
				this.statement();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2146768878) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 6547947) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 9435167) !== 0));
			this.state = 45;
			this.match(bdsParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eol(): EolContext {
		let localctx: EolContext = new EolContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, bdsParser.RULE_eol);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 47;
					_la = this._input.LA(1);
					if(!(_la===1 || _la===2)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public includeFile(): IncludeFileContext {
		let localctx: IncludeFileContext = new IncludeFileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, bdsParser.RULE_includeFile);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 52;
			this.match(bdsParser.T__2);
			this.state = 53;
			_la = this._input.LA(1);
			if(!(_la===85 || _la===86)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 54;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let localctx: TypeListContext = new TypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, bdsParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.type_(0);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 57;
				this.match(bdsParser.T__3);
				this.state = 58;
				this.type_(0);
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public type_(): TypeContext;
	public type_(_p: number): TypeContext;
	// @RuleVersion(0)
	public type_(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TypeContext = new TypeContext(this, this._ctx, _parentState);
		let _prevctx: TypeContext = localctx;
		let _startState: number = 8;
		this.enterRecursionRule(localctx, 8, bdsParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				{
				localctx = new TypeBoolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 65;
				this.match(bdsParser.T__4);
				}
				break;
			case 6:
				{
				localctx = new TypeIntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 66;
				this.match(bdsParser.T__5);
				}
				break;
			case 7:
				{
				localctx = new TypeRealContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 67;
				this.match(bdsParser.T__6);
				}
				break;
			case 8:
				{
				localctx = new TypeStringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 68;
				this.match(bdsParser.T__7);
				}
				break;
			case 9:
				{
				localctx = new TypeVoidContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 69;
				this.match(bdsParser.T__8);
				}
				break;
			case 93:
				{
				localctx = new TypeClassContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 70;
				this.match(bdsParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 86;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 84;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						localctx = new TypeArrayContext(this, new TypeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_type);
						this.state = 73;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 74;
						this.match(bdsParser.T__9);
						this.state = 75;
						this.match(bdsParser.T__10);
						}
						break;
					case 2:
						{
						localctx = new TypeMapContext(this, new TypeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_type);
						this.state = 76;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 77;
						this.match(bdsParser.T__11);
						this.state = 78;
						this.match(bdsParser.T__12);
						}
						break;
					case 3:
						{
						localctx = new TypeMapContext(this, new TypeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_type);
						this.state = 79;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 80;
						this.match(bdsParser.T__11);
						this.state = 81;
						this.type_(0);
						this.state = 82;
						this.match(bdsParser.T__12);
						}
						break;
					}
					}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDeclaration(): VarDeclarationContext {
		let localctx: VarDeclarationContext = new VarDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, bdsParser.RULE_varDeclaration);
		try {
			let _alt: number;
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 89;
				this.type_(0);
				this.state = 90;
				this.variableInit();
				this.state = 95;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 91;
						this.match(bdsParser.T__3);
						this.state = 92;
						this.variableInit();
						}
						}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 98;
				this.variableInitImplicit();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableInit(): VariableInitContext {
		let localctx: VariableInitContext = new VariableInitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, bdsParser.RULE_variableInit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this.match(bdsParser.ID);
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 102;
				this.match(bdsParser.T__13);
				this.state = 103;
				this.expression(0);
				}
				break;
			}
			this.state = 107;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 106;
				this.match(bdsParser.HELP_LITERAL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableInitImplicit(): VariableInitImplicitContext {
		let localctx: VariableInitImplicitContext = new VariableInitImplicitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, bdsParser.RULE_variableInitImplicit);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this.match(bdsParser.ID);
			this.state = 110;
			this.match(bdsParser.T__14);
			this.state = 111;
			this.expression(0);
			this.state = 113;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 112;
				this.match(bdsParser.HELP_LITERAL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, bdsParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.type_(0);
			this.state = 116;
			this.match(bdsParser.ID);
			this.state = 117;
			this.match(bdsParser.T__15);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0) || _la===93) {
				{
				this.state = 118;
				this.varDeclaration();
				}
			}

			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 121;
				this.match(bdsParser.T__3);
				this.state = 122;
				this.varDeclaration();
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 128;
			this.match(bdsParser.T__16);
			this.state = 129;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let localctx: FieldContext = new FieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, bdsParser.RULE_field);
		let _la: number;
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				localctx = new FieldDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 131;
				this.varDeclaration();
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===2) {
					{
					{
					this.state = 132;
					this.eol();
					}
					}
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 2:
				localctx = new MethodDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 138;
				this.functionDeclaration();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===2) {
					{
					{
					this.state = 139;
					this.eol();
					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classDef(): ClassDefContext {
		let localctx: ClassDefContext = new ClassDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, bdsParser.RULE_classDef);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
			this.match(bdsParser.T__17);
			this.state = 148;
			this.match(bdsParser.ID);
			this.state = 152;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 149;
					this.eol();
					}
					}
				}
				this.state = 154;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 155;
				this.match(bdsParser.T__18);
				this.state = 156;
				this.match(bdsParser.ID);
				}
			}

			this.state = 162;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===2) {
				{
				{
				this.state = 159;
				this.eol();
				}
				}
				this.state = 164;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 165;
			this.match(bdsParser.T__11);
			this.state = 169;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===2) {
				{
				{
				this.state = 166;
				this.eol();
				}
				}
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 992) !== 0) || _la===93) {
				{
				{
				this.state = 172;
				this.field();
				}
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 178;
			this.match(bdsParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, bdsParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				localctx = new BlockContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 180;
				this.match(bdsParser.T__11);
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2146768878) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 6547947) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 9435167) !== 0)) {
					{
					{
					this.state = 181;
					this.statement();
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 187;
				this.match(bdsParser.T__12);
				}
				break;
			case 2:
				localctx = new BreakContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 188;
				this.match(bdsParser.T__19);
				this.state = 192;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 189;
						this.eol();
						}
						}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
				}
				}
				break;
			case 3:
				localctx = new BreakpointContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 195;
				this.match(bdsParser.T__20);
				this.state = 197;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 196;
					this.expression(0);
					}
					break;
				}
				this.state = 202;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 199;
						this.eol();
						}
						}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 25, this._ctx);
				}
				}
				break;
			case 4:
				localctx = new CheckpointContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 205;
				this.match(bdsParser.T__21);
				this.state = 207;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 206;
					this.expression(0);
					}
					break;
				}
				this.state = 212;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 209;
						this.eol();
						}
						}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
				}
				}
				break;
			case 5:
				localctx = new ContinueContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 215;
				this.match(bdsParser.T__22);
				this.state = 219;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 216;
						this.eol();
						}
						}
					}
					this.state = 221;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
				}
				}
				break;
			case 6:
				localctx = new DebugContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 222;
				this.match(bdsParser.T__23);
				this.state = 224;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 223;
					this.expression(0);
					}
					break;
				}
				this.state = 229;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 226;
						this.eol();
						}
						}
					}
					this.state = 231;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				}
				}
				break;
			case 7:
				localctx = new ExitContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 232;
				this.match(bdsParser.T__24);
				this.state = 234;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 233;
					this.expression(0);
					}
					break;
				}
				this.state = 239;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 236;
						this.eol();
						}
						}
					}
					this.state = 241;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				}
				}
				break;
			case 8:
				localctx = new PrintContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 242;
				this.match(bdsParser.T__25);
				this.state = 244;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 243;
					this.expression(0);
					}
					break;
				}
				this.state = 249;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 246;
						this.eol();
						}
						}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 34, this._ctx);
				}
				}
				break;
			case 9:
				localctx = new PrintlnContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 252;
				this.match(bdsParser.T__26);
				this.state = 254;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 253;
					this.expression(0);
					}
					break;
				}
				this.state = 259;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 256;
						this.eol();
						}
						}
					}
					this.state = 261;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 36, this._ctx);
				}
				}
				break;
			case 10:
				localctx = new WarningContext(this, localctx);
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 262;
				this.match(bdsParser.T__27);
				this.state = 264;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 263;
					this.expression(0);
					}
					break;
				}
				this.state = 269;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 266;
						this.eol();
						}
						}
					}
					this.state = 271;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
				}
				}
				break;
			case 11:
				localctx = new ErrorContext(this, localctx);
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 272;
				this.match(bdsParser.T__28);
				this.state = 274;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 273;
					this.expression(0);
					}
					break;
				}
				this.state = 279;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 276;
						this.eol();
						}
						}
					}
					this.state = 281;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
				}
				}
				break;
			case 12:
				localctx = new TryCatchFinallyContext(this, localctx);
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 282;
				this.match(bdsParser.T__29);
				this.state = 283;
				this.statement();
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 284;
						this.eol();
						}
						}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
				}
				this.state = 304;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 290;
						this.match(bdsParser.T__30);
						this.state = 291;
						this.match(bdsParser.T__15);
						this.state = 292;
						this.type_(0);
						this.state = 293;
						this.match(bdsParser.ID);
						this.state = 294;
						this.match(bdsParser.T__16);
						this.state = 295;
						this.statement();
						this.state = 299;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 296;
								this.eol();
								}
								}
							}
							this.state = 301;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
						}
						}
						}
					}
					this.state = 306;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
				}
				this.state = 315;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
				case 1:
					{
					this.state = 307;
					this.match(bdsParser.T__31);
					this.state = 308;
					this.statement();
					this.state = 312;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 309;
							this.eol();
							}
							}
						}
						this.state = 314;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 44, this._ctx);
					}
					}
					break;
				}
				}
				break;
			case 13:
				localctx = new ThrowContext(this, localctx);
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 317;
				this.match(bdsParser.T__32);
				this.state = 318;
				this.expression(0);
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 319;
						this.eol();
						}
						}
					}
					this.state = 324;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 46, this._ctx);
				}
				}
				break;
			case 14:
				localctx = new ForLoopContext(this, localctx);
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 325;
				this.match(bdsParser.T__33);
				this.state = 326;
				this.match(bdsParser.T__15);
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 71648) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 520094495) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4543) !== 0)) {
					{
					this.state = 327;
					this.forInit();
					}
				}

				this.state = 330;
				this.match(bdsParser.T__0);
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 70656) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 520094495) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4543) !== 0)) {
					{
					this.state = 331;
					this.forCondition();
					}
				}

				this.state = 334;
				this.match(bdsParser.T__0);
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 70656) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 520094495) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4543) !== 0)) {
					{
					this.state = 335;
					(localctx as ForLoopContext)._end = this.forEnd();
					}
				}

				this.state = 338;
				this.match(bdsParser.T__16);
				this.state = 339;
				this.statement();
				this.state = 343;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 340;
						this.eol();
						}
						}
					}
					this.state = 345;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				}
				}
				break;
			case 15:
				localctx = new ForLoopListContext(this, localctx);
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 346;
				this.match(bdsParser.T__33);
				this.state = 347;
				this.match(bdsParser.T__15);
				this.state = 348;
				this.varDeclaration();
				this.state = 349;
				this.match(bdsParser.T__34);
				this.state = 350;
				this.expression(0);
				this.state = 351;
				this.match(bdsParser.T__16);
				this.state = 352;
				this.statement();
				this.state = 356;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 353;
						this.eol();
						}
						}
					}
					this.state = 358;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 51, this._ctx);
				}
				}
				break;
			case 16:
				localctx = new IfContext(this, localctx);
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 359;
				this.match(bdsParser.T__35);
				this.state = 360;
				this.match(bdsParser.T__15);
				this.state = 361;
				this.expression(0);
				this.state = 362;
				this.match(bdsParser.T__16);
				this.state = 363;
				this.statement();
				this.state = 367;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 364;
						this.eol();
						}
						}
					}
					this.state = 369;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
				}
				this.state = 378;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 370;
					this.match(bdsParser.T__36);
					this.state = 371;
					this.statement();
					this.state = 375;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 372;
							this.eol();
							}
							}
						}
						this.state = 377;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 53, this._ctx);
					}
					}
					break;
				}
				}
				break;
			case 17:
				localctx = new KillContext(this, localctx);
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 380;
				this.match(bdsParser.T__37);
				this.state = 381;
				this.expression(0);
				this.state = 385;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 382;
						this.eol();
						}
						}
					}
					this.state = 387;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 55, this._ctx);
				}
				}
				break;
			case 18:
				localctx = new ReturnContext(this, localctx);
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 388;
				this.match(bdsParser.T__38);
				this.state = 390;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
				case 1:
					{
					this.state = 389;
					this.expression(0);
					}
					break;
				}
				this.state = 395;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 392;
						this.eol();
						}
						}
					}
					this.state = 397;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 57, this._ctx);
				}
				}
				break;
			case 19:
				localctx = new WaitContext(this, localctx);
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 398;
				this.match(bdsParser.T__39);
				this.state = 407;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 399;
					this.expression(0);
					this.state = 404;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 400;
							this.match(bdsParser.T__3);
							this.state = 401;
							this.expression(0);
							}
							}
						}
						this.state = 406;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
					}
					}
					break;
				}
				this.state = 412;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 409;
						this.eol();
						}
						}
					}
					this.state = 414;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 60, this._ctx);
				}
				}
				break;
			case 20:
				localctx = new SwitchContext(this, localctx);
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 415;
				this.match(bdsParser.T__40);
				this.state = 416;
				this.match(bdsParser.T__15);
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 70656) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 520094495) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4543) !== 0)) {
					{
					this.state = 417;
					this.expression(0);
					}
				}

				this.state = 420;
				this.match(bdsParser.T__16);
				this.state = 421;
				this.match(bdsParser.T__11);
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===2) {
					{
					{
					this.state = 422;
					this.eol();
					}
					}
					this.state = 427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 445;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 428;
						this.match(bdsParser.T__41);
						this.state = 429;
						this.expression(0);
						this.state = 430;
						this.match(bdsParser.T__34);
						this.state = 434;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 431;
								this.statement();
								}
								}
							}
							this.state = 436;
							this._errHandler.sync(this);
							_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
						}
						this.state = 440;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la===1 || _la===2) {
							{
							{
							this.state = 437;
							this.eol();
							}
							}
							this.state = 442;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
						}
					}
					this.state = 447;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
				}
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===43) {
					{
					this.state = 448;
					this.match(bdsParser.T__42);
					this.state = 449;
					this.match(bdsParser.T__34);
					this.state = 453;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2146768878) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 6547947) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 9435167) !== 0)) {
						{
						{
						this.state = 450;
						this.statement();
						}
						}
						this.state = 455;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 458;
					this.match(bdsParser.T__41);
					this.state = 459;
					this.expression(0);
					this.state = 460;
					this.match(bdsParser.T__34);
					this.state = 464;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 461;
							this.statement();
							}
							}
						}
						this.state = 466;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
					}
					this.state = 470;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===1 || _la===2) {
						{
						{
						this.state = 467;
						this.eol();
						}
						}
						this.state = 472;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 477;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 478;
				this.match(bdsParser.T__12);
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 479;
						this.eol();
						}
						}
					}
					this.state = 484;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
				}
				}
				break;
			case 21:
				localctx = new WhileContext(this, localctx);
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 485;
				this.match(bdsParser.T__43);
				this.state = 486;
				this.match(bdsParser.T__15);
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 70656) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 520094495) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4543) !== 0)) {
					{
					this.state = 487;
					this.expression(0);
					}
				}

				this.state = 490;
				this.match(bdsParser.T__16);
				this.state = 491;
				this.statement();
				this.state = 495;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 492;
						this.eol();
						}
						}
					}
					this.state = 497;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 73, this._ctx);
				}
				}
				break;
			case 22:
				localctx = new StatementFunctionDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 498;
				this.functionDeclaration();
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 499;
						this.eol();
						}
						}
					}
					this.state = 504;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 74, this._ctx);
				}
				}
				break;
			case 23:
				localctx = new StatementVarDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 505;
				this.varDeclaration();
				this.state = 509;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 75, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 506;
						this.eol();
						}
						}
					}
					this.state = 511;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 75, this._ctx);
				}
				}
				break;
			case 24:
				localctx = new ClassDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 512;
				this.classDef();
				this.state = 516;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 513;
						this.eol();
						}
						}
					}
					this.state = 518;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 76, this._ctx);
				}
				}
				break;
			case 25:
				localctx = new StatementExprContext(this, localctx);
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 519;
				this.expression(0);
				this.state = 523;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 77, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 520;
						this.eol();
						}
						}
					}
					this.state = 525;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 77, this._ctx);
				}
				}
				break;
			case 26:
				localctx = new StatementIncludeContext(this, localctx);
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 526;
				this.includeFile();
				this.state = 530;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 527;
						this.eol();
						}
						}
					}
					this.state = 532;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
				}
				}
				break;
			case 27:
				localctx = new HelpContext(this, localctx);
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 533;
				this.match(bdsParser.HELP_LITERAL);
				}
				break;
			case 28:
				localctx = new StatmentEolContext(this, localctx);
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 534;
				this.eol();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let localctx: ForInitContext = new ForInitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, bdsParser.RULE_forInit);
		try {
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 537;
				this.varDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 538;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forCondition(): ForConditionContext {
		let localctx: ForConditionContext = new ForConditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, bdsParser.RULE_forCondition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 541;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forEnd(): ForEndContext {
		let localctx: ForEndContext = new ForEndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, bdsParser.RULE_forEnd);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 543;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 30;
		this.enterRecursionRule(localctx, 30, bdsParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 689;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				{
				localctx = new LiteralNullContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 546;
				this.match(bdsParser.NULL_LITERAL);
				}
				break;
			case 2:
				{
				localctx = new LiteralBoolContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 547;
				this.match(bdsParser.BOOL_LITERAL);
				}
				break;
			case 3:
				{
				localctx = new LiteralIntContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 548;
				this.match(bdsParser.INT_LITERAL);
				}
				break;
			case 4:
				{
				localctx = new LiteralRealContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 549;
				this.match(bdsParser.REAL_LITERAL);
				}
				break;
			case 5:
				{
				localctx = new LiteralStringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 550;
				this.match(bdsParser.STRING_LITERAL);
				}
				break;
			case 6:
				{
				localctx = new LiteralStringContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 551;
				this.match(bdsParser.STRING_LITERAL_SINGLE);
				}
				break;
			case 7:
				{
				localctx = new ExpressionCastContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 552;
				this.match(bdsParser.T__15);
				this.state = 553;
				this.match(bdsParser.ID);
				this.state = 554;
				this.match(bdsParser.T__16);
				this.state = 555;
				this.expression(39);
				}
				break;
			case 8:
				{
				localctx = new ExpressionNewContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 556;
				this.match(bdsParser.T__45);
				this.state = 557;
				this.match(bdsParser.ID);
				this.state = 558;
				this.match(bdsParser.T__15);
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 70656) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 520094495) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4543) !== 0)) {
					{
					this.state = 559;
					this.expression(0);
					this.state = 564;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 560;
						this.match(bdsParser.T__3);
						this.state = 561;
						this.expression(0);
						}
						}
						this.state = 566;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 569;
				this.match(bdsParser.T__16);
				}
				break;
			case 9:
				{
				localctx = new FunctionCallContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 570;
				this.match(bdsParser.ID);
				this.state = 571;
				this.match(bdsParser.T__15);
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 70656) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 520094495) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4543) !== 0)) {
					{
					this.state = 572;
					this.expression(0);
					this.state = 577;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 573;
						this.match(bdsParser.T__3);
						this.state = 574;
						this.expression(0);
						}
						}
						this.state = 579;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 582;
				this.match(bdsParser.T__16);
				}
				break;
			case 10:
				{
				localctx = new ReferenceVarContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 583;
				this.match(bdsParser.ID);
				}
				break;
			case 11:
				{
				localctx = new PreContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 584;
				(localctx as PreContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===47 || _la===48)) {
				    (localctx as PreContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 585;
				this.expression(32);
				}
				break;
			case 12:
				{
				localctx = new ExpressionBitNegationContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 586;
				this.match(bdsParser.T__48);
				this.state = 587;
				this.expression(30);
				}
				break;
			case 13:
				{
				localctx = new ExpressionLogicNotContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 588;
				this.match(bdsParser.T__49);
				this.state = 589;
				this.expression(29);
				}
				break;
			case 14:
				{
				localctx = new ExpressionUnaryPlusMinusContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 590;
				(localctx as ExpressionUnaryPlusMinusContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===54 || _la===55)) {
				    (localctx as ExpressionUnaryPlusMinusContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 591;
				this.expression(25);
				}
				break;
			case 15:
				{
				localctx = new ExpressionParenContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 592;
				this.match(bdsParser.T__15);
				this.state = 593;
				this.expression(0);
				this.state = 594;
				this.match(bdsParser.T__16);
				}
				break;
			case 16:
				{
				localctx = new LiteralListEmptyContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 596;
				this.match(bdsParser.T__9);
				this.state = 597;
				this.match(bdsParser.T__10);
				}
				break;
			case 17:
				{
				localctx = new LiteralListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 598;
				this.match(bdsParser.T__9);
				this.state = 599;
				this.expression(0);
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 600;
					this.match(bdsParser.T__3);
					this.state = 601;
					this.expression(0);
					}
					}
					this.state = 606;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 607;
				this.match(bdsParser.T__10);
				}
				break;
			case 18:
				{
				localctx = new LiteralMapEmptyContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 609;
				this.match(bdsParser.T__11);
				this.state = 610;
				this.match(bdsParser.T__12);
				}
				break;
			case 19:
				{
				localctx = new LiteralMapContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 611;
				this.match(bdsParser.T__11);
				this.state = 612;
				this.expression(0);
				this.state = 613;
				this.match(bdsParser.T__68);
				this.state = 614;
				this.expression(0);
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 615;
					this.match(bdsParser.T__3);
					this.state = 616;
					this.expression(0);
					this.state = 617;
					this.match(bdsParser.T__68);
					this.state = 618;
					this.expression(0);
					}
					}
					this.state = 624;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 625;
				this.match(bdsParser.T__12);
				}
				break;
			case 20:
				{
				localctx = new ExpressionSysContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 627;
				this.match(bdsParser.SYS_LITERAL);
				}
				break;
			case 21:
				{
				localctx = new ExpressionTaskLiteralContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 628;
				this.match(bdsParser.TASK_LITERAL);
				}
				break;
			case 22:
				{
				localctx = new ExpressionTaskContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 629;
				this.match(bdsParser.T__69);
				this.state = 641;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 630;
					this.match(bdsParser.T__15);
					this.state = 631;
					this.expression(0);
					this.state = 636;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 632;
						this.match(bdsParser.T__3);
						this.state = 633;
						this.expression(0);
						}
						}
						this.state = 638;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 639;
					this.match(bdsParser.T__16);
					}
					break;
				}
				this.state = 643;
				this.statement();
				}
				break;
			case 23:
				{
				localctx = new ExpressionDepContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 644;
				this.match(bdsParser.T__70);
				this.state = 645;
				this.match(bdsParser.T__15);
				this.state = 646;
				this.expression(0);
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===4) {
					{
					{
					this.state = 647;
					this.match(bdsParser.T__3);
					this.state = 648;
					this.expression(0);
					}
					}
					this.state = 653;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 654;
				this.match(bdsParser.T__16);
				this.state = 655;
				this.statement();
				}
				break;
			case 24:
				{
				localctx = new ExpressionGoalContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 657;
				this.match(bdsParser.T__71);
				this.state = 658;
				this.expression(11);
				}
				break;
			case 25:
				{
				localctx = new ExpressionParallelContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 659;
				_la = this._input.LA(1);
				if(!(_la===73 || _la===74)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 671;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
				case 1:
					{
					this.state = 660;
					this.match(bdsParser.T__15);
					this.state = 661;
					this.expression(0);
					this.state = 666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===4) {
						{
						{
						this.state = 662;
						this.match(bdsParser.T__3);
						this.state = 663;
						this.expression(0);
						}
						}
						this.state = 668;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 669;
					this.match(bdsParser.T__16);
					}
					break;
				}
				this.state = 673;
				this.statement();
				}
				break;
			case 26:
				{
				localctx = new ExpressionAssignmentListContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 674;
				this.match(bdsParser.T__15);
				this.state = 675;
				this.expression(0);
				this.state = 678;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 676;
					this.match(bdsParser.T__3);
					this.state = 677;
					this.expression(0);
					}
					}
					this.state = 680;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===4);
				this.state = 682;
				this.match(bdsParser.T__16);
				this.state = 683;
				this.match(bdsParser.T__13);
				this.state = 684;
				this.expression(3);
				}
				break;
			case 27:
				{
				localctx = new ExpressionVariableInitImplicitContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 686;
				this.match(bdsParser.ID);
				this.state = 687;
				this.match(bdsParser.T__14);
				this.state = 688;
				this.expression(1);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 768;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 766;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionTimesDivModContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 691;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						this.state = 692;
						(localctx as ExpressionTimesDivModContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 7) !== 0))) {
						    (localctx as ExpressionTimesDivModContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 693;
						this.expression(29);
						}
						break;
					case 2:
						{
						localctx = new ExpressionPlusMinusContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 694;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 695;
						(localctx as ExpressionPlusMinusContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===54 || _la===55)) {
						    (localctx as ExpressionPlusMinusContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 696;
						this.expression(28);
						}
						break;
					case 3:
						{
						localctx = new ExpressionCompContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 697;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 698;
						(localctx as ExpressionCompContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 63) !== 0))) {
						    (localctx as ExpressionCompContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 699;
						this.expression(27);
						}
						break;
					case 4:
						{
						localctx = new ExpressionBitOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 700;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 701;
						(localctx as ExpressionBitOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & 7) !== 0))) {
						    (localctx as ExpressionBitOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 702;
						this.expression(25);
						}
						break;
					case 5:
						{
						localctx = new ExpressionLogicOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 703;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 704;
						(localctx as ExpressionLogicOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===65 || _la===66)) {
						    (localctx as ExpressionLogicOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 705;
						this.expression(24);
						}
						break;
					case 6:
						{
						localctx = new ExpressionCondContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 706;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 707;
						this.match(bdsParser.T__66);
						this.state = 708;
						this.expression(0);
						this.state = 709;
						this.match(bdsParser.T__34);
						this.state = 710;
						this.expression(22);
						}
						break;
					case 7:
						{
						localctx = new ExpressionDepOperatorContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 712;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 713;
						this.match(bdsParser.T__67);
						this.state = 714;
						this.expression(21);
						}
						break;
					case 8:
						{
						localctx = new ExpressionAssignmentBitOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 715;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 716;
						this.match(bdsParser.T__74);
						this.state = 717;
						this.expression(10);
						}
						break;
					case 9:
						{
						localctx = new ExpressionAssignmentBitAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 718;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 719;
						this.match(bdsParser.T__75);
						this.state = 720;
						this.expression(9);
						}
						break;
					case 10:
						{
						localctx = new ExpressionAssignmentDivContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 721;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 722;
						this.match(bdsParser.T__76);
						this.state = 723;
						this.expression(8);
						}
						break;
					case 11:
						{
						localctx = new ExpressionAssignmentMultContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 724;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 725;
						this.match(bdsParser.T__77);
						this.state = 726;
						this.expression(7);
						}
						break;
					case 12:
						{
						localctx = new ExpressionAssignmentMinusContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 727;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 728;
						this.match(bdsParser.T__78);
						this.state = 729;
						this.expression(6);
						}
						break;
					case 13:
						{
						localctx = new ExpressionAssignmentPlusContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 730;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 731;
						this.match(bdsParser.T__79);
						this.state = 732;
						this.expression(5);
						}
						break;
					case 14:
						{
						localctx = new ExpressionAssignmentContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 733;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 734;
						this.match(bdsParser.T__13);
						this.state = 735;
						this.expression(3);
						}
						break;
					case 15:
						{
						localctx = new MethodCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 736;
						if (!(this.precpred(this._ctx, 40))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 40)");
						}
						this.state = 737;
						this.match(bdsParser.T__44);
						this.state = 738;
						this.match(bdsParser.ID);
						this.state = 739;
						this.match(bdsParser.T__15);
						this.state = 748;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 70656) !== 0) || ((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 520094495) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 4543) !== 0)) {
							{
							this.state = 740;
							this.expression(0);
							this.state = 745;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la===4) {
								{
								{
								this.state = 741;
								this.match(bdsParser.T__3);
								this.state = 742;
								this.expression(0);
								}
								}
								this.state = 747;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 750;
						this.match(bdsParser.T__16);
						}
						break;
					case 16:
						{
						localctx = new ReferenceFieldContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 751;
						if (!(this.precpred(this._ctx, 36))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 36)");
						}
						this.state = 752;
						this.match(bdsParser.T__44);
						this.state = 753;
						this.match(bdsParser.ID);
						}
						break;
					case 17:
						{
						localctx = new ReferenceListContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 754;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 755;
						this.match(bdsParser.T__9);
						this.state = 756;
						this.expression(0);
						this.state = 757;
						this.match(bdsParser.T__10);
						}
						break;
					case 18:
						{
						localctx = new ReferenceMapContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 759;
						if (!(this.precpred(this._ctx, 33))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 33)");
						}
						this.state = 760;
						this.match(bdsParser.T__11);
						this.state = 761;
						this.expression(0);
						this.state = 762;
						this.match(bdsParser.T__12);
						}
						break;
					case 19:
						{
						localctx = new PostContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, bdsParser.RULE_expression);
						this.state = 764;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 765;
						(localctx as PostContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===47 || _la===48)) {
						    (localctx as PostContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						break;
					}
					}
				}
				this.state = 770;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 97, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let localctx: ExpressionListContext = new ExpressionListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, bdsParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 771;
			this.expression(0);
			this.state = 776;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 772;
				this.match(bdsParser.T__3);
				this.state = 773;
				this.expression(0);
				}
				}
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.type_sempred(localctx as TypeContext, predIndex);
		case 15:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private type_sempred(localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 28);
		case 4:
			return this.precpred(this._ctx, 27);
		case 5:
			return this.precpred(this._ctx, 26);
		case 6:
			return this.precpred(this._ctx, 24);
		case 7:
			return this.precpred(this._ctx, 23);
		case 8:
			return this.precpred(this._ctx, 21);
		case 9:
			return this.precpred(this._ctx, 20);
		case 10:
			return this.precpred(this._ctx, 9);
		case 11:
			return this.precpred(this._ctx, 8);
		case 12:
			return this.precpred(this._ctx, 7);
		case 13:
			return this.precpred(this._ctx, 6);
		case 14:
			return this.precpred(this._ctx, 5);
		case 15:
			return this.precpred(this._ctx, 4);
		case 16:
			return this.precpred(this._ctx, 2);
		case 17:
			return this.precpred(this._ctx, 40);
		case 18:
			return this.precpred(this._ctx, 36);
		case 19:
			return this.precpred(this._ctx, 34);
		case 20:
			return this.precpred(this._ctx, 33);
		case 21:
			return this.precpred(this._ctx, 31);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,94,780,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	5,0,36,8,0,10,0,12,0,39,9,0,1,0,4,0,42,8,0,11,0,12,0,43,1,0,1,0,1,1,4,1,
	49,8,1,11,1,12,1,50,1,2,1,2,1,2,1,2,1,3,1,3,1,3,5,3,60,8,3,10,3,12,3,63,
	9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,72,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,5,4,85,8,4,10,4,12,4,88,9,4,1,5,1,5,1,5,1,5,5,5,94,8,5,
	10,5,12,5,97,9,5,1,5,3,5,100,8,5,1,6,1,6,1,6,3,6,105,8,6,1,6,3,6,108,8,
	6,1,7,1,7,1,7,1,7,3,7,114,8,7,1,8,1,8,1,8,1,8,3,8,120,8,8,1,8,1,8,5,8,124,
	8,8,10,8,12,8,127,9,8,1,8,1,8,1,8,1,9,1,9,5,9,134,8,9,10,9,12,9,137,9,9,
	1,9,1,9,5,9,141,8,9,10,9,12,9,144,9,9,3,9,146,8,9,1,10,1,10,1,10,5,10,151,
	8,10,10,10,12,10,154,9,10,1,10,1,10,3,10,158,8,10,1,10,5,10,161,8,10,10,
	10,12,10,164,9,10,1,10,1,10,5,10,168,8,10,10,10,12,10,171,9,10,1,10,5,10,
	174,8,10,10,10,12,10,177,9,10,1,10,1,10,1,11,1,11,5,11,183,8,11,10,11,12,
	11,186,9,11,1,11,1,11,1,11,5,11,191,8,11,10,11,12,11,194,9,11,1,11,1,11,
	3,11,198,8,11,1,11,5,11,201,8,11,10,11,12,11,204,9,11,1,11,1,11,3,11,208,
	8,11,1,11,5,11,211,8,11,10,11,12,11,214,9,11,1,11,1,11,5,11,218,8,11,10,
	11,12,11,221,9,11,1,11,1,11,3,11,225,8,11,1,11,5,11,228,8,11,10,11,12,11,
	231,9,11,1,11,1,11,3,11,235,8,11,1,11,5,11,238,8,11,10,11,12,11,241,9,11,
	1,11,1,11,3,11,245,8,11,1,11,5,11,248,8,11,10,11,12,11,251,9,11,1,11,1,
	11,3,11,255,8,11,1,11,5,11,258,8,11,10,11,12,11,261,9,11,1,11,1,11,3,11,
	265,8,11,1,11,5,11,268,8,11,10,11,12,11,271,9,11,1,11,1,11,3,11,275,8,11,
	1,11,5,11,278,8,11,10,11,12,11,281,9,11,1,11,1,11,1,11,5,11,286,8,11,10,
	11,12,11,289,9,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,298,8,11,10,11,
	12,11,301,9,11,5,11,303,8,11,10,11,12,11,306,9,11,1,11,1,11,1,11,5,11,311,
	8,11,10,11,12,11,314,9,11,3,11,316,8,11,1,11,1,11,1,11,5,11,321,8,11,10,
	11,12,11,324,9,11,1,11,1,11,1,11,3,11,329,8,11,1,11,1,11,3,11,333,8,11,
	1,11,1,11,3,11,337,8,11,1,11,1,11,1,11,5,11,342,8,11,10,11,12,11,345,9,
	11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,355,8,11,10,11,12,11,358,
	9,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,366,8,11,10,11,12,11,369,9,11,1,
	11,1,11,1,11,5,11,374,8,11,10,11,12,11,377,9,11,3,11,379,8,11,1,11,1,11,
	1,11,5,11,384,8,11,10,11,12,11,387,9,11,1,11,1,11,3,11,391,8,11,1,11,5,
	11,394,8,11,10,11,12,11,397,9,11,1,11,1,11,1,11,1,11,5,11,403,8,11,10,11,
	12,11,406,9,11,3,11,408,8,11,1,11,5,11,411,8,11,10,11,12,11,414,9,11,1,
	11,1,11,1,11,3,11,419,8,11,1,11,1,11,1,11,5,11,424,8,11,10,11,12,11,427,
	9,11,1,11,1,11,1,11,1,11,5,11,433,8,11,10,11,12,11,436,9,11,1,11,5,11,439,
	8,11,10,11,12,11,442,9,11,5,11,444,8,11,10,11,12,11,447,9,11,1,11,1,11,
	1,11,5,11,452,8,11,10,11,12,11,455,9,11,3,11,457,8,11,1,11,1,11,1,11,1,
	11,5,11,463,8,11,10,11,12,11,466,9,11,1,11,5,11,469,8,11,10,11,12,11,472,
	9,11,5,11,474,8,11,10,11,12,11,477,9,11,1,11,1,11,5,11,481,8,11,10,11,12,
	11,484,9,11,1,11,1,11,1,11,3,11,489,8,11,1,11,1,11,1,11,5,11,494,8,11,10,
	11,12,11,497,9,11,1,11,1,11,5,11,501,8,11,10,11,12,11,504,9,11,1,11,1,11,
	5,11,508,8,11,10,11,12,11,511,9,11,1,11,1,11,5,11,515,8,11,10,11,12,11,
	518,9,11,1,11,1,11,5,11,522,8,11,10,11,12,11,525,9,11,1,11,1,11,5,11,529,
	8,11,10,11,12,11,532,9,11,1,11,1,11,3,11,536,8,11,1,12,1,12,3,12,540,8,
	12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,563,8,15,10,15,12,15,566,9,15,3,
	15,568,8,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,576,8,15,10,15,12,15,579,
	9,15,3,15,581,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,603,8,15,10,15,12,
	15,606,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,5,15,621,8,15,10,15,12,15,624,9,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,5,15,635,8,15,10,15,12,15,638,9,15,1,15,1,15,3,15,642,8,15,
	1,15,1,15,1,15,1,15,1,15,1,15,5,15,650,8,15,10,15,12,15,653,9,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,665,8,15,10,15,12,15,668,
	9,15,1,15,1,15,3,15,672,8,15,1,15,1,15,1,15,1,15,1,15,4,15,679,8,15,11,
	15,12,15,680,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,690,8,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
	1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,744,8,15,10,15,12,15,747,9,15,3,15,
	749,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
	15,1,15,1,15,1,15,5,15,767,8,15,10,15,12,15,770,9,15,1,16,1,16,1,16,5,16,
	775,8,16,10,16,12,16,778,9,16,1,16,0,2,8,30,17,0,2,4,6,8,10,12,14,16,18,
	20,22,24,26,28,30,32,0,9,1,0,1,2,1,0,85,86,1,0,47,48,1,0,54,55,1,0,73,74,
	1,0,51,53,1,0,56,61,1,0,62,64,1,0,65,66,934,0,37,1,0,0,0,2,48,1,0,0,0,4,
	52,1,0,0,0,6,56,1,0,0,0,8,71,1,0,0,0,10,99,1,0,0,0,12,101,1,0,0,0,14,109,
	1,0,0,0,16,115,1,0,0,0,18,145,1,0,0,0,20,147,1,0,0,0,22,535,1,0,0,0,24,
	539,1,0,0,0,26,541,1,0,0,0,28,543,1,0,0,0,30,689,1,0,0,0,32,771,1,0,0,0,
	34,36,3,2,1,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,
	41,1,0,0,0,39,37,1,0,0,0,40,42,3,22,11,0,41,40,1,0,0,0,42,43,1,0,0,0,43,
	41,1,0,0,0,43,44,1,0,0,0,44,45,1,0,0,0,45,46,5,0,0,1,46,1,1,0,0,0,47,49,
	7,0,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,3,1,
	0,0,0,52,53,5,3,0,0,53,54,7,1,0,0,54,55,3,2,1,0,55,5,1,0,0,0,56,61,3,8,
	4,0,57,58,5,4,0,0,58,60,3,8,4,0,59,57,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,
	0,61,62,1,0,0,0,62,7,1,0,0,0,63,61,1,0,0,0,64,65,6,4,-1,0,65,72,5,5,0,0,
	66,72,5,6,0,0,67,72,5,7,0,0,68,72,5,8,0,0,69,72,5,9,0,0,70,72,5,93,0,0,
	71,64,1,0,0,0,71,66,1,0,0,0,71,67,1,0,0,0,71,68,1,0,0,0,71,69,1,0,0,0,71,
	70,1,0,0,0,72,86,1,0,0,0,73,74,10,4,0,0,74,75,5,10,0,0,75,85,5,11,0,0,76,
	77,10,3,0,0,77,78,5,12,0,0,78,85,5,13,0,0,79,80,10,2,0,0,80,81,5,12,0,0,
	81,82,3,8,4,0,82,83,5,13,0,0,83,85,1,0,0,0,84,73,1,0,0,0,84,76,1,0,0,0,
	84,79,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,9,1,0,0,0,88,
	86,1,0,0,0,89,90,3,8,4,0,90,95,3,12,6,0,91,92,5,4,0,0,92,94,3,12,6,0,93,
	91,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,100,1,0,0,0,97,
	95,1,0,0,0,98,100,3,14,7,0,99,89,1,0,0,0,99,98,1,0,0,0,100,11,1,0,0,0,101,
	104,5,93,0,0,102,103,5,14,0,0,103,105,3,30,15,0,104,102,1,0,0,0,104,105,
	1,0,0,0,105,107,1,0,0,0,106,108,5,87,0,0,107,106,1,0,0,0,107,108,1,0,0,
	0,108,13,1,0,0,0,109,110,5,93,0,0,110,111,5,15,0,0,111,113,3,30,15,0,112,
	114,5,87,0,0,113,112,1,0,0,0,113,114,1,0,0,0,114,15,1,0,0,0,115,116,3,8,
	4,0,116,117,5,93,0,0,117,119,5,16,0,0,118,120,3,10,5,0,119,118,1,0,0,0,
	119,120,1,0,0,0,120,125,1,0,0,0,121,122,5,4,0,0,122,124,3,10,5,0,123,121,
	1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,128,1,0,0,0,
	127,125,1,0,0,0,128,129,5,17,0,0,129,130,3,22,11,0,130,17,1,0,0,0,131,135,
	3,10,5,0,132,134,3,2,1,0,133,132,1,0,0,0,134,137,1,0,0,0,135,133,1,0,0,
	0,135,136,1,0,0,0,136,146,1,0,0,0,137,135,1,0,0,0,138,142,3,16,8,0,139,
	141,3,2,1,0,140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,
	0,0,143,146,1,0,0,0,144,142,1,0,0,0,145,131,1,0,0,0,145,138,1,0,0,0,146,
	19,1,0,0,0,147,148,5,18,0,0,148,152,5,93,0,0,149,151,3,2,1,0,150,149,1,
	0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,153,1,0,0,0,153,157,1,0,0,0,154,
	152,1,0,0,0,155,156,5,19,0,0,156,158,5,93,0,0,157,155,1,0,0,0,157,158,1,
	0,0,0,158,162,1,0,0,0,159,161,3,2,1,0,160,159,1,0,0,0,161,164,1,0,0,0,162,
	160,1,0,0,0,162,163,1,0,0,0,163,165,1,0,0,0,164,162,1,0,0,0,165,169,5,12,
	0,0,166,168,3,2,1,0,167,166,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,
	170,1,0,0,0,170,175,1,0,0,0,171,169,1,0,0,0,172,174,3,18,9,0,173,172,1,
	0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,
	175,1,0,0,0,178,179,5,13,0,0,179,21,1,0,0,0,180,184,5,12,0,0,181,183,3,
	22,11,0,182,181,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,
	185,187,1,0,0,0,186,184,1,0,0,0,187,536,5,13,0,0,188,192,5,20,0,0,189,191,
	3,2,1,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,
	193,536,1,0,0,0,194,192,1,0,0,0,195,197,5,21,0,0,196,198,3,30,15,0,197,
	196,1,0,0,0,197,198,1,0,0,0,198,202,1,0,0,0,199,201,3,2,1,0,200,199,1,0,
	0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,536,1,0,0,0,204,
	202,1,0,0,0,205,207,5,22,0,0,206,208,3,30,15,0,207,206,1,0,0,0,207,208,
	1,0,0,0,208,212,1,0,0,0,209,211,3,2,1,0,210,209,1,0,0,0,211,214,1,0,0,0,
	212,210,1,0,0,0,212,213,1,0,0,0,213,536,1,0,0,0,214,212,1,0,0,0,215,219,
	5,23,0,0,216,218,3,2,1,0,217,216,1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,
	0,219,220,1,0,0,0,220,536,1,0,0,0,221,219,1,0,0,0,222,224,5,24,0,0,223,
	225,3,30,15,0,224,223,1,0,0,0,224,225,1,0,0,0,225,229,1,0,0,0,226,228,3,
	2,1,0,227,226,1,0,0,0,228,231,1,0,0,0,229,227,1,0,0,0,229,230,1,0,0,0,230,
	536,1,0,0,0,231,229,1,0,0,0,232,234,5,25,0,0,233,235,3,30,15,0,234,233,
	1,0,0,0,234,235,1,0,0,0,235,239,1,0,0,0,236,238,3,2,1,0,237,236,1,0,0,0,
	238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,536,1,0,0,0,241,239,
	1,0,0,0,242,244,5,26,0,0,243,245,3,30,15,0,244,243,1,0,0,0,244,245,1,0,
	0,0,245,249,1,0,0,0,246,248,3,2,1,0,247,246,1,0,0,0,248,251,1,0,0,0,249,
	247,1,0,0,0,249,250,1,0,0,0,250,536,1,0,0,0,251,249,1,0,0,0,252,254,5,27,
	0,0,253,255,3,30,15,0,254,253,1,0,0,0,254,255,1,0,0,0,255,259,1,0,0,0,256,
	258,3,2,1,0,257,256,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,259,260,1,0,
	0,0,260,536,1,0,0,0,261,259,1,0,0,0,262,264,5,28,0,0,263,265,3,30,15,0,
	264,263,1,0,0,0,264,265,1,0,0,0,265,269,1,0,0,0,266,268,3,2,1,0,267,266,
	1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,269,270,1,0,0,0,270,536,1,0,0,0,
	271,269,1,0,0,0,272,274,5,29,0,0,273,275,3,30,15,0,274,273,1,0,0,0,274,
	275,1,0,0,0,275,279,1,0,0,0,276,278,3,2,1,0,277,276,1,0,0,0,278,281,1,0,
	0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,536,1,0,0,0,281,279,1,0,0,0,282,
	283,5,30,0,0,283,287,3,22,11,0,284,286,3,2,1,0,285,284,1,0,0,0,286,289,
	1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,304,1,0,0,0,289,287,1,0,0,0,
	290,291,5,31,0,0,291,292,5,16,0,0,292,293,3,8,4,0,293,294,5,93,0,0,294,
	295,5,17,0,0,295,299,3,22,11,0,296,298,3,2,1,0,297,296,1,0,0,0,298,301,
	1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,303,1,0,0,0,301,299,1,0,0,0,
	302,290,1,0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,305,315,
	1,0,0,0,306,304,1,0,0,0,307,308,5,32,0,0,308,312,3,22,11,0,309,311,3,2,
	1,0,310,309,1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,
	316,1,0,0,0,314,312,1,0,0,0,315,307,1,0,0,0,315,316,1,0,0,0,316,536,1,0,
	0,0,317,318,5,33,0,0,318,322,3,30,15,0,319,321,3,2,1,0,320,319,1,0,0,0,
	321,324,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,323,536,1,0,0,0,324,322,
	1,0,0,0,325,326,5,34,0,0,326,328,5,16,0,0,327,329,3,24,12,0,328,327,1,0,
	0,0,328,329,1,0,0,0,329,330,1,0,0,0,330,332,5,1,0,0,331,333,3,26,13,0,332,
	331,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,336,5,1,0,0,335,337,3,28,
	14,0,336,335,1,0,0,0,336,337,1,0,0,0,337,338,1,0,0,0,338,339,5,17,0,0,339,
	343,3,22,11,0,340,342,3,2,1,0,341,340,1,0,0,0,342,345,1,0,0,0,343,341,1,
	0,0,0,343,344,1,0,0,0,344,536,1,0,0,0,345,343,1,0,0,0,346,347,5,34,0,0,
	347,348,5,16,0,0,348,349,3,10,5,0,349,350,5,35,0,0,350,351,3,30,15,0,351,
	352,5,17,0,0,352,356,3,22,11,0,353,355,3,2,1,0,354,353,1,0,0,0,355,358,
	1,0,0,0,356,354,1,0,0,0,356,357,1,0,0,0,357,536,1,0,0,0,358,356,1,0,0,0,
	359,360,5,36,0,0,360,361,5,16,0,0,361,362,3,30,15,0,362,363,5,17,0,0,363,
	367,3,22,11,0,364,366,3,2,1,0,365,364,1,0,0,0,366,369,1,0,0,0,367,365,1,
	0,0,0,367,368,1,0,0,0,368,378,1,0,0,0,369,367,1,0,0,0,370,371,5,37,0,0,
	371,375,3,22,11,0,372,374,3,2,1,0,373,372,1,0,0,0,374,377,1,0,0,0,375,373,
	1,0,0,0,375,376,1,0,0,0,376,379,1,0,0,0,377,375,1,0,0,0,378,370,1,0,0,0,
	378,379,1,0,0,0,379,536,1,0,0,0,380,381,5,38,0,0,381,385,3,30,15,0,382,
	384,3,2,1,0,383,382,1,0,0,0,384,387,1,0,0,0,385,383,1,0,0,0,385,386,1,0,
	0,0,386,536,1,0,0,0,387,385,1,0,0,0,388,390,5,39,0,0,389,391,3,30,15,0,
	390,389,1,0,0,0,390,391,1,0,0,0,391,395,1,0,0,0,392,394,3,2,1,0,393,392,
	1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,536,1,0,0,0,
	397,395,1,0,0,0,398,407,5,40,0,0,399,404,3,30,15,0,400,401,5,4,0,0,401,
	403,3,30,15,0,402,400,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,404,405,1,
	0,0,0,405,408,1,0,0,0,406,404,1,0,0,0,407,399,1,0,0,0,407,408,1,0,0,0,408,
	412,1,0,0,0,409,411,3,2,1,0,410,409,1,0,0,0,411,414,1,0,0,0,412,410,1,0,
	0,0,412,413,1,0,0,0,413,536,1,0,0,0,414,412,1,0,0,0,415,416,5,41,0,0,416,
	418,5,16,0,0,417,419,3,30,15,0,418,417,1,0,0,0,418,419,1,0,0,0,419,420,
	1,0,0,0,420,421,5,17,0,0,421,425,5,12,0,0,422,424,3,2,1,0,423,422,1,0,0,
	0,424,427,1,0,0,0,425,423,1,0,0,0,425,426,1,0,0,0,426,445,1,0,0,0,427,425,
	1,0,0,0,428,429,5,42,0,0,429,430,3,30,15,0,430,434,5,35,0,0,431,433,3,22,
	11,0,432,431,1,0,0,0,433,436,1,0,0,0,434,432,1,0,0,0,434,435,1,0,0,0,435,
	440,1,0,0,0,436,434,1,0,0,0,437,439,3,2,1,0,438,437,1,0,0,0,439,442,1,0,
	0,0,440,438,1,0,0,0,440,441,1,0,0,0,441,444,1,0,0,0,442,440,1,0,0,0,443,
	428,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,1,0,0,0,446,456,1,0,
	0,0,447,445,1,0,0,0,448,449,5,43,0,0,449,453,5,35,0,0,450,452,3,22,11,0,
	451,450,1,0,0,0,452,455,1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,457,
	1,0,0,0,455,453,1,0,0,0,456,448,1,0,0,0,456,457,1,0,0,0,457,475,1,0,0,0,
	458,459,5,42,0,0,459,460,3,30,15,0,460,464,5,35,0,0,461,463,3,22,11,0,462,
	461,1,0,0,0,463,466,1,0,0,0,464,462,1,0,0,0,464,465,1,0,0,0,465,470,1,0,
	0,0,466,464,1,0,0,0,467,469,3,2,1,0,468,467,1,0,0,0,469,472,1,0,0,0,470,
	468,1,0,0,0,470,471,1,0,0,0,471,474,1,0,0,0,472,470,1,0,0,0,473,458,1,0,
	0,0,474,477,1,0,0,0,475,473,1,0,0,0,475,476,1,0,0,0,476,478,1,0,0,0,477,
	475,1,0,0,0,478,482,5,13,0,0,479,481,3,2,1,0,480,479,1,0,0,0,481,484,1,
	0,0,0,482,480,1,0,0,0,482,483,1,0,0,0,483,536,1,0,0,0,484,482,1,0,0,0,485,
	486,5,44,0,0,486,488,5,16,0,0,487,489,3,30,15,0,488,487,1,0,0,0,488,489,
	1,0,0,0,489,490,1,0,0,0,490,491,5,17,0,0,491,495,3,22,11,0,492,494,3,2,
	1,0,493,492,1,0,0,0,494,497,1,0,0,0,495,493,1,0,0,0,495,496,1,0,0,0,496,
	536,1,0,0,0,497,495,1,0,0,0,498,502,3,16,8,0,499,501,3,2,1,0,500,499,1,
	0,0,0,501,504,1,0,0,0,502,500,1,0,0,0,502,503,1,0,0,0,503,536,1,0,0,0,504,
	502,1,0,0,0,505,509,3,10,5,0,506,508,3,2,1,0,507,506,1,0,0,0,508,511,1,
	0,0,0,509,507,1,0,0,0,509,510,1,0,0,0,510,536,1,0,0,0,511,509,1,0,0,0,512,
	516,3,20,10,0,513,515,3,2,1,0,514,513,1,0,0,0,515,518,1,0,0,0,516,514,1,
	0,0,0,516,517,1,0,0,0,517,536,1,0,0,0,518,516,1,0,0,0,519,523,3,30,15,0,
	520,522,3,2,1,0,521,520,1,0,0,0,522,525,1,0,0,0,523,521,1,0,0,0,523,524,
	1,0,0,0,524,536,1,0,0,0,525,523,1,0,0,0,526,530,3,4,2,0,527,529,3,2,1,0,
	528,527,1,0,0,0,529,532,1,0,0,0,530,528,1,0,0,0,530,531,1,0,0,0,531,536,
	1,0,0,0,532,530,1,0,0,0,533,536,5,87,0,0,534,536,3,2,1,0,535,180,1,0,0,
	0,535,188,1,0,0,0,535,195,1,0,0,0,535,205,1,0,0,0,535,215,1,0,0,0,535,222,
	1,0,0,0,535,232,1,0,0,0,535,242,1,0,0,0,535,252,1,0,0,0,535,262,1,0,0,0,
	535,272,1,0,0,0,535,282,1,0,0,0,535,317,1,0,0,0,535,325,1,0,0,0,535,346,
	1,0,0,0,535,359,1,0,0,0,535,380,1,0,0,0,535,388,1,0,0,0,535,398,1,0,0,0,
	535,415,1,0,0,0,535,485,1,0,0,0,535,498,1,0,0,0,535,505,1,0,0,0,535,512,
	1,0,0,0,535,519,1,0,0,0,535,526,1,0,0,0,535,533,1,0,0,0,535,534,1,0,0,0,
	536,23,1,0,0,0,537,540,3,10,5,0,538,540,3,32,16,0,539,537,1,0,0,0,539,538,
	1,0,0,0,540,25,1,0,0,0,541,542,3,30,15,0,542,27,1,0,0,0,543,544,3,32,16,
	0,544,29,1,0,0,0,545,546,6,15,-1,0,546,690,5,81,0,0,547,690,5,82,0,0,548,
	690,5,83,0,0,549,690,5,84,0,0,550,690,5,85,0,0,551,690,5,86,0,0,552,553,
	5,16,0,0,553,554,5,93,0,0,554,555,5,17,0,0,555,690,3,30,15,39,556,557,5,
	46,0,0,557,558,5,93,0,0,558,567,5,16,0,0,559,564,3,30,15,0,560,561,5,4,
	0,0,561,563,3,30,15,0,562,560,1,0,0,0,563,566,1,0,0,0,564,562,1,0,0,0,564,
	565,1,0,0,0,565,568,1,0,0,0,566,564,1,0,0,0,567,559,1,0,0,0,567,568,1,0,
	0,0,568,569,1,0,0,0,569,690,5,17,0,0,570,571,5,93,0,0,571,580,5,16,0,0,
	572,577,3,30,15,0,573,574,5,4,0,0,574,576,3,30,15,0,575,573,1,0,0,0,576,
	579,1,0,0,0,577,575,1,0,0,0,577,578,1,0,0,0,578,581,1,0,0,0,579,577,1,0,
	0,0,580,572,1,0,0,0,580,581,1,0,0,0,581,582,1,0,0,0,582,690,5,17,0,0,583,
	690,5,93,0,0,584,585,7,2,0,0,585,690,3,30,15,32,586,587,5,49,0,0,587,690,
	3,30,15,30,588,589,5,50,0,0,589,690,3,30,15,29,590,591,7,3,0,0,591,690,
	3,30,15,25,592,593,5,16,0,0,593,594,3,30,15,0,594,595,5,17,0,0,595,690,
	1,0,0,0,596,597,5,10,0,0,597,690,5,11,0,0,598,599,5,10,0,0,599,604,3,30,
	15,0,600,601,5,4,0,0,601,603,3,30,15,0,602,600,1,0,0,0,603,606,1,0,0,0,
	604,602,1,0,0,0,604,605,1,0,0,0,605,607,1,0,0,0,606,604,1,0,0,0,607,608,
	5,11,0,0,608,690,1,0,0,0,609,610,5,12,0,0,610,690,5,13,0,0,611,612,5,12,
	0,0,612,613,3,30,15,0,613,614,5,69,0,0,614,622,3,30,15,0,615,616,5,4,0,
	0,616,617,3,30,15,0,617,618,5,69,0,0,618,619,3,30,15,0,619,621,1,0,0,0,
	620,615,1,0,0,0,621,624,1,0,0,0,622,620,1,0,0,0,622,623,1,0,0,0,623,625,
	1,0,0,0,624,622,1,0,0,0,625,626,5,13,0,0,626,690,1,0,0,0,627,690,5,88,0,
	0,628,690,5,89,0,0,629,641,5,70,0,0,630,631,5,16,0,0,631,636,3,30,15,0,
	632,633,5,4,0,0,633,635,3,30,15,0,634,632,1,0,0,0,635,638,1,0,0,0,636,634,
	1,0,0,0,636,637,1,0,0,0,637,639,1,0,0,0,638,636,1,0,0,0,639,640,5,17,0,
	0,640,642,1,0,0,0,641,630,1,0,0,0,641,642,1,0,0,0,642,643,1,0,0,0,643,690,
	3,22,11,0,644,645,5,71,0,0,645,646,5,16,0,0,646,651,3,30,15,0,647,648,5,
	4,0,0,648,650,3,30,15,0,649,647,1,0,0,0,650,653,1,0,0,0,651,649,1,0,0,0,
	651,652,1,0,0,0,652,654,1,0,0,0,653,651,1,0,0,0,654,655,5,17,0,0,655,656,
	3,22,11,0,656,690,1,0,0,0,657,658,5,72,0,0,658,690,3,30,15,11,659,671,7,
	4,0,0,660,661,5,16,0,0,661,666,3,30,15,0,662,663,5,4,0,0,663,665,3,30,15,
	0,664,662,1,0,0,0,665,668,1,0,0,0,666,664,1,0,0,0,666,667,1,0,0,0,667,669,
	1,0,0,0,668,666,1,0,0,0,669,670,5,17,0,0,670,672,1,0,0,0,671,660,1,0,0,
	0,671,672,1,0,0,0,672,673,1,0,0,0,673,690,3,22,11,0,674,675,5,16,0,0,675,
	678,3,30,15,0,676,677,5,4,0,0,677,679,3,30,15,0,678,676,1,0,0,0,679,680,
	1,0,0,0,680,678,1,0,0,0,680,681,1,0,0,0,681,682,1,0,0,0,682,683,5,17,0,
	0,683,684,5,14,0,0,684,685,3,30,15,3,685,690,1,0,0,0,686,687,5,93,0,0,687,
	688,5,15,0,0,688,690,3,30,15,1,689,545,1,0,0,0,689,547,1,0,0,0,689,548,
	1,0,0,0,689,549,1,0,0,0,689,550,1,0,0,0,689,551,1,0,0,0,689,552,1,0,0,0,
	689,556,1,0,0,0,689,570,1,0,0,0,689,583,1,0,0,0,689,584,1,0,0,0,689,586,
	1,0,0,0,689,588,1,0,0,0,689,590,1,0,0,0,689,592,1,0,0,0,689,596,1,0,0,0,
	689,598,1,0,0,0,689,609,1,0,0,0,689,611,1,0,0,0,689,627,1,0,0,0,689,628,
	1,0,0,0,689,629,1,0,0,0,689,644,1,0,0,0,689,657,1,0,0,0,689,659,1,0,0,0,
	689,674,1,0,0,0,689,686,1,0,0,0,690,768,1,0,0,0,691,692,10,28,0,0,692,693,
	7,5,0,0,693,767,3,30,15,29,694,695,10,27,0,0,695,696,7,3,0,0,696,767,3,
	30,15,28,697,698,10,26,0,0,698,699,7,6,0,0,699,767,3,30,15,27,700,701,10,
	24,0,0,701,702,7,7,0,0,702,767,3,30,15,25,703,704,10,23,0,0,704,705,7,8,
	0,0,705,767,3,30,15,24,706,707,10,21,0,0,707,708,5,67,0,0,708,709,3,30,
	15,0,709,710,5,35,0,0,710,711,3,30,15,22,711,767,1,0,0,0,712,713,10,20,
	0,0,713,714,5,68,0,0,714,767,3,30,15,21,715,716,10,9,0,0,716,717,5,75,0,
	0,717,767,3,30,15,10,718,719,10,8,0,0,719,720,5,76,0,0,720,767,3,30,15,
	9,721,722,10,7,0,0,722,723,5,77,0,0,723,767,3,30,15,8,724,725,10,6,0,0,
	725,726,5,78,0,0,726,767,3,30,15,7,727,728,10,5,0,0,728,729,5,79,0,0,729,
	767,3,30,15,6,730,731,10,4,0,0,731,732,5,80,0,0,732,767,3,30,15,5,733,734,
	10,2,0,0,734,735,5,14,0,0,735,767,3,30,15,3,736,737,10,40,0,0,737,738,5,
	45,0,0,738,739,5,93,0,0,739,748,5,16,0,0,740,745,3,30,15,0,741,742,5,4,
	0,0,742,744,3,30,15,0,743,741,1,0,0,0,744,747,1,0,0,0,745,743,1,0,0,0,745,
	746,1,0,0,0,746,749,1,0,0,0,747,745,1,0,0,0,748,740,1,0,0,0,748,749,1,0,
	0,0,749,750,1,0,0,0,750,767,5,17,0,0,751,752,10,36,0,0,752,753,5,45,0,0,
	753,767,5,93,0,0,754,755,10,34,0,0,755,756,5,10,0,0,756,757,3,30,15,0,757,
	758,5,11,0,0,758,767,1,0,0,0,759,760,10,33,0,0,760,761,5,12,0,0,761,762,
	3,30,15,0,762,763,5,13,0,0,763,767,1,0,0,0,764,765,10,31,0,0,765,767,7,
	2,0,0,766,691,1,0,0,0,766,694,1,0,0,0,766,697,1,0,0,0,766,700,1,0,0,0,766,
	703,1,0,0,0,766,706,1,0,0,0,766,712,1,0,0,0,766,715,1,0,0,0,766,718,1,0,
	0,0,766,721,1,0,0,0,766,724,1,0,0,0,766,727,1,0,0,0,766,730,1,0,0,0,766,
	733,1,0,0,0,766,736,1,0,0,0,766,751,1,0,0,0,766,754,1,0,0,0,766,759,1,0,
	0,0,766,764,1,0,0,0,767,770,1,0,0,0,768,766,1,0,0,0,768,769,1,0,0,0,769,
	31,1,0,0,0,770,768,1,0,0,0,771,776,3,30,15,0,772,773,5,4,0,0,773,775,3,
	30,15,0,774,772,1,0,0,0,775,778,1,0,0,0,776,774,1,0,0,0,776,777,1,0,0,0,
	777,33,1,0,0,0,778,776,1,0,0,0,99,37,43,50,61,71,84,86,95,99,104,107,113,
	119,125,135,142,145,152,157,162,169,175,184,192,197,202,207,212,219,224,
	229,234,239,244,249,254,259,264,269,274,279,287,299,304,312,315,322,328,
	332,336,343,356,367,375,378,385,390,395,404,407,412,418,425,434,440,445,
	453,456,464,470,475,482,488,495,502,509,516,523,530,535,539,564,567,577,
	580,604,622,636,641,651,666,671,680,689,745,748,766,768,776];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!bdsParser.__ATN) {
			bdsParser.__ATN = new ATNDeserializer().deserialize(bdsParser._serializedATN);
		}

		return bdsParser.__ATN;
	}


	static DecisionsToDFA = bdsParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramUnitContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(bdsParser.EOF, 0);
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_programUnit;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterProgramUnit) {
	 		listener.enterProgramUnit(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitProgramUnit) {
	 		listener.exitProgramUnit(this);
		}
	}
}


export class EolContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_eol;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterEol) {
	 		listener.enterEol(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitEol) {
	 		listener.exitEol(this);
		}
	}
}


export class IncludeFileContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public eol(): EolContext {
		return this.getTypedRuleContext(EolContext, 0) as EolContext;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.STRING_LITERAL, 0);
	}
	public STRING_LITERAL_SINGLE(): TerminalNode {
		return this.getToken(bdsParser.STRING_LITERAL_SINGLE, 0);
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_includeFile;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterIncludeFile) {
	 		listener.enterIncludeFile(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitIncludeFile) {
	 		listener.exitIncludeFile(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_typeList;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeList) {
	 		listener.enterTypeList(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeList) {
	 		listener.exitTypeList(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_type;
	}
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeArrayContext extends TypeContext {
	constructor(parser: bdsParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeArray) {
	 		listener.enterTypeArray(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeArray) {
	 		listener.exitTypeArray(this);
		}
	}
}
export class TypeIntContext extends TypeContext {
	constructor(parser: bdsParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeInt) {
	 		listener.enterTypeInt(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeInt) {
	 		listener.exitTypeInt(this);
		}
	}
}
export class TypeMapContext extends TypeContext {
	constructor(parser: bdsParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeMap) {
	 		listener.enterTypeMap(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeMap) {
	 		listener.exitTypeMap(this);
		}
	}
}
export class TypeRealContext extends TypeContext {
	constructor(parser: bdsParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeReal) {
	 		listener.enterTypeReal(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeReal) {
	 		listener.exitTypeReal(this);
		}
	}
}
export class TypeStringContext extends TypeContext {
	constructor(parser: bdsParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeString) {
	 		listener.enterTypeString(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeString) {
	 		listener.exitTypeString(this);
		}
	}
}
export class TypeClassContext extends TypeContext {
	constructor(parser: bdsParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeClass) {
	 		listener.enterTypeClass(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeClass) {
	 		listener.exitTypeClass(this);
		}
	}
}
export class TypeBoolContext extends TypeContext {
	constructor(parser: bdsParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeBool) {
	 		listener.enterTypeBool(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeBool) {
	 		listener.exitTypeBool(this);
		}
	}
}
export class TypeVoidContext extends TypeContext {
	constructor(parser: bdsParser, ctx: TypeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTypeVoid) {
	 		listener.enterTypeVoid(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTypeVoid) {
	 		listener.exitTypeVoid(this);
		}
	}
}


export class VarDeclarationContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public variableInit_list(): VariableInitContext[] {
		return this.getTypedRuleContexts(VariableInitContext) as VariableInitContext[];
	}
	public variableInit(i: number): VariableInitContext {
		return this.getTypedRuleContext(VariableInitContext, i) as VariableInitContext;
	}
	public variableInitImplicit(): VariableInitImplicitContext {
		return this.getTypedRuleContext(VariableInitImplicitContext, 0) as VariableInitImplicitContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_varDeclaration;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterVarDeclaration) {
	 		listener.enterVarDeclaration(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitVarDeclaration) {
	 		listener.exitVarDeclaration(this);
		}
	}
}


export class VariableInitContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public HELP_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.HELP_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_variableInit;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterVariableInit) {
	 		listener.enterVariableInit(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitVariableInit) {
	 		listener.exitVariableInit(this);
		}
	}
}


export class VariableInitImplicitContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public HELP_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.HELP_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_variableInitImplicit;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterVariableInitImplicit) {
	 		listener.enterVariableInitImplicit(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitVariableInitImplicit) {
	 		listener.exitVariableInitImplicit(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public varDeclaration_list(): VarDeclarationContext[] {
		return this.getTypedRuleContexts(VarDeclarationContext) as VarDeclarationContext[];
	}
	public varDeclaration(i: number): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, i) as VarDeclarationContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_functionDeclaration;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitFunctionDeclaration) {
	 		listener.exitFunctionDeclaration(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_field;
	}
	public copyFrom(ctx: FieldContext): void {
		super.copyFrom(ctx);
	}
}
export class MethodDeclarationContext extends FieldContext {
	constructor(parser: bdsParser, ctx: FieldContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterMethodDeclaration) {
	 		listener.enterMethodDeclaration(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitMethodDeclaration) {
	 		listener.exitMethodDeclaration(this);
		}
	}
}
export class FieldDeclarationContext extends FieldContext {
	constructor(parser: bdsParser, ctx: FieldContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterFieldDeclaration) {
	 		listener.enterFieldDeclaration(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitFieldDeclaration) {
	 		listener.exitFieldDeclaration(this);
		}
	}
}


export class ClassDefContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(bdsParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(bdsParser.ID, i);
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public field_list(): FieldContext[] {
		return this.getTypedRuleContexts(FieldContext) as FieldContext[];
	}
	public field(i: number): FieldContext {
		return this.getTypedRuleContext(FieldContext, i) as FieldContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_classDef;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterClassDef) {
	 		listener.enterClassDef(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitClassDef) {
	 		listener.exitClassDef(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_statement;
	}
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class CheckpointContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterCheckpoint) {
	 		listener.enterCheckpoint(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitCheckpoint) {
	 		listener.exitCheckpoint(this);
		}
	}
}
export class StatementVarDeclarationContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterStatementVarDeclaration) {
	 		listener.enterStatementVarDeclaration(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitStatementVarDeclaration) {
	 		listener.exitStatementVarDeclaration(this);
		}
	}
}
export class WaitContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterWait) {
	 		listener.enterWait(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitWait) {
	 		listener.exitWait(this);
		}
	}
}
export class StatementIncludeContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public includeFile(): IncludeFileContext {
		return this.getTypedRuleContext(IncludeFileContext, 0) as IncludeFileContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterStatementInclude) {
	 		listener.enterStatementInclude(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitStatementInclude) {
	 		listener.exitStatementInclude(this);
		}
	}
}
export class ErrorContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterError) {
	 		listener.enterError(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitError) {
	 		listener.exitError(this);
		}
	}
}
export class WhileContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterWhile) {
	 		listener.enterWhile(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitWhile) {
	 		listener.exitWhile(this);
		}
	}
}
export class StatementFunctionDeclarationContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterStatementFunctionDeclaration) {
	 		listener.enterStatementFunctionDeclaration(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitStatementFunctionDeclaration) {
	 		listener.exitStatementFunctionDeclaration(this);
		}
	}
}
export class SwitchContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterSwitch) {
	 		listener.enterSwitch(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitSwitch) {
	 		listener.exitSwitch(this);
		}
	}
}
export class ClassDeclarationContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public classDef(): ClassDefContext {
		return this.getTypedRuleContext(ClassDefContext, 0) as ClassDefContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this);
		}
	}
}
export class PrintlnContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterPrintln) {
	 		listener.enterPrintln(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitPrintln) {
	 		listener.exitPrintln(this);
		}
	}
}
export class ContinueContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterContinue) {
	 		listener.enterContinue(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitContinue) {
	 		listener.exitContinue(this);
		}
	}
}
export class WarningContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterWarning) {
	 		listener.enterWarning(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitWarning) {
	 		listener.exitWarning(this);
		}
	}
}
export class BlockContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}
export class ForLoopContext extends StatementContext {
	public _end!: ForEndContext;
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public forInit(): ForInitContext {
		return this.getTypedRuleContext(ForInitContext, 0) as ForInitContext;
	}
	public forCondition(): ForConditionContext {
		return this.getTypedRuleContext(ForConditionContext, 0) as ForConditionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public forEnd(): ForEndContext {
		return this.getTypedRuleContext(ForEndContext, 0) as ForEndContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterForLoop) {
	 		listener.enterForLoop(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitForLoop) {
	 		listener.exitForLoop(this);
		}
	}
}
export class ForLoopListContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterForLoopList) {
	 		listener.enterForLoopList(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitForLoopList) {
	 		listener.exitForLoopList(this);
		}
	}
}
export class IfContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterIf) {
	 		listener.enterIf(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitIf) {
	 		listener.exitIf(this);
		}
	}
}
export class DebugContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterDebug) {
	 		listener.enterDebug(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitDebug) {
	 		listener.exitDebug(this);
		}
	}
}
export class BreakContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterBreak) {
	 		listener.enterBreak(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitBreak) {
	 		listener.exitBreak(this);
		}
	}
}
export class KillContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterKill) {
	 		listener.enterKill(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitKill) {
	 		listener.exitKill(this);
		}
	}
}
export class StatmentEolContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public eol(): EolContext {
		return this.getTypedRuleContext(EolContext, 0) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterStatmentEol) {
	 		listener.enterStatmentEol(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitStatmentEol) {
	 		listener.exitStatmentEol(this);
		}
	}
}
export class BreakpointContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterBreakpoint) {
	 		listener.enterBreakpoint(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitBreakpoint) {
	 		listener.exitBreakpoint(this);
		}
	}
}
export class ExitContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExit) {
	 		listener.enterExit(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExit) {
	 		listener.exitExit(this);
		}
	}
}
export class HelpContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public HELP_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.HELP_LITERAL, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterHelp) {
	 		listener.enterHelp(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitHelp) {
	 		listener.exitHelp(this);
		}
	}
}
export class PrintContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterPrint) {
	 		listener.enterPrint(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitPrint) {
	 		listener.exitPrint(this);
		}
	}
}
export class ThrowContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterThrow) {
	 		listener.enterThrow(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitThrow) {
	 		listener.exitThrow(this);
		}
	}
}
export class TryCatchFinallyContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(bdsParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(bdsParser.ID, i);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterTryCatchFinally) {
	 		listener.enterTryCatchFinally(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitTryCatchFinally) {
	 		listener.exitTryCatchFinally(this);
		}
	}
}
export class StatementExprContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterStatementExpr) {
	 		listener.enterStatementExpr(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitStatementExpr) {
	 		listener.exitStatementExpr(this);
		}
	}
}
export class ReturnContext extends StatementContext {
	constructor(parser: bdsParser, ctx: StatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public eol_list(): EolContext[] {
		return this.getTypedRuleContexts(EolContext) as EolContext[];
	}
	public eol(i: number): EolContext {
		return this.getTypedRuleContext(EolContext, i) as EolContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterReturn) {
	 		listener.enterReturn(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitReturn) {
	 		listener.exitReturn(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDeclaration(): VarDeclarationContext {
		return this.getTypedRuleContext(VarDeclarationContext, 0) as VarDeclarationContext;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_forInit;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterForInit) {
	 		listener.enterForInit(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitForInit) {
	 		listener.exitForInit(this);
		}
	}
}


export class ForConditionContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_forCondition;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterForCondition) {
	 		listener.enterForCondition(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitForCondition) {
	 		listener.exitForCondition(this);
		}
	}
}


export class ForEndContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionList(): ExpressionListContext {
		return this.getTypedRuleContext(ExpressionListContext, 0) as ExpressionListContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_forEnd;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterForEnd) {
	 		listener.enterForEnd(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitForEnd) {
	 		listener.exitForEnd(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_expression;
	}
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralNullContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.NULL_LITERAL, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralNull) {
	 		listener.enterLiteralNull(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralNull) {
	 		listener.exitLiteralNull(this);
		}
	}
}
export class LiteralStringContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.STRING_LITERAL, 0);
	}
	public STRING_LITERAL_SINGLE(): TerminalNode {
		return this.getToken(bdsParser.STRING_LITERAL_SINGLE, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralString) {
	 		listener.enterLiteralString(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralString) {
	 		listener.exitLiteralString(this);
		}
	}
}
export class ExpressionAssignmentListContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionAssignmentList) {
	 		listener.enterExpressionAssignmentList(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionAssignmentList) {
	 		listener.exitExpressionAssignmentList(this);
		}
	}
}
export class ExpressionDepOperatorContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionDepOperator) {
	 		listener.enterExpressionDepOperator(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionDepOperator) {
	 		listener.exitExpressionDepOperator(this);
		}
	}
}
export class ExpressionAssignmentBitAndContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionAssignmentBitAnd) {
	 		listener.enterExpressionAssignmentBitAnd(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionAssignmentBitAnd) {
	 		listener.exitExpressionAssignmentBitAnd(this);
		}
	}
}
export class ExpressionUnaryPlusMinusContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionUnaryPlusMinus) {
	 		listener.enterExpressionUnaryPlusMinus(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionUnaryPlusMinus) {
	 		listener.exitExpressionUnaryPlusMinus(this);
		}
	}
}
export class LiteralMapContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralMap) {
	 		listener.enterLiteralMap(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralMap) {
	 		listener.exitLiteralMap(this);
		}
	}
}
export class ExpressionBitNegationContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionBitNegation) {
	 		listener.enterExpressionBitNegation(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionBitNegation) {
	 		listener.exitExpressionBitNegation(this);
		}
	}
}
export class ExpressionAssignmentBitOrContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionAssignmentBitOr) {
	 		listener.enterExpressionAssignmentBitOr(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionAssignmentBitOr) {
	 		listener.exitExpressionAssignmentBitOr(this);
		}
	}
}
export class PostContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterPost) {
	 		listener.enterPost(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitPost) {
	 		listener.exitPost(this);
		}
	}
}
export class ExpressionTaskContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionTask) {
	 		listener.enterExpressionTask(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionTask) {
	 		listener.exitExpressionTask(this);
		}
	}
}
export class ExpressionCastContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionCast) {
	 		listener.enterExpressionCast(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionCast) {
	 		listener.exitExpressionCast(this);
		}
	}
}
export class ReferenceVarContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterReferenceVar) {
	 		listener.enterReferenceVar(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitReferenceVar) {
	 		listener.exitReferenceVar(this);
		}
	}
}
export class ExpressionTimesDivModContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionTimesDivMod) {
	 		listener.enterExpressionTimesDivMod(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionTimesDivMod) {
	 		listener.exitExpressionTimesDivMod(this);
		}
	}
}
export class ReferenceMapContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterReferenceMap) {
	 		listener.enterReferenceMap(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitReferenceMap) {
	 		listener.exitReferenceMap(this);
		}
	}
}
export class ExpressionLogicNotContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionLogicNot) {
	 		listener.enterExpressionLogicNot(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionLogicNot) {
	 		listener.exitExpressionLogicNot(this);
		}
	}
}
export class ExpressionSysContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SYS_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.SYS_LITERAL, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionSys) {
	 		listener.enterExpressionSys(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionSys) {
	 		listener.exitExpressionSys(this);
		}
	}
}
export class ExpressionVariableInitImplicitContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionVariableInitImplicit) {
	 		listener.enterExpressionVariableInitImplicit(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionVariableInitImplicit) {
	 		listener.exitExpressionVariableInitImplicit(this);
		}
	}
}
export class ExpressionAssignmentMultContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionAssignmentMult) {
	 		listener.enterExpressionAssignmentMult(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionAssignmentMult) {
	 		listener.exitExpressionAssignmentMult(this);
		}
	}
}
export class ExpressionDepContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionDep) {
	 		listener.enterExpressionDep(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionDep) {
	 		listener.exitExpressionDep(this);
		}
	}
}
export class ExpressionAssignmentMinusContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionAssignmentMinus) {
	 		listener.enterExpressionAssignmentMinus(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionAssignmentMinus) {
	 		listener.exitExpressionAssignmentMinus(this);
		}
	}
}
export class ExpressionNewContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionNew) {
	 		listener.enterExpressionNew(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionNew) {
	 		listener.exitExpressionNew(this);
		}
	}
}
export class ExpressionAssignmentDivContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionAssignmentDiv) {
	 		listener.enterExpressionAssignmentDiv(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionAssignmentDiv) {
	 		listener.exitExpressionAssignmentDiv(this);
		}
	}
}
export class ReferenceListContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterReferenceList) {
	 		listener.enterReferenceList(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitReferenceList) {
	 		listener.exitReferenceList(this);
		}
	}
}
export class PreContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterPre) {
	 		listener.enterPre(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitPre) {
	 		listener.exitPre(this);
		}
	}
}
export class LiteralListEmptyContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralListEmpty) {
	 		listener.enterLiteralListEmpty(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralListEmpty) {
	 		listener.exitLiteralListEmpty(this);
		}
	}
}
export class ExpressionParallelContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionParallel) {
	 		listener.enterExpressionParallel(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionParallel) {
	 		listener.exitExpressionParallel(this);
		}
	}
}
export class ExpressionCompContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionComp) {
	 		listener.enterExpressionComp(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionComp) {
	 		listener.exitExpressionComp(this);
		}
	}
}
export class LiteralBoolContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOL_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.BOOL_LITERAL, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralBool) {
	 		listener.enterLiteralBool(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralBool) {
	 		listener.exitLiteralBool(this);
		}
	}
}
export class ExpressionLogicOpContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionLogicOp) {
	 		listener.enterExpressionLogicOp(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionLogicOp) {
	 		listener.exitExpressionLogicOp(this);
		}
	}
}
export class ExpressionGoalContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionGoal) {
	 		listener.enterExpressionGoal(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionGoal) {
	 		listener.exitExpressionGoal(this);
		}
	}
}
export class ExpressionTaskLiteralContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TASK_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.TASK_LITERAL, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionTaskLiteral) {
	 		listener.enterExpressionTaskLiteral(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionTaskLiteral) {
	 		listener.exitExpressionTaskLiteral(this);
		}
	}
}
export class ExpressionAssignmentContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionAssignment) {
	 		listener.enterExpressionAssignment(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionAssignment) {
	 		listener.exitExpressionAssignment(this);
		}
	}
}
export class ExpressionPlusMinusContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionPlusMinus) {
	 		listener.enterExpressionPlusMinus(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionPlusMinus) {
	 		listener.exitExpressionPlusMinus(this);
		}
	}
}
export class ReferenceFieldContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterReferenceField) {
	 		listener.enterReferenceField(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitReferenceField) {
	 		listener.exitReferenceField(this);
		}
	}
}
export class LiteralRealContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public REAL_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.REAL_LITERAL, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralReal) {
	 		listener.enterLiteralReal(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralReal) {
	 		listener.exitLiteralReal(this);
		}
	}
}
export class ExpressionBitOpContext extends ExpressionContext {
	public _op!: Token;
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionBitOp) {
	 		listener.enterExpressionBitOp(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionBitOp) {
	 		listener.exitExpressionBitOp(this);
		}
	}
}
export class ExpressionAssignmentPlusContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionAssignmentPlus) {
	 		listener.enterExpressionAssignmentPlus(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionAssignmentPlus) {
	 		listener.exitExpressionAssignmentPlus(this);
		}
	}
}
export class FunctionCallContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
}
export class ExpressionParenContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionParen) {
	 		listener.enterExpressionParen(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionParen) {
	 		listener.exitExpressionParen(this);
		}
	}
}
export class ExpressionCondContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionCond) {
	 		listener.enterExpressionCond(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionCond) {
	 		listener.exitExpressionCond(this);
		}
	}
}
export class LiteralListContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralList) {
	 		listener.enterLiteralList(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralList) {
	 		listener.exitLiteralList(this);
		}
	}
}
export class LiteralIntContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INT_LITERAL(): TerminalNode {
		return this.getToken(bdsParser.INT_LITERAL, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralInt) {
	 		listener.enterLiteralInt(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralInt) {
	 		listener.exitLiteralInt(this);
		}
	}
}
export class LiteralMapEmptyContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterLiteralMapEmpty) {
	 		listener.enterLiteralMapEmpty(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitLiteralMapEmpty) {
	 		listener.exitLiteralMapEmpty(this);
		}
	}
}
export class MethodCallContext extends ExpressionContext {
	constructor(parser: bdsParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public ID(): TerminalNode {
		return this.getToken(bdsParser.ID, 0);
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterMethodCall) {
	 		listener.enterMethodCall(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitMethodCall) {
	 		listener.exitMethodCall(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	constructor(parser?: bdsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return bdsParser.RULE_expressionList;
	}
	public enterRule(listener: bdsListener): void {
	    if(listener.enterExpressionList) {
	 		listener.enterExpressionList(this);
		}
	}
	public exitRule(listener: bdsListener): void {
	    if(listener.exitExpressionList) {
	 		listener.exitExpressionList(this);
		}
	}
}
