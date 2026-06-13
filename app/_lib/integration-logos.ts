const LOGO_DIR = "/assets/integrations/full-color-logos";

export type IntegrationLogo = {
  src: string;
  width: number;
  height: number;
  isFullLogo: boolean;
};

const FULL_LOGO_BY_ICON: Record<string, IntegrationLogo> = {
  "gmail.webp": {
    src: `${LOGO_DIR}/gmail.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "google_calendar.webp": {
    src: `${LOGO_DIR}/google-calendar.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "google_sheets.webp": {
    src: `${LOGO_DIR}/google-sheets.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "hubspot.webp": {
    src: `${LOGO_DIR}/hubspot.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "slack.webp": {
    src: `${LOGO_DIR}/slack.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "notion.webp": {
    src: `${LOGO_DIR}/notion.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "airtable.webp": {
    src: `${LOGO_DIR}/airtable.webp`,
    width: 600,
    height: 126,
    isFullLogo: true,
  },
  "zoom.webp": {
    src: `${LOGO_DIR}/zoom.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "granola.webp": {
    src: `${LOGO_DIR}/granola.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "jira.webp": {
    src: `${LOGO_DIR}/jira.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "asana.webp": {
    src: `${LOGO_DIR}/asana.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "github.webp": {
    src: `${LOGO_DIR}/github.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
  "microsoft_teams.webp": {
    src: `${LOGO_DIR}/team.webp`,
    width: 506,
    height: 106,
    isFullLogo: true,
  },
  "telegram.svg": {
    src: `${LOGO_DIR}/telegram.webp`,
    width: 545,
    height: 114,
    isFullLogo: true,
  },
};

export function resolveIntegrationLogo(iconSrc: string): IntegrationLogo {
  const filename = iconSrc.split("/").pop() ?? iconSrc;
  const fullLogo = FULL_LOGO_BY_ICON[filename];

  if (fullLogo) {
    return fullLogo;
  }

  return {
    src: iconSrc,
    width: 64,
    height: 64,
    isFullLogo: false,
  };
}
