import cx from "./DashboardEntry.module.scss";
import { format } from "date-fns";
import { Button } from "./Button";

export const DashboardEntry = ({ entry, onEdit, onDelete }) => {
  const { label, date, amount, id } = entry;

  return (
    <li className={cx.container} data-testid="entryCard" data-id={id}>
      <div className={cx.leftRow}>
        <span data-testid="entryLabel">{label}</span>

        <span data-testid="entryDate" data-value={format(date, "yyyy-MM-dd")}>
          {format(date, "MM/dd/yyyy")}
        </span>
      </div>

      <div className={cx.rightRow}>
        <span data-testid="entryAmount" data-value={amount}>
          $ {amount.toFixed(2)}
        </span>

        <div className={cx.buttonContainer}>
          <Button
            className={cx.editButton}
            onClick={onEdit}
            data-testid="updateButton"
          >
            ✏️
          </Button>

          <Button
            className={cx.deleteButton}
            onClick={onDelete}
            data-testid="deleteButton"
          >
            🗑️
          </Button>
        </div>
      </div>
    </li>
  );
};
