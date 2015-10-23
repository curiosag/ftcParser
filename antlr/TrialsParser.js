// Generated from Trials.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TrialsListener = require('./TrialsListener').TrialsListener;
var TrialsVisitor = require('./TrialsVisitor').TrialsVisitor;

var grammarFileName = "Trials.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3G\u00a0\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2",
    "\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2",
    "\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2",
    "\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\2\5\2[\n\2\3\3\3\3\3\4\7\4`\n\4\f\4\16",
    "\4c\13\4\3\4\3\4\6\4g\n\4\r\4\16\4h\3\4\7\4l\n\4\f\4\16\4o\13\4\3\4",
    "\7\4r\n\4\f\4\16\4u\13\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6",
    "\u0081\n\6\5\6\u0083\n\6\3\7\3\7\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t",
    "\5\t\u0090\n\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17",
    "\3\20\3\20\3\20\2\2\21\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36\2\2\u00d2",
    "\2Z\3\2\2\2\4\\\3\2\2\2\6a\3\2\2\2\bv\3\2\2\2\nx\3\2\2\2\f\u0084\3\2",
    "\2\2\16\u0086\3\2\2\2\20\u008f\3\2\2\2\22\u0091\3\2\2\2\24\u0093\3\2",
    "\2\2\26\u0095\3\2\2\2\30\u0097\3\2\2\2\32\u0099\3\2\2\2\34\u009b\3\2",
    "\2\2\36\u009d\3\2\2\2 [\3\2\2\2![\7\7\2\2\"[\7\b\2\2#[\7\t\2\2$[\7\n",
    "\2\2%[\7\13\2\2&[\7\f\2\2\'[\7\r\2\2([\7\16\2\2)[\7\25\2\2*[\7\17\2",
    "\2+[\7\20\2\2,[\7\21\2\2-[\7\22\2\2.[\7\23\2\2/[\7\24\2\2\60[\7\26\2",
    "\2\61[\7\27\2\2\62[\7*\2\2\63[\7\30\2\2\64[\7\31\2\2\65[\7\32\2\2\66",
    "[\7\33\2\2\67[\7\34\2\28[\7\35\2\29[\7\36\2\2:[\7\37\2\2;[\7 \2\2<[",
    "\7!\2\2=[\7\"\2\2>[\7#\2\2?[\7$\2\2@[\7%\2\2A[\7&\2\2B[\7\'\2\2C[\7",
    "(\2\2D[\7)\2\2E[\7+\2\2F[\7,\2\2G[\7-\2\2H[\7.\2\2I[\7/\2\2J[\7\60\2",
    "\2K[\7\61\2\2L[\7\62\2\2M[\7\63\2\2N[\7\64\2\2O[\7\65\2\2P[\7\67\2\2",
    "Q[\78\2\2R[\7\66\2\2S[\79\2\2T[\7:\2\2U[\7;\2\2V[\7<\2\2W[\7=\2\2X[",
    "\7>\2\2Y[\7?\2\2Z \3\2\2\2Z!\3\2\2\2Z\"\3\2\2\2Z#\3\2\2\2Z$\3\2\2\2",
    "Z%\3\2\2\2Z&\3\2\2\2Z\'\3\2\2\2Z(\3\2\2\2Z)\3\2\2\2Z*\3\2\2\2Z+\3\2",
    "\2\2Z,\3\2\2\2Z-\3\2\2\2Z.\3\2\2\2Z/\3\2\2\2Z\60\3\2\2\2Z\61\3\2\2\2",
    "Z\62\3\2\2\2Z\63\3\2\2\2Z\64\3\2\2\2Z\65\3\2\2\2Z\66\3\2\2\2Z\67\3\2",
    "\2\2Z8\3\2\2\2Z9\3\2\2\2Z:\3\2\2\2Z;\3\2\2\2Z<\3\2\2\2Z=\3\2\2\2Z>\3",
    "\2\2\2Z?\3\2\2\2Z@\3\2\2\2ZA\3\2\2\2ZB\3\2\2\2ZC\3\2\2\2ZD\3\2\2\2Z",
    "E\3\2\2\2ZF\3\2\2\2ZG\3\2\2\2ZH\3\2\2\2ZI\3\2\2\2ZJ\3\2\2\2ZK\3\2\2",
    "\2ZL\3\2\2\2ZM\3\2\2\2ZN\3\2\2\2ZO\3\2\2\2ZP\3\2\2\2ZQ\3\2\2\2ZR\3\2",
    "\2\2ZS\3\2\2\2ZT\3\2\2\2ZU\3\2\2\2ZV\3\2\2\2ZW\3\2\2\2ZX\3\2\2\2ZY\3",
    "\2\2\2[\3\3\2\2\2\\]\5\6\4\2]\5\3\2\2\2^`\7\3\2\2_^\3\2\2\2`c\3\2\2",
    "\2a_\3\2\2\2ab\3\2\2\2bd\3\2\2\2ca\3\2\2\2dm\5\b\5\2eg\7\3\2\2fe\3\2",
    "\2\2gh\3\2\2\2hf\3\2\2\2hi\3\2\2\2ij\3\2\2\2jl\5\b\5\2kf\3\2\2\2lo\3",
    "\2\2\2mk\3\2\2\2mn\3\2\2\2ns\3\2\2\2om\3\2\2\2pr\7\3\2\2qp\3\2\2\2r",
    "u\3\2\2\2sq\3\2\2\2st\3\2\2\2t\7\3\2\2\2us\3\2\2\2vw\5\n\6\2w\t\3\2",
    "\2\2xy\7\22\2\2yz\7\30\2\2z\u0082\5\f\7\2{|\7>\2\2|}\7\64\2\2}\u0080",
    "\7\4\2\2~\u0081\5\32\16\2\177\u0081\5\30\r\2\u0080~\3\2\2\2\u0080\177",
    "\3\2\2\2\u0081\u0083\3\2\2\2\u0082{\3\2\2\2\u0082\u0083\3\2\2\2\u0083",
    "\13\3\2\2\2\u0084\u0085\5\22\n\2\u0085\r\3\2\2\2\u0086\u0087\5\20\t",
    "\2\u0087\17\3\2\2\2\u0088\u0090\3\2\2\2\u0089\u0090\5\2\2\2\u008a\u0090",
    "\5\22\n\2\u008b\u008c\7\5\2\2\u008c\u008d\5\20\t\2\u008d\u008e\7\6\2",
    "\2\u008e\u0090\3\2\2\2\u008f\u0088\3\2\2\2\u008f\u0089\3\2\2\2\u008f",
    "\u008a\3\2\2\2\u008f\u008b\3\2\2\2\u0090\21\3\2\2\2\u0091\u0092\5\34",
    "\17\2\u0092\23\3\2\2\2\u0093\u0094\7A\2\2\u0094\25\3\2\2\2\u0095\u0096",
    "\7B\2\2\u0096\27\3\2\2\2\u0097\u0098\7@\2\2\u0098\31\3\2\2\2\u0099\u009a",
    "\7D\2\2\u009a\33\3\2\2\2\u009b\u009c\7C\2\2\u009c\35\3\2\2\2\u009d\u009e",
    "\7G\2\2\u009e\37\3\2\2\2\nZahms\u0080\u0082\u008f"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "';'", "'='", "'('", "')'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', "K_ALTER", 
                      "K_AND", "K_AS", "K_ASC", "K_AVERAGE", "K_BY", "K_CASE", 
                      "K_COLUMN", "K_CONTAINS", "K_COUNT", "K_CREATE", "K_DELETE", 
                      "K_DESC", "K_DOES", "K_CONTAIN", "K_DROP", "K_ENDS", 
                      "K_FROM", "K_GROUP", "K_HAVING", "K_IGNORING", "K_IN", 
                      "K_INSERT", "K_INTO", "K_IS", "K_ISNULL", "K_JOIN", 
                      "K_LEFT", "K_LIKE", "K_LIMIT", "K_MATCHES", "K_MAXIMUM", 
                      "K_MINIMUM", "K_NOT", "K_NOTNULL", "K_EQUAL", "K_NULL", 
                      "K_OF", "K_OFFSET", "K_ON", "K_OR", "K_ORDER", "K_OUTER", 
                      "K_RENAME", "K_RIGHT", "K_ROWID", "K_SELECT", "K_SUM", 
                      "K_SET", "K_STARTS", "K_TABLE", "K_TO", "K_UPDATE", 
                      "K_VALUES", "K_VIEW", "K_WHERE", "K_WITH", "STRING_LITERAL", 
                      "BACKQUOTED_TEXT", "BRACED_TEXT", "LETTERS", "NUMERIC_LITERAL", 
                      "SPACES", "UNEXPECTED_CHAR", "ANYCHRS" ];

var ruleNames =  [ "keyword", "parse", "sql_stmt_list", "sql_stmt", "delete_stmt", 
                   "table_name", "column_name", "any_name", "identifier", 
                   "backquoted_text", "braced_text", "string_literal", "numeric_literal", 
                   "letters", "anychrs" ];

function TrialsParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TrialsParser.prototype = Object.create(antlr4.Parser.prototype);
TrialsParser.prototype.constructor = TrialsParser;

Object.defineProperty(TrialsParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TrialsParser.EOF = antlr4.Token.EOF;
TrialsParser.T__0 = 1;
TrialsParser.T__1 = 2;
TrialsParser.T__2 = 3;
TrialsParser.T__3 = 4;
TrialsParser.K_ALTER = 5;
TrialsParser.K_AND = 6;
TrialsParser.K_AS = 7;
TrialsParser.K_ASC = 8;
TrialsParser.K_AVERAGE = 9;
TrialsParser.K_BY = 10;
TrialsParser.K_CASE = 11;
TrialsParser.K_COLUMN = 12;
TrialsParser.K_CONTAINS = 13;
TrialsParser.K_COUNT = 14;
TrialsParser.K_CREATE = 15;
TrialsParser.K_DELETE = 16;
TrialsParser.K_DESC = 17;
TrialsParser.K_DOES = 18;
TrialsParser.K_CONTAIN = 19;
TrialsParser.K_DROP = 20;
TrialsParser.K_ENDS = 21;
TrialsParser.K_FROM = 22;
TrialsParser.K_GROUP = 23;
TrialsParser.K_HAVING = 24;
TrialsParser.K_IGNORING = 25;
TrialsParser.K_IN = 26;
TrialsParser.K_INSERT = 27;
TrialsParser.K_INTO = 28;
TrialsParser.K_IS = 29;
TrialsParser.K_ISNULL = 30;
TrialsParser.K_JOIN = 31;
TrialsParser.K_LEFT = 32;
TrialsParser.K_LIKE = 33;
TrialsParser.K_LIMIT = 34;
TrialsParser.K_MATCHES = 35;
TrialsParser.K_MAXIMUM = 36;
TrialsParser.K_MINIMUM = 37;
TrialsParser.K_NOT = 38;
TrialsParser.K_NOTNULL = 39;
TrialsParser.K_EQUAL = 40;
TrialsParser.K_NULL = 41;
TrialsParser.K_OF = 42;
TrialsParser.K_OFFSET = 43;
TrialsParser.K_ON = 44;
TrialsParser.K_OR = 45;
TrialsParser.K_ORDER = 46;
TrialsParser.K_OUTER = 47;
TrialsParser.K_RENAME = 48;
TrialsParser.K_RIGHT = 49;
TrialsParser.K_ROWID = 50;
TrialsParser.K_SELECT = 51;
TrialsParser.K_SUM = 52;
TrialsParser.K_SET = 53;
TrialsParser.K_STARTS = 54;
TrialsParser.K_TABLE = 55;
TrialsParser.K_TO = 56;
TrialsParser.K_UPDATE = 57;
TrialsParser.K_VALUES = 58;
TrialsParser.K_VIEW = 59;
TrialsParser.K_WHERE = 60;
TrialsParser.K_WITH = 61;
TrialsParser.STRING_LITERAL = 62;
TrialsParser.BACKQUOTED_TEXT = 63;
TrialsParser.BRACED_TEXT = 64;
TrialsParser.LETTERS = 65;
TrialsParser.NUMERIC_LITERAL = 66;
TrialsParser.SPACES = 67;
TrialsParser.UNEXPECTED_CHAR = 68;
TrialsParser.ANYCHRS = 69;

TrialsParser.RULE_keyword = 0;
TrialsParser.RULE_parse = 1;
TrialsParser.RULE_sql_stmt_list = 2;
TrialsParser.RULE_sql_stmt = 3;
TrialsParser.RULE_delete_stmt = 4;
TrialsParser.RULE_table_name = 5;
TrialsParser.RULE_column_name = 6;
TrialsParser.RULE_any_name = 7;
TrialsParser.RULE_identifier = 8;
TrialsParser.RULE_backquoted_text = 9;
TrialsParser.RULE_braced_text = 10;
TrialsParser.RULE_string_literal = 11;
TrialsParser.RULE_numeric_literal = 12;
TrialsParser.RULE_letters = 13;
TrialsParser.RULE_anychrs = 14;

function KeywordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_keyword;
    return this;
}

KeywordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordContext.prototype.constructor = KeywordContext;

KeywordContext.prototype.K_ALTER = function() {
    return this.getToken(TrialsParser.K_ALTER, 0);
};

KeywordContext.prototype.K_AND = function() {
    return this.getToken(TrialsParser.K_AND, 0);
};

KeywordContext.prototype.K_AS = function() {
    return this.getToken(TrialsParser.K_AS, 0);
};

KeywordContext.prototype.K_ASC = function() {
    return this.getToken(TrialsParser.K_ASC, 0);
};

KeywordContext.prototype.K_AVERAGE = function() {
    return this.getToken(TrialsParser.K_AVERAGE, 0);
};

KeywordContext.prototype.K_BY = function() {
    return this.getToken(TrialsParser.K_BY, 0);
};

KeywordContext.prototype.K_CASE = function() {
    return this.getToken(TrialsParser.K_CASE, 0);
};

KeywordContext.prototype.K_COLUMN = function() {
    return this.getToken(TrialsParser.K_COLUMN, 0);
};

KeywordContext.prototype.K_CONTAIN = function() {
    return this.getToken(TrialsParser.K_CONTAIN, 0);
};

KeywordContext.prototype.K_CONTAINS = function() {
    return this.getToken(TrialsParser.K_CONTAINS, 0);
};

KeywordContext.prototype.K_COUNT = function() {
    return this.getToken(TrialsParser.K_COUNT, 0);
};

KeywordContext.prototype.K_CREATE = function() {
    return this.getToken(TrialsParser.K_CREATE, 0);
};

KeywordContext.prototype.K_DELETE = function() {
    return this.getToken(TrialsParser.K_DELETE, 0);
};

KeywordContext.prototype.K_DESC = function() {
    return this.getToken(TrialsParser.K_DESC, 0);
};

KeywordContext.prototype.K_DOES = function() {
    return this.getToken(TrialsParser.K_DOES, 0);
};

KeywordContext.prototype.K_DROP = function() {
    return this.getToken(TrialsParser.K_DROP, 0);
};

KeywordContext.prototype.K_ENDS = function() {
    return this.getToken(TrialsParser.K_ENDS, 0);
};

KeywordContext.prototype.K_EQUAL = function() {
    return this.getToken(TrialsParser.K_EQUAL, 0);
};

KeywordContext.prototype.K_FROM = function() {
    return this.getToken(TrialsParser.K_FROM, 0);
};

KeywordContext.prototype.K_GROUP = function() {
    return this.getToken(TrialsParser.K_GROUP, 0);
};

KeywordContext.prototype.K_HAVING = function() {
    return this.getToken(TrialsParser.K_HAVING, 0);
};

KeywordContext.prototype.K_IGNORING = function() {
    return this.getToken(TrialsParser.K_IGNORING, 0);
};

KeywordContext.prototype.K_IN = function() {
    return this.getToken(TrialsParser.K_IN, 0);
};

KeywordContext.prototype.K_INSERT = function() {
    return this.getToken(TrialsParser.K_INSERT, 0);
};

KeywordContext.prototype.K_INTO = function() {
    return this.getToken(TrialsParser.K_INTO, 0);
};

KeywordContext.prototype.K_IS = function() {
    return this.getToken(TrialsParser.K_IS, 0);
};

KeywordContext.prototype.K_ISNULL = function() {
    return this.getToken(TrialsParser.K_ISNULL, 0);
};

KeywordContext.prototype.K_JOIN = function() {
    return this.getToken(TrialsParser.K_JOIN, 0);
};

KeywordContext.prototype.K_LEFT = function() {
    return this.getToken(TrialsParser.K_LEFT, 0);
};

KeywordContext.prototype.K_LIKE = function() {
    return this.getToken(TrialsParser.K_LIKE, 0);
};

KeywordContext.prototype.K_LIMIT = function() {
    return this.getToken(TrialsParser.K_LIMIT, 0);
};

KeywordContext.prototype.K_MATCHES = function() {
    return this.getToken(TrialsParser.K_MATCHES, 0);
};

KeywordContext.prototype.K_MAXIMUM = function() {
    return this.getToken(TrialsParser.K_MAXIMUM, 0);
};

KeywordContext.prototype.K_MINIMUM = function() {
    return this.getToken(TrialsParser.K_MINIMUM, 0);
};

KeywordContext.prototype.K_NOT = function() {
    return this.getToken(TrialsParser.K_NOT, 0);
};

KeywordContext.prototype.K_NOTNULL = function() {
    return this.getToken(TrialsParser.K_NOTNULL, 0);
};

KeywordContext.prototype.K_NULL = function() {
    return this.getToken(TrialsParser.K_NULL, 0);
};

KeywordContext.prototype.K_OF = function() {
    return this.getToken(TrialsParser.K_OF, 0);
};

KeywordContext.prototype.K_OFFSET = function() {
    return this.getToken(TrialsParser.K_OFFSET, 0);
};

KeywordContext.prototype.K_ON = function() {
    return this.getToken(TrialsParser.K_ON, 0);
};

KeywordContext.prototype.K_OR = function() {
    return this.getToken(TrialsParser.K_OR, 0);
};

KeywordContext.prototype.K_ORDER = function() {
    return this.getToken(TrialsParser.K_ORDER, 0);
};

KeywordContext.prototype.K_OUTER = function() {
    return this.getToken(TrialsParser.K_OUTER, 0);
};

KeywordContext.prototype.K_RENAME = function() {
    return this.getToken(TrialsParser.K_RENAME, 0);
};

KeywordContext.prototype.K_RIGHT = function() {
    return this.getToken(TrialsParser.K_RIGHT, 0);
};

KeywordContext.prototype.K_ROWID = function() {
    return this.getToken(TrialsParser.K_ROWID, 0);
};

KeywordContext.prototype.K_SELECT = function() {
    return this.getToken(TrialsParser.K_SELECT, 0);
};

KeywordContext.prototype.K_SET = function() {
    return this.getToken(TrialsParser.K_SET, 0);
};

KeywordContext.prototype.K_STARTS = function() {
    return this.getToken(TrialsParser.K_STARTS, 0);
};

KeywordContext.prototype.K_SUM = function() {
    return this.getToken(TrialsParser.K_SUM, 0);
};

KeywordContext.prototype.K_TABLE = function() {
    return this.getToken(TrialsParser.K_TABLE, 0);
};

KeywordContext.prototype.K_TO = function() {
    return this.getToken(TrialsParser.K_TO, 0);
};

KeywordContext.prototype.K_UPDATE = function() {
    return this.getToken(TrialsParser.K_UPDATE, 0);
};

KeywordContext.prototype.K_VALUES = function() {
    return this.getToken(TrialsParser.K_VALUES, 0);
};

KeywordContext.prototype.K_VIEW = function() {
    return this.getToken(TrialsParser.K_VIEW, 0);
};

KeywordContext.prototype.K_WHERE = function() {
    return this.getToken(TrialsParser.K_WHERE, 0);
};

KeywordContext.prototype.K_WITH = function() {
    return this.getToken(TrialsParser.K_WITH, 0);
};

KeywordContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterKeyword(this);
	}
};

KeywordContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitKeyword(this);
	}
};

KeywordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitKeyword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.KeywordContext = KeywordContext;

TrialsParser.prototype.keyword = function() {

    var localctx = new KeywordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TrialsParser.RULE_keyword);
    try {
        this.state = 88;
        switch(this._input.LA(1)) {
        case TrialsParser.EOF:
        case TrialsParser.T__3:
            this.enterOuterAlt(localctx, 1);

            break;
        case TrialsParser.K_ALTER:
            this.enterOuterAlt(localctx, 2);
            this.state = 31;
            this.match(TrialsParser.K_ALTER);
            break;
        case TrialsParser.K_AND:
            this.enterOuterAlt(localctx, 3);
            this.state = 32;
            this.match(TrialsParser.K_AND);
            break;
        case TrialsParser.K_AS:
            this.enterOuterAlt(localctx, 4);
            this.state = 33;
            this.match(TrialsParser.K_AS);
            break;
        case TrialsParser.K_ASC:
            this.enterOuterAlt(localctx, 5);
            this.state = 34;
            this.match(TrialsParser.K_ASC);
            break;
        case TrialsParser.K_AVERAGE:
            this.enterOuterAlt(localctx, 6);
            this.state = 35;
            this.match(TrialsParser.K_AVERAGE);
            break;
        case TrialsParser.K_BY:
            this.enterOuterAlt(localctx, 7);
            this.state = 36;
            this.match(TrialsParser.K_BY);
            break;
        case TrialsParser.K_CASE:
            this.enterOuterAlt(localctx, 8);
            this.state = 37;
            this.match(TrialsParser.K_CASE);
            break;
        case TrialsParser.K_COLUMN:
            this.enterOuterAlt(localctx, 9);
            this.state = 38;
            this.match(TrialsParser.K_COLUMN);
            break;
        case TrialsParser.K_CONTAIN:
            this.enterOuterAlt(localctx, 10);
            this.state = 39;
            this.match(TrialsParser.K_CONTAIN);
            break;
        case TrialsParser.K_CONTAINS:
            this.enterOuterAlt(localctx, 11);
            this.state = 40;
            this.match(TrialsParser.K_CONTAINS);
            break;
        case TrialsParser.K_COUNT:
            this.enterOuterAlt(localctx, 12);
            this.state = 41;
            this.match(TrialsParser.K_COUNT);
            break;
        case TrialsParser.K_CREATE:
            this.enterOuterAlt(localctx, 13);
            this.state = 42;
            this.match(TrialsParser.K_CREATE);
            break;
        case TrialsParser.K_DELETE:
            this.enterOuterAlt(localctx, 14);
            this.state = 43;
            this.match(TrialsParser.K_DELETE);
            break;
        case TrialsParser.K_DESC:
            this.enterOuterAlt(localctx, 15);
            this.state = 44;
            this.match(TrialsParser.K_DESC);
            break;
        case TrialsParser.K_DOES:
            this.enterOuterAlt(localctx, 16);
            this.state = 45;
            this.match(TrialsParser.K_DOES);
            break;
        case TrialsParser.K_DROP:
            this.enterOuterAlt(localctx, 17);
            this.state = 46;
            this.match(TrialsParser.K_DROP);
            break;
        case TrialsParser.K_ENDS:
            this.enterOuterAlt(localctx, 18);
            this.state = 47;
            this.match(TrialsParser.K_ENDS);
            break;
        case TrialsParser.K_EQUAL:
            this.enterOuterAlt(localctx, 19);
            this.state = 48;
            this.match(TrialsParser.K_EQUAL);
            break;
        case TrialsParser.K_FROM:
            this.enterOuterAlt(localctx, 20);
            this.state = 49;
            this.match(TrialsParser.K_FROM);
            break;
        case TrialsParser.K_GROUP:
            this.enterOuterAlt(localctx, 21);
            this.state = 50;
            this.match(TrialsParser.K_GROUP);
            break;
        case TrialsParser.K_HAVING:
            this.enterOuterAlt(localctx, 22);
            this.state = 51;
            this.match(TrialsParser.K_HAVING);
            break;
        case TrialsParser.K_IGNORING:
            this.enterOuterAlt(localctx, 23);
            this.state = 52;
            this.match(TrialsParser.K_IGNORING);
            break;
        case TrialsParser.K_IN:
            this.enterOuterAlt(localctx, 24);
            this.state = 53;
            this.match(TrialsParser.K_IN);
            break;
        case TrialsParser.K_INSERT:
            this.enterOuterAlt(localctx, 25);
            this.state = 54;
            this.match(TrialsParser.K_INSERT);
            break;
        case TrialsParser.K_INTO:
            this.enterOuterAlt(localctx, 26);
            this.state = 55;
            this.match(TrialsParser.K_INTO);
            break;
        case TrialsParser.K_IS:
            this.enterOuterAlt(localctx, 27);
            this.state = 56;
            this.match(TrialsParser.K_IS);
            break;
        case TrialsParser.K_ISNULL:
            this.enterOuterAlt(localctx, 28);
            this.state = 57;
            this.match(TrialsParser.K_ISNULL);
            break;
        case TrialsParser.K_JOIN:
            this.enterOuterAlt(localctx, 29);
            this.state = 58;
            this.match(TrialsParser.K_JOIN);
            break;
        case TrialsParser.K_LEFT:
            this.enterOuterAlt(localctx, 30);
            this.state = 59;
            this.match(TrialsParser.K_LEFT);
            break;
        case TrialsParser.K_LIKE:
            this.enterOuterAlt(localctx, 31);
            this.state = 60;
            this.match(TrialsParser.K_LIKE);
            break;
        case TrialsParser.K_LIMIT:
            this.enterOuterAlt(localctx, 32);
            this.state = 61;
            this.match(TrialsParser.K_LIMIT);
            break;
        case TrialsParser.K_MATCHES:
            this.enterOuterAlt(localctx, 33);
            this.state = 62;
            this.match(TrialsParser.K_MATCHES);
            break;
        case TrialsParser.K_MAXIMUM:
            this.enterOuterAlt(localctx, 34);
            this.state = 63;
            this.match(TrialsParser.K_MAXIMUM);
            break;
        case TrialsParser.K_MINIMUM:
            this.enterOuterAlt(localctx, 35);
            this.state = 64;
            this.match(TrialsParser.K_MINIMUM);
            break;
        case TrialsParser.K_NOT:
            this.enterOuterAlt(localctx, 36);
            this.state = 65;
            this.match(TrialsParser.K_NOT);
            break;
        case TrialsParser.K_NOTNULL:
            this.enterOuterAlt(localctx, 37);
            this.state = 66;
            this.match(TrialsParser.K_NOTNULL);
            break;
        case TrialsParser.K_NULL:
            this.enterOuterAlt(localctx, 38);
            this.state = 67;
            this.match(TrialsParser.K_NULL);
            break;
        case TrialsParser.K_OF:
            this.enterOuterAlt(localctx, 39);
            this.state = 68;
            this.match(TrialsParser.K_OF);
            break;
        case TrialsParser.K_OFFSET:
            this.enterOuterAlt(localctx, 40);
            this.state = 69;
            this.match(TrialsParser.K_OFFSET);
            break;
        case TrialsParser.K_ON:
            this.enterOuterAlt(localctx, 41);
            this.state = 70;
            this.match(TrialsParser.K_ON);
            break;
        case TrialsParser.K_OR:
            this.enterOuterAlt(localctx, 42);
            this.state = 71;
            this.match(TrialsParser.K_OR);
            break;
        case TrialsParser.K_ORDER:
            this.enterOuterAlt(localctx, 43);
            this.state = 72;
            this.match(TrialsParser.K_ORDER);
            break;
        case TrialsParser.K_OUTER:
            this.enterOuterAlt(localctx, 44);
            this.state = 73;
            this.match(TrialsParser.K_OUTER);
            break;
        case TrialsParser.K_RENAME:
            this.enterOuterAlt(localctx, 45);
            this.state = 74;
            this.match(TrialsParser.K_RENAME);
            break;
        case TrialsParser.K_RIGHT:
            this.enterOuterAlt(localctx, 46);
            this.state = 75;
            this.match(TrialsParser.K_RIGHT);
            break;
        case TrialsParser.K_ROWID:
            this.enterOuterAlt(localctx, 47);
            this.state = 76;
            this.match(TrialsParser.K_ROWID);
            break;
        case TrialsParser.K_SELECT:
            this.enterOuterAlt(localctx, 48);
            this.state = 77;
            this.match(TrialsParser.K_SELECT);
            break;
        case TrialsParser.K_SET:
            this.enterOuterAlt(localctx, 49);
            this.state = 78;
            this.match(TrialsParser.K_SET);
            break;
        case TrialsParser.K_STARTS:
            this.enterOuterAlt(localctx, 50);
            this.state = 79;
            this.match(TrialsParser.K_STARTS);
            break;
        case TrialsParser.K_SUM:
            this.enterOuterAlt(localctx, 51);
            this.state = 80;
            this.match(TrialsParser.K_SUM);
            break;
        case TrialsParser.K_TABLE:
            this.enterOuterAlt(localctx, 52);
            this.state = 81;
            this.match(TrialsParser.K_TABLE);
            break;
        case TrialsParser.K_TO:
            this.enterOuterAlt(localctx, 53);
            this.state = 82;
            this.match(TrialsParser.K_TO);
            break;
        case TrialsParser.K_UPDATE:
            this.enterOuterAlt(localctx, 54);
            this.state = 83;
            this.match(TrialsParser.K_UPDATE);
            break;
        case TrialsParser.K_VALUES:
            this.enterOuterAlt(localctx, 55);
            this.state = 84;
            this.match(TrialsParser.K_VALUES);
            break;
        case TrialsParser.K_VIEW:
            this.enterOuterAlt(localctx, 56);
            this.state = 85;
            this.match(TrialsParser.K_VIEW);
            break;
        case TrialsParser.K_WHERE:
            this.enterOuterAlt(localctx, 57);
            this.state = 86;
            this.match(TrialsParser.K_WHERE);
            break;
        case TrialsParser.K_WITH:
            this.enterOuterAlt(localctx, 58);
            this.state = 87;
            this.match(TrialsParser.K_WITH);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_parse;
    return this;
}

ParseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParseContext.prototype.constructor = ParseContext;

ParseContext.prototype.sql_stmt_list = function() {
    return this.getTypedRuleContext(Sql_stmt_listContext,0);
};

ParseContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterParse(this);
	}
};

ParseContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitParse(this);
	}
};

ParseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitParse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.ParseContext = ParseContext;

TrialsParser.prototype.parse = function() {

    var localctx = new ParseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TrialsParser.RULE_parse);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.sql_stmt_list();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sql_stmt_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_sql_stmt_list;
    return this;
}

Sql_stmt_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sql_stmt_listContext.prototype.constructor = Sql_stmt_listContext;

Sql_stmt_listContext.prototype.sql_stmt = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Sql_stmtContext);
    } else {
        return this.getTypedRuleContext(Sql_stmtContext,i);
    }
};

Sql_stmt_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterSql_stmt_list(this);
	}
};

Sql_stmt_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitSql_stmt_list(this);
	}
};

Sql_stmt_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitSql_stmt_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Sql_stmt_listContext = Sql_stmt_listContext;

TrialsParser.prototype.sql_stmt_list = function() {

    var localctx = new Sql_stmt_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TrialsParser.RULE_sql_stmt_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrialsParser.T__0) {
            this.state = 92;
            this.match(TrialsParser.T__0);
            this.state = 97;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 98;
        this.sql_stmt();
        this.state = 107;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 100; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    this.state = 99;
                    this.match(TrialsParser.T__0);
                    this.state = 102; 
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while(_la===TrialsParser.T__0);
                this.state = 104;
                this.sql_stmt(); 
            }
            this.state = 109;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

        this.state = 113;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrialsParser.T__0) {
            this.state = 110;
            this.match(TrialsParser.T__0);
            this.state = 115;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Sql_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_sql_stmt;
    return this;
}

Sql_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sql_stmtContext.prototype.constructor = Sql_stmtContext;

Sql_stmtContext.prototype.delete_stmt = function() {
    return this.getTypedRuleContext(Delete_stmtContext,0);
};

Sql_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterSql_stmt(this);
	}
};

Sql_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitSql_stmt(this);
	}
};

Sql_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitSql_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Sql_stmtContext = Sql_stmtContext;

TrialsParser.prototype.sql_stmt = function() {

    var localctx = new Sql_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TrialsParser.RULE_sql_stmt);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.delete_stmt();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Delete_stmtContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_delete_stmt;
    return this;
}

Delete_stmtContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Delete_stmtContext.prototype.constructor = Delete_stmtContext;

Delete_stmtContext.prototype.K_DELETE = function() {
    return this.getToken(TrialsParser.K_DELETE, 0);
};

Delete_stmtContext.prototype.K_FROM = function() {
    return this.getToken(TrialsParser.K_FROM, 0);
};

Delete_stmtContext.prototype.table_name = function() {
    return this.getTypedRuleContext(Table_nameContext,0);
};

Delete_stmtContext.prototype.K_WHERE = function() {
    return this.getToken(TrialsParser.K_WHERE, 0);
};

Delete_stmtContext.prototype.K_ROWID = function() {
    return this.getToken(TrialsParser.K_ROWID, 0);
};

Delete_stmtContext.prototype.numeric_literal = function() {
    return this.getTypedRuleContext(Numeric_literalContext,0);
};

Delete_stmtContext.prototype.string_literal = function() {
    return this.getTypedRuleContext(String_literalContext,0);
};

Delete_stmtContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterDelete_stmt(this);
	}
};

Delete_stmtContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitDelete_stmt(this);
	}
};

Delete_stmtContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitDelete_stmt(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Delete_stmtContext = Delete_stmtContext;

TrialsParser.prototype.delete_stmt = function() {

    var localctx = new Delete_stmtContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TrialsParser.RULE_delete_stmt);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 118;
        this.match(TrialsParser.K_DELETE);
        this.state = 119;
        this.match(TrialsParser.K_FROM);
        this.state = 120;
        this.table_name();
        this.state = 128;
        _la = this._input.LA(1);
        if(_la===TrialsParser.K_WHERE) {
            this.state = 121;
            this.match(TrialsParser.K_WHERE);
            this.state = 122;
            this.match(TrialsParser.K_ROWID);
            this.state = 123;
            this.match(TrialsParser.T__1);
            this.state = 126;
            switch(this._input.LA(1)) {
            case TrialsParser.NUMERIC_LITERAL:
                this.state = 124;
                this.numeric_literal();
                break;
            case TrialsParser.STRING_LITERAL:
                this.state = 125;
                this.string_literal();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Table_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_table_name;
    return this;
}

Table_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Table_nameContext.prototype.constructor = Table_nameContext;

Table_nameContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Table_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterTable_name(this);
	}
};

Table_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitTable_name(this);
	}
};

Table_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitTable_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Table_nameContext = Table_nameContext;

TrialsParser.prototype.table_name = function() {

    var localctx = new Table_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TrialsParser.RULE_table_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Column_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_column_name;
    return this;
}

Column_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Column_nameContext.prototype.constructor = Column_nameContext;

Column_nameContext.prototype.any_name = function() {
    return this.getTypedRuleContext(Any_nameContext,0);
};

Column_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterColumn_name(this);
	}
};

Column_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitColumn_name(this);
	}
};

Column_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitColumn_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Column_nameContext = Column_nameContext;

TrialsParser.prototype.column_name = function() {

    var localctx = new Column_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TrialsParser.RULE_column_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 132;
        this.any_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Any_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_any_name;
    return this;
}

Any_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Any_nameContext.prototype.constructor = Any_nameContext;

Any_nameContext.prototype.keyword = function() {
    return this.getTypedRuleContext(KeywordContext,0);
};

Any_nameContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

Any_nameContext.prototype.any_name = function() {
    return this.getTypedRuleContext(Any_nameContext,0);
};

Any_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterAny_name(this);
	}
};

Any_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitAny_name(this);
	}
};

Any_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitAny_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Any_nameContext = Any_nameContext;

TrialsParser.prototype.any_name = function() {

    var localctx = new Any_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TrialsParser.RULE_any_name);
    try {
        this.state = 141;
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 135;
            this.keyword();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 136;
            this.identifier();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 137;
            this.match(TrialsParser.T__2);
            this.state = 138;
            this.any_name();
            this.state = 139;
            this.match(TrialsParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.letters = function() {
    return this.getTypedRuleContext(LettersContext,0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.IdentifierContext = IdentifierContext;

TrialsParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, TrialsParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.letters();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Backquoted_textContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_backquoted_text;
    return this;
}

Backquoted_textContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Backquoted_textContext.prototype.constructor = Backquoted_textContext;

Backquoted_textContext.prototype.BACKQUOTED_TEXT = function() {
    return this.getToken(TrialsParser.BACKQUOTED_TEXT, 0);
};

Backquoted_textContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterBackquoted_text(this);
	}
};

Backquoted_textContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitBackquoted_text(this);
	}
};

Backquoted_textContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitBackquoted_text(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Backquoted_textContext = Backquoted_textContext;

TrialsParser.prototype.backquoted_text = function() {

    var localctx = new Backquoted_textContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, TrialsParser.RULE_backquoted_text);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(TrialsParser.BACKQUOTED_TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Braced_textContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_braced_text;
    return this;
}

Braced_textContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Braced_textContext.prototype.constructor = Braced_textContext;

Braced_textContext.prototype.BRACED_TEXT = function() {
    return this.getToken(TrialsParser.BRACED_TEXT, 0);
};

Braced_textContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterBraced_text(this);
	}
};

Braced_textContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitBraced_text(this);
	}
};

Braced_textContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitBraced_text(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Braced_textContext = Braced_textContext;

TrialsParser.prototype.braced_text = function() {

    var localctx = new Braced_textContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, TrialsParser.RULE_braced_text);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(TrialsParser.BRACED_TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function String_literalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_string_literal;
    return this;
}

String_literalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
String_literalContext.prototype.constructor = String_literalContext;

String_literalContext.prototype.STRING_LITERAL = function() {
    return this.getToken(TrialsParser.STRING_LITERAL, 0);
};

String_literalContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterString_literal(this);
	}
};

String_literalContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitString_literal(this);
	}
};

String_literalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitString_literal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.String_literalContext = String_literalContext;

TrialsParser.prototype.string_literal = function() {

    var localctx = new String_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, TrialsParser.RULE_string_literal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(TrialsParser.STRING_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Numeric_literalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_numeric_literal;
    return this;
}

Numeric_literalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Numeric_literalContext.prototype.constructor = Numeric_literalContext;

Numeric_literalContext.prototype.NUMERIC_LITERAL = function() {
    return this.getToken(TrialsParser.NUMERIC_LITERAL, 0);
};

Numeric_literalContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterNumeric_literal(this);
	}
};

Numeric_literalContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitNumeric_literal(this);
	}
};

Numeric_literalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitNumeric_literal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.Numeric_literalContext = Numeric_literalContext;

TrialsParser.prototype.numeric_literal = function() {

    var localctx = new Numeric_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, TrialsParser.RULE_numeric_literal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(TrialsParser.NUMERIC_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LettersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_letters;
    return this;
}

LettersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LettersContext.prototype.constructor = LettersContext;

LettersContext.prototype.LETTERS = function() {
    return this.getToken(TrialsParser.LETTERS, 0);
};

LettersContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterLetters(this);
	}
};

LettersContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitLetters(this);
	}
};

LettersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitLetters(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.LettersContext = LettersContext;

TrialsParser.prototype.letters = function() {

    var localctx = new LettersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, TrialsParser.RULE_letters);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(TrialsParser.LETTERS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnychrsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrialsParser.RULE_anychrs;
    return this;
}

AnychrsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnychrsContext.prototype.constructor = AnychrsContext;

AnychrsContext.prototype.ANYCHRS = function() {
    return this.getToken(TrialsParser.ANYCHRS, 0);
};

AnychrsContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.enterAnychrs(this);
	}
};

AnychrsContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrialsListener ) {
        listener.exitAnychrs(this);
	}
};

AnychrsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrialsVisitor ) {
        return visitor.visitAnychrs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrialsParser.AnychrsContext = AnychrsContext;

TrialsParser.prototype.anychrs = function() {

    var localctx = new AnychrsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, TrialsParser.RULE_anychrs);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(TrialsParser.ANYCHRS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.TrialsParser = TrialsParser;
