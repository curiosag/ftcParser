// Generated from Trials.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TrialsParser.
function TrialsListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TrialsListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TrialsListener.prototype.constructor = TrialsListener;

// Enter a parse tree produced by TrialsParser#keyword.
TrialsListener.prototype.enterKeyword = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#keyword.
TrialsListener.prototype.exitKeyword = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#parse.
TrialsListener.prototype.enterParse = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#parse.
TrialsListener.prototype.exitParse = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#sql_stmt_list.
TrialsListener.prototype.enterSql_stmt_list = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#sql_stmt_list.
TrialsListener.prototype.exitSql_stmt_list = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#sql_stmt.
TrialsListener.prototype.enterSql_stmt = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#sql_stmt.
TrialsListener.prototype.exitSql_stmt = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#delete_stmt.
TrialsListener.prototype.enterDelete_stmt = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#delete_stmt.
TrialsListener.prototype.exitDelete_stmt = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#table_name.
TrialsListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#table_name.
TrialsListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#column_name.
TrialsListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#column_name.
TrialsListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#any_name.
TrialsListener.prototype.enterAny_name = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#any_name.
TrialsListener.prototype.exitAny_name = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#identifier.
TrialsListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#identifier.
TrialsListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#backquoted_text.
TrialsListener.prototype.enterBackquoted_text = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#backquoted_text.
TrialsListener.prototype.exitBackquoted_text = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#braced_text.
TrialsListener.prototype.enterBraced_text = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#braced_text.
TrialsListener.prototype.exitBraced_text = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#string_literal.
TrialsListener.prototype.enterString_literal = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#string_literal.
TrialsListener.prototype.exitString_literal = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#numeric_literal.
TrialsListener.prototype.enterNumeric_literal = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#numeric_literal.
TrialsListener.prototype.exitNumeric_literal = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#letters.
TrialsListener.prototype.enterLetters = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#letters.
TrialsListener.prototype.exitLetters = function(ctx) {
};


// Enter a parse tree produced by TrialsParser#anychrs.
TrialsListener.prototype.enterAnychrs = function(ctx) {
};

// Exit a parse tree produced by TrialsParser#anychrs.
TrialsListener.prototype.exitAnychrs = function(ctx) {
};



exports.TrialsListener = TrialsListener;