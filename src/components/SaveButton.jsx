import { Button } from "./Button";
import cx from "./SaveButton.module.scss";

export const SaveButton = () => {
  return (
    <Button className={cx.button} type="submit" data-testid="saveButton">
      Save
    </Button>
  );
};
