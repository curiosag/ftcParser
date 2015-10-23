// Generated from Trials.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TrialsParser.

function TrialsVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TrialsVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TrialsVisitor.prototype.constructor = TrialsVisitor;

// Visit a parse tree produced by TrialsParser#keyword.
TrialsVisitor.prototype.visitKeyword = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#parse.
TrialsVisitor.prototype.visitParse = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#sql_stmt_list.
TrialsVisitor.prototype.visitSql_stmt_list = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#sql_stmt.
TrialsVisitor.prototype.visitSql_stmt = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#delete_stmt.
TrialsVisitor.prototype.visitDelete_stmt = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#table_name.
TrialsVisitor.prototype.visitTable_name = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#column_name.
TrialsVisitor.prototype.visitColumn_name = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#any_name.
TrialsVisitor.prototype.visitAny_name = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#identifier.
TrialsVisitor.prototype.visitIdentifier = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#backquoted_text.
TrialsVisitor.prototype.visitBackquoted_text = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#braced_text.
TrialsVisitor.prototype.visitBraced_text = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#string_literal.
TrialsVisitor.prototype.visitString_literal = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#numeric_literal.
TrialsVisitor.prototype.visitNumeric_literal = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#letters.
TrialsVisitor.prototype.visitLetters = function(ctx) {
};


// Visit a parse tree produced by TrialsParser#anychrs.
TrialsVisitor.prototype.visitAnychrs = function(ctx) {
};



exports.TrialsVisitor = TrialsVisitor;