import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

export default defineConfig({
  title: 'My Personal website',

  projectId: '3sirq7so',
  dataset: 'production',
  apiVersion: '2023-03-20',
  basePath: '/admin',

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});
