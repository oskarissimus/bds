import { Position } from "vscode-languageserver";
import { SymbolTable } from "./symbolTable";
import {
  findParentClass,
  findParentFunction,
  getParentMethodCall,
  isTargetNodeIDPartOfMethodCall,
  isTargetNodePartOfExpressionNew,
  isTargetNodeTypeOfFieldDefinition,
  isTargetNodeTypeOfVariableInitInMethod,
} from "./symbolFinderUtils";
import {
  parseSourceCode,
  findNodeAtPosition,
  getScopedSymbolFromMethodCall,
} from "./symbolFinder";

export function getScopedSymbolFromAST(
  sourceCode: string,
  position: Position,
  symbolTable: SymbolTable
): string | null {
  const tree = parseSourceCode(sourceCode);
  const targetNode = findNodeAtPosition(tree, position);
  if (!targetNode) return null;
  if (isTargetNodeIDPartOfMethodCall(targetNode)) {
    const methodCall = getParentMethodCall(targetNode);
    return getScopedSymbolFromMethodCall(methodCall, symbolTable);
  }

  if (isTargetNodePartOfExpressionNew(targetNode)) {
    const className = targetNode.getText();
    return `${className}.${className}`;
  }

  if (isTargetNodeTypeOfVariableInitInMethod(targetNode)) {
    return targetNode.getText();
  }

  if (isTargetNodeTypeOfFieldDefinition(targetNode)) {
    return targetNode.getText();
  }

  const parentFunctionName = findParentFunction(targetNode);
  const parentClassName = findParentClass(targetNode);
  let scopedSymbolName = targetNode.getText();
  if (parentFunctionName) {
    scopedSymbolName = `${parentFunctionName}:${scopedSymbolName}`;
  }
  if (parentClassName) {
    scopedSymbolName = `${parentClassName}.${scopedSymbolName}`;
  }

  return scopedSymbolName;
}
