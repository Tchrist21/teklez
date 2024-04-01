import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
  const blogDir = 'blogs';

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');

    const { data: frontmatter } = matter(fileContent);
    return {
      meta: frontmatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <>
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
      <div className='container flex flex-col gap-4 text-center'>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">Teklez Blog</h1>
      <h2 className="text-2xl font-bold text-center">Latest Blogs</h2>
      <hr/>
      <section className="py-4 grid grid-cols-3 gap-4 ">
        <div className="py-2">
          {blogs.map((blog) => (
            <Link href={'/blogs/' + blog.slug} passHref key={blog.slug}>
              <div className="py-2 flex justify-between align-middle gap-2">
                <div>
                  <div>
                    <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                    <p className="text-gray-400">{blog.meta.description}</p>
                  </div>
                  <div className="my-auto text-gray-400">
                    <p>{blog.meta.date}</p>
                  </div>
                </div>
              </div>
            </Link>
            
          ))}
        </div>
      </section>
      </div>
    </section>
    </>
  );
}
