import cx from "./DashboardEntry.module.scss";
import { format } from "date-fns";
import { Button } from "./Button";
import { useTranslation } from "../hooks/useTranslation";
import { useViewState } from "../hooks/useViewState";

export const DashboardEntry = ({ entry, onDelete }) => {
  const { goToEditEntry } = useViewState();

  const { label, date, amount } = entry;

  const { formatDate, formatNumber } = useTranslation();

  return (
    <li className={cx.container}>
      <div className={cx.leftRow}>
        <span data-testId='entryLabel'>{label}</span>

        <span data-testId='entryDate' data-value={date.toISOString()}>{formatDate(date)}</span>
      </div>

      <div className={cx.rightRow}>
        <span data-testId='entryAmount' data-value={amount}>$ {formatNumber(amount)}</span>

        <div className={cx.buttonContainer}>
          <Button
            className={cx.editButton}
            onClick={() => goToEditEntry(entry.id)}
            dataTestId='entryEditButton'
          >
            ✏️
          </Button>

          <Button className={cx.deleteButton} onClick={onDelete} dataTestId='entryDeleteButton'>
            🗑️
          </Button>
        </div>
      </div>
    </li>
  );
};
