import {
  addEdge,
  type Edge,
  type Node,
  type OnConnect,
  type OnEdgesDelete,
  type OnNodeDrag,
  type OnReconnect,
  reconnectEdge,
  type SelectionDragHandler,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useRef } from "react";
import "@xyflow/react/dist/style.css";
import { makeFlow } from "@/test/factories/make-flow";
import type { NodeItem } from "../../hooks/types";
import { useDropNode } from "../../hooks/use-drop-node";
import { useUndoRedo } from "../../hooks/use-undo-redo";
import type { GroupNodeData } from "../../nodes/group-node/types";
import type { ReorderCluesParams } from "../../types/reorder";
import { getId } from "../../utils/get-id";
import {
  type ClueReorderContext,
  moveCluesBetweenGroups,
  validateNodesAndClues,
} from "./base-flow.utils";

const flow = makeFlow();

const initialNodes: Node[] = flow.nodes;
const initialEdges: Edge[] = flow.edges;

export function useBaseFlowModel() {
  const flowRef = useRef<HTMLDivElement>(null);

  const { takeSnapshot } = useUndoRedo();
  const { getNodes, screenToFlowPosition, updateNodeData } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleDropNode = useCallback(
    (item: NodeItem, clientOffset: { x: number; y: number } | null) => {
      if (!clientOffset) {
        return;
      }

      const position = screenToFlowPosition({
        x: clientOffset.x,
        y: clientOffset.y,
      });

      const newNode = {
        id: getId(),
        type: item.type,
        position,
        data:
          item.type === "evidence"
            ? ({ title: "Novo Grupo", clues: [] } as GroupNodeData)
            : { label: `${item.type} node` },
      };

      takeSnapshot();
      setNodes((prevState) => [...prevState, newNode]);
    },
    [screenToFlowPosition, takeSnapshot, setNodes]
  );

  const { drop } = useDropNode(handleDropNode);
  drop(flowRef);

  const onNodeDragStart: OnNodeDrag = useCallback(() => {
    takeSnapshot();
  }, [takeSnapshot]);

  const onSelectionDragStart: SelectionDragHandler = useCallback(() => {
    takeSnapshot();
  }, [takeSnapshot]);

  const handleGlobalReorderClues = useCallback(
    ({ fromIndex, toIndex, fromGroupId, toGroupId }: ReorderCluesParams) => {
      takeSnapshot();

      const currentNodes = [...getNodes()];
      const validation = validateNodesAndClues({
        toGroupId,
        fromIndex,
        fromGroupId,
        nodes: currentNodes,
      });

      if (!(validation.isValid && validation.fromNodeData)) {
        return;
      }

      const movedClue = validation.fromNodeData.clues[fromIndex];

      if (fromGroupId === toGroupId) {
        const reorderedClues = [...validation.fromNodeData.clues];
        reorderedClues.splice(fromIndex, 1);
        reorderedClues.splice(toIndex, 0, movedClue);

        updateNodeData(fromGroupId, { clues: reorderedClues });
        return;
      }

      setNodes((prevNodes) => {
        const context: ClueReorderContext = {
          toIndex,
          fromIndex,
          toGroupId,
          movedClue,
          fromGroupId,
          nodes: prevNodes,
        };

        return moveCluesBetweenGroups(context, validation);
      });
    },
    [setNodes, takeSnapshot, updateNodeData, getNodes]
  );

  const onConnect: OnConnect = useCallback(
    (params) => {
      takeSnapshot();
      setEdges((prevEdges) => addEdge(params, prevEdges));
    },
    [setEdges, takeSnapshot]
  );

  const onReconnect: OnReconnect = useCallback(
    (oldEdge, newConnection) => {
      takeSnapshot();
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
    },
    [setEdges, takeSnapshot]
  );

  const onEdgesDelete: OnEdgesDelete = useCallback(
    (_params: Edge[]) => takeSnapshot(),
    [takeSnapshot]
  );

  return {
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
  };
}
