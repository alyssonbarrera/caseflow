import { Background, BackgroundVariant, ReactFlow } from "@xyflow/react";
import { ClueReorderProvider } from "../../contexts/clue-reorder-context";
import { defaultEdgeOptions } from "../../data/edges";
import { nodeTypes } from "../../data/nodes";
import type { useBaseFlowModel } from "./base-flow-model";

type BaseFlowView = ReturnType<typeof useBaseFlowModel>;

export function BaseFlowView({
  nodes,
  edges,
  flowRef,
  onConnect,
  onReconnect,
  onEdgesChange,
  onNodesChange,
  onEdgesDelete,
  onNodeDragStart,
  onSelectionDragStart,
  handleGlobalReorderClues,
}: BaseFlowView) {
  return (
    <ClueReorderProvider handleGlobalReorderClues={handleGlobalReorderClues}>
      <div
        aria-describedby="flow-instructions"
        aria-label="Canvas de investigação criminal interativo"
        className="h-full w-full"
        ref={flowRef}
        role="application"
      >
        <span className="sr-only" id="flow-instructions">
          Use as setas do teclado para navegar, Delete ou Backspace para remover
          elementos selecionados. Arraste elementos para reorganizar o fluxo de
          investigação.
        </span>
        <ReactFlow
          aria-label="Fluxo de investigação"
          defaultEdgeOptions={defaultEdgeOptions}
          deleteKeyCode={["Delete", "Backspace"]}
          edges={edges}
          fitView
          nodes={nodes}
          nodeTypes={nodeTypes}
          onConnect={onConnect}
          onEdgesChange={onEdgesChange}
          onEdgesDelete={onEdgesDelete}
          onlyRenderVisibleElements={true}
          onNodeDragStart={onNodeDragStart}
          onNodesChange={onNodesChange}
          onReconnect={onReconnect}
          onSelectionDragStart={onSelectionDragStart}
          panOnDrag={[1, 2]}
          panOnScroll
          proOptions={{
            hideAttribution: true,
          }}
          selectionOnDrag
        >
          <Background color="#7D7E7E" variant={BackgroundVariant.Dots} />
        </ReactFlow>
      </div>
    </ClueReorderProvider>
  );
}
