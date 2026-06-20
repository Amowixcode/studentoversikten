import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { resolveMediaUrl } from "../services/api";
import { getKnownCompanyLogo } from "../utils/companyLogos";
import "./CompanyCard.css";

export function CompanyCard({ company }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const imageUrl = getKnownCompanyLogo(company.name) || resolveMediaUrl(company.image);

  const handleClick = () => {
    navigate(`/companies/${company.id}`);
  };

  return (
    <article className="company-card" onClick={handleClick}>
      <div className="company-content">
        <h2 className="company-name">{company.name || t("unknownCompanyShort")}</h2>
        <div className="company-meta">
          <span className="company-badge">{company.industry || t("unknownIndustry")}</span>
        </div>
      </div>

      <div className="company-right">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={t("companyLogoAlt", { name: company.name || t("company") })}
            className="company-image"
          />
        ) : (
          <div className="company-image-fallback">
            <span>{company.name ? company.name.charAt(0) : "?"}</span>
          </div>
        )}
      </div>
    </article>
  );
}
