import { ParserRuleContext } from "antlr4";
import {
  ClassDefContext,
  ExpressionNewContext,
  FieldDeclarationContext,
  FunctionDeclarationContext,
  MethodCallContext,
  MethodDeclarationContext,
} from "./grammar/bdsParser";

function findParentNodeOfType<T extends ParserRuleContext>(
  node: ParserRuleContext,
  type: new (...args: any[]) => T
): T | null {
  let currentScope = node;
  while (
    currentScope &&
    !(currentScope instanceof type) &&
    currentScope.parentCtx
  ) {
    currentScope = currentScope.parentCtx;
  }
  return currentScope instanceof type ? currentScope : null;
}

// Improved functions using the helper
function isTargetNodePartOfExpressionNew(
  node: ParserRuleContext
): node is ExpressionNewContext {
  return Boolean(findParentNodeOfType(node, ExpressionNewContext));
}

function getParentMethodCall(
  node: ParserRuleContext
): MethodCallContext | null {
  return findParentNodeOfType(node, MethodCallContext);
}

function isTargetNodeIDPartOfMethodCall(node: ParserRuleContext): Boolean {
  const methodCall = findParentNodeOfType(node, MethodCallContext);
  return methodCall ? methodCall.ID().getText() === node.getText() : false;
}

function isTargetNodeTypeOfVariableInitInMethod(
  node: ParserRuleContext
): node is MethodDeclarationContext {
  const methodDeclaration = findParentNodeOfType(
    node,
    MethodDeclarationContext
  );
  if (!methodDeclaration) return false;
  const vars = methodDeclaration.functionDeclaration().varDeclaration_list();
  return vars.some(
    (varDeclaration) =>
      varDeclaration.type_() &&
      varDeclaration.type_().getText() === node.getText()
  );
}

function isTargetNodeTypeOfFieldDefinition(
  node: ParserRuleContext
): node is FieldDeclarationContext {
  const field = findParentNodeOfType(node, FieldDeclarationContext);
  return field
    ? field.varDeclaration().type_().getText() === node.getText()
    : false;
}

function findParentFunction(node: ParserRuleContext): string | null {
  const functionDeclaration = findParentNodeOfType(
    node,
    FunctionDeclarationContext
  );
  return functionDeclaration ? functionDeclaration.ID().getText() : null;
}

function findParentClass(node: ParserRuleContext): string | null {
  const classDef = findParentNodeOfType(node, ClassDefContext);
  return classDef ? classDef.ID(0).getText() : null;
}

export {
  isTargetNodePartOfExpressionNew,
  getParentMethodCall,
  isTargetNodeIDPartOfMethodCall,
  isTargetNodeTypeOfVariableInitInMethod,
  isTargetNodeTypeOfFieldDefinition,
  findParentFunction,
  findParentClass,
};
