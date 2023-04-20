import { createClient, groq } from 'next-sanity';

const getProjects = async () => {
  const client = createClient({
    projectId: '3sirq7so',
    dataset: 'production',
    apiVersion: '2023-03-20',
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image" : image.asset->url,
        url,
        content
    }`
  );
};

export default getProjects;
