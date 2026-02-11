import type { NodeProps } from "@xyflow/react";
import { memo } from "react";
import { useGroupNodeModel } from "./group-node-model";
import { GroupNodeView } from "./group-node-view";
import type { GroupNodeType } from "./types";

type GroupNodeProps = NodeProps<GroupNodeType>;

function GroupNodeComponent(props: GroupNodeProps) {
  return <GroupNodeView {...props} {...useGroupNodeModel(props)} />;
}

export const GroupNode = memo(GroupNodeComponent);
