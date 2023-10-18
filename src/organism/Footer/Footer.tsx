import styles from "./Footer.module.scss";
import { Divider } from "@mui/material";
import { FooterMainInfo } from "@atoms/index";
import { FooterTopSideBlog } from "@molecules/index";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <FooterTopSideBlog />
      <Divider className={styles.footerDivider} />
      <FooterMainInfo reestrInfo={footerReestr} policy={footerPolicy} />
    </div>
  );
};

const footerReestr = "Участники Реестра Российского ПО";

const footerPolicy = "";
