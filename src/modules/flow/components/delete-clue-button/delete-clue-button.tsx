import { useDeleteClueButtonModel } from "./delete-clue-button-model";
import { DeleteClueButtonView } from "./delete-clue-button-view";

type DeleteClueButtonProps = Parameters<typeof useDeleteClueButtonModel>[0];

export function DeleteClueButton(props: DeleteClueButtonProps) {
  return <DeleteClueButtonView {...useDeleteClueButtonModel(props)} />;
}
