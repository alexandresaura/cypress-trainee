import { Button } from "./Button";
import cx from "./SaveButton.module.scss";
import { useTranslation } from "../hooks/useTranslation";

export const SaveButton = () => {
  const { t } = useTranslation();

  return (
    <Button className={cx.button} type="submit" dataTestId='saveButton'>
      {t("saveButton")}
    </Button>
  );
};
