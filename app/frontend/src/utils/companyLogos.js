import bdoLogo from "../assets/listings/bdo.png";
import equinorLogo from "../assets/listings/equinor.png";
import iteraLogo from "../assets/listings/Itera.png";
import kongsbergLogo from "../assets/listings/kongsberg.png";
import netlightLogo from "../assets/listings/netlight.png";
import sopraSteriaLogo from "../assets/listings/sopra_steria.png";

// Bundled by Vite at build time, so these always work regardless of
// backend media storage (Render's disk is ephemeral / runtime-served
// media files have proven unreliable there). Used as a fallback for the
// known demo/seed companies; anything else still falls back to the
// backend-provided image via resolveMediaUrl.
const KNOWN_COMPANY_LOGOS = {
  bdo: bdoLogo,
  equinor: equinorLogo,
  itera: iteraLogo,
  kongsberg: kongsbergLogo,
  netlight: netlightLogo,
  "sopra steria": sopraSteriaLogo,
};

export function getKnownCompanyLogo(companyName) {
  if (!companyName) return null;
  return KNOWN_COMPANY_LOGOS[companyName.trim().toLowerCase()] || null;
}
