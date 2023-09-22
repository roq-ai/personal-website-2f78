const mapping: Record<string, string> = {
  companies: 'company',
  educations: 'education',
  experiences: 'experience',
  projects: 'project',
  skills: 'skill',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
