import Image from 'next/image';
import { getProjects } from '@/sanity/sanity-utils';
import Link from 'next/link';
import { IProject } from './types';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Vignesh!
        </span>
      </h1>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: IProject) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={250}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold text-red">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
