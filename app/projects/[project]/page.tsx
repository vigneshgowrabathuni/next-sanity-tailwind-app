import { getProject } from '@/sanity/sanity-utils';

interface Props {
  params: { project: string };
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return <div>{project.name}</div>;
}
