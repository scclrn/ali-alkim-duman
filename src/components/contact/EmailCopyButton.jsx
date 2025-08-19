import React from "react";
import { IconButton, Tooltip, Snackbar, Alert } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "react-i18next";

export default function EmailCopyButton({ email }) {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleCopy = async () => {
    if (!email) {
      setMessage(t("contact.emailNotSet", "E‑posta henüz eklenmedi."));
      setOpen(true);
      return;
    }
    try {
      await navigator.clipboard.writeText(email);
      setMessage(t("contact.copied", "E‑posta kopyalandı."));
    } catch (_) {
      setMessage(t("contact.copyFailed", "Kopyalama başarısız."));
    } finally {
      setOpen(true);
    }
  };

  return (
    <>
      <Tooltip title={t("contact.copyEmail", "E‑postayı kopyala")}>
        <IconButton
          aria-label={t("contact.copyEmail", "E‑postayı kopyala")}
          onClick={handleCopy}
          size="large"
          sx={{
            width: 88,
            height: 88,
            borderRadius: "999px",
            bgcolor: "action.hover",
            "&:hover": { bgcolor: "action.selected" },
          }}
        >
          <MailOutlineIcon sx={{ fontSize: 36 }} />
        </IconButton>
      </Tooltip>

      <Snackbar
        open={open}
        autoHideDuration={2200}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={email ? "success" : "info"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
