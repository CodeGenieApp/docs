import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.codegenie.codes',
	integrations: [
		starlight({
			title: 'Documentation',
			social: {
				github: 'https://github.com/CodeGenieApp',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', link: '/guides/getting-started' },
					],
				},
				{
					label: 'Project Structure',
					items: [
						{ label: 'Overview', link: '/project-structure/overview' },
						{ label: 'UI/Frontend', link: '/project-structure/ui-frontend' },
						{ label: 'API/Backend', link: '/project-structure/api-backend' },
						{ label: 'Database', link: '/project-structure/database' },
						{ label: 'Auth/Identity', link: '/project-structure/auth-identity' },
						{ label: 'Cloud Infrastructure', link: '/project-structure/cloud-infrastructure' },
						{ label: 'Deploying', link: '/project-structure/deploying' },
					],
				},
			],
		}),
	],
});
